import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    to bottom,
    rgb(238, 144, 56),
    rgb(123, 123, 233)
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
  color: rgb(123, 123, 233);
  text-align: center;
  font-size: 50px;
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
  background-color: rgb(123, 123, 233);
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
    background-color: rgb(238, 144, 56);
  }
`;

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: rgb(123, 123, 233);
  color: #FFF;
  &:hover {
    background-color: rgb(238, 144, 56);
    cursor: pointer;
  }
`;
