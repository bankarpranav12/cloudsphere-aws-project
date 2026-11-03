require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:8000",
        "http://cloudsphere-frontend-pranav.s3-website.ap-south-1.amazonaws.com"
    ]
}));

app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 3306),
    waitForConnections: true,
    connectionLimit: 10
});

app.get("/", (req, res) => {
    res.send("Welcome to CloudSphere Backend!");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "CloudSphere backend is healthy"
    });
});

app.get("/api/db-health", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.json({
            status: "OK",
            message: "RDS connection successful"
        });
    } catch (error) {
        console.error("Database health check failed:", error.code);
        res.status(500).json({
            status: "ERROR",
            message: "Database connection failed"
        });
    }
});

app.post("/api/health-checks", async (req, res) => {
    try {
        const { status, message } = req.body;

        const [result] = await db.execute(
            "INSERT INTO health_checks (status, message) VALUES (?, ?)",
            [status, message]
        );

        res.status(201).json({
            id: result.insertId,
            status,
            message
        });
    } catch (error) {
        console.error("Database insert failed:", error.code);
        res.status(500).json({
            error: "Could not save health check"
        });
    }
});

app.get("/api/health-checks", async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM health_checks ORDER BY id DESC"
        );
        res.json(rows);
    } catch (error) {
        console.error("Database retrieval failed:", error.code);
        res.status(500).json({
            error: "Could not retrieve health checks"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`CloudSphere backend running on port ${PORT}`);
});
