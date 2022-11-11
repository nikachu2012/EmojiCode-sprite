/**
 * スプライトを表示します。
 * @param {String} id 
 */
emojisp.show = (id) => {
    spriteOption[id].visibility = true;
    emojisp.spriteData[id].visible = true;
}

/**
 * スプライトを非表示にします。
 * @param {String} id 
 */
emojisp.hide = (id) => {
    emojisp.spriteData[id].visible = false;
    spriteOption[id].visibility = false;
}
