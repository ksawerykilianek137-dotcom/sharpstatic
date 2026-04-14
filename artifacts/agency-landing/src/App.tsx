import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "@/pages/LandingPage";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
