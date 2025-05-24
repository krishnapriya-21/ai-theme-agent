export function GenerateMaterialPalette(themeType){
    const palettes ={
         light: { primary: "#6200EE", onPrimary: "#FFFFFF", background: "#F5F5F5" },
        dark: { primary: "#BB86FC", onPrimary: "#000000", background: "#000000" },
        pastel: { primary: "#F4C7C3", onPrimary: "#333333", background: "#FFF7F1" },
        adaptive: { primary: "#FFAB91", onPrimary: "#333333", background: "#EDE7F6" } // AI learning variation
    };
    return palettes[themeType] || palettes.light;
}