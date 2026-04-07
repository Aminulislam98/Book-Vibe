import { useContext } from "react";
import { BooksContext } from "../../../Context/BookContext/BookProvider";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartForPage = () => {
  const { storeWishList } = useContext(BooksContext);
  const data = storeWishList.map((wish) => ({
    name: wish.bookName,
    Pages: wish.totalPages,
  }));
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      className="max-w-7xl w-full mx-auto py-10 text-white"
    >
      <AreaChart
        className=""
        style={{
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#10b981" }} />
        <YAxis width="auto" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Pages"
          fill="#10b981"
          stroke="#10b981"
          fillOpacity={0.4}
        />
        <Legend></Legend>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartForPage;
