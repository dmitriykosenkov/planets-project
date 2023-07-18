import { configureStore } from "@reduxjs/toolkit";
import planetsSlice from "./planetsSlice";

export const store = configureStore({
   reducer: {
      planet: planetsSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch