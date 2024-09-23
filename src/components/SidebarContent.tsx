import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const SidebarContent = ({ children }: Props) => {
	return <nav className="flex-1 p-4">{children}</nav>;
};

export default SidebarContent;
