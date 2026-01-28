import { Layout } from '@/components/layout/Layout';
import { HeroSlider } from '@/components/home/HeroSlider';
import { Features } from '@/components/home/Features';
import { Categories } from '@/components/home/Categories';
import { BestSellers } from '@/components/home/BestSellers';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <Features />
      <Categories />
      <BestSellers />
    </Layout>
  );
};

export default Index;
