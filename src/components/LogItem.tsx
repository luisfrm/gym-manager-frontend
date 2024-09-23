import { Clock } from "lucide-react";

type LogItemProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  time: string;
}

const LogItem = ({title, description, icon, time}: LogItemProps) => {
  return (
    <li className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-shrink-0 flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>{time}</span>
      </div>
    </li>
  )
}

export default LogItem