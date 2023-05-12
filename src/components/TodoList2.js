import {useState} from 'react';

function TodoList2(){
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) => [toDo, ...currentArray])
        setTodo("");
    }
    
    return (
        <div>
            <h1>투두리스트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="입력하세요" onChange={onChange} value={toDo}></input>
                <button>등록</button>
            </form>
            <ul>
                {toDos.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default TodoList2;