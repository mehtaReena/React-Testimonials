import { useState } from 'react';
import './App.css';
import Slide from './Slide';

function App() {
  let[index , setIndex]= useState(0);
   function rightClick(){
     index<3 ? setIndex(0) : setIndex(index+1) ;
     
   }

   function leftClick(){
    index >0 ? setIndex(index-1) : setIndex(4) ;
     
  }



  return (
    <div className='container' >
      <div className='slide-container'>
      <Slide id={index}>  

      </Slide>
      <div className='sliderbutton'>
      
       <button className ='button'  onClick={rightClick}> &laquo; </button> 
       <button className ='button'  onClick={leftClick}> &raquo; </button>  
   
      </div>
      </div>
    </div>
  );
}

export default App;

