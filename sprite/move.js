/**
 * 指定xy座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 * @param {Number} y 
 */
emojisp.posxy = (id, x, y) => {
    try {
        emojisp.spriteData[id].position.set(x, y);
        spriteOption[id].x = x;
        spriteOption[id].y = y;

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
        emojisp.spriteData[id].x = x;
        spriteOption[id].x = x;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

/**
 * 右(反転時は左)に進みます。
 * @param {String} id 
 * @param {Number} kyori 
 */
emojisp.susumu = (id, kyori) => {
    try {
        if (spriteOption[id].hanten == true) {
            emojisp.posxplus(id, -(kyori))
        }
        else {
            emojisp.posxplus(id, kyori)
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
        emojisp.spriteData[id].x += plus;
        spriteOption[id].x += plus
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
        emojisp.spriteData[id].y = y;
        spriteOption[id].y = y;
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
        emojisp.spriteData[id].y += plus;
        spriteOption[id].y += plus
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
        TweenMax.to(emojisp.spriteData[id], time / 1000,
            {
                pixi: {
                    x: x,
                    y: y,
                },
                ease: Power0.easeNone,
            }
        );

        setTimeout(() => {
            spriteOption[id].x = x;
            spriteOption[id].y = y;
        }, time);
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
