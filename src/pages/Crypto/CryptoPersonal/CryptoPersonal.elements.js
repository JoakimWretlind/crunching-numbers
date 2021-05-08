import styled from 'styled-components';
import underConstruction from '../../../images/underConstruction.jpg'

export const CPersonal = styled.section`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(-20deg, #DCDDD8, #779897);
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 27vh;
  left: 50%;
  transform: translateX(-50%);
  background: url(${underConstruction}) center center;
  height: 50vh;
  width: 100%;
`;

