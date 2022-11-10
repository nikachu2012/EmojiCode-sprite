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

