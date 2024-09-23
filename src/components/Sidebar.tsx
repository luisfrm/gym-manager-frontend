import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";
import SidebarContent from "./SidebarContent";
import { Home, Settings } from "lucide-react";

export default function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

	return (
		<aside
			className={`bg-white shadow-md transition-all duration-300 ${
				isSidebarOpen ? "w-64" : "w-16"
			} grid grid-rows-sidebar`}
		>
      <SidebarHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <SidebarContent>
        <SidebarItem link="/dashboard" icon={<Home/>} isSidebarOpen={isSidebarOpen} label="Dashboard" />
        <SidebarItem link="/settings" icon={<Settings/>} isSidebarOpen={isSidebarOpen} label="Settings" />
      </SidebarContent>
    </aside>
	);
}
