import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodoList3() {
    const [toDo, setTodo] = useState("");
    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setTodo(e.target.value);
        console.log('입력받음');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === "") {
            return;
        }
        dispatch({
            type: 'ADD', payload: toDo
        });
        setTodo("");
        console.log(toDo);
    };

    return (
        <div>
            <h1>투두리스트</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="입력하세요"
                    onChange={onChange}
                    value={toDo}
                />
                <button>등록</button>
            </form>
            <ul>
                {toDos.map((item, index) => ( // toDos 배열의 값 출력
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList3;