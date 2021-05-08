// Image.js
import React from 'react';
import styled from 'styled-components';

export const CardsWrapper = styled.div`
  overflow-x: hidden;
  background: linear-gradient(105deg, #2B2F38, #0B3F54);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 110rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center ;
  align-items: center;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  background: #f1f1f1;
  position: relative;
  width: 45%;
  height: 30rem;
  margin: 2rem;
  cursor: pointer;
  transition: 0.5s all ease-in;
  border-radius: 1rem;  
`;

const ImgHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
 `;

const ImgText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  margin-right: 20px; 
`;

const ImgMeta = styled.div`
 // display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 20%;
  left: 0;
 
  ${ImgContainer}:hover & {
    display: flex;
  }
`;

const Img = styled.img`
  cursor: pointer;
  height: 80%;
  width: 100%;
  object-fit: cover;
`;

function Image({ image }) {
  return (
    <ImgContainer>
      <Img src={image.source} />
      <ImgMeta>
        <ImgHeader>
          {image.header}
        </ImgHeader>
      </ImgMeta>
      <ImgText>
        {image.text}
      </ImgText>
    </ImgContainer>
  );
}

export default Image;