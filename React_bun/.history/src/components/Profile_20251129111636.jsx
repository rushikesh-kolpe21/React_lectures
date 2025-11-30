// becarefull syntax will change
export const Profile = () => {
  return (
    <>
     <ProfileCard
      name="Rushi" 
      age={21} profession="Developer"
      greeeting = {
        <div>
            <strong>Hello Rushi</strong>
        </div>
      }
      >
        <p>om sai ram</p>
        <button>Contact</button>
     </ProfileCard>

     <ProfileCard
      name="om" 
      age={22} 
      profession="Tesing"
      greeeting = {
        <div>
            <strong>Hello om</strong>
        </div>
      }
      >
        <p>om sai ram</p>
        <button>Contact</button>
     </ProfileCard>
    </>
  )
}


// Profile Card Component same file
const ProfileCard = (props) => {
    return(
        <>
        <h2>name: {props.name}</h2>
        <h3>age: {props.age}</h3>
        <h4>profession: {props.profession}</h4>
        <div>
          {props.greeeting}
        </div>
        <div>
          {props.children}
        </div>
        </>
    )
}