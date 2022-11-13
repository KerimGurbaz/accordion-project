import React, { useState } from 'react';
import data from './data';

import SingleQuestion from './Question';


function App() {
  const[myQuestions, setMyQuestions] = useState(data)
  console.log(myQuestions)

  return (
   <div className='container'>
      <h3>Questions and Answers About Login</h3>
      <section className="info">
        {myQuestions.map((question)=>{
          return(
           <div key={question.id}>
            <SingleQuestion key={question.id} {...question}/>
     
           </div>
            
          
          )
        })}
      </section>
   </div>  


  
  
  
  );
}

export default App;
