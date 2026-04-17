import { useContext, useEffect, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = storeWishList.map((wish) => ({
    name: wish.bookName,
    Pages: wish.totalPages,
  }));

  if (storeWishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 text-center p-10">
        <p className="text-white text-xl font-semibold mb-2">
          No chart available
        </p>
        <p className="text-gray-400 text-sm">
          Add books to your wishlist to see the chart!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: isMobile ? 60 : 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#10b981", fontSize: 11 }}
            angle={isMobile ? -35 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            interval={0}
            height={isMobile ? 60 : 30}
          />
          <YAxis width={40} tick={{ fill: "#a89bc2", fontSize: 11 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Pages"
            fill="#10b981"
            stroke="#10b981"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartForPage;
