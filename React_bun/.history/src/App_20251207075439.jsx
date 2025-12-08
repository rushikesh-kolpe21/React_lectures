import { DericedState } from "./components/DericedState";
import { EventProps } from "./components/EventProps";
import { Netflix } from "./components/Netflix";
import { Profile } from "./components/Profile";
import { ToogleSwitch } from "./components/ToogleSwitch";
import { ShortCircuitExample } from "./components/ShortCircuit";
import { Todo } from "./projects/Todo/Todo";

 export const App =()=> {

  const age = 17;

  return(
    <>
    {/* <Netflix/> */}
    {/* <Profile/> */}
    {/* <EventProps/> */}
    {/* <DericedState/> */}
    {/* <ToogleSwitch/> */}
    {/* <section>{<Todo />}</section> */}
    <ShortCircuitExample />
    </>
  )
}                                                          
  