import { Route, Routes } from "react-router-dom"
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import LoginPage from "./pages/LoginPage";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="reservation" element={<ReservationPage />} />
                <Route path="order-online" element={<OrderOnlinePage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    )
};

export default MainRoute;