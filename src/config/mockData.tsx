import { CreditCard, Users, Dumbbell } from 'lucide-react';

import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {}

export interface LogItemData {
  icon: React.ComponentType<IconProps>;
  iconProps: {
    className: string;
  };
  title: string;
  description: string;
  time: string;
}

export const logItemsData: LogItemData[] = [
  {
    icon: CreditCard,
    iconProps: {
      className: "h-5 w-5 text-green-500"
    },
    title: "Payment Received",
    description: "$150 from Sarah Johnson for Monthly Membership",
    time: "10 minutes ago"
  },
  {
    icon: Users,
    iconProps: {
      className: "h-5 w-5 text-blue-500"
    },
    title: "New Member Registered",
    description: "Michael Brown joined as a Premium Member",
    time: "1 hour ago"
  },
  {
    icon: Dumbbell,
    iconProps: {
      className: "h-5 w-5 text-purple-500"
    },
    title: "Class Attendance",
    description: "15 members attended 'Advanced Yoga' class",
    time: "2 hours ago"
  },
  {
    icon: CreditCard,
    iconProps: {
      className: "h-5 w-5 text-green-500"
    },
    title: "Payment Received",
    description: "$75 from Tom Wilson for Personal Training Session",
    time: "3 hours ago"
  },
  {
    icon: Users,
    iconProps: {
      className: "h-5 w-5 text-blue-500"
    },
    title: "Membership Renewal",
    description: "Emily Davis renewed her Annual Membership",
    time: "5 hours ago"
  }
];

export const dashboardCardsData = [
  {
    title:"Total Members",
    mainInfo:"1,234",
    description:"8% increase from last month",
    icon: CreditCard,
    iconProps: {
      className: "h-5 w-5 text-green-500"
    },
  }
]

export const members = [
  { id: 1, name: "John Doe", email: "john@example.com", plan: "Premium", joinDate: "2023-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Basic", joinDate: "2023-02-20" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", plan: "Premium", joinDate: "2023-03-10" },
  { id: 4, name: "Sarah Williams", email: "sarah@example.com", plan: "Basic", joinDate: "2023-04-05" },
  { id: 5, name: "Chris Brown", email: "chris@example.com", plan: "Premium", joinDate: "2023-05-12" },
]