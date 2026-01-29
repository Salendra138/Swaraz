import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Layout } from '@/components/layout/Layout';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryBlended from '@/assets/category-blended.jpg';
import categoryHing from '@/assets/category-hing.jpg';
import categoryPastes from '@/assets/category-pastes.jpg';

const weights = ['25g', '50g', '100g', '200g', '300g', '500g', '1kg'];

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

const collectionsData: Record<string, { name: string; image: string; products: any[] }> = {
  'pure-grounded-spices': {
    name: 'Pure Grounded Spices',
    image: categoryGroundSpices,
    products: [
      { id: '1', name: 'Swaraz Turmeric Powder', price: 24, image: categoryGroundSpices, weight: '50g' },
      { id: '2', name: 'Swaraz Chilli Powder', price: 45, image: categoryGroundSpices, weight: '100g' },
      { id: '3', name: 'Swaraz Black Pepper Powder', price: 61, image: categoryGroundSpices, weight: '50g' },
      { id: '4', name: 'Swaraz Coriander Powder', price: 35, image: categoryGroundSpices, weight: '100g' },
      { id: '5', name: 'Swaraz Kashmiri Chilli', price: 78, image: categoryGroundSpices, weight: '100g' },
      { id: '6', name: 'Swaraz Fenugreek Powder', price: 17, image: categoryGroundSpices, weight: '100g' },
    ],
  },
  'blended-spices': {
    name: 'Blended Spices',
    image: categoryBlended,
    products: [
      { id: '1', name: 'Three Mango Garam Masala', price: 55, image: categoryBlended, weight: '100g' },
      { id: '2', name: 'Three Mango Biryani Masala', price: 70, image: categoryBlended, weight: '100g' },
      { id: '3', name: 'Three Mango Rasam Powder', price: 60, image: categoryBlended, weight: '100g' },
      { id: '4', name: 'Three Mango Kitchen King Masala', price: 65, image: categoryBlended, weight: '100g' },
      { id: '5', name: 'Three Mango Sambar Powder', price: 50, image: categoryBlended, weight: '100g' },
    ],
  },
  'condiment-cooking-pastes': {
    name: 'Condiment & Cooking Pastes',
    image: categoryPastes,
    products: [
      { id: '1', name: 'Three Mango Ginger Garlic Paste', price: 55, image: categoryPastes, weight: '200g' },
      { id: '2', name: 'Three Mango Tamarind Paste', price: 45, image: categoryPastes, weight: '200g' },
      { id: '3', name: 'Three Mango Green Chilli Paste', price: 40, image: categoryPastes, weight: '200g' },
    ],
  },
  'hing-asafoetida': {
    name: 'Hing & Asafoetida',
    image: categoryHing,
    products: [
      { id: '1', name: 'Swaraz Compounded Hing', price: 45, image: categoryHing, weight: '10g' },
      { id: '2', name: 'Swaraz Premium Hing', price: 85, image: categoryHing, weight: '20g' },
      { id: '3', name: 'Swaraz Pure Hing', price: 150, image: categoryHing, weight: '25g' },
    ],
  },
  'whole-spices': {
    name: 'Whole Spices',
    image: categoryWholeSpices,
    products: [
      { id: '1', name: 'Swaraz Ajwain (Carom Seeds)', price: 12, image: categoryWholeSpices, weight: '25g' },
      { id: '2', name: 'Swaraz Black Cardamom', price: 165, image: categoryWholeSpices, weight: '50g' },
      { id: '3', name: 'Swaraz Black Pepper', price: 73, image: categoryWholeSpices, weight: '50g' },
      { id: '4', name: 'Swaraz Cloves (Laung)', price: 89, image: categoryWholeSpices, weight: '25g' },
      { id: '5', name: 'Swaraz Cumin (Jeera)', price: 14, image: categoryWholeSpices, weight: '25g' },
      { id: '6', name: 'Swaraz Green Cardamom', price: 160, image: categoryWholeSpices, weight: '25g' },
      { id: '7', name: 'Swaraz Coriander Seeds', price: 7, image: categoryWholeSpices, weight: '25g' },
      { id: '8', name: 'Swaraz Fenugreek Seeds', price: 9, image: categoryWholeSpices, weight: '50g' },
    ],
  },
};

const Collection = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const collection = collectionsData[slug || ''];
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({})

  if (!collection) {
    return (
      <Layout>
        <div className="swaraz-section text-center">
          <h1 className="text-2xl font-bold">Collection not found</h1>
          <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">
            Browse all products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{collection.name}</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">{collection.name}</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {collection.products.map((product) => {
              const selectedWeight = selectedWeights[product.id] || product.weight;
              const multiplier = getWeightMultiplier(product.weight, selectedWeight);
              const displayPrice = product.price * multiplier;

              return (
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
                    <p className="text-sm text-muted-foreground">{selectedWeight}</p>
                    <p className="price-text mt-2">Rs. {displayPrice.toFixed(2)}</p>

                    {/* Weight Selection */}
                    <div className="mt-3 mb-3">
                      <div className="flex flex-wrap gap-1">
                        {weights.map((weight) => (
                          <button
                            key={weight}
                            onClick={() => setSelectedWeights(prev => ({ ...prev, [product.id]: weight }))}
                            className={`px-2 py-1 text-xs border rounded transition-colors ${
                              selectedWeight === weight
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'border-border hover:border-primary'
                            }`}
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="sm"
                      onClick={() => {
                        addToCart({ ...product, quantity: 1, weight: selectedWeight, price: displayPrice });
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
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
