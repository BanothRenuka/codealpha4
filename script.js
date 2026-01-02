function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();

    if (message === "") {
        return;
    }

    displayMessage("You: " + message, "user");

    let reply = getBotReply(message);
    displayMessage("Bot: " + reply, "bot");

    input.value = "";
}

function getBotReply(message) {
    if (message === "hello") {
        return "Hi!";
    } else if (message === "how are you") {
        return "I'm fine, thanks!";
    } else if (message === "bye") {
        return "Goodbye!";
    } else {
        return "Sorry, I don't understand.";
    }
}

function displayMessage(text, className) {
    let chatBox = document.getElementById("chatBox");
    let p = document.createElement("p");

    p.textContent = text;
    p.className = className;

    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}
