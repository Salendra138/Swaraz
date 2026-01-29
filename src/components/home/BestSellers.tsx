import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryBlended from '@/assets/category-blended.jpg';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  variants: { weight: string; price: number }[];
  inStock: boolean;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Swaraz Kashmiri Chilli Powder | Mild Heat & Rich Colour',
    image: categoryGroundSpices,
    price: 78,
    variants: [
      { weight: '100g', price: 78 },
      { weight: '200g', price: 156 },
    ],
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '2',
    name: 'Swaraz Fenugreek Powder',
    image: categoryBlended,
    price: 17,
    variants: [{ weight: '100g', price: 17 }],
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '3',
    name: 'Swaraz Kasuri Methi | Sun-Dried & Flavour-Rich Leaves',
    image: categoryWholeSpices,
    price: 27,
    variants: [{ weight: '25g', price: 27 }],
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '4',
    name: 'Swaraz Fenugreek (Methi Seeds)',
    image: categoryWholeSpices,
    price: 9,
    variants: [
      { weight: '100g', price: 19 },
      { weight: '50g', price: 9 },
    ],
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '5',
    name: 'Three Mango Black Pepper Powder',
    image: categoryGroundSpices,
    price: 125,
    variants: [{ weight: '100g', price: 125 }],
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '6',
    name: 'Swaraz Green Cardamom (Elachi)',
    image: categoryWholeSpices,
    price: 160,
    variants: [
      { weight: '50g', price: 300 },
      { weight: '25g', price: 160 },
    ],
    inStock: true,
    category: 'Whole Spices',
  },
  {
    id: '7',
    name: 'Swaraz Turmeric Powder – High-Curcumin | Aromatic Haldi',
    image: categoryGroundSpices,
    price: 24,
    variants: [
      { weight: '500g', price: 215 },
      { weight: '200g', price: 84 },
      { weight: '100g', price: 43 },
      { weight: '50g', price: 24 },
    ],
    inStock: true,
    category: 'Pure Grounded Spices',
  },
  {
    id: '8',
    name: 'Three Mango Rasam Powder',
    image: categoryBlended,
    price: 60,
    variants: [{ weight: '100g', price: 60 }],
    inStock: true,
    category: 'Blended Spices',
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      image: product.image,
      quantity: 1,
      weight: selectedVariant.weight,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} - ${selectedVariant.weight} has been added to your cart.`,
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
          <p className="price-text">Rs. {selectedVariant.price.toFixed(2)}</p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <select
            className="flex-1 text-sm border border-border rounded px-2 py-1.5"
            value={selectedVariant.weight}
            onChange={(e) => {
              const variant = product.variants.find(v => v.weight === e.target.value);
              if (variant) setSelectedVariant(variant);
            }}
          >
            {product.variants.map((variant) => (
              <option key={variant.weight} value={variant.weight}>
                {variant.weight} - Rs. {variant.price.toFixed(2)}
              </option>
            ))}
          </select>
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
