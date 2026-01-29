import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from '@/components/ScrollToTop';
import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BulkEnquiry from "./pages/BulkEnquiry";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
// Login removed
import ComboBox from "./pages/ComboBox";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { CartProvider } from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import RecipeVideos from "./pages/RecipeVideos";
import TVCommercials from "./pages/TVCommercials";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bulk-enquiry" element={<BulkEnquiry />} />
              <Route path="/collections/:slug" element={<Collection />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              {/* Login and Wishlist removed */}
              <Route path="/combo-box" element={<ComboBox />} />
              <Route path="/pages/recipe-videos" element={<RecipeVideos />} />
              <Route path="/pages/tv-commercials" element={<TVCommercials />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
