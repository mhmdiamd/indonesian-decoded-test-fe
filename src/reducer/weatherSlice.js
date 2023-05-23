import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: undefined
  },
  reducers: {
    setCurrentWeather : (state, {payload} ) => {
      state.currentWeather = payload.currentWeather
    }
  }
})

export const {setCurrentWeather} = weatherSlice.actions
export default weatherSlice.reducer