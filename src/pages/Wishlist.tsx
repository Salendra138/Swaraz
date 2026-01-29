import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from "@/hooks/use-toast";
import { Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Wishlist = () => {
    const { items, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { toast } = useToast();

    return (
        <Layout>
            <div className="bg-[#f3f4f6] py-4">
                <div className="swaraz-container">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-[#333] hover:text-primary">Home</Link>
                        <span className="text-[#666]">/</span>
                        <span className="text-[#666]">Wishlist</span>
                    </div>
                </div>
            </div>

            <section className="swaraz-section min-h-[50vh] flex flex-col justify-center">
                <div className="swaraz-container">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center text-center py-12">
                            <h2 className="text-3xl font-normal text-[#333] mb-2">Your wishlist is currently empty.</h2>
                            <p className="text-[#666] mb-8">
                                Add items that you like to your wishlist.
                            </p>
                            <Button asChild className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-2 rounded-md font-medium">
                                <Link to="/shop">Return to Shop</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-4 font-normal text-xl min-w-[100px]">Image</th>
                                        <th className="py-4 font-normal text-xl min-w-[200px]">Product</th>
                                        <th className="py-4 font-normal text-xl min-w-[120px]">Price</th>
                                        <th className="py-4 font-normal text-xl min-w-[150px]">Purchase</th>
                                        <th className="py-4 font-normal text-xl min-w-[80px]">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr key={item.id} className="border-b border-gray-200">
                                            <td className="py-6">
                                                <div className="w-16 h-16 md:w-20 md:h-24">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </td>
                                            <td className="py-6 font-medium text-lg text-[#333]">
                                                {item.name}
                                            </td>
                                            <td className="py-6 font-medium text-lg text-[#333]">
                                                Rs. {item.price.toFixed(2)}
                                            </td>
                                            <td className="py-6">
                                                <Button
                                                    className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-6 rounded-sm uppercase text-sm"
                                                    asChild
                                                >
                                                    <Link to={`/products/${item.id}`}>
                                                        Select Options
                                                    </Link>
                                                </Button>
                                            </td>
                                            <td className="py-6">
                                                <button
                                                    onClick={() => {
                                                        removeFromWishlist(item.id);
                                                        toast({
                                                            title: "Item Removed",
                                                            description: `${item.name} removed from wishlist.`,
                                                            variant: "destructive",
                                                        });
                                                    }}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Wishlist;
