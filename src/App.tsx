import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { BaseLayout } from "./components/BaseLayoout/BaseLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
}

export default App;
