const emojiCodes =[128064,127827,128588,128539,128081,128007,127799,127790,128332,10024,128128,128557];

const gallery = document.getElementById("emoji-gallery");

function showEmojis(count = emojiCodes.length) {
    gallery.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const emoji = String.fromCodePoint(emojiCodes[i]);
       
gallery.innerHTML += `<div class="emoji-card"><span>${emoji}</span><p>${emojiCodes[i]}</p></div>`;


    }
}

showEmojis();