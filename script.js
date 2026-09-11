function roastObject() {
    const input = document.getElementById("objectInput");
    const result = document.getElementById("result");
    const screenText = document.getElementById("screenText");

    const object = input.value.trim();

    if (object === "") {
        result.innerHTML = "😂 Hey! Give me something to roast!";
        screenText.innerHTML = "ERROR";
        return;
    }

    screenText.innerHTML = "ROASTING... 🔥";
    result.innerHTML = "🤖 The fridge is thinking...";

    setTimeout(function () {
        const lowerObject = object.toLowerCase();

        if (lowerObject === "banana") {
            result.innerHTML = "🧊 The fridge door opened, saw BANANA, and instantly wanted to close itself.";
            screenText.innerHTML = "BANANA!";
            return;
        }

        const roasts = [
            `😂 ${object}? Even the fridge doesn't know why you're here.`,
            `🔥 ${object} has entered the fridge. Unfortunately, dignity did not enter with it.`,
            `🤣 Breaking news: ${object} has officially become the most useless thing in this fridge.`,
            `🧊 ${object} is so cold that even its personality needs defrosting.`,
            `😂 Dear ${object}, the fridge called. It wants its space back.`,
            `🔥 ${object} — proof that not everything belongs in a refrigerator.`,
            `🤣 I opened the fridge expecting food and found ${object}. What a disappointment.`,
            `💀 ${object} has been chilling in the fridge longer than your motivation.`,
            `😂 ${object} thinks it's special because it lives in the fridge. Cute.`,
            `🔥 ${object} has officially been judged by the Fridge Court.`
        ];

        const randomIndex = Math.floor(Math.random() * roasts.length);
        result.innerHTML = roasts[randomIndex];
        screenText.innerHTML = "DONE 😂";
    }, 500);
}

document.getElementById("objectInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        roastObject();
    }
});
