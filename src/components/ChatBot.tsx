import React, { useEffect } from 'react';

declare global {
  interface Window {
    Chatbase: {
      init: (config: {
        chatbotId: string;
        domain: string;
        iframe: {
          backgroundColor?: string;
          buttonColor?: string;
          buttonIconColor?: string;
          buttonText?: string;
          welcomeMessage?: string;
          desktopHeight?: number;
          mobileHeight?: string;
          bottomDistance?: number;
          horizontalDistance?: number;
        };
      }) => void;
    };
  }
}

const ChatBot = () => {
  useEffect(() => {
    // Load Chatbase script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    
    // Initialize chatbot with configuration
    script.onload = () => {
      if (window.Chatbase) {
        window.Chatbase.init({
          chatbotId: "YOUR_CHATBOT_ID", // Replace with your actual Chatbase chatbot ID
          domain: "www.chatbase.co",
          iframe: {
            backgroundColor: "#FFD700", // Primary color from our theme
            buttonColor: "#FF0000", // Accent color from our theme
            buttonIconColor: "#FFFFFF",
            buttonText: "Need Help?",
            welcomeMessage: "Hi! How can I help you with African entrepreneurship today?",
            desktopHeight: 700,
            mobileHeight: "100%",
            bottomDistance: 20,
            horizontalDistance: 20
          }
        });
      }
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default ChatBot;