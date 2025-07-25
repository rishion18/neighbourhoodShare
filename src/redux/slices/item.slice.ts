import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Item = {
  id: string;
  name: string;
  description: string;
  category: string;
  owner: string;
  condition: string;
  available: boolean;
  image: string;
  borrowedBy: string | null;
  sold: boolean;
};

const initialState: Item[] = [
  {
    id: "itm001",
    name: "Cordless Drill",
    description: "18V cordless drill, lightly used.",
    category: "Tools",
    owner: "Alice Johnson",
    condition: "Good",
    available: true,
    image: "https://www.thespruce.com/thmb/IRC13bD1zlPSMnbb3KmVSTnbho8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-impact-driver-vs-drill-5116867-hero-37b95592c1a44e97baa3de9f859fbd0a.jpg", // drill :contentReference[oaicite:1]{index=1}
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm002",
    name: "Camping Tent",
    description: "4-person waterproof tent, easy setup.",
    category: "Outdoors",
    owner: "Brian Lee",
    condition: "Excellent",
    available: true,
    image: "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg", // adjust but reference tent general search :contentReference[oaicite:2]{index=2}
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm003",
    name: "Crock Pot",
    description: "Large 6‑quart slow cooker, works great.",
    category: "Kitchen",
    owner: "Samantha Green",
    condition: "Very Good",
    available: false,
    image: "https://m.media-amazon.com/images/I/612vKUUn2FL._SX679_.jpg", // crock‑pot :contentReference[oaicite:3]{index=3}
    borrowedBy: "Prachi Patel",
    sold: false,
  },
  {
    id: "itm004",
    name: "Yoga Mat",
    description: "Non‑slip yoga mat, 6 mm thick, blue color.",
    category: "Fitness",
    owner: "Ravi Mehra",
    condition: "Good",
    available: true,
    image: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2023/08/yoga-mats.jpg?la=en&h=1281&w=1920&hash=458CA75E900007A1CFEB64E72A9E5599", // yoga mat :contentReference[oaicite:4]{index=4}
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm005",
    name: "Ladder",
    description: "6‑foot aluminum step ladder, sturdy.",
    category: "Tools",
    owner: "Dana Wang",
    condition: "Good",
    available: true,
    image: "https://m.media-amazon.com/images/I/612eSswkvML._SX679_.jpg", // used as placeholder until specific ladder found :contentReference[oaicite:5]{index=5}
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm006",
    name: "Board Game: Settlers of Catan",
    description: "Complete set, all pieces included.",
    category: "Games",
    owner: "Luis García",
    condition: "Like New",
    available: true,
    image: "https://enterro.in/cdn/shop/products/21.png?v=1657686698&width=1206", // boardgame placeholder search unmatched
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm007",
    name: "Electric Kettle",
    description: "1.5 L stainless steel electric kettle.",
    category: "Kitchen",
    owner: "Priya Sharma",
    condition: "Good",
    available: true,
    image: "https://m.media-amazon.com/images/I/41A7YDKbrsL._SX300_SY300_QL70_FMwebp_.jpg", // kettle :contentReference[oaicite:6]{index=6}
    borrowedBy: null,
    sold: false,
  },
];



const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    markAsSold: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.sold = true;
        item.available = false;
      }
    },
    toggleAvailability: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.available = !item.available;
      }
    },
    borrowItem: (state, action: PayloadAction<{ id: string; borrower: string }>) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.available && !item.sold) {
        item.borrowedBy = action.payload.borrower;
        item.available = false;
      }
    },
  },
});

export const { addItem, markAsSold, toggleAvailability, borrowItem } = itemsSlice.actions;
export default itemsSlice.reducer;
