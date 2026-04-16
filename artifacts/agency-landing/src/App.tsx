import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import LandingPage from "@/pages/LandingPage";
import LandingPagePL from "@/pages/LandingPagePL";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/pl" component={LandingPagePL} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
