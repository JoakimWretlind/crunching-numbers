import styled from 'styled-components';

export const FormSection = styled.div`
overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  @media screen and (min-width: 767px){
    margin-top: 0;
    padding: 3rem;
  }

  h1 {
    font-family: 'oswald';
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: clamp(2.8rem, 3.5vw, 6rem);
    letter-spacing: .15rem;
    
    span{
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: .05rem;
      -webkit-text-stroke-color: white;
    }
  }
  h3{
      font-size: clamp(1.4rem, 2.2vw, 2rem);
      width: 40%;
      min-width: 20rem;
      font-weight: 400;
      line-height: 2rem;
      margin: 3rem 1rem 0 1rem;
      background: #fff;
      padding: 1.4rem 1rem;
      color: #2a6279;
      border-radius: .8rem;      

      @media screen and (min-width: 767px){
        width: 100%;
        max-width: 35rem;
      }
    }
`;

export const Container = styled.div`
  width: 90%;
  height: max-content;
  max-width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem 0 1rem;

`;

export const FormGroup = styled.div`
    width: 90%;
    min-width: 14rem;
    margin: 2rem 1rem;

    @media screen and (min-width: 500px){
      margin: 2rem 1rem;
      width: 45%;
    }

    @media screen and (min-width: 850px){
      width: 22%;
    }
`;

export const Label = styled.label`
  font-family: 'montserrat';
  width: min-content;
	margin: 0 0 0.5rem 0;
  display: block;
  font-size: clamp(1.6rem, 1.8vw, 1.8rem);
  white-space: nowrap;
`;
export const Input = styled.input`
	padding: 0.5em;
  letter-spacing: .1rem;
	color: #272D39;
  font-family: 'roboto';
  font-size: 1.4rem;
	background: #f4f9fd;
  outline: none;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
  @media screen and (min-width: 500px){
    width: 100%;
  }
  @media screen and (min-width: 900px){
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 3rem;
  background: linear-gradient(#F55431, #BF0037);
  font-family: 'montserrat';
  color: #f1f1f1;
  font-size: 1.4rem;
  padding: 1rem 2.8rem;
  outline: none;
  border: none;
  border-radius: .3rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  cursor: pointer;
  box-shadow: inset 0 .1rem .2rem rgba(255,255,255,.9),
  0 .1rem .2rem rgba(29,29,29,.7);
  transition: .2s ease;

  &:hover{
    background: linear-gradient(#BF0037, #F55431);
    box-shadow: inset 0 .1rem .2rem rgba(29, 29, 29,.9),
    inset 0 -.05rem .1rem rgba(255,255,255,.8);
    color: #272D39;
    letter-spacing: .28rem;
  }
`;

export const Error = styled.h4`
  position: absolute;
  font-family: 'montserrat';
  font-weight: 400;
  letter-spacing: .1rem;
  color: red;
  font-size: 1.2rem;
`;

export const EmiCalculations = styled.div`
  background: linear-gradient(-25deg, #4C5661, #3d4953);
  border-radius: .7rem;
  margin: 5rem;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.6rem 3rem;

  @media screen and (min-width: 767px) {
    padding: 1.6rem 3rem;
    width: 90%;
    flex-direction: row;
  }
`;

export const NumbersOutput = styled.div`
  width: 100%;
  margin-top: -3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 767px){
    justify-content: space-between;
  }
`;

export const ChartOutput = styled.div`
  height: 100%;
  width: 30rem;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items:center;

  @media screen and (min-width: 400px){
    width: 40rem;
  }

  @media screen and (min-width: 550px){
    width: 50rem;
  }
`;

