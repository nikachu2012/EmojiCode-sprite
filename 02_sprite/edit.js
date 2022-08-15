/**
 * スプライトのサイズ、画像変更ができます。
 * @param {string} id 
 * @param {JSON} option 
 */
emojisp.editSprite = (id, option) => {
    try {



        if (option.width !== 0) {
            spriteOption[id].width = option.width;
            document.getElementById(`emojiSprite_${id}`).style.width = `${option.width}px`;
        }
        else if (option.width == 0) {
            spriteOption[id].width = 0;
            document.getElementById(`emojiSprite_${id}`).style.width = null;
        }

        if (option.height !== 0) {
            spriteOption[id].height = option.height;
            document.getElementById(`emojiSprite_${id}`).style.height = `${option.height}px`;
        }
        else if (option.height == 0) {
            spriteOption[id].height = 0;
            document.getElementById(`emojiSprite_${id}`).style.height = null;
        }

        spriteOption[id].url = option.url;
        document.getElementById(`emojiSprite_${id}`).src = option.url
    } catch (error) {

    }
}
