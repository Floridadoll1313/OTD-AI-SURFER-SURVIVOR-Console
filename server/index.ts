import express from 'express';
import path from 'path';
import express from "express"
import session from "express-session"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import pg from "pg"
import connectPgSimple from "connect-pg-simple"
import http from "http"
import { WebSocketServer } from "ws"
import cors from "cors"
const express = require('express');
const app = express();
const path = require('path');

const homepageRouter = require('./routes/homepage');
app.use('/', homepageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const app = express()
const server = http.createServer(app)
import path from 'path';
import express from 'express';

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../public/island.html'));
});
  res.sendFile(path.join(__dirname, '../public/Island.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// ---------- CONFIG ----------
const PgStore = connectPgSimple(session)
const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
})

// ---------- MIDDLEWARE ----------
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5000",
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

// ---------- PASSPORT STRATEGY ----------
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

// ---------- ROUTES ----------
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello Universe 🌊" })
})
import checkoutRoute from "./createCheckout";
app.use("/api", checkoutRoute);import path from "path";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/island.html"));
});
// ---------- WEBSOCKETS ----------
const wss = new WebSocketServer({ server })

wss.on("connection", (ws) => {
  ws.send("🌊 WebSocket connected to Ocean Tide Drop")
})

// ---------- START ----------
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Island.html'));
});
