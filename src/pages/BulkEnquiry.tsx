import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BulkEnquiry = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Bulk Enquiry</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Bulk Order Enquiry
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Looking for bulk orders? Fill out the form below and our team will get back to you with the best pricing.
            </p>

            <form className="space-y-6 bg-card p-8 rounded-lg border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input placeholder="Your first name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input type="tel" placeholder="+91 XXXXXXXXXX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pure-grounded">Pure Grounded Spices</SelectItem>
                    <SelectItem value="blended">Blended Spices</SelectItem>
                    <SelectItem value="whole">Whole Spices</SelectItem>
                    <SelectItem value="hing">Hing & Asafoetida</SelectItem>
                    <SelectItem value="pastes">Condiment & Cooking Pastes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity Required</label>
                <Input placeholder="e.g., 100 kg, 500 units" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location / City</label>
                <Input placeholder="Your city or location" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us more about your requirements..." 
                  rows={4}
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BulkEnquiry;
