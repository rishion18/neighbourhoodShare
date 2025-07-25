import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import AppRouter from "./routes/appRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
