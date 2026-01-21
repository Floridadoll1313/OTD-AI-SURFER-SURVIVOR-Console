import express from "express"
import path from "path"
import session from "express-session"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import pg from "pg"
import connectPgSimple from "connect-pg-simple"
import http from "http"
import { WebSocketServer } from "ws"
import cors from "cors"

// ---------- INIT ----------
const app = express()
const server = http.createServer(app)

const PgStore = connectPgSimple(session)
const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
})

// ---------- MIDDLEWARE ----------
app.use(express.json())
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)

app.use(
  session({
    store: new PgStore({ pool: pgPool }),
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

// ---------- PASSPORT ----------
passport.use(
  new LocalStrategy(async (username, password, done) => {
    // TEMP: accept any username/password
    return done(null, { id: 1, username })
  })
)

passport.serializeUser((user, done) => {
  done(null, (user as any).id)
})

passport.deserializeUser((id, done) => {
  done(null, { id })
})

// ---------- STATIC FILES ----------
app.use(express.static(path.join(__dirname, "../Public")))

// ---------- ROUTES ----------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/island.htm"))
})

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello Universe 🌊" })
})

// ---------- WEBSOCKETS ----------
const wss = new WebSocketServer({ server })

wss.on("connection", (ws) => {
  ws.send("🌊 WebSocket connected to Ocean Tide Drop")
})

// ---------- START ----------
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
 
