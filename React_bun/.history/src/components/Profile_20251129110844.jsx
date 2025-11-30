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
        <p>This is children props</p>
     </ProfileCard>
    </>
  )
}