import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Users, Target, ChevronRight, Zap, Trophy, Heart, ArrowRight, Palmtree, Waves, Compass, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

console.log("Free Site Loaded");

const mockData = {
  streak: 12,
  tribeCount: 1847,
  dailyChallenge: {
    title: "Morning Movement",
    description: "Complete 20 minutes of any physical activity before 9 AM",
    participants: 342,
    completionRate: 67,
  },
};

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  gradient 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string | number; 
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`relative overflow-hidden p-6 border-0 ${gradient}`} data-testid={`stat-${label.toLowerCase().replace(/\s/g, '-')}`}>
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm">
              <Icon className="w-5 h-5 text-white" strokeWidth={2.5} /><Button
  size="lg"
  className="bg-gradient-to-r from-blue-500 via-teal-400 to-coral-400 hover:from-blue-400 hover:via-teal-300 hover:to-coral-300 text-white font-semibold px-8 shadow-lg shadow-cyan-500/25 animate-pulse"
  asChild
>
  <a href="/hire-ai-surfer">Hire AI Surfer</a>
</Button>
            </div>
            <span className="text-sm font-medium text-white/80">{label}</span>
          </div>
          <p className="text-4xl font-display font-bold text-white tracking-tight">{value}</p>
        </div>
      </Card>
    </motion.div>
  );
}

function DailyChallenge() {
  const [isJoined, setIsJoined] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="relative overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm" data-testid="card-daily-challenge">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="relative p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  Today's Challenge
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3.5 h-3.5" />
                  {mockData.dailyChallenge.participants} joined
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                {mockData.dailyChallenge.title}
              </h3>
              <p className="text-muted-foreground max-w-md">
                {mockData.dailyChallenge.description}
              </p>
            </div>
            <div className="hidden md:flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
              <Target className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Community Progress</span>
              <span className="font-semibold text-foreground">{mockData.dailyChallenge.completionRate}%</span>
            </div>
            <Progress value={mockData.dailyChallenge.completionRate} className="h-2.5" />
          </div>
          
          <Button 
            size="lg" 
            className={`w-full md:w-auto font-semibold transition-all duration-300 ${
              isJoined 
                ? "bg-green-500 hover:bg-green-600 text-white" 
                : "bg-primary hover:bg-primary/90"
            }`}
            onClick={() => setIsJoined(!isJoined)}
            data-testid="button-join-challenge"
          >
            {isJoined ? (
              <>
                <Trophy className="w-4 h-4 mr-2" />
                Challenge Accepted!
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Join Challenge
              </>
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300" data-testid={`card-feature-${title.toLowerCase().replace(/\s/g, '-')}`}>
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen bg-background bg-noise">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-foreground" data-testid="text-logo">TribeUp</span>
            </div>
{user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 font-medium" data-testid="button-user-menu">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={logout} className="text-red-600" data-testid="button-logout">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="font-medium" onClick={() => setLocation("/login")} data-testid="button-members-login">
                Members Login
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
                Build Habits <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8" data-testid="text-hero-subtitle">
                Join a community of motivated individuals. Track your streaks, 
                complete daily challenges, and grow with your tribe.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto font-semibold px-8" data-testid="button-get-started">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <StatCard
                icon={Flame}
                label="Your Streak"
                value={`${mockData.streak} days`}
                gradient="bg-gradient-to-br from-orange-500 to-red-500"
              />
              <StatCard
                icon={Users}
                label="Tribe Members"
                value={mockData.tribeCount.toLocaleString()}
                gradient="bg-gradient-to-br from-violet-500 to-purple-600"
              />
            </div>

            <DailyChallenge />
          </div>
        </section>

        <section className="relative py-20 md:py-32 overflow-hidden" data-testid="section-survivor-island">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-teal-900 to-emerald-950" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(34,211,238,0.15)_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.2)_0%,_transparent_50%)]" />
          </div>
          <div className="absolute top-10 left-10 text-cyan-400/20">
            <Palmtree className="w-32 h-32" strokeWidth={1} />
          </div>
          <div className="absolute bottom-10 right-10 text-teal-400/20">
            <Palmtree className="w-24 h-24 rotate-12" strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 left-1/4 text-cyan-500/10">
            <Waves className="w-48 h-48" strokeWidth={0.5} />
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
                <Palmtree className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">New Experience</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight" data-testid="text-survivor-title">
                SURVIVOR ISLAND
              </h2>
              
              <p className="text-xl md:text-2xl font-medium text-cyan-300/90 mb-8" data-testid="text-survivor-tagline">
                <Waves className="inline w-5 h-5 mr-2 -mt-1" />
                A living game world inside Ocean Tide Drop
              </p>
              
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-lg md:text-xl text-cyan-100/80 leading-relaxed" data-testid="text-survivor-description">
                  Survivor Island is not a course, not a challenge, and not a membership. 
                  It's a <span className="text-white font-semibold">reactive, evolving game realm</span> that 
                  tracks your actions, rewards your consistency, and pushes you into 
                  <span className="text-cyan-300 font-semibold"> deeper waters</span> every time you return.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 shadow-lg shadow-cyan-500/25"
                  data-testid="button-enter-island"
                >
                  <Compass className="w-4 h-4 mr-2" />
                  Enter the Island
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/10 hover:border-cyan-400/50 font-medium"
                  data-testid="button-explore-game"
                >
                  Explore the Game
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-features-title">
                Why Join TribeUp?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Everything you need to build lasting habits and stay accountable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Flame}
                title="Streak Tracking"
                description="Stay motivated with visual streak counters that celebrate your consistency and progress."
              />
              <FeatureCard
                icon={Target}
                title="Daily Challenges"
                description="Fresh challenges every day to push your limits and keep your routine exciting."
              />
              <FeatureCard
                icon={Heart}
                title="Community Support"
                description="Connect with like-minded people who cheer you on and hold you accountable."
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-cta-title">
                Ready to Transform Your Habits?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands who are already building better habits with their tribe.
              </p>
              <Button size="lg" className="font-semibold px-10" data-testid="button-join-tribe">
                Join the Tribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Flame className="w-4 h-4 text-white" />
                app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/Island.html")
              </div>
              <span className="text-sm font-display font-semibold text-foreground">TribeUp</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © 2026 TribeUp. Build habits together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}