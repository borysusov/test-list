import { useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
// import "./App.css";

import { test1, test2 } from "./mocks";

import { SelectionHeader } from "./components/SelectionHeader";
import { List } from "./components/List";
// import { Container } from "./components/List/List.styles"

function App() {
  const [selectedIndexList, setSelectedIndexList] = useState<number[]>([]);

  const handleOnChange = (e: CheckboxChangeEvent) => {
    const value = parseInt(e.target.value);

    setSelectedIndexList((prevValue) =>
      prevValue.includes(value)
        ? prevValue.filter((item) => item !== value)
        : [...prevValue, value]
    );
  };

  return (
    <div>
      <SelectionHeader selectedItems={selectedIndexList} />
      <List
        data={test2}
        selectedIndexList={selectedIndexList}
        onChange={handleOnChange}
        renderInfoSection={(data) => {
          return (
            <>
              {Object.values(data!).map((dataItem, index) => {
                return <div key={index}>{dataItem}</div>;
              })}
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
