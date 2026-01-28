import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, MapPin, Building } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h1>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+91 XXXXXXXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="How can we help you?" rows={5} />
                </div>

                <Button className="w-full bg-primary text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Corporate Office</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Building className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        #8-2-686/6/D/9 & 9/1, 3rd Floor, Roxana Fortune Road No.12, Banjara Hills, Hyderabad 500034
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="tel:+914024741036" className="text-muted-foreground hover:text-primary">
                        +9140 24741036
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        10 am to 6 pm from Monday to Saturday
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="mailto:info@swarazspices.com" className="text-muted-foreground hover:text-primary">
                        info@swarazspices.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Store Address</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      # 15-6-519, Begum Bazar, Hyderabad-500012
                    </span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
