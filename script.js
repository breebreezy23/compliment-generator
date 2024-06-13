document.addEventListener('DOMContentLoaded', () => {
    const compliments = [
        "You're amazing!",
        "You're a true star!",
        "You make the world a better place!",
        "You're a ray of sunshine!",
        "You're incredibly talented!",
        "You have a great sense of humor!",
        "You are so kind and thoughtful!",
        "You're a wonderful friend!",
        "You have a brilliant mind!",
        "You're an inspiration!"
    ];

    const complimentElement = document.getElementById('compliment');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentElement.textContent = compliments[randomIndex];
    });
});

document.getElementById('share-twitter').addEventListener('click', function() {
    const compliment = document.getElementById('compliment').innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(compliment)}`;
    window.open(tweetUrl, '_blank');
});

document.getElementById('share-facebook').addEventListener('click', function() {
    const pageUrl = window.location.href; // Or any specific URL you want to share
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(facebookUrl, '_blank');
});