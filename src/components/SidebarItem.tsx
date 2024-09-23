import { ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type SidebarItemProps = {
	isSidebarOpen: boolean;
	icon: ReactNode;
	label: string;
  link: string
};

export default function SidebarItem({
	isSidebarOpen,
	icon,
	label,
  link
}: SidebarItemProps) {
	const labelRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (labelRef && label) {
			if (isSidebarOpen) {
				setTimeout(() => {
					if (labelRef.current) {
						labelRef.current.classList.remove("block");
					}
				}, 200);
			} else {
				setTimeout(() => {
					if (labelRef.current) {
						labelRef.current.classList.add("hidden");
					}
				}, 200);
			}
		}
	}, [labelRef, isSidebarOpen, label]);

	return (
		<Link to={link} className="flex cursor-pointer items-center gap-2 justify-start hover:bg-slate-100 rounded-md p-2 w-[100%] h-10`">
			<div className="flex-shrink-0">{icon}</div>
			<span
				ref={labelRef}
				className={`${
					isSidebarOpen ? "opacity-100" : "opacity-0"
				} transition-opacity duration-300`}
			>
				{label}
			</span>
		</Link>
	);
}
