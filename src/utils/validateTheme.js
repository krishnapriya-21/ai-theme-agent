export function validateTheme(themeType) {
    const validThemes = ["light", "dark", "pastel", "adaptive"];
    return validThemes.includes(themeType);
}