let contrast_mode = false;
let alternate_font = false;

function clickity() {
    if (contrast_mode) {
        document.body.style.fontSize = "1rem";
        document.body.style.backgroundImage = "url(\"./assets/dnd-hdmap.png\")";
        document.body.style.backgroundColor = "transparent";
    }
    else {
        document.body.style.fontSize = "1.2rem";
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
    }

    contrast_mode = !contrast_mode;
}

function change_font() {
    let fonts = document.getElementsByTagName("*");
    for (let i = 0; i < fonts.length; i++) {
        if (alternate_font) {
            fonts[i].style.fontFamily = "monospace";
        }
        else {
            fonts[i].style.fontFamily = "sans-serif";
        }
    }
    alternate_font = !alternate_font;
}