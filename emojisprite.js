/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Sun Nov 06 2022 00:00:37 GMT+0900 (日本標準時)
*/
let spriteOption = {}
emojisp.spriteData = {};

const DEF_FRAME =
/**
 * スプライトを作成します。最後に作成されたフィールドに自動で書き込まれます。
 * @param {JSON} data 
 */
emojisp.createSprite = (data) => {
    try {
        emojisp.spriteData[data.id] = data;

        emojisp.core.preload(data.url);
        emojisp.core.onload = function () {

            let image = new Image();
            image.onload = function () {
                spriteOption[data.id] = new Sprite(image.width, image.height);
                spriteOption[data.id].image = emojisp.core.assets[data.url];
                spriteOption[data.id].x = data.x;
                spriteOption[data.id].y = data.y;
                spriteOption[data.id].rotation = data.deg;

                if(data.rebound){
                    spriteOption[data.id].scale(-1,1);
                }
                else{}
                emojisp.core.rootScene.addChild(spriteOption[data.id]);

            };
            image.src = data.url;
        };
        emojisp.core.start();

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
            spriteOption[id].remove()
            delete spriteOption[id]
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
        if (emojisp.accessSpriteData(id).rebound == false) {
            spriteOption[id].rebound = true;
            emojisp.rotate(id, 180)
        }
        else if (emojisp.accessSpriteData(id).rebound == true) {
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
    if (emojisp.spriteData[id].rebound) {
        emojisp.spriteData[id].rebound = false;
    }
    else {
        emojisp.spriteData[id].rebound = true;
    }
    spriteOption[id].scale(-1, 1);
}

emojisp.show = (id) => {
    spriteOption[id].opacity = 1;
}

emojisp.hide = (id) => {
    spriteOption[id].opacity = 0;
}
