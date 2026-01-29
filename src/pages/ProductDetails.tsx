import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!product) {
        return (
            <Layout>
                <div className="swaraz-container px-4 py-16 sm:py-20 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold">Product not found</h2>
                    <Button onClick={() => navigate('/shop')} className="mt-4 h-10 sm:h-12 px-6">
                        Return to Shop
                    </Button>
                </div>
            </Layout>
        );
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart({ ...product, weight: selectedSize, quantity });
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart({ ...product, weight: selectedSize, quantity });
        navigate('/cart');
    };

    // wishlist removed

    return (
        <Layout>
            {/* Breadcrumb */}
            <div className="bg-muted py-2 sm:py-3">
                <div className="swaraz-container px-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground overflow-auto">
                        <Link to="/" className="hover:text-primary whitespace-nowrap">Home</Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-primary whitespace-nowrap">Shop</Link>
                        <span>/</span>
                        <span className="text-foreground truncate">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="swaraz-container px-4 py-6 sm:py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <div className="border border-border rounded-lg overflow-hidden bg-muted aspect-square md:aspect-auto md:h-96 lg:h-[500px]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                            {product.name}
                        </h1>
                        
                        <div className="border-b border-border pb-4 sm:pb-6 mb-4 sm:mb-6">
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                                Rs. {product.price.toFixed(2)}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                (Inclusive of all taxes)
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6 flex-1">
                            {/* Size Selector */}
                            <div>
                                <label className="font-semibold text-sm sm:text-base block mb-3">
                                    Select Size: <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    <button 
                                        onClick={() => setSelectedSize(product.weight)}
                                        className={`px-3 sm:px-4 py-2 sm:py-2.5 border rounded text-xs sm:text-sm font-medium transition-all min-h-[44px] sm:min-h-[48px] flex items-center justify-center ${
                                            selectedSize === product.weight
                                                ? 'border-primary bg-primary text-primary-foreground'
                                                : 'border-border text-foreground hover:border-primary'
                                        }`}
                                    >
                                        {product.weight}
                                    </button>
                                    <button 
                                        onClick={() => setSelectedSize('200g')}
                                        className={`px-3 sm:px-4 py-2 sm:py-2.5 border rounded text-xs sm:text-sm font-medium transition-all min-h-[44px] sm:min-h-[48px] flex items-center justify-center ${
                                            selectedSize === '200g'
                                                ? 'border-primary bg-primary text-primary-foreground'
                                                : 'border-border text-foreground hover:border-primary'
                                        }`}
                                    >
                                        200g
                                    </button>
                                </div>
                                {!selectedSize && (
                                    <p className="text-red-500 text-xs sm:text-sm mt-2">Please select a size</p>
                                )}
                            </div>

                            {/* Availability */}
                            <div>
                                <span className="font-semibold text-sm sm:text-base block mb-2">Availability:</span>
                                <span className="text-green-600 text-sm sm:text-base font-medium">✓ In stock!</span>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="font-semibold text-sm sm:text-base block mb-3">Quantity:</label>
                                <div className="flex items-center border border-border rounded-lg w-fit h-[44px] sm:h-[48px]">
                                    <button
                                        className="px-3 sm:px-4 py-2 hover:bg-muted text-primary font-bold transition-colors text-lg"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 sm:px-6 py-2 font-bold text-sm sm:text-base min-w-[50px] text-center">{quantity}</span>
                                    <button
                                        className="px-3 sm:px-4 py-2 hover:bg-muted text-primary font-bold transition-colors text-lg"
                                        onClick={() => setQuantity(quantity + 1)}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Total */}
                            <div>
                                <span className="font-semibold text-sm sm:text-base block mb-2">Total:</span>
                                <span className="font-bold text-lg sm:text-xl md:text-2xl text-foreground">
                                    Rs. {(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6">
                                <Button
                                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-12 sm:h-14 text-base sm:text-lg font-bold transition-colors"
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button
                                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 sm:h-14 text-base sm:text-lg font-bold transition-colors"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </Button>
                            </div>

                            {/* Delivery Info Box */}
                            <div className="border border-green-200 bg-green-50 dark:bg-green-950/30 p-3 sm:p-4 rounded-lg mt-4 sm:mt-6">
                                <p className="font-semibold text-foreground text-sm sm:text-base">
                                    ✓ Fast Delivery
                                </p>
                                <p className="text-green-700 dark:text-green-400 text-xs sm:text-sm mt-1">
                                    We deliver to your location
                                </p>
                            </div>

                            {/* Wishlist Link */}
                            {/* wishlist removed */}
                        </div>
                    </div>
                </div>

                {/* Description Tabs/Sections */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground border-b border-border pb-4 mb-6">
                        Product Description
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                        <p>
                            <strong className="text-foreground">{product.name}</strong> is a premium spice product carefully crafted to deliver authentic flavor and aroma.
                            Experience the rich taste that customers praise as a very good product with good health benefits and is truly worth the price.
                        </p>
                        <p>
                            This exceptional product from the trusted Swaraz Spices brand delivers the distinctive characteristics that make it legendary.
                            Known for its superior quality, it brings the authentic taste and vibrant appearance that discernment cooks value.
                        </p>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-foreground mt-6 sm:mt-8 mb-4">Key Features:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-foreground">Premium Quality:</strong> Sourced from the finest farms.</li>
                                <li><strong className="text-foreground">Authentic Flavor:</strong> Preserves natural oils and aroma.</li>
                                <li><strong className="text-foreground">Versatile Use:</strong> Perfect for a variety of traditional and modern dishes.</li>
                                <li><strong className="text-foreground">Hygienically Packed:</strong> Sealed to retain freshness.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
