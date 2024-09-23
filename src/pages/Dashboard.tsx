import DashboardCard from "@components/DashboardCard";
import { ShowEyeIcon } from "@components/Icons";

export default function Dashboard() {
  return (
    <section className="flex-1 overflow-y-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 col-span-3">
        <DashboardCard title="Total Members" icon={<ShowEyeIcon/>} mainInfo="1,234" subtitle="8% increase from last month"/>
        <DashboardCard title="Total Members" icon={<ShowEyeIcon/>} mainInfo="1,234" subtitle="8% increase from last month"/>
        <DashboardCard title="Total Members" icon={<ShowEyeIcon/>} mainInfo="1,234" subtitle="8% increase from last month"/>
      </div>
    </section>
  )
}
