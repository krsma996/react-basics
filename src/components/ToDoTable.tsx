import React from 'react';
import {ToDoRowItem} from './ToDoRowItem';

//props je po nekom standardu u sustini mozes stavis sta hoces kad prosledjujes
// imePromenljive ti je naziv koji si ti licno dao kada se prosledjuje komponenta sa vrednostima
// imePromenljive={currentToDo} ovo si definisao tamo u app.tsx i to sad radi
// a ovde si mu rekao kad ase prosledi taj imePromenljive je niz ToDoModel klasa koju si ti kreirao
// u sustini tipizirao si ga sa ovim
//i dolesi mu rekao da da je prosledjeniDeleteToDo function tipa
export const ToDoTable:React.FC<{imePromenljive: ToDoModel[] , 
                                prosledjeniDeleteToDo: Function}
                                > = (props)=>{
    //u parametru toDoRowItem prosledjujes novu vrednost key
    // to je nacin da react govoris da je svaki element u 
    //tabeli unique tj row su ssvki za sebe   ok ovo je staro sad 
    return (
        <table className='table table-hover'> 
             <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Desciprtion</th>
                    <th scope="col">Assigned</th>           
                </tr>
             </thead>
             <tbody>
                
                {props.imePromenljive.map( toDo => (
                    <ToDoRowItem
                    key ={toDo.rowNumber}
                    passingRowNumber={toDo.rowNumber}
                    passingRowDescription={toDo.rowDescription}
                    passingRowAssigned={toDo.rowAssigned}
                    deleteKey={props.prosledjeniDeleteToDo}
                    />
                ))}
             </tbody>
        </table>
    )
}



