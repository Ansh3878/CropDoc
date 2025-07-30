
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import { Button } from "@/components/ui/button";
import { Leaf, Camera, Brain, FileText, Shield, Users, TrendingUp, Award } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-cropdoc-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cropdoc-dark via-cropdoc-dark-blue to-cropdoc-dark opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Smart farming" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="text-cropdoc-green h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">CropDoc</h1>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Farming Solution
            <span className="block text-cropdoc-green">Powered by AI</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your farming with cutting-edge AI technology. Detect plant diseases instantly, 
            optimize crop health, and increase yields like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white px-8 py-4 text-lg font-semibold">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-cropdoc-green text-cropdoc-green hover:bg-cropdoc-green hover:text-white px-8 py-4 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-cropdoc-dark to-cropdoc-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive AI-powered platform provides all the tools modern farmers need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Analyze Crops Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cropdoc-green/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-cropdoc-dark-card p-8 rounded-2xl border border-cropdoc-green/20 hover:border-cropdoc-green/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-cropdoc-green/10 rounded-xl flex items-center justify-center mb-6">
                  <Camera className="text-cropdoc-green h-8 w-8" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-white">Analyze Your Crops</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Upload photos of your plants to get instant disease analysis and treatment recommendations powered by advanced AI.
                </p>
                <Button variant="outline" className="w-full border-cropdoc-green text-cropdoc-green hover:bg-cropdoc-green hover:text-white" asChild>
                  <a href="https://huggingface.co/spaces/Anshul3878/Crop_disease_detection_2" target="_blank" rel="noopener noreferrer">
                    Upload Photo
                  </a>
                </Button>
              </div>
            </div>

            {/* View Reports Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-cropdoc-dark-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="text-blue-400 h-8 w-8" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-white">View Reports</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Access comprehensive diagnoses, track crop health over time, and review treatment success rates with detailed analytics.
                </p>
                <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  View Reports
                </Button>
              </div>
            </div>

            {/* Get Help Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-cropdoc-dark-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="text-purple-400 h-8 w-8" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-white">Get AI Help</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Chat with our specialized AI assistant or connect with agricultural experts for personalized farming advice.
                </p>
                <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white" asChild>
                  <a href="https://tourmaline-gnome-7af80e.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Chat with CropDoc AI
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cropdoc-dark relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
            alt="Farm landscape" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Farmers Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of farmers who've transformed their crops with CropDoc
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-cropdoc-dark-card p-6 rounded-2xl border border-cropdoc-green/20 hover:border-cropdoc-green/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="text-cropdoc-green h-8 w-8" />
                </div>
                <h3 className="font-bold text-3xl md:text-4xl text-cropdoc-green mb-2">500+</h3>
                <p className="text-gray-300 font-medium">Diseases Detected</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-cropdoc-dark-card p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <Award className="text-blue-400 h-8 w-8" />
                </div>
                <h3 className="font-bold text-3xl md:text-4xl text-blue-400 mb-2">95%</h3>
                <p className="text-gray-300 font-medium">Detection Accuracy</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-cropdoc-dark-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-purple-400 h-8 w-8" />
                </div>
                <h3 className="font-bold text-3xl md:text-4xl text-purple-400 mb-2">50K+</h3>
                <p className="text-gray-300 font-medium">Farmers Helped</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-cropdoc-dark-card p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all group-hover:transform group-hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="text-orange-400 h-8 w-8" />
                </div>
                <h3 className="font-bold text-3xl md:text-4xl text-orange-400 mb-2">30%</h3>
                <p className="text-gray-300 font-medium">Crop Loss Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cropdoc-green/10 to-cropdoc-dark-blue">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the agricultural revolution today and start protecting your crops with AI-powered precision.
          </p>
          <Button size="lg" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white px-12 py-4 text-lg font-semibold">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
