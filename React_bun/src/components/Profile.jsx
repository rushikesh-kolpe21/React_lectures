// becarefull syntax will change

import { EventHandling } from "./EventHandling";

export const Profile = () => {
  return (
    <>
     <EventHandling/>
     <ProfileCard
      name="Rushi" 
      age={21} // pass in curly braces
      profession="Developer"
      greeeting = {
        <div>
            <strong>Hello Rushi</strong>
        </div>
      }
      >
        {/* // children props */}
        <p>om sai ram</p>
       
<button class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow">
  Primary Button
</button>

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
    const {name,age,profession} = props;
    return(
        <>
        <h2>name: {name}</h2>
        <h3>age: {age}</h3>
        <h4>profession: {profession}</h4>
        <div>
          {props.greeeting}
        </div>
        <div>
          {props.children} // child mey sab kuch aa jayega
        </div>
        </>
    )
}