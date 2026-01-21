import { motion } from "framer-motion";
import { Flame, Github, Mail, Chrome, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { useEffect } from "react";

const providers = [
  { id: "google", name: "Continue with Google", icon: Chrome, color: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200" },
  { id: "github", name: "Continue with GitHub", icon: Github, color: "bg-gray-900 hover:bg-gray-800 text-white" },
  { id: "email", name: "Continue with Email", icon: Mail, color: "bg-primary hover:bg-primary/90 text-white" },
];

export default function Login() {
  const { user, isLoading, login } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (user) {
      setLocation("/");
    }
  }, [user, setLocation]);

  return (
    <div className="min-h-screen bg-background bg-noise flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <Card className="p-8 border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl" data-testid="card-login">
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-2" data-testid="text-login-title">
              Welcome to TribeUp
            </h1>
            <p className="text-muted-foreground text-center">
              Sign in to track your habits and connect with your tribe
            </p>
          </div>

          <div className="space-y-3">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  className={`w-full h-12 font-medium ${provider.color}`}
                  onClick={() => login(provider.id)}
                  disabled={isLoading}
                  data-testid={`button-login-${provider.id}`}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  ) : (
                    <provider.icon className="w-5 h-5 mr-3" />
                  )}
                  {provider.name}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              By continuing, you agree to TribeUp's{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </Card>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-sm text-muted-foreground"
        >
          Don't have an account?{" "}
          <a href="#" className="text-primary font-medium hover:underline" data-testid="link-signup">
            Sign up for free
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
