import React from 'react';

function saluto() {
    const salutare = ()=>{
        console.log('WOwowowowowo !!!!!!!!!')
      }
    return(
        <div>   
            <button onClick={salutare}>cliccare</button>
        </div>
    )
}

export default saluto;