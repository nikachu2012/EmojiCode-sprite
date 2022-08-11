/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Fri Aug 12 2022 02:36:35 GMT+0900 (日本標準時)
*/
const emojisp = {};
/**
 * スプライト用のフィールドを書き込みます。
 * @param {string} id idをつけたdivタグを指定してください。
 * @param {JSON} option オプションのJSONを指定してください。
 */
emojisp.create = (id, option) => {
    try {
        writeElement = document.getElementById(id);

        WIDTH = writeElement.clientWidth;
        HEIGHT = writeElement.clientHeight;
        
        FRAME = 30;
        
        writeElement.style.position = "relative";
        writeElement.style.backgroundColor = option.firstBackground;
        writeElement.style.overflow = `hidden`;
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
} 

 
let spriteOption = {};
/**
 * スプライトを作成します。最後に作成されたフィールドに自動で書き込まれます。
 * @param {JSON} data 
 */
emojisp.createSprite = (data) => {
    try {

        spriteOption[data.id] = data;

        // 新しいHTML要素を作成
        let new_element = document.createElement('img');

        new_element.src = data.url;
        new_element.id = `emojiSprite_${data.id}`
        new_element.style.position = "absolute";
        new_element.style.pointerEvents = "none";
        if(!data.x > WIDTH || !data.y > HEIGHT){
            new_element.style.top = `${data.y}px`;
            new_element.style.left = `${data.x}px`;
        }
        
        new_element.style.width = `${data.width}px`
        new_element.style.height = `${data.height}px`

        // 指定した要素の中の末尾に挿入
        writeElement.appendChild(new_element);

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}

 
/**
 * スプライトの情報を返します。
 * @param {string} id IDの引数です。
 * @returns {JSON}　データのJSONを返します。
 */
emojisp.accessSpriteData = (id) => {
    return spriteOption[id]
}

 
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
        console.log(error)
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
        console.log(error)
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

 
