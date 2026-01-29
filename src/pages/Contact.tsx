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
      <div className="bg-muted py-2 sm:py-3">
        <div className="swaraz-container px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section py-6 sm:py-8 md:py-12">
        <div className="swaraz-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Get In Touch</h1>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" className="h-10 sm:h-11 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="h-10 sm:h-11 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="h-10 sm:h-11 text-sm" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+91 XXXXXXXXXX" className="h-10 sm:h-11 text-sm" />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="How can we help you?" rows={5} className="text-sm resize-none" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-12 text-sm sm:text-base font-bold transition-colors">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Contact Information</h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-muted rounded-lg p-4 sm:p-6 border border-border">
                  <h3 className="font-bold text-lg sm:text-xl mb-4">Corporate Office</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center gap-3 min-h-[44px]">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="tel:+914024741036" className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors">
                        +9140 24741036
                      </a>
                    </li>
                    <li className="flex items-start gap-3 min-h-[44px]">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base">
                        10 am to 6 pm from Monday to Saturday
                      </span>
                    </li>
                    <li className="flex items-center gap-3 min-h-[44px]">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href="mailto:info@swarazspices.com" className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors break-all">
                        info@swarazspices.com
                      </a>
                    </li>
                  </ul>
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
