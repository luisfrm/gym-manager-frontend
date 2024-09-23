type Props = {
	title: string;
	icon: JSX.Element;
	mainInfo: string;
	subtitle: string;
};

export default function DashboardCard({
	title,
	icon,
	mainInfo,
	subtitle,
}: Props) {
	return (
		<div className="rounded-lg border shadow-sm bg-white">
			<div>
				<div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
					<h3 className="whitespace-nowrap tracking-tight text-sm font-medium">{title}</h3>
					{icon}
				</div>
				<div className="p-6">
					<p className="text-2xl font-bold">{mainInfo}</p>
					<p className="text-xs text-muted-foreground">{subtitle}</p>
				</div>
			</div>
		</div>
	);
}
