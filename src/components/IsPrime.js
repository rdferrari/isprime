import React from "react";
import styled from "styled-components";

const IsPrimeResult = styled.p`
  margin-top: 40px;
  font-size: 40px;
  font-family: "Rajdhani-bold", serif;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

const IsPrime = ({ primeListData, data }) => {
  let primeNumberData =
    primeListData && primeListData[primeListData.length - 1].prime_num;

  if (data == primeNumberData) {
    return data && <IsPrimeResult>{`${data} is prime`}</IsPrimeResult>;
  }
  return data && <IsPrimeResult>{`${data} isn´t prime`}</IsPrimeResult>;
};

export default IsPrime;
