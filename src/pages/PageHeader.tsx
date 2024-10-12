import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const PageHeader = ({ children }: Props) => {
	return (
		<div className="flex items-center justify-between mb-6">{children}</div>
	);
};

export default PageHeader;
