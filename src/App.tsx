import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";

const queryClient = new QueryClient();

const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
