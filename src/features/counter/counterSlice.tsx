import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;  // Acción sin payload
    },
    decrement: (state) => {
      state.value -= 1;  // Acción sin payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;  // Acción con payload
    },
  },
});

// Exportar las acciones
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportar el reductor
export default counterSlice.reducer;
