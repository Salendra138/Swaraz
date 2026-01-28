import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="swaraz-container text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
