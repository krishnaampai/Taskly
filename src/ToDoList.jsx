import React,{useState} from "react"
function ToDoList(){
    
  const[tasksList,setTasksList] = useState([]);
 

  function handleRemoveTask(index){
    setTasksList(t=>t.filter ((_,i)=>i!==index));
  }

  function handleAddTask(){

    const newTask = document.getElementById("taskInput").value;
    if(newTask.trim()!=""){
       setTasksList(t=>([...t,newTask]));
    }

    
   
  }


  function handleMoveUp(index){
    if(index>0){
      const updatedTask = [...tasksList];
      [updatedTask[index],updatedTask[index -1]] = [updatedTask[index-1],updatedTask[index]];
      
      setTasksList(updatedTask);
    
    }
    
  }

  function handleMoveDown(index){
    if(index < tasksList.length -1){
      const updatedTask = [...tasksList];
      [updatedTask[index],updatedTask[index +1]] = [updatedTask[index+1],updatedTask[index]];
      
      setTasksList(updatedTask);
    
    }
    
  }

  return (
    <div className="main-container">
      <h1>To-Do-List</h1>
      <input className= "task-adder"placeholder="Enter a task..." type = "text"  id = "taskInput"></input>
      <button onClick={handleAddTask} className="add-button">Add</button><br/>
      <div >
        {tasksList.map((task,index)=>
        <div key={index} style={{ display: 'flex', alignItems: 'left', marginTop: '10px' }}>
      <span className="text">{task}</span>
      <button onClick={() => handleRemoveTask(index)}>Done✅</button> 
      <button onClick={()=>handleMoveUp(index)}>⬆️</button>
      <button onClick = {()=>handleMoveDown(index)}>⬇️</button>
    </div>
        )}
      </div>
    </div>
  )
}

export default ToDoList