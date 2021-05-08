import styled from 'styled-components';

export const Header = styled.h1`
    text-align: center;
    margin-top: 3rem;
    font-family: 'oswald';
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: 4.5rem;
    letter-spacing: .15rem;
    span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: #f1f1f1;
    }
`;

export const SubHeader = styled.h1`
  h1 {
    margin: 7rem 0;
    text-align: center;
    font-family: 'oswald';
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: clamp(2.8rem, 3.5vw, 6rem);
    letter-spacing: .15rem;

    @media screen and (min-width: 767px){
          margin:5rem 0 3rem;
      }

    span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: white;
    }
  }
`;
