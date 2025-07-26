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
    image: "https://www.thespruce.com/thmb/IRC13bD1zlPSMnbb3KmVSTnbho8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-impact-driver-vs-drill-5116867-hero-37b95592c1a44e97baa3de9f859fbd0a.jpg",
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
    image: "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg",
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
    image: "https://m.media-amazon.com/images/I/612vKUUn2FL._SX679_.jpg",
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
    image: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2023/08/yoga-mats.jpg?la=en&h=1281&w=1920&hash=458CA75E900007A1CFEB64E72A9E5599",
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
    image: "https://m.media-amazon.com/images/I/612eSswkvML._SX679_.jpg",
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
    image: "https://enterro.in/cdn/shop/products/21.png?v=1657686698&width=1206",
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
    image: "https://m.media-amazon.com/images/I/41A7YDKbrsL._SX300_SY300_QL70_FMwebp_.jpg",
    borrowedBy: null,
    sold: false,
  },

  // Added items below
  {
    id: "itm008",
    name: "Hammer Drill",
    description: "Heavy-duty hammer drill with case.",
    category: "Tools",
    owner: "Liam Brown",
    condition: "Very Good",
    available: true,
    image: "https://www.thespruce.com/thmb/IRC13bD1zlPSMnbb3KmVSTnbho8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-impact-driver-vs-drill-5116867-hero-37b95592c1a44e97baa3de9f859fbd0a.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm009",
    name: "2-Person Tent",
    description: "Compact tent ideal for hiking trips.",
    category: "Outdoors",
    owner: "Nina Patel",
    condition: "Good",
    available: true,
    image: "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm010",
    name: "Mini Crock Pot",
    description: "Perfect for single servings and dips.",
    category: "Kitchen",
    owner: "Emma White",
    condition: "Excellent",
    available: true,
    image: "https://m.media-amazon.com/images/I/612vKUUn2FL._SX679_.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm011",
    name: "Purple Yoga Mat",
    description: "Extra thick and durable yoga mat.",
    category: "Fitness",
    owner: "James Kim",
    condition: "Like New",
    available: true,
    image: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2023/08/yoga-mats.jpg?la=en&h=1281&w=1920&hash=458CA75E900007A1CFEB64E72A9E5599",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm012",
    name: "Telescopic Ladder",
    description: "Space-saving, collapsible ladder.",
    category: "Tools",
    owner: "Olivia Martin",
    condition: "Good",
    available: false,
    image: "https://m.media-amazon.com/images/I/612eSswkvML._SX679_.jpg",
    borrowedBy: "Rishi Raj",
    sold: false,
  },
  {
    id: "itm013",
    name: "Board Game: Monopoly",
    description: "Classic Monopoly board game.",
    category: "Games",
    owner: "Arjun Desai",
    condition: "Fair",
    available: true,
    image: "https://enterro.in/cdn/shop/products/21.png?v=1657686698&width=1206",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm014",
    name: "Glass Electric Kettle",
    description: "Glass body with LED indicator.",
    category: "Kitchen",
    owner: "Sophia Zhang",
    condition: "Very Good",
    available: true,
    image: "https://m.media-amazon.com/images/I/41A7YDKbrsL._SX300_SY300_QL70_FMwebp_.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm015",
    name: "Impact Driver",
    description: "Compact and powerful, 20V.",
    category: "Tools",
    owner: "Ethan Ross",
    condition: "Excellent",
    available: true,
    image: "https://www.thespruce.com/thmb/IRC13bD1zlPSMnbb3KmVSTnbho8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-impact-driver-vs-drill-5116867-hero-37b95592c1a44e97baa3de9f859fbd0a.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm016",
    name: "Large Family Tent",
    description: "Fits 6 people, great for summer camping.",
    category: "Outdoors",
    owner: "Maya Verma",
    condition: "Like New",
    available: true,
    image: "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm017",
    name: "Slow Cooker Pro",
    description: "Digital settings, 8-quart size.",
    category: "Kitchen",
    owner: "Noah Khan",
    condition: "Good",
    available: true,
    image: "https://m.media-amazon.com/images/I/612vKUUn2FL._SX679_.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm018",
    name: "Eco Yoga Mat",
    description: "Eco-friendly material, extra grip.",
    category: "Fitness",
    owner: "Isla Fernandes",
    condition: "Good",
    available: true,
    image: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2023/08/yoga-mats.jpg?la=en&h=1281&w=1920&hash=458CA75E900007A1CFEB64E72A9E5599",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm019",
    name: "Double-Step Ladder",
    description: "Great for home repairs.",
    category: "Tools",
    owner: "Rajeev Kapoor",
    condition: "Fair",
    available: true,
    image: "https://m.media-amazon.com/images/I/612eSswkvML._SX679_.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm020",
    name: "Board Game: Risk",
    description: "Classic world domination game.",
    category: "Games",
    owner: "Layla Thomas",
    condition: "Good",
    available: true,
    image: "https://enterro.in/cdn/shop/products/21.png?v=1657686698&width=1206",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm021",
    name: "Stainless Kettle XL",
    description: "Large capacity electric kettle.",
    category: "Kitchen",
    owner: "Zane Cooper",
    condition: "Excellent",
    available: true,
    image: "https://m.media-amazon.com/images/I/41A7YDKbrsL._SX300_SY300_QL70_FMwebp_.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm022",
    name: "Cordless Driver Kit",
    description: "Includes charger and 2 batteries.",
    category: "Tools",
    owner: "Freya Singh",
    condition: "Like New",
    available: true,
    image: "https://www.thespruce.com/thmb/IRC13bD1zlPSMnbb3KmVSTnbho8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SPR-impact-driver-vs-drill-5116867-hero-37b95592c1a44e97baa3de9f859fbd0a.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm023",
    name: "Pop-Up Tent",
    description: "Quick setup pop-up camping tent.",
    category: "Outdoors",
    owner: "Aditya Menon",
    condition: "Very Good",
    available: true,
    image: "https://images-cdn.ubuy.co.in/64697aa3d5edf93b1a509dac-ever-advanced-instant-blackout-camping.jpg",
    borrowedBy: null,
    sold: false,
  },
  {
    id: "itm024",
    name: "Basic Yoga Mat",
    description: "Beginner-friendly with soft padding.",
    category: "Fitness",
    owner: "Tara Iyer",
    condition: "Good",
    available: true,
    image: "https://www.saga.co.uk/helix-contentlibrary/exceptional/2023/08/yoga-mats.jpg?la=en&h=1281&w=1920&hash=458CA75E900007A1CFEB64E72A9E5599",
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
