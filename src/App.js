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
  const [numTooBig, setNumTooBig] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const handleSubmiting = (data) => {
    onSubmit(data);
  };

  const onSubmit = (data) => {
    const dataInput = data.is_prime;
    if (dataInput < 100000) {
      setData(dataInput);
      setPrimeListData(primeList(dataInput));
    }
    return setNumTooBig("Enter a number less than 100 000");
  };

  const handleClose = () => {
    setData("");
    setPrimeListData("");
  };

  return (
    <AppContainer inputBackgorundColor={!primeListData ? "#361E68" : "#9DF0FF"}>
      <AppContent>
        {!data ? (
          <Header
            handleSubmit={handleSubmit(handleSubmiting)}
            register={register}
            errors={errors.is_prime}
            numTooBig={numTooBig}
          />
        ) : (
          <ResultContainer>
            <Button onClick={() => handleClose()}>Close</Button>
            <IsPrime primeListData={primeListData} data={data} />

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
