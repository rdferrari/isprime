import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { primeList } from "./isPrime";

import Header from "./components/Header";
import PrimeList from "./components/PrimeList";
import IsPrime from "./components/IsPrime";

const AppContainer = styled.div`
  background-color: ${(props) => props.inputBackgorundColor || "#ff00cd"};
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;

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
  text-align: center;
  margin-top: 100px;

  @media only screen and (min-width: 768px) {
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media only screen and (min-width: 768px) {
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  border: 0.5px solid #ff00cd;
  border-radius: 5px;
  color: #ff00cd;
  font-size: 18px;
  font-family: "Rajdhani-light", serif;
  margin-bottom: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const App = () => {
  const [data, setData] = useState("");
  const [primeListData, setPrimeListData] = useState("");
  const [showResult, setShowResult] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setData(data.is_prime);
    setPrimeListData(primeList(data.is_prime));
    setShowResult(true);
  };

  return (
    <AppContainer inputBackgorundColor={!showResult ? "#ff00cd" : "#9DF0FF"}>
      <AppContent>
        {showResult === false ? (
          <Header
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors.is_prime}
          />
        ) : (
          <ResultContainer>
            <IsPrime primeListData={primeListData} data={data} />
            <Button onClick={() => setShowResult(false)}>Close</Button>

            {data && (
              <div>
                <h2>List of prime numbers less or equal to {data}</h2>
                <ListContainer>
                  <PrimeList primeListData={primeListData} />
                </ListContainer>
              </div>
            )}
          </ResultContainer>
        )}
      </AppContent>
    </AppContainer>
  );
};

export default App;
