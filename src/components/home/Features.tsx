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
    <section className="py-8 border-b border-border bg-background">
      <div className="swaraz-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4"
            >
              <div className="flex-shrink-0">
                <feature.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-medium text-foreground leading-tight">
                  {feature.title}
                </p>
                {feature.subtitle && (
                  <p className="text-muted-foreground text-sm">{feature.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
