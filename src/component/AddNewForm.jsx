import React from "react";
import { CiCirclePlus, CiEdit } from "react-icons/ci";

export default function AddNewForm({ handleAdd, setNewTask, newTask }) {
    return (
        <form className='add_new' onSubmit={handleAdd}>
            <div className='add_new_icon'><CiCirclePlus className='plus-icon' /></div>
            <input type="text" name="taskName"
                id={`_IdInput${Math.random()}`}
                className='enter-task'
                placeholder='Add a new task...!'
                onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            // onKeyDown={(e) => e.key === 'Enter' && handleAdd}
            />
            <input type="submit" value="ADD" className='btn-add' />
        </form>
    )
}