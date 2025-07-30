
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';
import { Leaf } from 'lucide-react';

const Signup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto bg-cropdoc-dark-card rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Leaf className="text-cropdoc-green" size={24} />
              <h1 className="text-2xl font-bold text-center">Sign Up for CropDoc</h1>
            </div>
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
