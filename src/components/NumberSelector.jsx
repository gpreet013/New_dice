
import styled from "styled-components"
const NumberSelector = (
  {setError,error,selectedNumber,setSelectedNumber}
) => {
    const arraynum=[1,2,3,4,5,6];
    
    const numberSelectorHandler=(value)=>{
      setSelectedNumber(value);
      setError("");
    }
    
  return (
    <NumberSelectorContainer>

      <p>{error}</p>
      <div className="flex"> 
      {
        arraynum.map((value ,i)=>(
            <Box
            isSelected={value == selectedNumber}
             key={i} onClick={ () => numberSelectorHandler(value) }>{value}</Box>
        ) ) }


        {/* // to short this work we will use arraynum and loop;
        <Box> 1</Box>
        <Box> 2</Box>
        <Box> 3</Box>
        <Box> 4</Box>
        <Box> 5</Box>
        <Box> 6</Box>
         */}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>

  )
};

export default NumberSelector;

const NumberSelectorContainer = styled.div `
 display: flex;
 flex-direction: column;
 align-items: end;


 .flex{
    display: flex;
    gap:24px;

 }
p{
    font-size: 24px;
    font-weight: 700;

}
.error{
  color: red;
}
    
`;

const Box = styled.div`
height :72px;
width:72px;
border: 1px solid black;
display : grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props) => props.isSelected ? "black": "white"};// click and that clicked box  become blacked
color: ${(props) => (!props.isSelected ? "black": "white")};

`;