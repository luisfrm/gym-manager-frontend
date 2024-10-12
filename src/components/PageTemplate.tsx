import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const PageTemplate = ({ children }: Props) => {
	return <section className="flex-1 p-6">{children}</section>;
};

export default PageTemplate;
