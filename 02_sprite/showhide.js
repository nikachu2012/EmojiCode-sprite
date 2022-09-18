emojisp.show = (id) => {
    const dom = document.getElementById(`emojiSprite_${id}`);

    spriteOption[id].visibility = true;
    dom.style.visibility = 'visible';
}

