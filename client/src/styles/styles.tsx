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
  margin-left: 5%;

  @media (min-width: 990px) {
    width: 70%;
    margin-left: 15%;
  }
`;

export const Title = styled.h1`
  font-family: "Flamenco", sans-serif;
  margin: 0;
  color: white;
  text-align: center;
  padding: 10vh 0;
  font-size: 50px;
`;

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.7);
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
