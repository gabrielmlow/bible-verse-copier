let verse = "";
let verseCount = 0;

// Fix For French
window.setInterval(function() {

    const currentVerse = document.getElementById("pVerse").innerText;
    // const UpdatePanel1 = document.getElementById("UpdatePanel1");

    // const footerEl = document.getElementsByClassName("footer");

    if (verse !== currentVerse) {

        let content = "no verse";

        if (document.getElementById("pContent").innerText != null) {
            content = document.getElementById("pContent").innerText;
        }
        
        verse = currentVerse;

        if (verseCount >= 4) {
            document.body.removeChild(document.body.children[1]);
        } else {
            verseCount += 1
        }
        // key += 1;
        // chrome.storage.sync.set({key: [verse, content]}, function() {
        //     console.log(verse);
        // });
        // chrome.storage.sync.set({key: [verse, content]});
        
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