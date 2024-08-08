
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
          How to play dice game  
        </h2>
        <div clasName="text">
        <p>After click on the dice if selected number is equal to the diece number you will get the same number point as dice{" "}</p>
        <p>If you get the wrong guess then 2 points will be deducted</p>

        </div>
        
        </RulesContainer>
  )
};

export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #FBF1F1;
padding: 20px;
margin-top:40px;
border-radius: 10px;
h2{
    font: 24px;
}
.text{
    margin-top: 24px;
}
`;