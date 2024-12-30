const NewGmail = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'A', 'B', 'C', 'D', 'E', 'K', 'L', 'M', 'N'];

const btn = document.getElementById('btn');
const p = document.getElementById('p');
const copyBtn = document.getElementById('copyBtn');
const message = document.querySelector('.message')


// create RandomGmail
btn.addEventListener('click', () => {
    let gmail = '@gmail.com';
    for (let i = 0; i < 10; i++) {
        gmail = NewGmail[getRandomGmail()] + gmail;
    }
    p.textContent = gmail;
    copyBtn.style.display = "block";
    message.style.opacity = 0;
})


function getRandomGmail() {
    return Math.floor(Math.random() * NewGmail.length);
}

// copy Text
copyBtn.addEventListener('click', () => {
    const textToCopy = p.textContent;
    navigator.clipboard.writeText(textToCopy).then(
        message.style.opacity = 1
    )
});
