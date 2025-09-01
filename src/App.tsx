import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DesignSwitcher from "./components/DesignSwitcher";
import Index from "./pages/Index";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";

const queryClient = new QueryClient();

const App = () => {
  const [currentDesign, setCurrentDesign] = useState('default');

  useEffect(() => {
    // Remove all design classes
    document.body.classList.remove('modern-minimal', 'dark-neon', 'nature-organic', 'luxury-elegant');
    
    // Add current design class
    if (currentDesign !== 'default') {
      document.body.classList.add(currentDesign);
    }

    // Load corresponding CSS file
    const existingLink = document.querySelector('#design-styles');
    if (existingLink) {
      existingLink.remove();
    }

    if (currentDesign !== 'default') {
      const link = document.createElement('link');
      link.id = 'design-styles';
      link.rel = 'stylesheet';
      link.href = `/src/styles/${currentDesign}.css`;
      document.head.appendChild(link);
    }
  }, [currentDesign]);

  return (
   <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DesignSwitcher 
        onDesignChange={setCurrentDesign} 
        currentDesign={currentDesign} 
      />
      <BrowserRouter future={{ v7_startTransition: true,
    v7_relativeSplatPath: true,  }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add-school" element={<AddSchool />} />
          <Route path="/schools" element={<ShowSchools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
