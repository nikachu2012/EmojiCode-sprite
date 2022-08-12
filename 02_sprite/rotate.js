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
        console.error(error)
    }
}

/**
 * 指定角度づつ回転します。右回転は+,左回転では-をつけてください。
 * @param {string} id 
 * @param {number} deg 
 */
emojisp.rotateplus = (id, deg) => {
    try {
        const rotateElement = document.getElementById(`emojiSprite_${id}`)

        switch (emojisp.accessSpriteData(id).rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    rotateElement.style.transform = `rotate(${emojisp.accessSpriteData(id).deg + deg}deg)`
                    spriteOption[id].deg = emojisp.accessSpriteData(id).deg + deg;
                }
                break;
            case "none":
                break;
            case "free":
                rotateElement.style.transform = `rotate(${emojisp.accessSpriteData(id).deg + deg}deg)`
                spriteOption[id].deg = emojisp.accessSpriteData(id).deg + deg;
                break;

            default:
                break;
        }


    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

emojisp.rotatetime = (id,deg,time) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        const style = document.createElement('style')

        const xy =
            `@keyframes spriteRotate_${id} {
            0% {transform: rotate(${emojisp.accessSpriteData(id).deg}deg);}
            100% {transform: rotate(${deg}deg);}
        }`


        style.innerHTML = xy;
        document.getElementsByTagName('head')[0].appendChild(style)

        moveElement.style.animation = `spriteRotate_${id} ${time}ms linear`

        spriteOption[id] = deg;


        setTimeout(() => {
            style.remove();

            moveElement.style.transform = `rotate(${deg}deg)`;
            moveElement.style.animation.replace(`spriteRotate_${id} ${time}ms linear`, '')
        }, time);
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

/**
 * 回す時の条件を追加します。
 * @param {String} id 
 * @param {String} data 
 */
emojisp.rotatetype = (id, data) => {
    switch (data) {
        case "lr":
            spriteOption[id].rotateType = "lr";
            break;
        case "none":
            spriteOption[id].rotateType = "none";
            break;
        case "free":
            spriteOption[id].rotateType = "free";
            break;
        default:
            break;
    }
}

/**
 * 端に着いたら跳ね返る条件を計算します
 * @param {String} id 
 */
emojisp.rebound = (id) => {
    if (emojisp.accessSpriteData(id).x >= WIDTH - 10) {
        emojisp.rotate(id, 180)
    }
}
/**
 * 反転させます。
 * @param {string} id 
 */
emojisp.hanten = (id) => {
    const hantenElement = document.getElementById(`emojiSprite_${id}`);
    if (emojisp.accessSpriteData(id).hanten == undefined || emojisp.accessSpriteData(id).hanten == false) {
        hantenElement.style.transform = `scale(-1,1)`
        spriteOption[id].hanten = true;
    }
    else {
        hantenElement.style.transform = ``
        spriteOption[id].hanten = false;
    }
}

