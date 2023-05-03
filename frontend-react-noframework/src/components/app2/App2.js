import React, {useState} from 'react';
import './App2.css';

const Todo = (props) => {
  console.log(props);
  return (
    <div style={{textDecoration: props.todo.completato ? 'line-through': ''}} className='todo'>
      {props.todo.name}
      <div>
        <button onClick={()=> props.completaTodo(props.index)}>completa</button>
      </div>
    </div>
  )
}

const Form = (props) => {
  const [value, setValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim === ''){
      alert('Bisogna scrivere !!')
      return
    }
    props.submit(value);
    setValue('');
  }
  const onChangeText = (e) => {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className='input' type='text' value={value} placeholder='aggiungi dati' onChange={onChangeText}></input>
    </form>
  )
}

const App2 = () => {

  const [dati, setDato] = useState([
    {name: "Mario", completato: false},
    {name: "Gianni", completato: false},
    {name: "Roberto", completato: false}
  ]);
  const addTodo = (dato) => {
    const newTodos = [...dati, {name: dato}]
    setDato(newTodos);
  }
  const completaTodo = (index) => {
    const newTodos = [...dati]
    newTodos[index].completato = true;
    setDato(newTodos);
  }

  return (
    <div className='App2'>
      <div className='todo-list'>
        {dati.map((item, index) => (
          <Todo key={index} todo={item} index={index} completaTodo={completaTodo} />
        ))}
        <Form submit={addTodo} />
      </div>
    </div>
  )

}

export default App2;