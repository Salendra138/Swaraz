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

    if (!product) {
        return (
            <Layout>
                <div className="swaraz-container py-20 text-center">
                    <h2 className="text-2xl font-bold">Product not found</h2>
                    <Button onClick={() => navigate('/shop')} className="mt-4">
                        Return to Shop
                    </Button>
                </div>
            </Layout>
        );
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    const handleBuyNow = () => {
        addToCart({ ...product, quantity });
        navigate('/cart');
    };

    // wishlist removed

    return (
        <Layout>
            {/* Breadcrumb */}
            <div className="bg-[#f3f4f6] py-3">
                <div className="swaraz-container">
                    <div className="flex items-center gap-2 text-sm text-[#666]">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-primary">Shop</Link>
                        <span>/</span>
                        <span className="text-[#333]">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="swaraz-container py-10">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-medium text-[#333] mb-4">{product.name}</h1>
                        <div className="border-b border-gray-200 pb-6 mb-6">
                            <p className="text-2xl font-bold text-[#333] mb-2">
                                Rs. {product.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">(Inclusive of all taxes)</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Size Selector */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium min-w-[80px]">Size:</span>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 border border-red-500 text-red-500 bg-red-50 text-sm rounded-sm">
                                        {product.weight}
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-sm hover:border-gray-400">
                                        200g
                                    </button>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium min-w-[80px]">Availability:</span>
                                <span className="text-green-600">In stock!</span>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium min-w-[80px]">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-sm">
                                    <button
                                        className="px-3 py-2 hover:bg-gray-100 text-red-500"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-2 font-medium min-w-[40px] text-center">{quantity}</span>
                                    <button
                                        className="px-3 py-2 hover:bg-gray-100 text-red-500"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium min-w-[80px]">Total:</span>
                                <span className="font-bold text-lg">Rs. {(product.price * quantity).toFixed(2)}</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Button
                                    className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-6 text-lg font-medium"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-6 text-lg font-medium"
                                    onClick={handleBuyNow}
                                >
                                    Buy it now
                                </Button>
                            </div>

                            {/* Delivery Info Box */}
                            <div className="border border-green-200 bg-green-50 p-4 rounded-md mt-6">
                                <p className="font-medium text-[#333] flex items-center gap-2">
                                    Mock Delivery Check
                                </p>
                                <p className="text-green-700 text-sm mt-1">
                                    We deliver to your zipcode
                                </p>
                            </div>

                            {/* Wishlist Link */}
                            {/* wishlist removed */}
                        </div>
                    </div>
                </div>

                {/* Description Tabs/Sections */}
                <div className="mt-16">
                    <h2 className="text-2xl font-medium text-[#333] border-b border-gray-200 pb-4 mb-6">Product Description</h2>
                    <div className="prose max-w-none text-gray-600">
                        <p className="mb-4">
                            <strong>{product.name}</strong> is a premium spice product carefully crafted to deliver authentic flavor and aroma.
                            Experience the rich taste that customers praise as a very good product with good health benefits and is truly worth the price.
                        </p>
                        <p className="mb-4">
                            This exceptional product from the trusted Swaraz Spices brand delivers the distinctive characteristics that make it legendary.
                            Known for its superior quality, it brings the authentic taste and vibrant appearance that discernment cooks value.
                        </p>
                        <h3 className="text-xl font-medium text-[#333] mt-8 mb-4">Key Features:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Premium Quality:</strong> Sourced from the finest farms.</li>
                            <li><strong>Authentic Flavor:</strong> Preserves natural oils and aroma.</li>
                            <li><strong>Versatile Use:</strong> Perfect for a variety of traditional and modern dishes.</li>
                            <li><strong>Hygienically Packed:</strong> Sealed to retain freshness.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
