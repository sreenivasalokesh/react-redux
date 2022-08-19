import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterAnotherState {
  values: number[];
}

const initialState: CounterAnotherState = {
  values: [],
};

export const counterAnotherSlice = createSlice({
  name: "counterAnother",
  initialState,
  reducers: {
    incrementAnother: (state: CounterAnotherState) => {
      state.values.push(1);
    },
    decrementAnother: (state: CounterAnotherState) => {
      state.values.pop();
    },
    incrementByAmountAnother: (
      state: CounterAnotherState,
      action: PayloadAction<number>
    ) => {
      state.values.push(action.payload);
    },
  },
});

export const { incrementAnother, decrementAnother, incrementByAmountAnother } =
  counterAnotherSlice.actions;

export default counterAnotherSlice.reducer;
