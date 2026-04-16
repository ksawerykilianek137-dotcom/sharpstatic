import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import LandingPage from "@/pages/LandingPage";
import LandingPagePL from "@/pages/LandingPagePL";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();
const DEFAULT_LANG = import.meta.env.VITE_APP_LANG || "en";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/pl" component={LandingPagePL} />
        <Route path="/en" component={LandingPage} />
        <Route path="/">
          {DEFAULT_LANG === "pl" ? <LandingPagePL /> : <LandingPage />}
        </Route>
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
