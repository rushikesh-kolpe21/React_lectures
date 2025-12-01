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