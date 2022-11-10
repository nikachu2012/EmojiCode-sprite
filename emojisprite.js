/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Wed Nov 09 2022 10:38:27 GMT+0000 (Coordinated Universal Time)
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

        if (Object.keys(emojisp.spriteData).includes(data.id)) {
            alert('すでにスプライトが作成されています。')
            console.log('Emojicode-Sprite Error: すでにスプライトが作成されています。')
        }
        else {
            emojisp.spriteData[data.id] = data;

            // スプライトを作成する
            spriteOption[data.id] = new PIXI.Sprite.from(data.url);

            // 基準をスプライトの中央に指定
            spriteOption[data.id].anchor.x = 0.5;
            spriteOption[data.id].anchor.y = 0.5;

            // 位置を中央にする
            spriteOption[data.id].x = app.screen.width / 2;
            spriteOption[data.id].y = app.screen.height / 2;

            // 角度の変更
            spriteOption[data.id].rotation = data.deg * ( Math.PI / 180 );

            // 表示非表示の指定
            spriteOption[data.id].visible = data.visibility;

            // 表示領域に追加する
            app.stage.addChild(spriteOption[data.id]);
        }

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

 
/**
 * スプライトの削除ができます。
 * @param {string} id 
 * @returns 
 */
emojisp.deleteSprite = (id) => {
    try {
        if (Object.keys(spriteOption).includes(id)) {
            app.stage.removeChild(spriteOption[id])
            delete spriteOption[id];
            delete emojisp.spriteData[id];
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
 
/**
 * 指定の角度に変更します。右回転は+,左回転では-をつけてください。
 * @param {string} id 
 * @param {number} deg 
 */
emojisp.rotate = (id, deg) => {
    try {
        switch (emojisp.spriteData[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    spriteOption[id].rotation = deg * (Math.PI / 180);
                    emojisp.spriteData[id].deg = deg;
                }
                break;
            case "none":
                break;
            case "free":
                spriteOption[id].rotation = deg * (Math.PI / 180);
                emojisp.spriteData[id].deg = deg;
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
        switch (emojisp.spriteData[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    spriteOption[id].rotation += deg * (Math.PI / 180);
                    emojisp.spriteData[id].deg += deg;
                }
                break;
            case "none":
                break;
            case "free":
                spriteOption[id].rotation += deg * (Math.PI / 180);
                emojisp.spriteData[id].deg += deg;
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
        switch (emojisp.spriteData[id].rotateType) {
            case "lr":
                if (deg == 0 || deg == 180) {
                    TweenMax.to(spriteOption[id], time / 1000,
                        {
                            pixi: {
                                rotation: deg,
                            },
                            ease: Power0.easeNone,
                        }
                    );

                    setTimeout(() => {
                        emojisp.spriteData[id].deg = deg;
                    }, time);
                }
                break;
            case "none":
                break;
            case "free":
                TweenMax.to(spriteOption[id], time / 1000,
                    {
                        pixi: {
                            rotation: deg,
                        },
                        ease: Power0.easeNone,
                    }
                );

                setTimeout(() => {
                    emojisp.spriteData[id].deg = deg;
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
            emojisp.spriteData[id].rotateType = "lr";
            break;
        case "none":
            emojisp.spriteData[id].rotateType = "none";
            break;
        case "free":
            emojisp.spriteData[id].rotateType = "free";
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
    if (emojisp.spriteData[id].hanten == undefined || emojisp.spriteData[id].hanten == false) {
        spriteOption[id].scale.set(-1, 1);

        emojisp.spriteData[id].hanten = true;
    }
    else {
        spriteOption[id].scale.set(1, 1);

        emojisp.spriteData[id].hanten = false;
    }
}

 
emojisp.show = (id) => {
    const dom = document.getElementById(`emojiSprite_${id}`);

    spriteOption[id].visibility = true;
    dom.style.visibility = 'visible';
}

emojisp.hide = (id) => {
    const dom = document.getElementById(`emojiSprite_${id}`);

    spriteOption[id].visibility = false;
    dom.style.visibility = 'hidden'
}
 
