import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AntrenamentePage from "./pages/AntrenamentePage.jsx";
import AntrenamentDetaliuPage from "./pages/AntrenamentDetaliuPage.jsx";
import AbonamentePage from "./pages/AbonamentePage.jsx";
import ExercitiiPage from "./pages/ExercitiiPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AntrenamentePage />} />
        <Route path="/antrenamente/:id" element={<AntrenamentDetaliuPage />} />
        <Route path="/abonamente" element={<AbonamentePage />} />
        <Route path="/exercitii" element={<ExercitiiPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}