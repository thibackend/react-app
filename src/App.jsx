
import './App.css'
import { MdOutlineNightsStay } from "react-icons/md";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { setLocalStore, getLocalStore } from './localstore/localstore';
import { useEffect, useState } from 'react';
function App() {
  const [newTask, setNewTask] = useState('');
  const [localData, setLocalData] = useState([]);

  const [dataUpdate, setDataUpdate] = useState();
  const [taskNameUpdate, setTaskNameUpdate] = useState(dataUpdate ? dataUpdate.taskName : "null");

  useEffect(() => {
    // Load data from local storage when the component mounts
    setLocalData(getLocalStore('task') || []);
    console.log(localData);
  }, []);

  const handleAdd = () => {
    const newToLS = {
      _id: `_id${Math.random()}`,
      taskName: newTask,
    };
    if (newTask.toString().length > 0) {
      const updatedData = [...localData, newToLS];
      setLocalData(updatedData);
      setLocalStore('task', updatedData);
      setNewTask(''); // Clear input field after adding a task
    }else console.log("There is no data to add new!")
  };
  const handleDelete = (_id) => {
    const updatedData = localData.filter(item => item._id !== _id);
    setLocalData(updatedData);
    setLocalStore('task', updatedData);
  }


  const handleDone = (e) => {
    console.log(e);
    console.log("handle done click");
    setDataUpdate(null);
  }
  const handleCancel = (e) => {
    console.log("handle cancel click");
    console.log(e);
    setDataUpdate(null);
  }


  const ItemTask = ({ data, index }) => (
    <>
      <div className="row task-item">
        {
          dataUpdate && dataUpdate._id === data._id ?
            (
              <>
                <input type="input"
                  id={`check-task_${Math.random()}`}
                />
                <div className="item-action">
                  <i className="edit" onClick={handleDone}><MdDone /></i>
                  <i className="remove" onClick={handleCancel}><IoMdClose /></i>
                </div>
              </>
            )
            :
            (
              <>
                <input type="checkbox" className='check-task' name="check-task" id={`check-task_${Math.random()}`} />
                <p className="item-name">{data ? data.taskName : null}</p>
                <div className="item-action">
                  <i className="edit" onClick={() => handleUpdate(data)}><CiEdit /></i>
                  <i className="remove" onClick={() => handleDelete(data._id)}><FaRegTrashCan /></i>
                </div>
                <hr />
              </>
            )
        }
      </div>

    </>
  )
  return (
    <div className='container'>
      <div className='row title_toggle'>
        <h1 className='title'> MY TASK</h1>
        <div className='toggle'><MdOutlineNightsStay /></div>
      </div>

      <div className='add_new'>
        <div className='add_new_icon'><CiCirclePlus className='plus-icon' /></div>
        <input type="text" name="task"
          id={`_IdInput${Math.random()}`}
          className='enter-task'
          placeholder='Add a new task...!'
          onChange={(e) => {
            setNewTask(e.target.value)
          }}
          value={newTask}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <input type="button" value="ADD" className='btn-add' onClick={handleAdd} />
      </div>

      <div className='manage-task'>
        <div className="task_title">
          <div className="task-left">{localData ? localData.length : 0} tasks left</div>
          <a className="clear-all-tasks">Clear all tasks</a>
        </div>
        <hr />
        {
          localData && localData.length > 0 ?
            localData.map((element, index) =>
              <ItemTask key={element._id} data={element} index={index} />
            )
            : <h3 style={{ lineHeight: "600px" }}>No thing to do there!</h3>
        }
      </div>
    </div>
  )

}


export default App;



// const handleAdd = () => {
//   const newToLS = {
//     _id: `_id${Math.random()}`,
//     taskName: newTask
//   };
//   console.log("new task:", newTask);
//   console.log("new data to local :", newToLS);
//   setLocalData(prevLocalData => {
//     const updatedData = [...prevLocalData, newToLS];
//     console.log("localData", updatedData); // Updated state
//     // setLocalStore('task', updatedData); // Uncomment this if you want to update local storage
//     return updatedData;
//   });
// }
// const handleDelete = (_id) => {
//   const updatedData = localData.filter(item => item._id !== _id);
//   setLocalData(updatedData);
//   setLocalStore('task', updatedData);
// }
// useEffect(() => {
//   // if (newDataToLC && newDataToLC.taskName != '') {
//   //   localData.push(newDataToLC);
//   //   setLocalStore('task', localData);
//   //   setNewDataToLC(null);
//   // }
//   // if (localData && localData.length != 0 && localData.taskName != '') {
//   //   console.log("localData:", localData)
//   // }
//   if (getLocalStore('task') && getLocalStore('task').length > 0) {
//     setLocalData(getLocalStore('task'));
//   }
// }, [])