
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Take a Photo",
      description: "Use your smartphone or upload an existing image of the affected crop. Make sure to capture a clear, well-lit image showing the symptoms.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Farmer taking photo of crop"
    },
    {
      number: "2", 
      title: "AI Analysis",
      description: "Our advanced AI model analyzes the image, comparing it to thousands of known crop diseases and identifying patterns and symptoms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "AI analyzing crop data"
    },
    {
      number: "3",
      title: "Get Results", 
      description: "Within seconds, receive a detailed diagnosis of the disease affecting your crops, complete with confidence level and additional information.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Software analysis results"
    },
    {
      number: "4",
      title: "Treatment Plan",
      description: "Based on the diagnosis, we provide customized treatment recommendations tailored to your specific crop, disease, and growing conditions.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Healthy crop after treatment"
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
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get instant crop disease diagnosis in four simple steps with our AI-powered platform.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cropdoc-green to-emerald-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 w-full max-w-lg">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cropdoc-green/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <AspectRatio ratio={16/9} className="relative bg-muted overflow-hidden rounded-2xl border border-white/10">
                      <img 
                        src={step.image}
                        alt={step.alt}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of farmers protecting their crops with CropDoc's AI technology.
          </p>
          <Button asChild size="lg" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white px-8 py-4 text-lg">
            <Link to="/signup">Try CropDoc Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default HowItWorks;
