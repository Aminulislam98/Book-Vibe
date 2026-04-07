import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListedBooks from "../../Components/ListedBooks/ReadListedBooks";
import WhishListedBooks from "../../Components/ListedBooks/WhishListedBooks";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ListedBooks = () => {
  const goBack = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          goBack(-1);
        }}
        className="px-4 lg:px-0  flex items-center  gap-2 text-black hover:text-[#b794f4] transition-colors duration-200 text-base font-medium  mx-auto w-full pb-5 cursor-pointer max-w-5xl pt-5"
      >
        <FaArrowLeft className="text-base" />
        Back
      </button>
      <section className="px-4 min-h-[70vh] text-black bg-white">
        <Tabs className="max-w-5xl mx-auto">
          <TabList className="flex gap-4 border-b-2 border-gray-300">
            <Tab
              className="px-4 py-2 cursor-pointer text-black/80"
              selectedClassName="text-black font-semibold border-b-3 border-black"
            >
              Read Listed Books
            </Tab>

            <Tab
              className="px-4 py-2 cursor-pointer text-black"
              selectedClassName="text-black font-semibold border-b-3 border-black"
            >
              Wish Listed Books
            </Tab>
          </TabList>

          <TabPanel className="mt-4">
            <ReadListedBooks />
          </TabPanel>

          <TabPanel className="mt-4">
            <WhishListedBooks />
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default ListedBooks;
