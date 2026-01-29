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
    <div className="group border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover Actions */}
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
        {product.inStock && (
          <span className="inline-block text-xs sm:text-sm font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded w-fit">
            ✓ In stock
          </span>
        )}
        
        <h3 className="font-semibold text-xs sm:text-sm md:text-base mt-2 line-clamp-2 leading-tight">
          <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 sm:mt-3">
          <p className="text-sm sm:text-base md:text-lg font-bold text-foreground">
            Rs. {displayPrice.toFixed(2)}
          </p>
        </div>

        {/* Weight Selection */}
        <div className="mt-3 sm:mt-4 mb-3">
          <div className="flex flex-wrap gap-1">
            {weights.map((weight) => (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
                className={`px-2 py-1 text-xs sm:text-xs border rounded transition-all ${
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
          className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-11 text-xs sm:text-sm font-bold transition-colors"
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
    <section className="swaraz-section py-8 sm:py-12 md:py-16 bg-muted/30">
      <div className="swaraz-container px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          Best Sellers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { products };
