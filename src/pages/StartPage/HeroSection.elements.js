import styled from 'styled-components'
import backgroundImg from '../../images/background-2.png'

export const HeroContainer = styled.section`
  height: 100%100vh;
  min-height: 100vh;
  width: 100vw;
  background: url(${backgroundImg})center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const Header = styled.h1`
  margin-top: 32vh;
  font-size: 5.5rem;
  color: #f1f1f1;
  text-align: center;
  font-family: 'oswald';
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: .3rem;

  .outline{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: white;
  }
`;