import React,{useState}  from 'react';


export const NewInputForm:React.FC<{
                         promenljivaZaFunkcijuProsledjena: Function
                        }>=(props)=>{

        const [description,setDescriptionChange] = useState('');
        const[assigned,setAssignedChange] = useState('');
        
        // const descriptionChange = (event) => {
        //     console.log(event.target.value);
        //     setDescriptionChange(event.target.value) 
        // }

        const assingedChanged = (event:any) => {
            setAssignedChange(event.target.value) //setting the description that is changed
            
        }

        const submitToDo = () =>{
            if(description != '' && assigned !=''){
              props.promenljivaZaFunkcijuProsledjena(description,assigned);
              setDescriptionChange('');
              setAssignedChange('');
            }else{
                alert('FORM CANNOT BE NULL !')
            }
        }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3 '>
                    <label className='form-label'> Assigned</label>
                    <input type='text' 
                    className='form-control' 
                    required onChange={assingedChanged}
                    value={assigned}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                    onChange={descriptionEvent => setDescriptionChange(descriptionEvent.target.value)} 
                    className='form-control' 
                    rows={3} 
                    required
                    value={description}></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3'
                onClick={submitToDo}>Add user</button>
            </form>
        </div>
    )

}




