import Button from "@components/Button";
import Input from "@components/Input";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "@/features/api/apiSlice";

export default function LoginModal() {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
    const password = (document.getElementById("loginPassword") as HTMLInputElement).value;
    console.log("Email:", email);
    console.log("Password:", password);

    const result = await loginUser({ email, password }).unwrap();

    console.log(result)
  };


  return (
    <div className="w-96 h-96 bg-white m-auto rounded-md shadow-md py-6 flex flex-col justify-between">
        <div className="header flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-center">Login to GymPro</h1>
          <p className="text-gray-500 text-center">Enter your credentials to access your account</p>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit} className="flex flex-col px-8 mb-10 gap-3">
            <Input label="Email" type="email" id="loginEmail" placeholder="Enter your email" />
            <Input label="Password" type="password" id="loginPassword" placeholder="Enter your password" />
            {
              !isLoading  ? (<Button type="submit" text="Login" />)
              : (<Button type="button" text="Loading" />)
            }
          </form>
          {
            isError && (<div>
              <p className="text-red-700">There was an error making the login request.</p>
            </div>)
          }
          <div>
            <Link to="/register" className="text-center block text-black text hover:underline font-medium text-sm">Don't have an account? Register</Link>
          </div>
        </div>
      </div>
  )
}
