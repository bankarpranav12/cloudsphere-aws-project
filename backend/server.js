const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Allow requests from your frontend
app.use(cors({
    origin: [
        "http://localhost:8000",
        "http://cloudsphere-frontend-pranav.s3-website.ap-south-1.amazonaws.com"
    ]
}));

app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to CloudSphere Backend!");
});

// Health check API
app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "CloudSphere backend is running successfully!"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`CloudSphere backend running on port ${PORT}`);
});
