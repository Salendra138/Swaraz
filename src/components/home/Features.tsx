import { Award, Leaf, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Heritage brand recommended',
    subtitle: 'by ancestors',
  },
  {
    icon: Leaf,
    title: 'Pure and unadulterated spice',
    subtitle: 'flavours',
  },
  {
    icon: Sparkles,
    title: 'Spices that excite all',
    subtitle: 'Five Senses',
  },
  {
    icon: Heart,
    title: 'Fresh flavoured spices',
    subtitle: '',
  },
];

export const Features = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 border-b border-border bg-background">
      <div className="swaraz-container px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex-shrink-0">
                <feature.icon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-primary" strokeWidth={1.5} />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-xs sm:text-sm md:text-base text-foreground leading-tight">
                  {feature.title}
                </p>
                {feature.subtitle && (
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
