import React from "react";
import { useParams } from "react-router";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const booksData = use(booksPromise);
  const params = useParams();
  console.log(params);
  return <div>Hi aminul!</div>;
};

export default BookDetails;
