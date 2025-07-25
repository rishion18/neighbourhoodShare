import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  userId: string;
  name: string;
  email: string;
  trustScore: number;
  lendingCount: number;
  borrowingCount: number;
  positiveFeedback: number;
};

const initialState: User = {
  userId: "usr123",
  name: "Alice Johnson",
  email: "alice@example.com",
  trustScore: 9.5,
  lendingCount: 7,
  borrowingCount: 2,
  positiveFeedback: 97, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserProfile: (
      state,
      action: PayloadAction<Partial<Omit<User, "userId">>>
    ) => {
      Object.assign(state, action.payload);
    },
    incrementLending: (state) => {
      state.lendingCount += 1;
    },
    incrementBorrowing: (state) => {
      state.borrowingCount += 1;
    },
  },
});

export const { updateUserProfile, incrementLending, incrementBorrowing } = userSlice.actions;
export default userSlice.reducer;
