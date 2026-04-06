import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListedBooks from "../../Components/ListedBooks/ReadListedBooks";
import WhishListedBooks from "../../Components/ListedBooks/WhishListedBooks";

const ListedBooks = () => {
  return (
    <section className="px-4 min-h-screen text-black bg-white">
      <Tabs className="max-w-6xl mx-auto">
        <TabList className="flex gap-4 border-b-2 border-gray-300">
          <Tab
            className="px-4 py-2 cursor-pointer text-black/80"
            selectedClassName="text-black border-b-3 border-black"
          >
            Read Listed Books
          </Tab>

          <Tab
            className="px-4 py-2 cursor-pointer text-black"
            selectedClassName="text-black border-b-3 border-black"
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
  );
};

export default ListedBooks;
