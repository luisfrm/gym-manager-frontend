import { LucideChevronsLeft, LucideChevronsRight } from "lucide-react";

type Props = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
	title: string;
};

function SidebarHeader({isSidebarOpen, toggleSidebar, title}: Props) {
	return (
		<header
			className={`p-4 flex items-center ${
				isSidebarOpen ? "justify-between" : "justify-center"
			}`}
		>
			{isSidebarOpen && (
				<h2 className={`text-2xl font-bold text-gray-800`}>{title}</h2>
			)}
			<button type="button" id="ctaSidebar" onClick={toggleSidebar}>
				{isSidebarOpen ? <LucideChevronsLeft /> : <LucideChevronsRight />}
			</button>
		</header>
	);
}

export default SidebarHeader;
