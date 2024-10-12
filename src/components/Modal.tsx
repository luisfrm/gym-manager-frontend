import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/ui/dialog";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode,
  trigger?: JSX.Element;
  title?: string;
  description?: string;
  className?: string;
	isOpen?: boolean,
	onOpenChange?: () => boolean
};

const Modal = ({children, trigger, title, description, className="bg-white", isOpen = false, onOpenChange}: Props) => {
	return (
		<Dialog>
			{ trigger && <DialogTrigger>{trigger}</DialogTrigger>}
			<DialogContent className={className}>
				<DialogHeader>
					{ title && <DialogTitle>{title}</DialogTitle>}
					{ description && <DialogDescription>{description}</DialogDescription>}
				</DialogHeader>
        {children}
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
