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