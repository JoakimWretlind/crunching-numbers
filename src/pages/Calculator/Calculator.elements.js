import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Calc = styled.section`
  overflow: hidden;
  background: linear-gradient(120deg, ${props => props.theme.black}, ${props => props.theme.gray});
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const CalcSettings = styled(Link)`
  height: 4rem;
  width: 100%;
  background: #333;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  `;

export const CalcIcon = styled.div`
  margin-right: 1rem;
  display: flex;
  font-size: 2.6rem;
  color: #fff;
  cursor: pointer;
`;

export const CalcWrapper = styled.div`
    background: linear-gradient(160deg, ${props => props.theme.pink}, ${props => props.theme.blue});
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    align-items: center;    
    border-radius: .3rem;
    box-shadow: 0 .2rem .8rem rgba(255,255,255,.1),
    0 -.2rem .8rem rgba(255,255,255,.1);

    @media screen and (min-width: 415px){
      height: min-content;
      justify-content: center;
      max-width: 28rem;
    }
`;

export const CalcInputs = styled.div`
    background: ${props => props.theme.transparent};
    overflow: hidden;
    width: 100%;  
    height: 5em;
    min-height: 2em;    
    padding: 0 2rem;
    margin-top: 1rem;    
    display: flex;
    justify-content: flex-end;
    align-items: center;   
    font-size: 1.8em;
    letter-spacing: ${props => props.theme.letterspacingS};
    color: ${props => props.theme.white};
    cursor: pointer;

    @media screen and (min-width: 415px){
      height: 0;
    }
`;

export const CalcResult = styled.div`
    background: ${props => props.theme.transparent};
    overflow-x: hidden;
    width: 100%;
    min-height: 2em;
    padding: .5rem 2rem .5rem .5rem;    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: clamp(4rem, 6vw, 6rem);
    letter-spacing: ${props => props.theme.letterspacingS};
    color: ${props => props.theme.white};  
`;


export const ButtonGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CalcButton = styled.button`
  background: ${props => props.theme.transparent};
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  outline: none;
  border: none;
  font-size: 1.6em;
  border-top: .1rem solid ${props => props.theme.white};
  border-right: .1rem solid ${props => props.theme.white};
    &:nth-child(4n){
      border-right: none;
    }
  color: ${props => props.theme.white};
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.gray};
  }
  &.equals {
    background: ${props => props.theme.blueE}
  }
`;