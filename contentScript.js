let verse = "";
let bible = "";
let verseCount = 0;
const verseLimit = 4;

// Fix For French
window.setInterval(function() {

    const currentVerse = document.getElementById("pVerse").innerText;
    const currentBible = document.getElementById("pTranslation").innerText;
    // const UpdatePanel1 = document.getElementById("UpdatePanel1");

    // const footerEl = document.getElementsByClassName("footer");

    if (verse !== currentVerse || bible !== currentBible) {

        const content = document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content";
        
        verse = currentVerse;
        bible = currentBible;

        if (verseCount >= verseLimit) {
            document.body.removeChild(document.body.children[1]);
        } else {
            verseCount += 1
        }
        
        const verseText = document.createTextNode(verse);
        const contentText = document.createTextNode(content);

        const cardEl = document.createElement('div');
        const verseEl = document.createElement('div');
        const contentEl = document.createElement('div');
    
        cardEl.classList.add('card');
        verseEl.classList.add('verse');
        contentEl.classList.add('content')
    
        cardEl.appendChild(verseText);
        contentEl.appendChild(contentText);
    
        document.body.appendChild(cardEl);  
        // footerEl.prepend(cardEl); 
        cardEl.appendChild(verseEl);
        cardEl.appendChild(contentEl)
        
    }
    
}, 1000);