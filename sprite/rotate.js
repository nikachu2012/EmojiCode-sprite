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

