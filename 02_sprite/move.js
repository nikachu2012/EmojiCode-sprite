/**
 * 指定xy座標に指定IDのスプライトを移動します。
 * @param {string} id 
 * @param {Number} x 
 * @param {Number} y 
 */
emojisp.posxy = (id, x, y) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        if (x < -(emojisp.accessSpriteData(id).width - 10)){
            moveElement.style.left = `${-(emojisp.accessSpriteData(id).width - 10)}px`
            spriteOption[id].x = -(emojisp.accessSpriteData(id).width - 10)
        }
        else if (x < WIDTH) {
            moveElement.style.left = `${x}px`
            spriteOption[id].x = x
        }
        else {
            moveElement.style.left = `${WIDTH - 10}px`
            spriteOption[id].x = WIDTH - 10;

        }
        
        if (y < -(emojisp.accessSpriteData(id).height - 10)){
            moveElement.style.top = `${-(emojisp.accessSpriteData(id).height - 10)}px`
            spriteOption[id].y = -(emojisp.accessSpriteData(id).height - 10)
        }
        else if (y < HEIGHT) {
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

emojisp.susumu = (id, kyori) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)


        if(emojisp.accessSpriteData(id).hanten == true){
            emojisp.posxplus(id, -(kyori))
        }
        else{
            emojisp.posxplus(id,kyori)
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

/**
 * 指定時間に座標を動かします。
 * @param {string} id 
 * @param {number} x 
 * @param {number} y 
 * @param {number} time ms単位
 */
emojisp.posxytime = (id, x, y, time) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        const style = document.createElement('style')

        if (x < WIDTH) {
            moveX = x;
        }
        else {
            moveX = WIDTH - 10;
        }

        if (y < HEIGHT) {
            moveY = y;
        }
        else {
            moveY = HEIGHT - 10;
        }

        const xy =
            `@keyframes sprite_${id} {
            0% {left: ${emojisp.accessSpriteData(id).x}px; top: ${emojisp.accessSpriteData(id).y}px;}
            100% {left: ${moveX}px; top: ${moveY}px;}
        }`

        style.innerHTML = xy;

        document.getElementsByTagName('head')[0].appendChild(style)

        moveElement.id = `sprite_${id}`
        moveElement.style.animation = `sprite_${id} ${time}ms linear`

        spriteOption[id].x = moveX
        spriteOption[id].y = moveY


        setTimeout(() => {
            style.remove();

            moveElement.style.left = `${moveX}px`;
            moveElement.style.top = `${moveY}px`;
        }, time);
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}