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
      <div className="bg-muted py-2 sm:py-3 md:py-4">
        <div className="swaraz-container px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shopping Cart</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section min-h-[50vh] flex flex-col justify-center py-6 sm:py-8 md:py-12">
        <div className="swaraz-container px-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16">
              <ShoppingCart className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 text-muted-foreground mb-4 sm:mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">No items in cart</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Add items you want to shop
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium h-10 sm:h-12">
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
                    <div className="w-full sm:w-24 md:w-32 h-48 sm:h-24 md:h-32 flex-shrink-0 border border-border rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight">{item.name}</h3>
                          <p className="font-bold text-base sm:text-lg md:text-xl text-foreground">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{item.weight}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 sm:mt-0">
                        <div className="flex items-center border border-border rounded-lg h-10 sm:h-11">
                          <button
                            className="px-3 sm:px-4 hover:bg-muted text-muted-foreground disabled:opacity-50 text-lg transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="px-3 sm:px-4 font-bold text-sm sm:text-base min-w-[40px] text-center">{item.quantity}</span>
                          <button
                            className="px-3 sm:px-4 hover:bg-muted text-muted-foreground text-lg transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 p-0 h-auto font-medium text-sm sm:text-base"
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
                <div className="bg-background border border-border p-4 sm:p-6 rounded-lg sticky top-24 h-fit">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">Order Summary</h2>

                  <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">
                    <span>Subtotal:</span>
                    <span className="text-primary">Rs. {getCartTotal().toFixed(2)}</span>
                  </div>

                  {getCartTotal() >= 500 ? (
                    <p className="text-green-600 dark:text-green-400 font-bold text-base sm:text-lg mb-6 sm:mb-8">
                      ✓ Free Shipping
                    </p>
                  ) : (
                    <p className="text-muted-foreground italic mb-6 sm:mb-8 text-sm sm:text-base">
                      Shipping, taxes, and discounts calculated at checkout.
                    </p>
                  )}

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg mb-4 h-12 sm:h-14 transition-colors">
                    Checkout
                  </Button>

                  {getCartTotal() < 500 && (
                    <div className="border-t border-border mt-4 sm:mt-6 pt-4 sm:pt-6">
                      <button
                        onClick={() => setShowEstimator(!showEstimator)}
                        className={`w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg transition-all ${showEstimator
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-primary border border-primary hover:bg-primary/10'
                          }`}
                      >
                        Get shipping estimates
                        {showEstimator ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
                      </button>

                      {showEstimator && (
                        <div className="mt-4 space-y-3 sm:space-y-4">
                          <div>
                            <label className="block text-xs sm:text-sm font-medium mb-2">Country</label>
                            <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                              <option>India</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium mb-2">State</label>
                            <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                              <option>Andaman and Nicobar Islands</option>
                              <option>Andhra Pradesh</option>
                              <option>Telangana</option>
                              <option>Karnataka</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs sm:text-sm font-medium mb-2">Zip/Postal Code</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                          </div>

                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg text-sm h-10">
                            Calculate
                          </Button>
                        </div>
                      )}

                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          placeholder="Enter zipcode"
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 sm:px-6 rounded-lg text-sm h-10 sm:h-auto transition-colors">
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
