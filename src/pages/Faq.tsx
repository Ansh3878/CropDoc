
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Phone, Mail } from 'lucide-react';

const Faq = () => {
  const faqs = [
    {
      question: "What kinds of plants and crops can CropDoc identify diseases for?",
      answer: "CropDoc can identify diseases for a wide range of crops including corn, wheat, rice, potatoes, tomatoes, peppers, apples, grapes, citrus fruits, and many more. Our AI model is trained on thousands of images covering over 50 crop types and hundreds of common diseases."
    },
    {
      question: "How accurate is the disease identification?",
      answer: "Our AI model has an average accuracy rate of 95% for common crop diseases. Each diagnosis comes with a confidence score, and in cases where confidence is below 80%, we suggest additional verification methods or offer to connect you with an expert."
    },
    {
      question: "Do I need internet connection to use CropDoc?",
      answer: "An internet connection is required for the initial disease analysis, as the images need to be processed by our AI model in the cloud. However, you can access previously saved diagnoses and treatment plans offline."
    },
    {
      question: "Does CropDoc work in all countries and regions?",
      answer: "Yes, CropDoc can be used globally. Our database includes crop diseases from all major agricultural regions worldwide. The treatment recommendations are also adapted based on your location to ensure they comply with local regulations and availability."
    },
    {
      question: "How do I take the best photos for accurate identification?",
      answer: "For best results, take clear, well-lit photos of the affected plant parts showing the symptoms. Include both healthy and diseased portions for comparison. Take multiple angles if possible, and avoid shadows or glare on the plant surface."
    },
    {
      question: "Can CropDoc identify nutrient deficiencies or pest damage?",
      answer: "Yes, CropDoc can identify many types of nutrient deficiencies as well as damage caused by common pests. The app will differentiate between disease, pest damage, and nutrient issues, offering appropriate recommendations for each scenario."
    },
    {
      question: "Is there a limit to how many scans I can perform?",
      answer: "Free accounts can perform up to 10 scans per month. Premium subscribers have unlimited scans, priority processing, and access to additional features like expert consultations and detailed historical analysis."
    },
    {
      question: "How does CropDoc protect my data and privacy?",
      answer: "We take your privacy seriously. While we use your uploaded images to improve our AI model, all data is anonymized. Your personal information and specific farm location data are never shared with third parties without your explicit consent."
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about CropDoc and get the help you need.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cropdoc-green transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground text-lg">
              Our support team is here to help you with any additional questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
              <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cropdoc-green/30 transition-all duration-300">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant help from our AI assistant for quick answers.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cropdoc-green hover:bg-cropdoc-green/90 text-white font-semibold transition-all duration-200"
                >
                  Start Chat
                </a>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
              <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cropdoc-green/30 transition-all duration-300">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Email Support</h3>
                <p className="text-muted-foreground mb-6">
                  Send us detailed questions and get comprehensive answers.
                </p>
                <a 
                  href="mailto:support@cropdoc.com" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-cropdoc-green/30 hover:border-cropdoc-green text-cropdoc-green font-semibold transition-all duration-200 hover:bg-cropdoc-green/10"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-cropdoc-green/20 to-cropdoc-green/10"></div>
              <div className="relative bg-cropdoc-dark-card backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cropdoc-green/30 transition-all duration-300">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Phone Support</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our experts for complex issues.
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-cropdoc-green/30 hover:border-cropdoc-green text-cropdoc-green font-semibold transition-all duration-200 hover:bg-cropdoc-green/10"
                >
                  Call Now
                </a>
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

export default Faq;
