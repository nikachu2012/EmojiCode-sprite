let spriteOption = {};
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

            // 新しいHTML要素を作成
            let new_element = document.createElement('img');

            new_element.src = data.url;
            new_element.id = `emojiSprite_${data.id}`
            new_element.style.position = "absolute";
            new_element.style.userSelect = "none";
            if (data.y <= HEIGHT) {
                new_element.style.top = `${data.y}px`;
            }
            else {
                new_element.style.top = `${HEIGHT - 10}px`;
            }

            if (data.x <= WIDTH) {
                new_element.style.left = `${data.x}px`;
            }
            else {
                new_element.style.left = `${WIDTH - 10}px`;
            }

            if(data.width !== 0){
                new_element.style.width = `${data.width}px`
            }
            else if(data.width == 0){
                new_element.style.width = undefined
            }

            if(data.height !== 0){
                new_element.style.height = `${data.height}px`
            }
            else if(data.height == 0){
                new_element.style.height = undefined
            }
                    
            // 指定した要素の中の末尾に挿入
            writeElement.appendChild(new_element);

            eval(`
            document.getElementById(\`emojiSprite_${data.id}\`).addEventListener('click', () => {
                emojisp_click_${data.id}();
            })
            `)
        }

    } catch (error) {
        alert('EmojiCode Sprite Controller Error detect!\nPlease see DevTools.')
        console.error(error)
    }
}

