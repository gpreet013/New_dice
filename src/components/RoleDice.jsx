import { useState } from "react";
import styled from "styled-components"
const RoleDice = ({roleDice,currentDice}) => {
  return (
    <DiceContainer>
      
      <div className="dice"
      onClick={roleDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      <p>Click on the Dice roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
 margin-top: 48px;
 display: flex;
 justify-content: center;
 .dice{
  cursor: pointer;

 }

 p{
   font-size: 24px;
 }
  
`;