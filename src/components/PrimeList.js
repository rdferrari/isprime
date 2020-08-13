import React from "react";
import styled from "styled-components";

const Number = styled.p`
  background-color: ${(props) => props.inputBackgorundColor || "#ffffff"};
  font-size: 10px;
  margin: 2px 2px;
  padding: 0 10px;
  width: 50px;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
    width: 80px;
  }
`;

const PrimeList = ({ primeListData }) => {
  return (
    primeListData &&
    primeListData.map((prime, index) => (
      <Number
        key={prime.prime_num}
        inputBackgorundColor={index % 2 === 0 ? "#ffffff" : "#D8D8D8"}
      >
        {prime.prime_num}
      </Number>
    ))
  );
};

export default PrimeList;
