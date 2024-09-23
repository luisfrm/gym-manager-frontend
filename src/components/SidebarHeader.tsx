import { LeftIcon, RightIcon } from "./Icons";

type Props = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

function SidebarHeader({isSidebarOpen, toggleSidebar}: Props) {
	return (
		<header
			className={`p-4 flex items-center ${
				isSidebarOpen ? "justify-between" : "justify-center"
			}`}
		>
			{isSidebarOpen && (
				<h2 className={`text-2xl font-bold text-gray-800`}>GymPro</h2>
			)}
			<button type="button" id="ctaSidebar" onClick={toggleSidebar}>
				{isSidebarOpen ? <LeftIcon /> : <RightIcon />}
			</button>
		</header>
	);
}

export default SidebarHeader;
