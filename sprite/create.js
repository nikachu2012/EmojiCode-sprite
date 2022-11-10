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

