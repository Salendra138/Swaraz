import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const [showEstimator, setShowEstimator] = useState(false);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-[#f3f4f6] py-4">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#333] hover:text-primary">Home</Link>
            <span className="text-[#666]">/</span>
            <span className="text-[#666]">Your Shopping Cart</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section min-h-[50vh] flex flex-col justify-center">
        <div className="swaraz-container">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <ShoppingCart className="h-24 w-24 text-black mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#333] mb-2">No Items in cart</h2>
              <p className="text-[#666] mb-8">
                Add items you want to shop
              </p>
              <Button asChild className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-2 rounded-md font-medium">
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 md:gap-6 p-4 border border-border rounded-lg bg-card">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 border border-border rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="font-bold text-lg">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-muted-foreground mt-1">{item.weight}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-md">
                          <button
                            className="p-2 hover:bg-muted text-muted-foreground disabled:opacity-50"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <span className="sr-only">Decrease quantity</span>
                            <span aria-hidden="true" className="text-lg">-</span>
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button
                            className="p-2 hover:bg-muted text-muted-foreground"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <span className="sr-only">Increase quantity</span>
                            <span aria-hidden="true" className="text-lg">+</span>
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 hover:bg-transparent p-0 h-auto font-medium"
                          onClick={() => {
                            removeFromCart(item.id);
                            toast({
                              title: "Item Removed",
                              description: `${item.name} has been removed from your cart.`,
                              variant: "destructive",
                            });
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-2 sticky top-24 h-fit">
                  <h2 className="text-2xl font-normal mb-8 text-foreground">Order Summary</h2>

                  <div className="flex items-center gap-2 text-2xl font-bold mb-8">
                    <span>Subtotal :</span>
                    <span className="text-[#dc2626]">Rs. {getCartTotal().toFixed(2)}</span>
                  </div>

                  {getCartTotal() >= 500 ? (
                    <p className="text-green-600 font-bold text-xl mb-8">
                      Shipping: Free
                    </p>
                  ) : (
                    <p className="text-gray-600 italic mb-8 text-lg">
                      Shipping, taxes, and discounts will be calculated at checkout.
                    </p>
                  )}

                  <Button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-6 text-lg font-bold rounded-sm mb-4">
                    Checkout
                  </Button>

                  {getCartTotal() < 500 && (
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <button
                        onClick={() => setShowEstimator(!showEstimator)}
                        className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-lg transition-colors ${showEstimator
                            ? 'bg-[#dc2626] text-white'
                            : 'bg-white text-[#dc2626] border border-[#dc2626] hover:bg-red-50'
                          }`}
                      >
                        Get shipping estimates
                        {showEstimator ? <ChevronUp /> : <ChevronDown />}
                      </button>

                      {showEstimator && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Country</label>
                            <select className="w-full p-2 border border-yellow-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500">
                              <option>India</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">State</label>
                            <select className="w-full p-2 border border-yellow-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500">
                              <option>Andaman and Nicobar Islands</option>
                              <option>Andhra Pradesh</option>
                              <option>Telangana</option>
                              <option>Karnataka</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">Zip/Postal Code</label>
                            <input
                              type="text"
                              className="w-full p-2 border border-yellow-400 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                            />
                          </div>

                          <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-6 rounded-sm">
                            Calculate shipping
                          </Button>
                        </div>
                      )}

                      <div className="mt-8 flex gap-2">
                        <input
                          type="text"
                          placeholder="ENTER YOUR ZIPCODE"
                          className="flex-1 p-2 border border-gray-300 rounded-full px-4 text-sm focus:outline-none focus:border-red-500"
                        />
                        <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-6 rounded-full">
                          Check
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
