import { createButton } from "./components/Button.js";
import { createCard } from "./components/Card.js";
import { applyTypography } from "./components/Typography.js";

async function applyTheme(themeType) {
    const themeData = await fetchAITheme(themeType);
    
    const button = createButton("Click Me", themeData.themeColors);
    const card = createCard("This is an AI-themed card", themeData.themeColors);
    const text = document.createElement("p");
    text.textContent = "AI-powered typography";
    applyTypography(text, themeData.themeColors);

    document.body.appendChild(button);
    document.body.appendChild(card);
    document.body.appendChild(text);
}