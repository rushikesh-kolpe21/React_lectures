import seriesData from "../api/data.json";
import { SeriesData } from "./SeriesCards";


export const Netflix =()=> {
 // declear a variable
    return(
        <>
        <ul>
          {
             seriesData.map((currEle)=>{
            return(
                <SeriesData key={currEle} data={currEle} />
            )
           })
          };
        
        </ul>
        </>
    )
}