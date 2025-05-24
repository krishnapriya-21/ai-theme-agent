import { validateTheme, generateMaterialPalette } from "../utils/generatePalette.js";

export function processThemeRequest(themeType, userPreferences) {
    if (!validateTheme(themeType)) {
        return { error: "Invalid theme type" };
    }
    return generateMaterialPalette(themeType, userPreferences);
}