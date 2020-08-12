import React from "react";

const PrimeList = ({ primeListData }) => {
  return (
    primeListData &&
    primeListData.map((prime) => (
      <div key={prime.prime_num}>
        <p>{prime.prime_num}</p>
      </div>
    ))
  );
};

export default PrimeList;
