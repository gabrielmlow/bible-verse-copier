let verse = "";
let bible = "";
let verseCount = 0;
const verseLimit = 4;

window.setInterval(function() {
    const currentVerse = document.getElementById("title").innerText;
    const currentBible = document.getElementById("version").innerText;

    if (verse !== currentVerse || bible !== currentBible) {

        const content = document.getElementById("verse").innerText != null ? document.getElementById("verse").innerText : "no content";
        
        verse = currentVerse;
        bible = currentBible;

        if (verseCount >= verseLimit) {
            document.body.removeChild(document.body.children[verseLimit]);
        } else {
            verseCount += 1
        }
        
        const verseText = document.createTextNode(verse);
        const contentText = document.createTextNode(content);

        const cardEl = document.createElement('div');
        const verseEl = document.createElement('div');
        const contentEl = document.createElement('div');

        const formEl = document.getElementById("form1")
    
        cardEl.classList.add('card');
        verseEl.classList.add('verse');
        contentEl.classList.add('content')
    
        verseEl.appendChild(verseText);
        contentEl.appendChild(contentText);

        insertAfter(document.getElementById("container"), cardEl);
        // document.body.appendChild(cardEl);  
        cardEl.appendChild(verseEl);
        cardEl.appendChild(contentEl)
    }
}, 1000);


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}