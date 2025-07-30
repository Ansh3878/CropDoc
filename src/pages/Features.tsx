
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import { Camera, Brain, History, Users, Cloud, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Disease Detection",
      description: "Upload photos of your crops and get instant, accurate identification of diseases using our advanced AI model.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Brain,
      title: "Treatment Plans",
      description: "Receive customized treatment recommendations based on disease identification, crop type, and growing conditions.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: History,
      title: "History Tracking",
      description: "Keep a detailed history of all your crop scans and treatments to monitor progress and effectiveness.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Connect with agricultural experts for more complex cases requiring specialized knowledge and advice.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Cloud,
      title: "Weather Integration",
      description: "Analyze local weather patterns and their potential impact on crop diseases and treatment effectiveness.",
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Share experiences and learn from other farmers and agricultural professionals in our community forum.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cropdoc-green/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574943320219-553eb213f72d')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cropdoc-green bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools designed to revolutionize your farming experience and maximize crop health.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
                <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cropdoc-green/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-cropdoc-green/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of farmers who trust CropDoc for their crop health management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-cropdoc-green hover:bg-cropdoc-green/90 text-white font-semibold transition-all duration-200 hover:transform hover:scale-105"
            >
              Get Started Free
            </a>
            <a 
              href="/how-it-works" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-cropdoc-green/30 hover:border-cropdoc-green text-cropdoc-green font-semibold transition-all duration-200 hover:bg-cropdoc-green/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Features;
