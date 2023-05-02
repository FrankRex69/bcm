import React, {useState} from 'react';
import Post from './FacebookPost';

// PROPS



// JSX
function App() {
  const [annunci, setAnnunci] = useState([
    {author: "Checco", description: "sto lavorando"},
    {author: "Silvia", description: "Raccoglie la Vitabbia"},
    {author: "Betta", description: "sta studiando"}
  ]);
  
  return(
  <div className='Container'>
   {annunci.map((chiave, index) => (
    <Post key={index} author={chiave.author} description={chiave.description}/>
   ))}
  </div>
)

}

export default App;
