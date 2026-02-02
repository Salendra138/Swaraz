import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import aboutSpices from '@/assets/about-spices.jpg';

const About = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-2 sm:py-3">
        <div className="swaraz-container px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">About Us</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="swaraz-section py-6 sm:py-8 md:py-12">
        <div className="swaraz-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The name Swaraz Spices has been synonymous with purity and high quality. The invention of this invaluable household spice can be traced back to 1985, when Swaraz were introduced by Sri Thalluri Chakraiah laid down the roots of the brand in the year 1985 at Khammam, in the name 'Swaraz Mirch Store' as quality ground spices manufacturers. As a brand, their mission is to provide unique culinary experiences and healthy living solutions for consumers. Their unwavering determination is to improve the quality of life for consumers, customers, and workers by being inventive and consumer-centric.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The authentic brand was established and nurtured from the home of the founder and his wife who together sourced, ground and packed the spices themselves. The first brand to introduce packaged spice powders in the region, they laid down new norms in the spice industry, 'selling without salt', thereby setting a new quality benchmark for the spices' industry.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The first brand to introduce a special chilli powder blend for pickles cherishing the particularities of local taste, today, the brand sells and distributes a diversified portfolio of high-quality, branded shelf-stable spices and spice blends.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With a stronghold in the Southern part of the country and strong exports, Swaraz Spices has the most modern manufacturing facilities and has the capability and authenticity to become market leaders PAN India
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                At present, Swaraz Spices is an indispensable ingredient in every Indian household. It is reminiscent of the pure, unfiltered spice powder which we all have grown up relishing in our parents and grandparents home. Crafted with only the finest of ingredients, our masala are bound to tickle your taste-buds and offer a class-apart culinary experience. Bring home Swaraz Spices today- The soul of the Indian kitchen.
              </p>
            </div>

            <div className="lg:sticky lg:top-32">
              <img
                src={aboutSpices}
                alt="Swaraz Spices"
                className="w-full rounded-lg shadow-lg object-cover aspect-square md:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/50">
        <div className="swaraz-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">2500+</h3>
              <p className="text-muted-foreground uppercase tracking-wider">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">20+</h3>
              <p className="text-muted-foreground uppercase tracking-wider">Products</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">5+</h3>
              <p className="text-muted-foreground uppercase tracking-wider">Combo Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="swaraz-section">
        <div className="swaraz-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch!</h2>
          <p className="text-muted-foreground">
            You'd like to learn more about the company, get in touch with us at{' '}
            <a href="mailto:info@swarazspices.com" className="text-primary hover:underline">
              info@swarazspices.com
            </a>
            !
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
