import type { Express } from "express"
import { type Server } from "http"
import { storage } from "./storage"

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // prefix all routes with /api
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello Universe 🌊" })
  })<Switch>
  <Route path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/hire-ai-surfer" component={HireAISurfer} />
  <Route component={NotFound} />
</Switch>
<Switch>
  <Route path="/" component={Home}/>
  <Route path="/login" component={Login}/>
  <Route path="/hire-ai-surfer" component={HireAISurfer}/>
  <Route component={NotFound} />import gameRoutes from './game';
app.use('/game', gameRoutes);
</Switch>
  return httpServer
}
