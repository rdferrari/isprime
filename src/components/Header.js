import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  padding: 50px 0;

  @media only screen and (min-width: 768px) {
  }
`;

const By = styled.p`
  color: #ffffff;
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Intro = styled.p`
  color: #f0f0f0;
  font-size: 18px;
  font-family: "Rajdhani-light", serif;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 60px;
  }
`;

const Input = styled.input`
  background-color: #ff00cd;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  font-family: "Rajdhani-light", serif;
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 250px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const Submit = styled.input`
  background-color: #9df0ff;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  color: #ff00cd;
  font-size: 18px;
  font-family: "Rajdhani-medium", serif;
  padding: 5px 10px;
  width: 270px;

  &:hover {
    background-color: #ff00cd;
    color: #ffffff; // <Thing> when hovered
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const FormContainer = styled.form`
  @media only screen and (min-width: 768px) {
  }
`;

const Header = ({ handleSubmit, register, errors }) => {
  return (
    <HeaderContainer>
      <h1>Sieve of Eratosthenes React Hack</h1>
      <By>by Rodrigo Ferrari</By>
      <Intro>
        Pick a number less or equal to 1 000 000 to check if it is a prime
        number and explore all the prime numbers less than the number of your
        choice.
      </Intro>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="number"
          name="is_prime"
          ref={register({ required: true })}
          placeholder="Enter a number"
        />
        <Submit type="submit" />
        {errors && <p>*Enter a number</p>}
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
