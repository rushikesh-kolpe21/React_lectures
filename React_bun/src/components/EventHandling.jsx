export const EventHandling = () => {

    const btnwasclicking = () => {
        alert("button was clicked");
        // console.log(event);
    }
    return (
        <button onClick={btnwasclicking}>click me</button>
    )
};