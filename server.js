const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// ==========================================================
// API ROUTE TO FETCH CSV SECURELY
// ==========================================================
app.get("/api/csv/:country/:type", async (req, res) => {
  const { country, type } = req.params;

  const key = `${country.toUpperCase()}_${type.toUpperCase()}_CSV`;
  const csvUrl = process.env[key];

  if (!csvUrl) {
    return res.status(404).send("CSV URL not found in environment variables");
  }

  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();

    res.setHeader("Content-Type", "text/csv");
    res.send(csvText);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching CSV data");
  }
});

// ==========================================================
// HOME PAGE
// ==========================================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
