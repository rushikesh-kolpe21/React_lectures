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

const WelcomeUser = (props)=>{
    const handleGreeting=()=>{
        console.log('hey user, welcome');
        onClick();
    }
    return(
        <>
             <button onClick={props.onClick}>xlick</button>
             <button onMouseEnter={props.onMouseEnter}>Hover me</button>
             <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}