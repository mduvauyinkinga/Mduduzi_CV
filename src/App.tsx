import Index from "./pages/Index.tsx";
import { Outlet } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

const App = () => (
  <div>
    <Index />
    <Outlet />
    <Toaster />
  </div>
);

export default App;

