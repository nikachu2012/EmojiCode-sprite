/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Thu Nov 10 2022 05:02:58 GMT+0000 (Coordinated Universal Time)
*/
const emojisp = {};

let spriteOption = {};
emojisp.spriteData = {};

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

            // スプライトを作成する
            emojisp.spriteData[data.id] = new PIXI.Sprite.from(data.url);

            // 基準をスプライトの中央に指定
            emojisp.spriteData[data.id].anchor.x = 0.5;
            emojisp.spriteData[data.id].anchor.y = 0.5;

            // 位置を中央にする
            emojisp.spriteData[data.id].x = app.screen.width / 2;
            emojisp.spriteData[data.id].y = app.screen.height / 2;

            // 角度の変更
            emojisp.spriteData[data.id].rotation = data.deg * ( Math.PI / 180 );

            // 表示非表示の指定
            emojisp.spriteData[data.id].visible = data.visibility;

            // 表示領域に追加する
            app.stage.addChild(emojisp.spriteData[data.id]);
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
}/**
 * スプライトの削除ができます。
 * @param {string} id 
 * @returns 
 */
emojisp.deleteSprite = (id) => {
    try {
        if (Object.keys(emojisp.spriteData).includes(id)) {
            app.stage.removeChild(emojisp.spriteData[id])
            delete emojisp.spriteData[id];
            delete spriteOption[id];
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
/**
 * 指定の角度に変更します。右回転は+,左回転では-をつけてください。
 * @param {string} id 
 * @param {number} deg 
 */
emojisp.rotate = (id, deg) => {
    try {
        switch (spriteOption[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    emojisp.spriteData[id].rotation = deg * (Math.PI / 180);
                    spriteOption[id].deg = deg;
                }
                break;
            case "none":
                break;
            case "free":
                emojisp.spriteData[id].rotation = deg * (Math.PI / 180);
                spriteOption[id].deg = deg;
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
        switch (spriteOption[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    emojisp.spriteData[id].rotation += deg * (Math.PI / 180);
                    spriteOption[id].deg += deg;
                }
                break;
            case "none":
                break;
            case "free":
                emojisp.spriteData[id].rotation += deg * (Math.PI / 180);
                spriteOption[id].deg += deg;
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
        switch (spriteOption[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    TweenMax.to(emojisp.spriteData[id], time / 1000,
                        {
                            pixi: {
                                rotation: deg,
                            },
                            ease: Power0.easeNone,
                        }
                    );

                    setTimeout(() => {
                        spriteOption[id].deg = deg;
                    }, time);
                }
                break;
            case "none":
                break;
            case "free":
                TweenMax.to(emojisp.spriteData[id], time / 1000,
                    {
                        pixi: {
                            rotation: deg,
                        },
                        ease: Power0.easeNone,
                    }
                );

                setTimeout(() => {
                    spriteOption[id].deg = deg;
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
 * 反転させます。
 * @param {string} id 
 */
emojisp.hanten = (id) => {
    if (spriteOption[id].hanten == undefined || spriteOption[id].hanten == false) {
        emojisp.spriteData[id].scale.set(-1, 1);

        spriteOption[id].hanten = true;
    }
    else {
        emojisp.spriteData[id].scale.set(1, 1);

        spriteOption[id].hanten = false;
    }
}

emojisp.show = (id) => {
    const dom = document.getElementById(`emojiSprite_${id}`);

    emojisp.spriteData[id].visibility = true;
    dom.style.visibility = 'visible';
}

emojisp.hide = (id) => {
    const dom = document.getElementById(`emojiSprite_${id}`);

    emojisp.spriteData[id].visibility = false;
    dom.style.visibility = 'hidden'
}
