import { Link } from 'react-router-dom';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryHing from '@/assets/category-hing.jpg';
import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryPastes from '@/assets/category-pastes.jpg';
import categoryBlended from '@/assets/category-blended.jpg';

const categories = [
  {
    name: 'Whole Spices',
    image: categoryWholeSpices,
    path: '/collections/whole-spices',
  },
  {
    name: 'Hing/Asafoetida',
    image: categoryHing,
    path: '/collections/hing-asafoetida',
  },
  {
    name: 'Pure Grounded Spices',
    image: categoryGroundSpices,
    path: '/collections/pure-grounded-spices',
  },
  {
    name: 'Condiment/Cooking Pastes',
    image: categoryPastes,
    path: '/collections/condiment-cooking-pastes',
  },
  {
    name: 'Blended Spices',
    image: categoryBlended,
    path: '/collections/blended-spices',
  },
];

export const Categories = () => {
  return (
    <section className="swaraz-section py-8 sm:py-12 md:py-16">
      <div className="swaraz-container px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base text-center leading-tight line-clamp-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
