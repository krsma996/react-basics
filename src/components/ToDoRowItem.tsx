import React from "react"

/*
ovde si rekao da export const ToDoRow item je funkcionalna komponenta
koja vraca React.FC(Funkcionalnu komponentu) sa koja unutar <> se prolsedjuje objekat {}
posto se ova govna iz ToDoTable prosledjuju 
          passingRowNumber:number,
          passingRowDescription:string,
          passingRowAssigned:string,
          deleteKey: Function

          ti ih stavis samo u taj kurac <> jer to ocekekujes
          i ovim si rekao da je ovo funckionalna komponenata koja vraca React FC()
  jednostanvo bolji i validirani nacin i ovako treba raditi 

*/
export const ToDoRowItem:React.FC<{
          passingRowNumber:number,
          passingRowDescription:string,
          passingRowAssigned:string,
          deleteKey: Function
}> = (props) =>{
    
    return (
      <tr onClick={()=> props.deleteKey(props.passingRowNumber)}>
         <th scope='row'>{props.passingRowNumber}</th>
         <td>{props.passingRowDescription}</td>
         <td>{props.passingRowAssigned}</td>
      </tr>
    )
     
}




