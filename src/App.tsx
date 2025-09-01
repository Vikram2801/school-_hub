import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DesignSwitcher from "./components/DesignSwitcher";
import ColorThemeSwitcher from "./components/ColorThemeSwitcher";
import Index from "./pages/Index";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";

const queryClient = new QueryClient();

const App = () => {
  const [currentDesign, setCurrentDesign] = useState('default');
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    // Remove all design classes
    document.body.classList.remove('modern-minimal', 'dark-neon', 'nature-organic', 'luxury-elegant');
    // Remove all theme classes
    document.body.classList.remove('theme-purple', 'theme-ocean', 'theme-sunset', 'theme-forest', 'theme-rose', 'theme-midnight', 'theme-emerald');
    
    // Add current design class
    if (currentDesign !== 'default') {
      document.body.classList.add(currentDesign);
    }
    
    // Add current theme class
    if (currentTheme !== 'default') {
      document.body.classList.add(currentTheme);
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
    
    // Load color variant styles
    const existingColorLink = document.querySelector('#color-styles');
    if (existingColorLink) {
      existingColorLink.remove();
    }
    
    const colorLink = document.createElement('link');
    colorLink.id = 'color-styles';
    colorLink.rel = 'stylesheet';
    colorLink.href = '/src/styles/color-variants.css';
    document.head.appendChild(colorLink);
  }, [currentDesign, currentTheme]);

  return (
   <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DesignSwitcher 
        onDesignChange={setCurrentDesign} 
        currentDesign={currentDesign} 
      />
      <ColorThemeSwitcher 
        onThemeChange={setCurrentTheme} 
        currentTheme={currentTheme} 
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
