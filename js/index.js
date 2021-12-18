let i = 0;
const text = 'Welcome to my website!';
const speed = 80;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeWriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
