import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

type TemplateProps = {
	children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
	return (
		<div className="flex h-screen bg-gray-100 gap-2">
			<Sidebar />
			{children}
		</div>
	);
}
