import seriesData from "../api/data.json";

export const Netflix =()=> {
 // declear a variable
    return(
        <>
        <ul>
          {
             seriesData.map((currEle)=>{
            return(
                <seriesData/>
            )
           })
          };
        </ul>
        </>
    )
}