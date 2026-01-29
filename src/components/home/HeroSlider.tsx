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
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
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
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <div className="text-center text-white max-w-2xl">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-100 animate-fade-in">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 min-h-[44px] flex items-center justify-center animate-slide-up"
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 z-10 min-h-[44px] min-w-[44px]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 z-10 min-h-[44px] min-w-[44px]"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 h-2 sm:h-2.5 ${
              index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/50 w-2 sm:w-2.5 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
