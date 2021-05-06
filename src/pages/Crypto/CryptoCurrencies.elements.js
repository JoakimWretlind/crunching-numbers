import styled from 'styled-components';

export const CryptoContainer = styled.section`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: #4C5661;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 3rem;
    font-family: 'oswald';
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: .15rem;

    span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: white;
    }
  }
`;

export const CryptoCard = styled.div`
  border: 1px solid #f1f1f1;
  margin-top: 3rem;
  height: 33vh;
  width: 100%;
  max-width: 55rem;
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
`;
