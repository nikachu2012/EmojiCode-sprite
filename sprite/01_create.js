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
            emojisp.spriteData[data.id].x = data.x;
            emojisp.spriteData[data.id].y = data.y;

            // 角度の変更
            emojisp.spriteData[data.id].rotation = data.deg * ( Math.PI / 180 );

            // 表示非表示の指定
            emojisp.spriteData[data.id].visible = data.visibility;

            // イベント系の有効化
            emojisp.spriteData[data.id].interactive = true;

            // 表示領域に追加する
            app.stage.addChild(emojisp.spriteData[data.id]);
        }

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

