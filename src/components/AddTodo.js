import React, {useState} from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }
    return (
        <form className="input-field" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add todo..."
                onChange={e=>setValue(e.target.value)} />
            <label>Todo name</label>
        </form>
    )
}
