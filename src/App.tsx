import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import CurrencyProvider from "@/components/CurrencyProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Businesses from "@/pages/Businesses";
import BusinessDetail from "@/pages/BusinessDetail";
import Franchises from "@/pages/Franchises";
import FranchiseDetail from "@/pages/FranchiseDetail";
import Advisors from "@/pages/Advisors";
import SellYourBusiness from "@/pages/SellYourBusiness";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import "./App.css";

function App() {
    return (
        <CurrencyProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="businesses" element={<Businesses />}></Route>
                    <Route path="businesses/:id" element={<BusinessDetail />}></Route>
                    <Route path="franchises" element={<Franchises />}></Route>
                    <Route path="franchises/:id" element={<FranchiseDetail />}></Route>
                    <Route path="advisors" element={<Advisors />}></Route>
                    <Route path="sell-your-business" element={<SellYourBusiness />}></Route>
                    <Route path="contact-us" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </CurrencyProvider>
    );
}

export default App;
