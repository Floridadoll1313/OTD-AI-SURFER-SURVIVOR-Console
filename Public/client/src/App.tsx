import HireAISurfer from "@/pages/HireAISurfer";
import { Switch, Route } from "wouter";
import { queryClient } from plpl"./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/component kl/i/tooltip";import Island from './Island';

function App() {
  return <Island />;
}

export default App;
import { AuthProvider } from "@/context/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";nu 
import HireAISurfer from "@/pages/HireAISurfer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route component={NotFound} />import Island from './Island';

function App() {
  return <Island />;
}

export default App;
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
