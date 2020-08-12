import React from "react";

const IsPrime = ({ primeListData, data }) => {
  console.log(
    primeListData && primeListData[primeListData.length - 1].prime_num
  );

  let primeNumberData =
    primeListData && primeListData[primeListData.length - 1].prime_num;

  if (data == primeNumberData) {
    return data && <p>{`${data} is prime`}</p>;
  }
  return data && <p>{`${data} isn´t prime`}</p>;
};

export default IsPrime;
