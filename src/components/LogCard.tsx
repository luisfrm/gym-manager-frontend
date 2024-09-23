import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import LogItem from "./LogItem";
// import { CreditCard, Dumbbell, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getRecentsLogs } from "@/config/api";
import { LogItemData } from "@/config/mockData";

type LogsResponse = {
	isLoading: boolean;
	data: Array<LogItemData>;
};

const LogCard = () => {
	const [logs, setLogs] = useState<LogsResponse>({
		isLoading: false,
		data: [],
	});

	useEffect(() => {
		const fetchRecentLogs = async () => {
			const { data: logsData, status }: any = await getRecentsLogs();

			if (status == 200 && logsData.length > 0) {
				setLogs((state) => ({
					...state,
					data: logsData,
				}));
			}
		};

		fetchRecentLogs();
	}, []);

	return (
		<Card className="bg-white">
			<CardHeader>
				<CardHeader>
					<CardTitle>Recent events</CardTitle>
				</CardHeader>
			</CardHeader>
			<CardContent>
				<ul className="space-y-4">
					{logs.data.length > 0 &&
						logs.data.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<LogItem
									key={index}
									icon={<IconComponent {...item.iconProps} />}
									title={item.title}
									description={item.description}
									time={item.time}
								/>
							);
						})}
				</ul>
			</CardContent>
		</Card>
	);
};

export default LogCard;
