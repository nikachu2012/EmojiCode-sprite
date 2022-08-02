/**
 * 指定の角度に変更します。右回転は+,左回転では-をつけてください。
 * @param {string} id 
 * @param {number} deg 
 */
emojisp.rotate = (id, deg) => {
    try {
        const rotateElement = document.getElementById(`emojiSprite_${id}`)

        switch (emojisp.accessSpriteData(id).rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    rotateElement.style.transform = `rotate(${deg}deg)`
                    spriteOption[id].deg = deg
                }
                break;
            case "none":
                break;
            case "free":
                rotateElement.style.transform = `rotate(${deg}deg)`
                spriteOption[id].deg = deg
                break;

            default:
                break;
        }


    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}
/**
 * 端に着いたら跳ね返る条件を計算します
 * @param {String} id 
 */
emojisp.rebound = (id) => {
    if(emojisp.accessSpriteData(id).x >= WIDTH - 10){
        emojisp.rotate(id, 180)
    }
}