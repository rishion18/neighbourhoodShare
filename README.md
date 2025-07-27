# 🏘️ Neighborhood Resource Sharing App

A React.js web application that enables residents of a neighborhood to lend and borrow household items like tools, books, appliances, etc. The platform promotes sustainability and community bonding through efficient sharing.

🔗 [Live Demo](https://neighbourhood-share-git-master-rishion18s-projects.vercel.app/)  
📂 [GitHub Repo](https://github.com/rishion18/neighbourhoodShare)

---

## 📌 Features

### ✅ Core Features
- **Home / Catalog** (`/`)
  - Search, filter, and sort items
  - Item cards with image, name, category, owner, and availability
- **Item Details** (`/items/:id`)
  - Detailed view with “Request to Borrow” button (mocked)
- **Add New Item** (`/add-item`)
  - Validated form with submission feedback (mocked success/failure)
- **404 Not Found Page** (`*`)
  - User-friendly error page with navigation

### 🎁 Bonus Features Implemented
- **My Requests Page** (`/my-requests`)
  - View status of your borrow requests
- **Map View** (`/map`)
  - View item locations using mock geodata
- **User Profile** (`/profile`)
  - Display trust score, lending/borrowing stats (mocked)
- **Persistence**
  - LocalStorage is used to preserve item state (availability, sold status, etc.)

---

## 🛠️ Tech Stack

- **Frontend**: React.js (functional components & hooks)
- **Routing**: React Router DOM
- **Styling**: MUI and css
- **State Management**: redux and redux toolkit
- **Mock Data**: Static JSON and localStorage
- **Deployment**: Vercel

---

## 🚀 Getting Started (Local Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name

# Install dependencies
npm install

# Start the app
npm start
