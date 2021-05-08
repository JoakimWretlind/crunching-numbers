import styled from 'styled-components'
import backgroundImg from '../../images/background-2.png'

export const HeroContainer = styled.section`
  overflow-x: hidden;
  height: 70vh;
  width: 100vw;
  background: url(${backgroundImg})center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const Header = styled.h1`
  margin-top: 22vh;
  font-size: 5.5rem;
  color: #f1f1f1;
  text-align: center;
  font-family: 'oswald';
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: .3rem;

  .outline{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: .08rem;
  -webkit-text-stroke-color: white;
  }
`;