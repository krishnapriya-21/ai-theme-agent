import express from "express";
import cors from "cors";
import { processThemeRequest } from "../src/aiAgent/themeProcessor.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/theme", (req, res) => {
    const { themeType, userPreferences } = req.body;
    const themeData = processThemeRequest(themeType, userPreferences);
    
    if (themeData.error) {
        return res.status(400).json(themeData);
    }
    
    return res.json({ themeColors: themeData });
});

app.listen(3000, () => console.log("🚀 AI Theme Agent running on port 3000"));