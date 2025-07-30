
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Crop Farmer",
      content: "CropDoc has completely transformed how I manage diseases on my farm. Last season, I caught an outbreak of leaf rust early thanks to the app's quick identification, saving me thousands in potential losses.",
      initials: "SJ",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Commercial Grower",
      content: "We integrated CropDoc into our daily operations across our 500-acre farm. The AI detection is incredibly accurate, and the treatment recommendations are always on point. A must-have tool for serious agriculture.",
      initials: "MR",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Organic Farmer", 
      content: "As an organic farmer, finding effective treatments is challenging. CropDoc's specialized recommendations for organic growing have helped me maintain my certification while effectively managing crop diseases.",
      initials: "ET",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Agricultural Consultant",
      content: "I recommend CropDoc to all my clients. The ability to track treatment effectiveness over time and build a disease history for each field has proven invaluable for long-term crop management strategies.",
      initials: "DC", 
      rating: 5
    },
    {
      name: "Patricia Okoye",
      role: "Cooperative Extension Agent",
      content: "CropDoc bridges the knowledge gap for new farmers. The educational resources and community forum provide context around the AI diagnoses, helping farmers truly understand what's happening with their crops.",
      initials: "PO",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Vineyard Owner",
      content: "The early warning system for weather-related disease risk has been a game-changer for our vineyard. We've been able to take preventative measures before problems even appear, resulting in our best harvest in a decade.",
      initials: "JW",
      rating: 5
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
            What Our Users Say
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how CropDoc is helping farmers around the world protect their crops and improve their yields.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
                <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cropdoc-green/30 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* User Info */}
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-cropdoc-green">
                      <AvatarFallback className="bg-cropdoc-green/20 text-cropdoc-green font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-cropdoc-green/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Become part of the growing community of farmers revolutionizing agriculture with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-cropdoc-green hover:bg-cropdoc-green/90 text-white font-semibold transition-all duration-200 hover:transform hover:scale-105"
            >
              Start Your Journey
            </a>
            <a 
              href="/features" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-cropdoc-green/30 hover:border-cropdoc-green text-cropdoc-green font-semibold transition-all duration-200 hover:bg-cropdoc-green/10"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Testimonials;
