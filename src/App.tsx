import { useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { SelectionHeader } from "./components/SelectionHeader";
import { List } from "./components/List";
import { Container } from "./App.styles";
import { isPrimitive } from "./utils";

import { test1, test2 } from "./mocks";

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
    <Container>
      <SelectionHeader selectedItems={selectedIndexList} />
      <List
        data={test2}
        selectedIndexList={selectedIndexList}
        onChange={handleOnChange}
        renderInfoSection={(data) => {
          return (
            <>
              {!isPrimitive(data)
                ? Object.values(data!).map((dataItem, index) => {
                    return (
                      <div key={index}>
                        {JSON.stringify(dataItem).replace(/['"]+/g, "")}
                      </div>
                    );
                  })
                : data}
            </>
          );
        }}
      />
    </Container>
  );
}

export default App;
