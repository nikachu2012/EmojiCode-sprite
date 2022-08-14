emojisp.deleteSprite = (id) => {
    try {
        if (Object.keys(spriteOption).includes(id)) {
            delete spriteOption[id]
            document.getElementById(`emojiSprite_${id}`).remove()
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