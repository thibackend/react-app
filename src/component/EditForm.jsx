import React from "react";

export default function EditForm() {
    return (
        <form name="edit-form" id={`form_id_${Math.random()}`}>
            <input type="text" name="taskName" id={`input_id_${Math.random()}`} />
        </form>
    )
}