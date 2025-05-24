export function createButton(text, themeColors) {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = themeColors.primary;
    button.style.color = themeColors.onPrimary;
    button.classList.add("md-button");
    return button;
}