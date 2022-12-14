import React from "react";

import { Container } from "./SelectionHeader.styles";

interface ISelectionHeader {
  selectedItems: number[];
}

export const SelectionHeader: React.FC<ISelectionHeader> = ({
  selectedItems,
}) => {
  return (
    <Container>{`Selected items: ${
      selectedItems.length > 0 ? selectedItems.join(", ") : "No items selected"
    }`}</Container>
  );
};
