/**
 * スプライトの削除ができます。
 * @param {string} id 
 * @returns 
 */
emojisp.deleteSprite = (id) => {
    try {
        if (Object.keys(spriteOption).includes(id)) {
            app.stage.removeChild(spriteOption[id])
            delete spriteOption[id];
            delete emojisp.spriteData[id];
        }
        else{
            alert('指定されたスプライトが存在していません。')
            console.error('EmojiCode Sprite: 指定されたスプライトが存在していません。')
            return null
        }

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
