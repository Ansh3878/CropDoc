
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StatCard from './StatCard';
import { Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-b from-cropdoc-dark to-cropdoc-dark-blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Detect Crop <span className="text-cropdoc-green">Diseases</span> <span className="text-cropdoc-green">Instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced AI-powered detection to identify and treat crop diseases before they spread. Join thousands of farmers protecting their crops.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white" asChild>
              <Link to="/signup">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard value="500+" label="Diseases Detected" delay={100} />
            <StatCard value="95%" label="Detection Accuracy" delay={200} />
            <StatCard value="50K+" label="Farmers Helped" delay={300} />
            <StatCard value="30%" label="Crop Loss Reduction" delay={400} />
        </div>
        
        {/* How it Works section */}
        <div id="how-it-works" className="mt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-cropdoc-green">CropDoc</span> Works
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our simple three-step process makes it easy to identify and treat crop diseases quickly and effectively.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cropdoc-dark-card rounded-xl p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-cropdoc-green flex items-center justify-center text-white text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mt-6 mb-3">Take a Photo</h3>
              <p className="text-muted-foreground">
                Capture a clear image of the affected plant part using your smartphone or upload an existing photo.
              </p>
            </div>
            
            <div className="bg-cropdoc-dark-card rounded-xl p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-cropdoc-green flex items-center justify-center text-white text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mt-6 mb-3">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI model analyzes the image to identify the disease, its severity, and spread pattern.
              </p>
            </div>
            
            <div className="bg-cropdoc-dark-card rounded-xl p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-cropdoc-green flex items-center justify-center text-white text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mt-6 mb-3">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed diagnosis and treatment recommendations within seconds, including organic options.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-cropdoc-green hover:bg-cropdoc-green/90 text-white" asChild>
              <Link to="/signup">Try It Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
