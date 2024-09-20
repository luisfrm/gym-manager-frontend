interface ButtonProps {
	type?: "button" | "submit" | "reset";
	text: string;
}

export default function Button({ type = "button", text }: ButtonProps) {
	return (
		<button
			type={type}
			className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:opacity-85 h-9 px-4 py-2"
		>
			{text}
		</button>
	);
}
