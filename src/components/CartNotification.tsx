import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export const CartNotification = () => {
  const { lastAddedItem, dismissNotification } = useCart();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (lastAddedItem) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  if (!isVisible || !lastAddedItem) return null;

  const handleCartClick = () => {
    navigate('/cart');
    dismissNotification();
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <ShoppingCart className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-green-900">{lastAddedItem.name}</h3>
              <p className="text-sm text-green-700 mt-1">
                Added to cart (Qty: {lastAddedItem.quantity})
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              dismissNotification();
            }}
            className="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <Button
          onClick={handleCartClick}
          className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
          size="sm"
        >
          Go to Cart
        </Button>
      </div>
    </div>
  );
};
