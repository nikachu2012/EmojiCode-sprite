/**
 * 指定xy座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 * @param {Number} y 
 */
emojisp.posxy = (id, x, y) => {
    try {
        spriteOption[id].moveTo(x, y)

        emojisp.spriteData[id].x = x;
        emojisp.spriteData[id].y = y;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
/**
 * 指定x座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 */
emojisp.posx = (id, x) => {
    try {
        spriteOption[id].moveTo(x, spriteOption[id].y)

        emojisp.spriteData[id].x = x;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
/**
 * 指定px進みます。
 * @param {s} id 
 * @param {*} kyori 
 */
emojisp.susumu = (id, kyori) => {
    try {
        if (emojisp.spriteData[id].rebound) {
            spriteOption[id].moveBy(-(kyori), 0)
        }
        else {
            spriteOption[id].moveBy(kyori, 0)
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
/**
 * 今のx座標に指定分追加で指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} plus
 */
emojisp.posxplus = (id, plus) => {
    try {
        spriteOption[id].moveBy(plus, 0)

        emojisp.spriteData[id].x += x;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
/**
 * 指定y座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} y
 */
emojisp.posy = (id, y) => {
    try {
        spriteOption[id].moveTo(spriteOption[id].x, y)

        emojisp.spriteData[id].y = y;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
/**
 * 今のy座標に指定分追加で指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} plus
 */
emojisp.posyplus = (id, plus) => {
    try {
        spriteOption[id].moveBy(0, plus)

        emojisp.spriteData[id].y += y;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

/**
 * 指定時間に座標を動かします。
 * @param {string} id 
 * @param {number} x 
 * @param {number} y 
 * @param {number} time ms単位
 */
emojisp.posxytime = (id, x, y, time) => {
    try {
        spriteOption[id].tl.moveTo(x, y, (time / 1000) * DEF_FRAME)
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
