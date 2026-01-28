import { Link } from 'react-router-dom';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryPickles from '@/assets/category-pickles.jpg';
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
    name: 'Pickles',
    image: categoryPickles,
    path: '/collections/pickles',
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
    <section className="swaraz-section">
      <div className="swaraz-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="category-card group"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-sm md:text-base text-center">
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
