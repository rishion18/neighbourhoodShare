import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type RequestStatus = "pending" | "approved" | "returned" | "cancelled";

export type BorrowRequest = {
  id: string;
  itemId: string;
  itemName: string;
  owner: string;
  status: RequestStatus;
  createdAt: string;
};

const initialState: BorrowRequest[] = [];

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    createRequest: (
      state,
      action: PayloadAction<{ itemId: string; itemName: string; owner: string }>
    ) => {
      state.push({
        id: nanoid(),
        itemId: action.payload.itemId,
        itemName: action.payload.itemName,
        owner: action.payload.owner,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
    },
    updateRequestStatus: (
      state,
      action: PayloadAction<{ requestId: string; status: RequestStatus }>
    ) => {
      const request = state.find((r) => r.id === action.payload.requestId);
      if (request) {
        request.status = action.payload.status;
      }
    },
    cancelRequest: (state, action: PayloadAction<string>) => {
      const request = state.find((r) => r.id === action.payload);
      if (request && request.status === "pending") {
        request.status = "cancelled";
      }
    },
    resetRequests: () => {
      return [];
    },
  },
});

export const { createRequest, updateRequestStatus, cancelRequest, resetRequests } =
  requestsSlice.actions;
export default requestsSlice.reducer;
