import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const[score,setScore] = useState(0);
  const[selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error ,setError]=useState("");
  const[showRules, setShowRules]=useState(false);

   //function to genrate the random number
   const generateRandomNumber =(min,max)=>{
    // console.log(Math.floor(Math.random() *(max-min)+min));
    return Math.floor(Math.random() *(max-min)+min);
  }

  // set the dice image according to the generated number random number come 5 so on scrren we will show dice with 5 dots
  const roleDice =() =>{

    // throw error when numbers is not selected
    if(!selectedNumber) {
         setError("You have not selected any number");
          return;
    }
   
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice(prev => randomNumber);

    //check
    if(selectedNumber === randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=> prev-2);  
    }
    //selct no --- roll dice---after roll dice--number unselect by using this below function      
     setSelectedNumber(undefined);

  };

  // logic to reset the scores
  const resetScore = ()=>{
    setScore(0);
  };
  

  


  return (
    <MainContainer>
       <div className="top_section">
       <TotalScore score={score}/>
       <NumberSelector
        error={error}
        setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       />
       </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice} />

       <div className="btns">
        <OutlineButton
        onClick={  resetScore}>Reset</OutlineButton>
        <Button
        //toggle funtion to hide and show the games rules
        onClick={() => setShowRules(prev=>!prev)}>
          {
         showRules ? "Hide" : "Show"
          }
            Rules </Button>
       </div>

       {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;


const MainContainer = styled.div`
   padding-top:70px;
   .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
   }

   .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction:column;
    justify-content: center;

    align-items: center;
    gap: 10px;

 

}

   
`;