import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';

const ComboBox = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Build Your Box</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <div className="max-w-2xl mx-auto text-center">
            <Package className="h-24 w-24 mx-auto text-primary mb-6" />
            <h1 className="text-3xl font-bold mb-4">Build Your Spice Box</h1>
            <p className="text-muted-foreground mb-8">
              Create your own custom spice box! Choose your favorite products and enjoy special discounts on bulk orders.
            </p>

            <div className="bg-muted rounded-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Enjoy Discounts on Your Cart Value</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground">Shop For</p>
                  <p className="text-2xl font-bold text-primary">₹499</p>
                  <p className="text-sm">GET</p>
                  <p className="text-lg font-bold text-accent">5% OFF*</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground">Shop For</p>
                  <p className="text-2xl font-bold text-primary">₹999</p>
                  <p className="text-sm">GET</p>
                  <p className="text-lg font-bold text-accent">10% OFF*</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground">Shop For</p>
                  <p className="text-2xl font-bold text-primary">₹1499</p>
                  <p className="text-sm">GET</p>
                  <p className="text-lg font-bold text-accent">15% OFF*</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-secondary text-secondary-foreground text-lg px-8 py-6">
              <Link to="/shop">Start Building Your Box</Link>
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Note: In step one choose your first product and then in step 2 build your box
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComboBox;
