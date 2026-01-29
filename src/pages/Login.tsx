import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="swaraz-container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Login</span>
          </div>
        </div>
      </div>

      <section className="swaraz-section">
        <div className="swaraz-container">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">My Account</h1>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <div className="bg-card p-6 rounded-lg border border-border mt-4">
                  <h2 className="text-lg font-semibold mb-4">Login with OTP</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <div className="flex gap-2">
                        <select className="w-20 border border-border rounded px-2 py-2">
                          <option value="+91">+91</option>
                        </select>
                        <Input type="tel" placeholder="Enter phone number" className="flex-1" />
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground">
                      Request OTP
                    </Button>
                  </form>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-card px-4 text-muted-foreground">Or Login Using</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full">Phone</Button>
                    <Button variant="outline" className="w-full">WhatsApp</Button>
                    <Button variant="outline" className="w-full">Email</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <div className="bg-card p-6 rounded-lg border border-border mt-4">
                  <h2 className="text-lg font-semibold mb-4">Create Account</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="First name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <div className="flex gap-2">
                        <select className="w-20 border border-border rounded px-2 py-2">
                          <option value="+91">+91</option>
                        </select>
                        <Input type="tel" placeholder="Phone number" className="flex-1" />
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground">
                      Create Account
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
