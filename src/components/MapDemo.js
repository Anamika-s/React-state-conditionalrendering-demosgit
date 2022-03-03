import React from 'react';

// export default function MapDemo()
// {
//   const arr=[10,20,30,40];
//   return(
//    <ul>
//      <li> {arr[0] * 2} </li>
//      <li> {arr[1] * 2} </li>
//      <li> {arr[2] * 2} </li>
//      <li> {arr[3] * 2} </li>
//    </ul>  
//   )
// }

export default function MapDemo()
{
  const arr=[10,20,30,40];
   const NewArray = arr.map((num)=>
   {
    return <li> {num * 2} </li>
   })
   console.log("Old Array " + arr);
   console.log("New Array " + NewArray);
return (
  <ul> {NewArray}   </ul>
)
}
