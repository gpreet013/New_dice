import styled from "styled-components";


export const Button = styled.button`
color:white;
width: 200px;
height: 55px;
padding:12px, 28px;
background: black;
border-radius:5px;
min-width: 200px;
border:none;
font-size: 20px;
border: 1px solid transparent;
gap: 7px;

cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color:black;
    transition: 0.3s background ease-in;
}
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;

color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color:white;
    
}
`;