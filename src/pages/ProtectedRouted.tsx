import { setUser } from "@/features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { ReactNode, useEffect, useState } from "react";
import { verifyToken } from "@/config/api";
import Spinner from "@components/Spinner";
import Template from "@pages/Template";

type ChildrenType = {
	children: ReactNode;
};

export default function ProtectedRouted({ children }: ChildrenType) {
	const { user, isLoggedIn } = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");

		const fetchUserData = async () => {
			try {
				if ((!user || !isLoggedIn) && token) {
					const { status, data: user } = await verifyToken(token);

					if (status === 200 && user) {
						dispatch(setUser(user));
					}
				}
			} catch (error) {
				console.log("There was an error verifying the token.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchUserData();
	}, [user, dispatch, isLoggedIn]);

	if (!isLoading && (!isLoggedIn || !user)) {
		return (
			<>
				<Navigate to="/login" />
			</>
		);
	}

	if (isLoading) return <Spinner />;

	return <Template>{children}</Template>;
}
