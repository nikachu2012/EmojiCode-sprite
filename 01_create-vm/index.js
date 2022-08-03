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
        console.log(error)
    }
} 

