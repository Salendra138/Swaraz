import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryBlended from '@/assets/category-blended.jpg';

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

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  weight: string;
  inStock: boolean;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Swaraz Kashmiri Chilli Powder | Mild Heat & Rich Colour',
    image: categoryGroundSpices,
    price: 78,
    weight: '100g',
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '2',
    name: 'Swaraz Fenugreek Powder',
    image: categoryBlended,
    price: 17,
    weight: '100g',
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '3',
    name: 'Swaraz Kasuri Methi | Sun-Dried & Flavour-Rich Leaves',
    image: categoryWholeSpices,
    price: 27,
    weight: '25g',
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '4',
    name: 'Swaraz Fenugreek (Methi Seeds)',
    image: categoryWholeSpices,
    price: 9,
    weight: '50g',
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '5',
    name: 'Three Mango Black Pepper Powder',
    image: categoryGroundSpices,
    price: 125,
    weight: '100g',
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '6',
    name: 'Swaraz Green Cardamom (Elachi)',
    image: categoryWholeSpices,
    price: 160,
    weight: '25g',
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '7',
    name: 'Swaraz Turmeric Powder – High-Curcumin | Aromatic Haldi',
    image: categoryGroundSpices,
    price: 24,
    weight: '50g',
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '8',
    name: 'Three Mango Rasam Powder',
    image: categoryBlended,
    price: 60,
    weight: '100g',
    inStock: true,
    category: 'Blended Spices',
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedWeight, setSelectedWeight] = useState(product.weight);

  const multiplier = getWeightMultiplier(product.weight, selectedWeight);
  const displayPrice = product.price * multiplier;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: displayPrice,
      image: product.image,
      quantity: 1,
      weight: selectedWeight,
    });
  };

  // wishlist removed

  return (
    <div className="product-card group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          {/* wishlist removed */}
          <Link
            to={`/products/${product.id}`}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Eye className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="p-4">
        {product.inStock && (
          <span className="badge-stock">In stock!</span>
        )}
        <h3 className="font-medium text-sm mt-1 line-clamp-2 min-h-[40px]">
          <Link to={`/products/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2">
          <p className="price-text">Rs. {displayPrice.toFixed(2)}</p>
        </div>

        {/* Weight Selection */}
        <div className="mt-3 mb-3">
          <div className="flex flex-wrap gap-1">
            {weights.map((weight) => (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
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
          className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export const BestSellers = () => {
  return (
    <section className="swaraz-section bg-muted/30">
      <div className="swaraz-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">BestSellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { products };
