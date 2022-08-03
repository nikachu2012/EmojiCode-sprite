/**
 * 指定xy座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 * @param {Number} y 
 */
emojisp.posxy = (id, x, y) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        if (x < WIDTH) {
            moveElement.style.left = `${x}px`
            spriteOption[id].x = x
        }
        else {
            moveElement.style.left = `${WIDTH - 10}px`
            spriteOption[id].x = WIDTH - 10;

        }

        if (y < HEIGHT) {
            moveElement.style.top = `${y}px`
            spriteOption[id].y = y
        } else {
            moveElement.style.top = `${HEIGHT - 10}px`
            spriteOption[id].y = HEIGHT - 10;
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}
/**
 * 指定x座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 */
emojisp.posx = (id, x) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)


        if (x < WIDTH) {
            moveElement.style.left = `${x}px`
            spriteOption[id].x = x
        }
        else {
            moveElement.style.left = `${WIDTH - 10}px`
            spriteOption[id].x = WIDTH - 10;
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}
/**
 * 今のx座標に指定分追加で指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} plus
 */
emojisp.posxplus = (id, plus) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        if (emojisp.accessSpriteData(id).x + plus < WIDTH) {
            moveElement.style.left = `${emojisp.accessSpriteData(id).x + plus}px`
            spriteOption[id].x = emojisp.accessSpriteData(id).x + plus
        }
        else {
            moveElement.style.left = `${WIDTH - 10}px`
            spriteOption[id].x = WIDTH - 10;
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}
/**
 * 指定y座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} y
 */
emojisp.posy = (id, y) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)


        if (y < HEIGHT) {
            moveElement.style.top = `${y}px`
            spriteOption[id].y = y
        }
        else {
            moveElement.style.top = `${HEIGHT - 10}px`
            spriteOption[id].y = HEIGHT - 10;
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}
/**
 * 今のy座標に指定分追加で指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} plus
 */
emojisp.posyplus = (id, plus) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        if (emojisp.accessSpriteData(id).y + plus < HEIGHT) {
            moveElement.style.top = `${emojisp.accessSpriteData(id).y + plus}px`
            spriteOption[id].y = emojisp.accessSpriteData(id).y + plus
        }
        else {
            moveElement.style.top = `${HEIGHT - 10}px`
            spriteOption[id].y = HEIGHT - 10;
        }
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}

emojisp.posxytime = (id, x, y, time) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        const onetime = time / FRAME;

        if (x < WIDTH) {
            moveX = x - emojisp.accessSpriteData(id).x;
            finX = x;
        }
        else {
            moveX = WIDTH - 10;
            finX = WIDTH - 10;
        }

        if (y < HEIGHT) {
            moveY = y - emojisp.accessSpriteData(id).y;
            finY = y;
        }
        else {
            moveY = HEIGHT - 10;
            finY = WIDTH - 10;
        }

        i = 0;
        const loop = setInterval(() => {
            i++
            if (i == FRAME) {
                clearInterval(loop)
                spriteOption[id].x = finX
                spriteOption[id].y = finY
            }
            else {

                emojisp.posxplus(id, moveX / FRAME)


                emojisp.posyplus(id, moveY / FRAME)


            }

        }, onetime);
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}