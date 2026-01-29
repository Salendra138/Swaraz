import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/context/CartContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products as allProducts } from '@/data/products';


const categories = [
  'Pure Grounded Spices',
  'Blended Spices',
  'Condiment & Cooking Pastes',
  'Hing & Asafoetida',
  'Whole Spices',
];

const weights = ['25g', '50g', '100g', '200g', '300g', '500g', '1kg'];

// Convert weight string to grams
const convertToGrams = (weight: string): number => {
  const value = parseInt(weight);
  if (weight.includes('kg')) {
    return value * 1000;
  }
  return value;
};

// Weight multiplier mapping based on base weight
const getWeightMultiplier = (baseWeight: string, selectedWeight: string): number => {
  const baseValue = convertToGrams(baseWeight);
  const selectedValue = convertToGrams(selectedWeight);
  return selectedValue / baseValue;
};

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const { addToCart } = useCart();
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({});

  const filteredProducts = allProducts.filter((product) => {
    // Search Filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
      return false;
    }

    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-2 sm:py-3">
        <div className="swaraz-container px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Products</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section py-6 sm:py-8 md:py-12">
        <div className="swaraz-container px-4">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-56 flex-shrink-0">
              {/* Category Filter */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-bold mb-4">Category</h3>
                <div className="space-y-2 sm:space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-3 min-h-[44px]">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm sm:text-base cursor-pointer hover:text-primary transition-colors flex-1"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-border gap-4">
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  {searchQuery && (
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Showing results for "<span className="font-semibold text-foreground">{searchQuery}</span>"
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
                  </p>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48 h-10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price, low to high</SelectItem>
                    <SelectItem value="price-high">Price, high to low</SelectItem>
                    <SelectItem value="name-asc">Alphabetically, A-Z</SelectItem>
                    <SelectItem value="name-desc">Alphabetically, Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products */}
              {sortedProducts.length > 0 ? (
                <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {sortedProducts.map((product) => {
                    const selectedWeight = selectedWeights[product.id] || product.weight;
                    const multiplier = getWeightMultiplier(product.weight, selectedWeight);
                    const displayPrice = product.price * multiplier;

                    return (
                      <div key={product.id} className="group border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative aspect-square overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <Link
                              to={`/products/${product.id}`}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-h-[44px] min-w-[44px]"
                              aria-label="View product"
                            >
                              <Eye className="h-5 sm:h-6 w-5 sm:w-6" />
                            </Link>
                          </div>
                        </div>
                        <div className="p-3 sm:p-4 flex flex-col flex-1">
                          <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded w-fit">
                            ✓ In stock
                          </span>
                          <h3 className="font-semibold text-xs sm:text-sm md:text-base mt-2 line-clamp-2 leading-tight">
                            <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
                              {product.name}
                            </Link>
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{selectedWeight}</p>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-foreground mt-2">
                            Rs. {displayPrice.toFixed(2)}
                          </p>
                          
                          {/* Weight Selection */}
                          <div className="mt-3 sm:mt-4 mb-3">
                            <div className="flex flex-wrap gap-1">
                              {weights.map((weight) => (
                                <button
                                  key={weight}
                                  onClick={() => setSelectedWeights(prev => ({ ...prev, [product.id]: weight }))}
                                  className={`px-2 py-1 text-xs border rounded transition-all ${
                                    selectedWeight === weight
                                      ? 'bg-primary text-primary-foreground border-primary'
                                      : 'border-border text-foreground hover:border-primary'
                                  }`}
                                  aria-pressed={selectedWeight === weight}
                                >
                                  {weight}
                                </button>
                              ))}
                            </div>
                          </div>

                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-11 text-xs sm:text-sm font-bold transition-colors mt-auto"
                            onClick={() => {
                              addToCart({ ...product, weight: selectedWeight, price: displayPrice });
                            }}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-base">No products found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedCategories([]);
                    }} 
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
