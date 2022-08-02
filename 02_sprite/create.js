let spriteOption = {};
/**
 * スプライトを作成します。最後に作成されたフィールドに自動で書き込まれます。
 * @param {JSON} data 
 */
emojisp.createSprite = (data) => {
    try {

        spriteOption[data.id] = data;

        // 新しいHTML要素を作成
        let new_element = document.createElement('img');

        new_element.src = data.url;
        new_element.id = `emojiSprite_${data.id}`
        new_element.style.position = "absolute";
        new_element.style.pointerEvents = "none";
        if(!data.x > WIDTH || !data.y > HEIGHT){
            new_element.style.top = `${data.y}px`;
            new_element.style.left = `${data.x}px`;
        }
        
        new_element.style.width = `${data.width}px`
        new_element.style.height = `${data.width}px`

        // 指定した要素の中の末尾に挿入
        writeElement.appendChild(new_element);

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.log(error)
    }
}

