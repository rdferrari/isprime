import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { primeList } from "./isPrime";

import Header from "./components/Header";
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

const ResultContainer = styled.div`
  background-color: #9df0ff;
  top: 0;
  width: 100%;

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
        <Header
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors.is_prime}
        />

        <ResultContainer>
          <IsPrime primeListData={primeListData} data={data} />

          {data && (
            <div>
              <h2>List of prime numbers less or equal to {data}</h2>
              <PrimeList primeListData={primeListData} />
            </div>
          )}
        </ResultContainer>
      </AppContent>
    </AppContainer>
  );
};

export default App;
