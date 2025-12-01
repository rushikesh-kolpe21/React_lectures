export const EventProps = () => {
    // parent componet
    const HandleWelcomeUser=(user)=>{
        alert(`hey,${user}`);
    };

    const handleHover=()=>{
        alert("hey thx for hovering me");
    }

    return(  // child compentent // and pass props to the welcomeUser
        <>
        <WelcomeUser
         onClick={()=> HandleWelcomeUser('vinod')}
            onMouseEnter={handleHover}
        />
        </>
    )
}

// new file

const WelcomeUser = ()=>{
    return(
        <>
             <button onClick={props.onClick}>xlick</button>
             <button onMouseEnter={props.onMouseEnter}>Hover me</button>
             <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}