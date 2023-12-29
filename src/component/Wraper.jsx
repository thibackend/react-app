import React, { useEffect, useState } from "react";
import { getLocalStore, setLocalStore } from "../localstore/localstore";
import AddNewForm from "./AddNewForm";
import Todo from "./Todo";


export default function Wraper() {
    const [localData, setLocalData] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [taskReadyToAdd, setTaskReadyToAdd] = useState('');
    useEffect(() => {
        handleGetLocalData()
        console.log("taskReadyToAdd:", taskReadyToAdd);
        console.log("this is local data:", localData)
        taskReadyToAdd !== '' ?
            handleSetLocalData
            : console.log("new task  null")
    }, [taskReadyToAdd])

    const handleGetLocalData = async () => {
        const getLocalData = await getLocalStore('task');
        getLocalData ?
            setLocalData(getLocalData)
            : setLocalData([])
    }

    const handleSetLocalData = async () => {
        localData.length > 0 ?
            await setLocalStore("task", [[...localData, taskReadyToAdd]])
            : await setLocalStore("task", taskReadyToAdd)
    }

    const handleSetNewTask = (taskName) => {
        setNewTask(taskName);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const taskName = formData.get('taskName');
        setTaskReadyToAdd({
            _id: `_${Number.parseInt(Math.random())}`,
            taskName
        });
    }
    return (
        <>
            <AddNewForm handleAdd={handleAdd} setNewTask={handleSetNewTask} newTask={newTask} />
            <Todo localData={localData} />
            <h1>{newTask}</h1>
        </>
    )
}