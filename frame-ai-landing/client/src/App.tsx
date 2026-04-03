import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ModalErrorBoundary } from "./components/ModalErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppProvider, useApp } from "./contexts/AppContext";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import Pricing from "./pages/Pricing";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Studio from "./pages/Studio";
import CustomCursor from "./components/CustomCursor";
import { ContactModal } from "./components/modals/ContactModal";
import { CheckoutModal } from "./components/modals/CheckoutModal";
import { DemoModal } from "./components/modals/DemoModal";


// Componente de Rota Protegida
function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated } = useApp();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/pricing");
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) return null;

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/tools/:id"} component={ToolDetail} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/login"} component={Login} />
      <Route path={"/success"} component={Success} />
      <Route path={"/studio"}>
        <ProtectedRoute component={Tools} />
      </Route>
      <Route path={"/studio/:id"}>
        <ProtectedRoute component={Studio} />
      </Route>
      <Route path={"/workflow"}>
        <ProtectedRoute component={Tools} /> 
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <AppProvider>
          <TooltipProvider>
            <CustomCursor />
            <Toaster />
            <Router />
            {/* Modals - Wrapped in Error Boundaries */}
            <ModalErrorBoundary modalName="ContactModal">
              <ContactModal />
            </ModalErrorBoundary>
            <ModalErrorBoundary modalName="CheckoutModal">
              <CheckoutModal />
            </ModalErrorBoundary>
            <ModalErrorBoundary modalName="DemoModal">
              <DemoModal />
            </ModalErrorBoundary>
          </TooltipProvider>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
