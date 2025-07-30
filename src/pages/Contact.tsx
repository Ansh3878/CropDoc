
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageSquare, Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending the form
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cropdoc-green/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574943320219-553eb213f72d')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cropdoc-green bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have questions about CropDoc? Our team is here to help you with any inquiries or support needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
              <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Your name" 
                        required 
                        className="bg-background/50 border-white/20 focus:border-cropdoc-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="your@email.com" 
                        required 
                        className="bg-background/50 border-white/20 focus:border-cropdoc-green"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                    <Input 
                      id="subject" 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)} 
                      placeholder="How can we help?" 
                      required 
                      className="bg-background/50 border-white/20 focus:border-cropdoc-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Your message here..." 
                      required 
                      rows={6}
                      className="bg-background/50 border-white/20 focus:border-cropdoc-green resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-cropdoc-green hover:bg-cropdoc-green/90 text-white py-4 text-lg font-semibold" 
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Live Chat */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
                <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
                        <p className="text-muted-foreground">support@cropdoc.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-white">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-white">Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9am - 5pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-white">Location</h3>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Live Chat Support */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
                <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cropdoc-green to-emerald-600">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Live Chat Support</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Need immediate assistance? Try our AI chatbot for quick answers to common questions and instant support.
                  </p>
                  <Button 
                    className="w-full bg-cropdoc-green hover:bg-cropdoc-green/90 text-white py-4 text-lg font-semibold"
                    onClick={() => window.open("https://tourmaline-gnome-7af80e.netlify.app/", "_blank")}
                  >
                    Chat with CropDoc AI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Contact;
