import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    to bottom,
    var( --secondary-color),
    var( --primary-color)
  );
  height: 100vh;
`;

export const Container = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-family: "Flamenco", sans-serif;
  margin: 20px;
  color: var( --primary-color);
  text-align: center;
  font-size: 50px;
  animation: changeColor 7s infinite;

  @keyframes changeColor {
    0% {
      color: var( --primary-color);
    }
    50% {
      color: var( --secondary-color);
    }
    100% {
      color: var( --primary-color)
    }
  }
`;

export const Card = styled.div`
  margin: 0;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.6);
  background-color: white;
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginField = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

export const IconPortraitFrame = styled.div`
  width: 32px;
  height: 32px;
  background-color: var( --primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconPortrait = styled.img`
  width: 16px;
  height: 16px;
`;

export const StyledInput = styled.input`
  background-color: rgba(123, 123, 233, 0.5);
  font-family: "Open Sans", sans-serif;
  border: none;
  padding: 0 5px;
  width: 100%;
  color: #fff;
  &::placeholder {
    color: #eee;
  }
  &:focus {
    outline: none;
    background-color: var( --secondary-color);
  }
`;

export const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: var( --primary-color);
  color: #fff;
  &:hover {
    background-color: var( --secondary-color);
    cursor: pointer;
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const Header = styled.header`
  color: var( --secondary-color);
  background-color: var( --primary-color);
`

export const Footer = styled.footer`
  color: var( --secondary-color);
  background-color: var( --primary-color);
`