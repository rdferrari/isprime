import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { primeList } from "./isPrime";

import PrimeList from "./components/PrimeList";
import IsPrime from "./components/IsPrime";

const AppContainer = styled.div`
  background-color: #ff00cd;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
  }
`;

const AppContent = styled.div`
  margin: 0 auto;
  width: 80%;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const FormContainer = styled.div`
  text-align: center;
  padding: 50px 0;

  @media only screen and (min-width: 768px) {
  }
`;

const App = () => {
  const [data, setData] = useState("");
  const [primeListData, setPrimeListData] = useState("");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setData(data.is_prime);
    setPrimeListData(primeList(data.is_prime));
  };

  return (
    <AppContainer>
      <AppContent>
        <FormContainer>
          <h1>Sieve of Eratosthenes React Hack</h1>
          <p>by Rodrigo Ferrari</p>
          <p>
            Pick a number less or equal to 1 000 000 to check if it is a prime
            number and explore all the prime numbers less than the number of
            your choice.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              name="is_prime"
              ref={register({ required: true })}
            />
            <input type="submit" />
            {errors.is_prime && <p>*Enter a number</p>}
          </form>
        </FormContainer>

        <IsPrime primeListData={primeListData} data={data} />

        {data && (
          <div>
            <h2>List of prime numbers less or equal to {data}</h2>
            <PrimeList primeListData={primeListData} />
          </div>
        )}
      </AppContent>
    </AppContainer>
  );
};

export default App;
