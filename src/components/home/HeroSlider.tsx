import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroSpices from '@/assets/hero-spices.jpg';

const slides = [
  {
    id: 1,
    image: heroSpices,
    title: 'Pure & Authentic Indian Spices',
    subtitle: 'Rich Flavor, Fresh Aroma',
    link: '/shop',
    buttonText: 'Shop Now',
  },
  {
    id: 2,
    image: heroSpices,
    title: 'Premium Turmeric Powder',
    subtitle: 'High Curcumin Content',
    link: '/collections/pure-grounded-spices',
    buttonText: 'Shop Now',
  },
  {
    id: 3,
    image: heroSpices,
    title: 'Red Chilli Powder',
    subtitle: 'Perfect Heat & Color',
    link: '/collections/pure-grounded-spices',
    buttonText: 'Shop Now',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity animate-slide-up"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
