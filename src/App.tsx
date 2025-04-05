
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BucketListProvider } from "./contexts/BucketListContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BucketList from "./pages/BucketList";
import Experiences from "./pages/Experiences";

// Initialize QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BucketListProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bucketlist" element={<BucketList />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/experiences/:id" element={<Index />} />
            <Route path="/communities" element={<Index />} />
            <Route path="/communities/:id" element={<Index />} />
            <Route path="/influencers" element={<NotFound />} />
            <Route path="/about" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BucketListProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
