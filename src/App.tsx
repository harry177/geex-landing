import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HomePage } from "./pages/HomePage/HomePage";
import { BaseLayout } from "./components/layout/BaseLayout/BaseLayout";
import "./App.scss";

function App() {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/organizations" element={<HomePage />} />
        <Route path="/" element={<p>{t("404_content")}</p>} />
        <Route path="*" element={<p>{t("404_content")}</p>} />
      </Route>
    </Routes>
  );
}

export default App;
