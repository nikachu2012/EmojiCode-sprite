/**
 * 指定xy座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 * @param {Number} y 
 */
emojisp.posxy = (id, x, y) => {
    try {
        spriteOption[id].position.set(x, y);
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
        spriteOption[id].x = x;
        emojisp.spriteData[id].x = x;
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
        if (emojisp.spriteData[id].hanten == true) {
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
        spriteOption[id].x += plus;
        emojisp.spriteData[id].x += plus
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
        spriteOption[id].y = y;
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
        spriteOption[id].y += plus;
        emojisp.spriteData[id].y += plus
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
        TweenMax.to(spriteOption[id], time / 1000,
            {
                pixi: {
                    x: x,
                    y: y,
                },
                ease: Power0.easeNone,
            }
        );

        setTimeout(() => {
            emojisp.spriteData[id].x = x;
            emojisp.spriteData[id].y = y;
        }, time);
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}
