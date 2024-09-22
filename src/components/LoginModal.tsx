import Button from "@components/Button";
import Input from "@components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/features/api/apiSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { setError, setUser } from "@/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

type Inputs = {
	loginEmail: string;
	loginPassword: string;
};

export default function LoginModal() {
	const [loginUser, { isLoading, isError }] = useLoginUserMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state: { user: any }) => state.user);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const { loginEmail: email, loginPassword: password } = data;

		try {
			const result = await loginUser({ email, password }).unwrap();

			dispatch(setUser(result));
			localStorage.setItem("token", result.token);
			navigate("/dashboard");
		} catch (error: any) {
			if (error.data && error.data.message) {
				console.error(error.data.message[0]);
				dispatch(setError(error.data.message[0]));
			} else {
				console.error(error.data.message[0]);
				dispatch(setError("Error to login."));
			}
		}
	};

	return (
		<div className="w-96 h-96 bg-white m-auto rounded-md shadow-md py-6 flex flex-col justify-between">
			<div className="header flex flex-col gap-2">
				<h1 className="text-3xl font-bold text-center">Login to GymPro</h1>
				<p className="text-gray-500 text-center">
					Enter your credentials to access your account
				</p>
			</div>
			<div className="body">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col px-8 mb-6 gap-3"
				>
					<Input
						register={register}
						label="Email"
						type="email"
						id="loginEmail"
						placeholder="Enter your email"
            errors={errors.loginEmail}
					/>
					<Input
						register={register}
						label="Password"
						type="password"
						id="loginPassword"
						placeholder="Enter your password"
            errors={errors.loginPassword}
					/>
					{!isLoading ? (
						<Button type="submit" text="Login" />
					) : (
						<Button type="button" text="Loading" />
					)}
				</form>
				{isError && (
					<div>
						<p className="text-red-700 text-center">{user.error}</p>
					</div>
				)}
				<div>
					<Link
						to="/register"
						className="text-center block text-black text hover:underline font-medium text-sm"
					>
						Don't have an account? Register
					</Link>
				</div>
			</div>
		</div>
	);
}
