import { useState } from "react";
import { LeftIcon, RightIcon, HomeIcon, SettingsIcon } from "./Icons";
import SidebarItem from "./SidebarItem";

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
      <header className={`p-4 flex items-center ${ isSidebarOpen ? "justify-between" : "justify-center" }`}>
        { isSidebarOpen && <h2 className={`text-2xl font-bold text-gray-800`}>GymPro</h2>}
        <button type="button" onClick={toggleSidebar}>
          { 
          isSidebarOpen ? <LeftIcon />
          : <RightIcon />
        }
        </button>
      </header>
      <nav className="flex-1 p-4">
        <SidebarItem link="/dashboard" icon={<HomeIcon/>} isSidebarOpen={isSidebarOpen} label="Dashboard" />
        <SidebarItem link="/settings" icon={<SettingsIcon/>} isSidebarOpen={isSidebarOpen} label="Settings" />
      </nav>
    </aside>
	);
}
