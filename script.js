const setOfSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast requires practice and focus every day.",
    "JavaScript is the language of the web.",
    "Web development is fun and creative.",
    "Consistency is the key to mastering any skill."
];

const msg = document.querySelector(".msg");
const typeArea = document.querySelector(".area");
const btn = document.querySelector(".btn");

let startTime, endTime;

const startTyping = () => {
    let randomIndex = Math.floor(Math.random() * setOfSentences.length);
    msg.innerText = setOfSentences[randomIndex];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    typeArea.disabled = false;
    typeArea.value = "";
};

const endTyping = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;

    let typedText = typeArea.value.trim();
    let wordCount = typedText.split(" ").filter(word => word !== "").length;
    let speed = Math.round((wordCount / totalTime) * 60);

    let originalText = msg.innerText.trim();
    let accuracy = calculateAccuracy(originalText, typedText);

    msg.innerHTML = `You typed at <b>${speed} words per minute</b>. <br> Accuracy: <b>${accuracy}%</b>`;
    btn.innerText = "Start";
    typeArea.disabled = true;
};

const calculateAccuracy = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let correct = 0;

    words1.forEach((word, index) => {
        if (word === words2[index]) {
            correct++;
        }
    });

    let accuracy = Math.round((correct / words1.length) * 100);
    return accuracy;
};

btn.addEventListener("click", function () {
    if (this.innerText === "Start") {
        startTyping();
    } else if (this.innerText === "Done") {
        endTyping();
    }
});
