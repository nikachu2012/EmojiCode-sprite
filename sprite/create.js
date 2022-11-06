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

