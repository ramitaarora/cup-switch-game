import Header from './components/Header'
import { useState } from 'react'

export default function App() {
  let counter = 0;

  const getRandomNum = () => {
    
    let randomNum = Math.floor(Math.random() * 3 + 1);
    return randomNum;
  };

  const pickRandCups = () => {
    let firstCup = getRandomNum();
    let secondCup = getRandomNum();
    let thirdCup = getRandomNum();

    // console.log(firstCup, secondCup, thirdCup);
    console.log(counter)
  
    if (firstCup !== secondCup && firstCup !== thirdCup && counter < 10) {
      let cupOne = document.getElementById(`Cup${firstCup}`);
      let cupTwo = document.getElementById(`Cup${secondCup}`);
      let cupThree = document.getElementById(`Cup${thirdCup}`);
  
      let cupOneClass = cupOne.getAttribute("class");
      let cupTwoClass = cupTwo.getAttribute("class");
      // let cupThreeClass = cupThree.getAttribute("class");

      setTimeout(() => {
        cupOne.setAttribute("Class", cupTwoClass);
        cupTwo.setAttribute("Class", cupOneClass);
        // cupThree.setAttribute('class', cupThreeClass)
      }, 5000)
    
      // setCounter((pre) => pre + 1);
      counter += 1;

      if (counter < 10) {
        pickRandCups();
      }
      if (counter === 10) {
        counter = 0;
        return;
      }
    } 
    
    else {
      pickRandCups();
    }
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
      <button onClick={pickRandCups}>Go</button>
    </div>
  )
}