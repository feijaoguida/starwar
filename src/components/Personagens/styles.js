import styled from "styled-components";

export const Card = styled.div`
    
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    padding: 5px;
    margin: 10px auto;
`;

export const Title = styled.h1` 
    font-size: 2em;
    font-family: sans-serif;
    color: ${props => props.eyecolor || "black"};
`;
