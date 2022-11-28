import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { JSONData } from "../../types";
import { Container, Row, CheckboxWrapper, InfoWrapper } from "./List.styles";

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
  if (!Array.isArray(data)) return <Container>Wrong JSON format</Container>;

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <Row key={index}>
            <CheckboxWrapper>
              <Checkbox
                onChange={onChange}
                checked={selectedIndexList.includes(index)}
                value={index}
              />
            </CheckboxWrapper>
            <InfoWrapper>{renderInfoSection(item)}</InfoWrapper>
          </Row>
        );
      })}
    </Container>
  );
};
