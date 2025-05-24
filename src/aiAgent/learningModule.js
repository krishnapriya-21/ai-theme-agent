const userPreferenceHistory = [];

export function refineTheme(themeType, userSelection) {
    userPreferenceHistory.push(userSelection);
    const refinedPalette = generateMaterialPalette(themeType);
    
    // AI adapts based on past user choices
    if (userPreferenceHistory.length > 3) {
        refinedPalette.primary = userPreferenceHistory[userPreferenceHistory.length - 1].primary;
    }
    
    return refinedPalette;
}