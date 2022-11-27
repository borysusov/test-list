import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { JSONData } from "../../types";
import { Container } from "./List.styles";

interface IListProps {
  data: JSONData;
  selectedIndexList: number[];
  onChange: (e: CheckboxChangeEvent) => void;
  renderInfoSection: (data: JSONData) => JSX.Element;
}

export const List: React.FC<IListProps> = ({
  data,
  onChange,
  selectedIndexList,
  renderInfoSection,
}) => {
  if (!Array.isArray(data)) return null;

  // const onChange = (e: CheckboxChangeEvent) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  // console.log(selectedIndexList);
  console.log(selectedIndexList);

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Checkbox
                onChange={onChange}
                checked={selectedIndexList.includes(index)}
                value={index}
              />
            </div>
            <div>{renderInfoSection(item)}</div>
          </div>
        );
      })}
    </Container>
  );
};
