/**
 * スプライトのサイズ、画像変更ができます。
 * @param {string} id 
 * @param {JSON} option 
 */
emojisp.editSprite = (id, option) => {
    try {
        spriteOption[id].width = option.width;
        spriteOption[id].height = option.height;
        document.getElementById(`emojiSprite_${id}`).style.width = `${option.width}px`;
        document.getElementById(`emojiSprite_${id}`).style.height = `${option.height}px`;

        spriteOption[id].url = option.url;
        document.getElementById(`emojiSprite_${id}`).src = option.url
    } catch (error) {

    }
}
