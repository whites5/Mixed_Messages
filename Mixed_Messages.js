function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}
const inspirationalMessage = {
    emotion: ['sad', 'happy', 'dreaming', 'reminder'],
    message: ["Nothing is impossible. The word itself says 'I'm possible!'", "Keep your face always toward the sunshine, and shadows will fall behind you.", "All our dreams can come true, if we have the courage to pursue them.", "You are never too old to set another goal or to dream a new dream."],
}

let personalMessage = []

for(let prop in inspirationalMessage) {
    let index = getRandomNumber(inspirationalMessage[prop].length)

    switch(prop) {
        case 'emotion':
            personalMessage.push(`Your current emotion is ${inspirationalMessage[prop][index]}.`)
            break;
        case'message':
            personalMessage.push(`${inspirationalMessage[prop][index]}`)
            break;
        default:
            personalMessage.push('Something went wrong.')
    }
}

function formatInspiration(inspiration) {
    const formatted = inspiration.join('\n')
    console.log(formatted)
}

formatInspiration(personalMessage)