import React, { useContext } from "react";
import ChartForPage from "../ListedBooks/ChartForPage/ChartForPage";
import { BooksContext } from "../../Context/BookContext/BookProvider";
import NoChartAvailable from "../ListedBooks/ChartForPage/NoChartAvailable";

const PageToRead = () => {
  const { storeWishList } = useContext(BooksContext);
  return (
    <div className="bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)]">
      {storeWishList.length > 0 ? (
        <ChartForPage></ChartForPage>
      ) : (
        <NoChartAvailable></NoChartAvailable>
      )}
    </div>
  );
};

export default PageToRead;
