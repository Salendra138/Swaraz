import categoryGroundSpices from '@/assets/category-ground-spices.jpg';
import categoryWholeSpices from '@/assets/category-whole-spices.jpg';
import categoryBlended from '@/assets/category-blended.jpg';
import categoryPickles from '@/assets/category-pickles.jpg';
import categoryHing from '@/assets/category-hing.jpg';
import categoryPastes from '@/assets/category-pastes.jpg';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    weight: string;
    inStock: boolean;
    description?: string;
}

export const products: Product[] = [
    { id: '1', name: 'Swaraz Ajwain (Carom Seeds)', price: 12, image: categoryWholeSpices, category: 'Whole Spices', weight: '25g', inStock: true },
    { id: '2', name: 'Swaraz Black Cardamom (Badi Elachi)', price: 165, image: categoryWholeSpices, category: 'Whole Spices', weight: '50g', inStock: true },
    { id: '3', name: 'Swaraz Black Pepper (Kali Mirch)', price: 73, image: categoryWholeSpices, category: 'Whole Spices', weight: '50g', inStock: true },
    { id: '4', name: 'Swaraz Black Pepper Powder', price: 61, image: categoryGroundSpices, category: 'Pure Grounded Spices', weight: '50g', inStock: true },
    { id: '5', name: 'Swaraz Chilli Powder', price: 45, image: categoryGroundSpices, category: 'Pure Grounded Spices', weight: '100g', inStock: true },
    { id: '6', name: 'Swaraz Cloves (Laung)', price: 89, image: categoryWholeSpices, category: 'Whole Spices', weight: '25g', inStock: true },
    { id: '7', name: 'Swaraz Coriander Powder', price: 35, image: categoryGroundSpices, category: 'Pure Grounded Spices', weight: '100g', inStock: true },
    { id: '8', name: 'Swaraz Cumin (Jeera)', price: 14, image: categoryWholeSpices, category: 'Whole Spices', weight: '25g', inStock: true },
    { id: '9', name: 'Three Mango Garam Masala', price: 55, image: categoryBlended, category: 'Blended Spices', weight: '100g', inStock: true },
    { id: '10', name: 'Three Mango Biryani Masala', price: 70, image: categoryBlended, category: 'Blended Spices', weight: '100g', inStock: true },
    { id: '11', name: 'Swaraz Mango Pickle', price: 120, image: categoryPickles, category: 'Pickles', weight: '300g', inStock: true },
    { id: '12', name: 'Swaraz Lemon Pickle', price: 95, image: categoryPickles, category: 'Pickles', weight: '300g', inStock: true },
    { id: '13', name: 'Swaraz Compounded Hing', price: 45, image: categoryHing, category: 'Hing & Asafoetida', weight: '10g', inStock: true },
    { id: '14', name: 'Three Mango Ginger Garlic Paste', price: 55, image: categoryPastes, category: 'Condiment & Cooking Pastes', weight: '200g', inStock: true },
    { id: '15', name: 'Swaraz Turmeric Powder', price: 24, image: categoryGroundSpices, category: 'Pure Grounded Spices', weight: '50g', inStock: true },
    { id: '16', name: 'Swaraz Kashmiri Chilli', price: 78, image: categoryGroundSpices, category: 'Pure Grounded Spices', weight: '100g', inStock: true },
];
