import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      <main className="pt-20"> {/* Add padding top to account for fixed header */}
        <Outlet />
      </main>
    </div>
  );
};
