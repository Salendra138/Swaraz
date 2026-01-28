import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Eye, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products as allProducts } from '@/data/products';
import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryBlended from '@/assets/category-blended.jpg';
import categoryPickles from '@/assets/category-pickles.jpg';
import categoryHing from '@/assets/category-hing.jpg';
import categoryPastes from '@/assets/category-pastes.jpg';


const categories = [
  'Pure Grounded Spices',
  'Pickles',
  'Blended Spices',
  'Condiment & Cooking Pastes',
  'Hing & Asafoetida',
  'Whole Spices',
];

const weights = ['25g', '50g', '100g', '200g', '300g', '500g', '1kg'];

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const filteredProducts = allProducts.filter((product) => {
    // Search Filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
      return false;
    }

    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedWeights.length > 0 && !selectedWeights.includes(product.weight)) {
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

  const toggleWeight = (weight: string) => {
    setSelectedWeights((prev) =>
      prev.includes(weight)
        ? prev.filter((w) => w !== weight)
        : [...prev, weight]
    );
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Products</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm cursor-pointer hover:text-primary"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weight Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Weight</h3>
                <div className="space-y-3">
                  {weights.map((weight) => (
                    <div key={weight} className="flex items-center gap-2">
                      <Checkbox
                        id={weight}
                        checked={selectedWeights.includes(weight)}
                        onCheckedChange={() => toggleWeight(weight)}
                      />
                      <label
                        htmlFor={weight}
                        className="text-sm cursor-pointer hover:text-primary"
                      >
                        {weight}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h3 className="text-lg font-bold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="in-stock" defaultChecked />
                    <label htmlFor="in-stock" className="text-sm cursor-pointer">
                      In stock
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="out-of-stock" />
                    <label htmlFor="out-of-stock" className="text-sm cursor-pointer">
                      Out of stock
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex flex-col gap-2">
                  {searchQuery && (
                    <p className="text-sm text-muted-foreground">
                      Showing results for "<span className="font-semibold text-foreground">{searchQuery}</span>"
                    </p>
                  )}

                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
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
              <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                        <Link
                          to={`/products/${product.id}`}
                          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="badge-stock text-xs">In stock!</span>
                      <h3 className="font-medium text-sm mt-1 line-clamp-2 min-h-[40px]">
                        <Link to={`/products/${product.id}`} className="hover:text-primary">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">{product.weight}</p>
                      <p className="price-text mt-2">Rs. {product.price.toFixed(2)}</p>
                      <Button
                        className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                        size="sm"
                        onClick={() => {
                          addToCart(product);
                          toast({
                            title: "Added to Cart",
                            description: `${product.name} has been added to your cart.`,
                            className: "bg-green-50 border-green-200 text-green-900",
                          });
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
