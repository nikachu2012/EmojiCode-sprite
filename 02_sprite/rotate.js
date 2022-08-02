/**
 * 端に着いたら跳ね返る条件を計算します
 * @param {String} id 
 */
emojisp.rebound = (id) => {
    if(emojisp.accessSpriteData(id).x >= WIDTH - 10){
        emojisp.rotate(id, 180)
    }
}