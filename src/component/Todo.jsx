import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";

export default function Todo() {
    return (
        <div className="row task-item">
            <>
                <input type="input"
                    id={`check-task_${Math.random()}`}
                />
                <div className="item-action">
                    <i className="edit" ><MdDone /></i>
                    <i className="remove"><IoMdClose /></i>
                </div>
                <input type="checkbox" className='check-task' name="check-task" id={`check-task_${Math.random()}`} />
                <p className="item-name"></p>
                <div className="item-action">
                    <i className="edit" ><CiEdit /></i>
                    <i className="remove"><FaRegTrashCan /></i>
                </div>
                <hr />
            </>
        </div>
    )
}