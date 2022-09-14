/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Fri Aug 19 2022 21:51:12 GMT+0900 (日本標準時)
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
        console.error(error)
    }
} 

let spriteOption = {};
/**
 * スプライトを作成します。最後に作成されたフィールドに自動で書き込まれます。
 * @param {JSON} data 
 */
emojisp.createSprite = (data) => {
    try {

        if (Object.keys(spriteOption).includes(data.id)) {
            alert('すでにスプライトが作成されています。')
            console.log('Emojicode-Sprite Error: すでにスプライトが作成されています。')
        }
        else {
            spriteOption[data.id] = data;

            // 新しいHTML要素を作成
            let new_element = document.createElement('img');

            new_element.src = data.url;
            new_element.id = `emojiSprite_${data.id}`
            new_element.style.position = "absolute";
            new_element.style.pointerEvents = "none";
            if (data.y <= HEIGHT) {
                new_element.style.top = `${data.y}px`;
            }
            else {
                new_element.style.top = `${HEIGHT - 10}px`;
            }

            if (data.x <= WIDTH) {
                new_element.style.left = `${data.x}px`;
            }
            else {
                new_element.style.left = `${WIDTH - 10}px`;
            }

            if(data.width !== 0){
                new_element.style.width = `${data.width}px`
            }
            else if(data.width == 0){
                new_element.style.width = undefined
            }

            if(data.height !== 0){
                new_element.style.height = `${data.height}px`
            }
            else if(data.height == 0){
                new_element.style.height = undefined
            }
            
            

            // 指定した要素の中の末尾に挿入
            writeElement.appendChild(new_element);
        }

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
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
 * スプライトの削除ができます。
 * @param {string} id 
 * @returns 
 */
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
/**
 * スプライトのサイズ、画像変更ができます。
 * @param {string} id 
 * @param {JSON} option 
 */
emojisp.editSprite = (id, option) => {
    try {



        if (option.width !== 0) {
            spriteOption[id].width = option.width;
            document.getElementById(`emojiSprite_${id}`).style.width = `${option.width}px`;
        }
        else if (option.width == 0) {
            spriteOption[id].width = 0;
            document.getElementById(`emojiSprite_${id}`).style.width = null;
        }

        if (option.height !== 0) {
            spriteOption[id].height = option.height;
            document.getElementById(`emojiSprite_${id}`).style.height = `${option.height}px`;
        }
        else if (option.height == 0) {
            spriteOption[id].height = 0;
            document.getElementById(`emojiSprite_${id}`).style.height = null;
        }

        spriteOption[id].url = option.url;
        document.getElementById(`emojiSprite_${id}`).src = option.url
    } catch (error) {

    }
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

        moveElement.style.left = `${x}px`
        spriteOption[id].x = x

        moveElement.style.top = `${y}px`
        spriteOption[id].y = y
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
        const moveElement = document.getElementById(`emojiSprite_${id}`)
        moveElement.style.left = `${x}px`
        spriteOption[id].x = x
    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

emojisp.susumu = (id, kyori) => {
    try {
        if (emojisp.accessSpriteData(id).rebound == true) {
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
        const moveElement = document.getElementById(`emojiSprite_${id}`)
        moveElement.style.left = `${emojisp.accessSpriteData(id).x + plus}px`
        spriteOption[id].x = emojisp.accessSpriteData(id).x + plus
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
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        moveElement.style.top = `${y}px`
        spriteOption[id].y = y
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
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        moveElement.style.top = `${emojisp.accessSpriteData(id).y + plus}px`
        spriteOption[id].y = emojisp.accessSpriteData(id).y + plus

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
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        const style = document.createElement('style')

        moveX = x;
        moveY = y;

        const xy =
            `@keyframes sprite_${id} {
            0% {left: ${emojisp.accessSpriteData(id).x}px; top: ${emojisp.accessSpriteData(id).y}px;}
            100% {left: ${moveX}px; top: ${moveY}px;}
        }`

        style.innerHTML = xy;

        document.getElementsByTagName('head')[0].appendChild(style)

        /*moveElement.id = `sprite_${id}`*/
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
        console.error(error)
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

emojisp.rotatetime = (id, deg, time) => {
    try {
        const moveElement = document.getElementById(`emojiSprite_${id}`)

        const style = document.createElement('style')

        switch (emojisp.accessSpriteData(id).rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
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
                }
                break;
            case "none":
                break;
            case "free":
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
        if(emojisp.accessSpriteData(id).rebound == false){
            spriteOption[id].rebound = true;
            emojisp.rotate(id, 180)
        }
        else if (emojisp.accessSpriteData(id).rebound == true){
            spriteOption[id].rebound = false;
            emojisp.rotate(id, 0)
        }
        
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

