import styled from 'styled-components';

export const CoinApp = styled.div`
  min-height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1C262C;
  color: #fff;
  overflow-x: hidden;
`;

export const CoinInput = styled.input`
  margin-bottom: 1rem;
  padding: .8rem 0 .8rem 1.5rem;
  width: clamp(22rem, 25vw, 30rem);   
  font-size: clamp(1.3rem, 1.6vw, 1.8rem);
  border: none;
  outline: none;
  border-radius: .3rem;
  color: #1C262C;
  box-shadow: inset 0 -.18rem .26rem rgba(0,0,0,.4);
  
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: 'montserrat';
    font-size: clamp(1.1rem, 1.4vw, 1.6rem);  
    color: #BEC1C6;
  }
`;