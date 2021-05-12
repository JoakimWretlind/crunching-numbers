// Image.js
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const CardsSection = styled.div`
  width: 99.1vw;
  height: min-content;
  margin: -3% 0 0 0;
  padding: 0 0 3rem 0;
  background: #333;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center ;
  align-items: center;
`;

const Card = styled.div`
  overflow: hidden;
  background: #f1f1f1;
  position: relative;
  width: 90%;
  height: 20rem;
  margin: 2rem auto;
  cursor: pointer;
  transition: 0.5s all ease-in;
  border-radius: 1rem;  

  @media screen and (min-width: 600px) {
    width: 45%;
    height: 30rem;
  }

  &:hover{
    img{
      transform: scale(1.1);
    }
    h5{
      font-size: 3rem;
      transition: 0.5s all ease-in;
    }
   section{
     transition: 0.5s all ease-in;
      background-color: rgba(0, 0, 0, 0.5);
       bottom: 25%;
    }
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 75%;
  width: 100%;
`

const ImgHeader = styled.h5`
  font-family: 'lato';
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  transition: 0.5s all ease-in;
 `;

const ImgText = styled.p`
  margin: 1rem;
  font-size: clamp(1.3rem, 1.5vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f00;
`;

const ImgOverlay = styled.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 25%;
  left: 0;
`;

const Img = styled.img`
  height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all .3s ease-out;
`;


const Image = ({ image }) => {
  return (
    <Card>
      <Link to={image.path}>
        <ImageWrapper>
          <Img src={image.source} />
        </ImageWrapper>
        <ImgOverlay>
          <ImgHeader>
            {image.header}
          </ImgHeader>
        </ImgOverlay>
        <ImgText>
          {image.text}
        </ImgText>
      </Link>
    </Card>
  );
}

export default Image;