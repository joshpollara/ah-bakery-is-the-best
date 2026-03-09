import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-navy">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
