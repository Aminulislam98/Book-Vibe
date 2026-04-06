import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListedBooks from "../../Components/ListedBooks/ReadListedBooks";
import WhishListedBooks from "../../Components/ListedBooks/WhishListedBooks";

const Books = () => {
  return (
    <section className="px-4">
      <Tabs className="max-w-7xl mx-auto mt-15">
        <TabList>
          <Tab>Read Listed Books</Tab>
          <Tab>Wish Listed Books</Tab>
        </TabList>

        <TabPanel>
          <ReadListedBooks></ReadListedBooks>
        </TabPanel>
        <TabPanel>
          <WhishListedBooks></WhishListedBooks>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Books;
