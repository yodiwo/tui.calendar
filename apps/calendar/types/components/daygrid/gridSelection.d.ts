interface GridSelectionData {
  initRowIndex: number;
  initColIndex: number;
  currentRowIndex: number;
  currentColIndex: number;
}

type GridSelectionDataByRow = { startCellIndex: number; endCellIndex: number };
