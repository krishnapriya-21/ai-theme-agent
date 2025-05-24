export function createCard(content,themeColors){
        const card = document.createElement('div');
        card.textContent=content;
        card.style.backgroundColor=themeColors.surface;
        card.style.color= themeColors.onSurface;
        card.classList.add("md-card");
        return card;
}