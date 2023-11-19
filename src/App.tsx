import React,{useState} from 'react';
import './App.css';
import {ToDoTable} from './components/ToDoTable';
import {NewInputForm} from './components/NewInputForm';

export const App:React.FC<{}>= () => {

  const [currentAddForm,setToDoAddForm] = useState (false);

  const [currentToDo,updatedToDo] =  useState( [
    {rowNumber: 1, rowDescription:  'Jedi Kurac', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Jedi Govna', rowAssigned: 'User Two'},
    {rowNumber: 3,  rowDescription: 'Jedi Picku', rowAssigned: 'userThree'},
    {rowNumber: 4,  rowDescription: 'Jedi asasdasd', rowAssigned: 'asdasdsd'}
  ]);

     const addIntoTableToDo = (description : string,assigned: string) => {
      let rowNumber = 0;
       if(currentToDo.length > 0){

        rowNumber = currentToDo[currentToDo.length -1].rowNumber +1
        }else{
          rowNumber = 1;
        }
        const newTodo = { rowNumber: rowNumber,
                            rowDescription: description, 
                            rowAssigned: assigned
              };
           updatedToDo(currentToDo => [...currentToDo,newTodo]); 
     }

    const deleteToDo = (deleteRowItemIdentificatior: number) => {
      //ovo radi tako sto ce da filtirra listu sa vrednosti iz paramtetra koji mu je proslednjen
      //i prvi uslov ce da vrti sve te elemente kroz niz i ako je on tacan samo ce ti vrati fitliranu listu 
 //Ako se identifikatori podudaraju (to jest, ako je uslov rowNumber !== deleteRowItemIdentificatior lažan),
 // element se neće naći u rezultujućem nizu filtered     
      let filtered = currentToDo.filter((value) =>{
        return value.rowNumber !== deleteRowItemIdentificatior;
      })
      //a ovo znaci da ga je pronasao i da je spreman za birsanje i bice pronadjen u toj listi filtered
      updatedToDo(filtered);
    }


  return (
    <div className='mt-5 container'>
       <div className='card'>
        <div className='card-header'>
          Your to dos
        </div>
        <div className='card-body'>
          
         <ToDoTable imePromenljive={currentToDo} prosledjeniDeleteToDo={deleteToDo}/>
         <button className="btn btn-primary" 
          onClick={() => setToDoAddForm(!currentAddForm)}>
            {currentAddForm ? 'Close New To Do' : 'New To Do'}
            
            </button>  
          {currentAddForm && 
          <NewInputForm promenljivaZaFunkcijuProsledjena ={addIntoTableToDo}/>
          }
        </div>
       </div>
    </div>
  );
}

export default App;
