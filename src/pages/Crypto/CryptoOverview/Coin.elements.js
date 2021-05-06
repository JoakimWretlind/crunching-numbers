import styled from 'styled-components';

export const CoinRow = styled.div` 
  padding: 0 3rem 1rem;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-bottom: .1rem solid #d7d7d7;
@media screen and (min-width: 767px){
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 8rem;  
  margin-top: 0;
}
`;

export const CoinItem = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;

  img {
    height: clamp(2.2rem, 2vw, 3rem);
    width: clamp(2.2rem, 2vw, 3rem);    
    margin-right: 1rem;
    margin-left: 0;
  }

  h1 {
      font-size: clamp(1.5rem, 1.8vw, 1.6rem);
      letter-spacing: .1rem;
      width: 100%;
      margin-right: 2rem;

      @media screen and (min-width: 767px){
        width: 12rem;
      }
      @media screen and (min-width: 997px){
        width: 17rem;
      }
  }  
`;

export const CoinSymbol = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: .1rem;
`;

export const CoinData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  line-height: 2;
  font-family: 'montserrat';
  @media screen and (min-width: 767px){
    margin: 0 3rem;
  }
`;

export const CoinPrice = styled.p`
`;

export const CoinVolume = styled.p`
`;

export const CoinRed = styled.p`
 color: #f00606;
`;

export const CoinGreen = styled.p`
  color: #11d811;
`;

export const CoinMarketcap = styled.p`
  text-align: left;
  font-size: 1.2rem;
  width: 100%;
  color: #bdc0c4;
  
  
`;

