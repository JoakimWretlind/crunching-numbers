import styled from 'styled-components';

export const FormSection = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  h1 {
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
  h3{
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.8rem;
      margin-top: 3rem;
      background: #fff;
      padding: 2rem;
      color: #2a6279;
      box-shadow: 0 0 .1rem rgba(8,11,14,.06), 
      0 .6rem .6rem -.1rem rgba(8,11,14,.1);
      border-radius: .8rem;
  }
`;

export const Container = styled.div`
    width: 100%;
    height: max-content;
    max-width: 90rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 5rem 0 2.5rem;
`;

export const FormGroup = styled.div``;

export const Label = styled.label`
    font-family: 'montserrat';
	  margin-bottom: 0.2rem;
    display: block;
    margin-right: 1rem;
    font-size: 1.8rem;
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
  margin-top: 5rem;
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.6rem 0;
`;

export const NumbersOutput = styled.div`
    margin-top: -3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ChartOutput = styled.div`
height: 100%;
width: 40rem;
padding: 3rem;
display: flex;
justify-content: center;
align-items:center;
`;

