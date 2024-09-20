import { useEffect, useState } from "react";
import { HideEyeIcon, ShowEyeIcon } from "./Icons";

interface InputProps {
	type: "text" | "email" | "password";
	label: string;
	placeholder: string;
	id?: string;
	name?: string;
}

export default function Input({
	type = "text",
	id = "",
	name = "",
	label = "",
	placeholder = "",
}: InputProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState(type);

	const handleClick = () => {
		setShowPassword((prev) => !prev);
	};

	useEffect(() => {
		if (type === "password") {
			setInputType(showPassword ? "text" : "password");
		}
	}, [showPassword, type]);

	return (
		<div className={`form-group ${type === "password" ? " relative" : ""}`}>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				{label}
			</label>
			<input
				type={inputType}
				id={id}
				name={name}
				placeholder={placeholder}
				className="w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
			/>
			{type === "password" && (
				<button
					onClick={handleClick}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute right-2 top-[70%] transform -translate-y-1/2"
					type="button"
					aria-label="Show password"
				>
					{!showPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
				</button>
			)}
		</div>
	);
}
