
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ChatbotButton = () => {
  return (
    <a 
      href="https://tourmaline-gnome-7af80e.netlify.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 bg-cropdoc-green hover:bg-cropdoc-green/90 shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Chat with CropDoc</span>
      </Button>
    </a>
  );
};

export default ChatbotButton;
