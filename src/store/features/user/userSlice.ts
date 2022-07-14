import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
  points: number;
}

const initialState: UserState = {
  userName: "",
  points: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userName = action.payload;
    },
    setPoints: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.points = action.payload;
    },
    incrementPoints: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.points += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, incrementPoints } = userSlice.actions;

export default userSlice.reducer;
