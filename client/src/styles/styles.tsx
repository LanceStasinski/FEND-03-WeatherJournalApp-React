import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    to bottom,
    var(--secondary-color),
    var(--primary-color)
  );
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 5%;

  @media (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }
`;

export const Title = styled.h1`
  font-family: "Flamenco", sans-serif;
  margin: 20px;
  color: var(--primary-color);
  text-align: center;
  font-size: 50px;
  animation: changeColor 7s infinite;

  @keyframes changeColor {
    0% {
      color: var(--primary-color);
    }
    50% {
      color: var(--secondary-color);
    }
    100% {
      color: var(--primary-color);
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
  background-color: var(--primary-color);
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
    background-color: var(--secondary-color);
  }
`;

export const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: var(--primary-color);
  color: #fff;
  &:hover {
    animation: changeBtnColor 300ms linear forwards;
    cursor: pointer;
  }

  @keyframes changeBtnColor {
    from {
      background-color: var(--primary-color);
    }
    to {
      background-color: var(--secondary-color);
    }
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

export const ModalHeading = styled.h2`
  color: var(--secondary-color);
  margin: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const HR = styled.hr`
  border-top: 1pt solid var(--secondary-color);
  border-bottom: none;
  border-left: none;
  border-right: none;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const User = styled.div`
  font-family: "Flamenco", sans-serif;
  color: #fff;
  font-size: 32px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const SettingIcon = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    animation: spin 2.5s infinite linear;
    cursor: pointer;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CloudIcon = styled.img`
  height: 100px;
  width: 100px;

  &:hover {
    animation: float 2s infinite ease-in-out;
    cursor: pointer;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const EntryWrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  overflow: hidden;
`;

export const Subject = styled.h2`
  color: #444;
  margin: 0;
  font-family: "Flamenco", sans-serif;
`;

export const Date = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #666;
  margin: 0;
`;

export const TextBox = styled.div`
  overflow-y: scroll;
  padding: 0 2rem;
  margin-top: 1rem;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 5px;
  }
`;

export const EntryText = styled.p`
  color: #666;
  font-family: "Open Sans", sans-serif;
  margin: 0;
`;

export const WeatherWrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  background-color: var(--fourth-color);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const WeatherUI = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const WeatherSection = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherIcon = styled.img`
  margin-top: 1rem;
  width: 125px;
  height: 125px;
`;

export const Info = styled.p`
  font-family: "Open Sans Medium", sans-serif;
  margin: 0;
  color: #444;
`;
