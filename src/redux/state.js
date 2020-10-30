import Render from "../render";

let state = [
    {
        text: "Some text"
    },
    {
        text: "I don't care"
    },
    {
        text: "Okay, it is post"
    }
]

export let stateUpdate = (inpVal) => {
    state.push({'text': inpVal})
    Render(state)
    console.log(state)
}

export default state;