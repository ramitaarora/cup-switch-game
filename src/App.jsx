import Header from './components/Header'
import { useState } from 'react'

export default function App() {
  let cupArray = ["Cup1", "Cup2", "Cup3"]
  let newArray = [];
  const numArray = [0, 1, 2]
  let counter = 0;

  const getNum = () => {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
  };

  const swapCups = () => {
    let num1 = getNum();
    let num2 = getNum();

    if (num1 === num2) {
      // if the two numbers match, they can't swap; run program again
      swapCups()
    } 
    
    else {
      // get the missing position and assign it to num3
      let num3 = 0;
      for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] !== num1 && numArray[i] !== num2) {
          num3 === numArray[i];
        }
      }
      setTimeout(() => {
        console.log("num1", num1, "num2", num2, "num3", num3)
        newCups(num1, num2, num3)
      }, 2000)
    }
  }

  function newCups(cup1, cup2, cup3) {
    // swap cup positions in the new array
    newArray[cup1] = cupArray[cup2];
    newArray[cup2] = cupArray[cup1];
    newArray[cup3] = cupArray[cup3];
    console.log("cupArray", cupArray);
    console.log("newArray", newArray);
  }

  return (
    <div>
      <Header />
      <div id="cups">
        <div id="Cup1" className="one">
          <img src="./cup.png" alt="cup" width="200px" />
        </div>
        <div id="Cup2" className="two">
          <img src="./cup.png" alt="cup" width="200px" />
        </div>
        <div id="Cup3" className="three">
          <img src="./cup.png" alt="cup" width="200px" />
        </div>
        
      </div> 
      <button onClick={swapCups}>Go</button>
    </div>
  )
}