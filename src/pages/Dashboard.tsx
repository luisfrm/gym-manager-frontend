import DashboardCard from "@components/DashboardCard";
import LogCard from "@components/LogCard";
import { ChartNoAxesCombinedIcon, Dumbbell, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 col-span-3">
        <DashboardCard title="Total Members" icon={<Users color="#0284c7"/>} mainInfo="1,234" subtitle="8% increase from last month"/>
        <DashboardCard title="Revenue" icon={<ChartNoAxesCombinedIcon color="#059669"/>} mainInfo="$52.000" subtitle="8% increase from last month"/>
        <DashboardCard title="Active clientes" icon={<Dumbbell color="#7c3aed"/>} mainInfo="1,234" subtitle="8% increase from last month"/>
      </div>
      <LogCard />
    </section>
  )
}
