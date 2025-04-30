import {AreaChart, Layers, AppWindow} from "lucide-react";
import {JSX} from "react";

type NavLink = {
  href: string;
  label: string;
  icon: JSX.Element,
}

export const links: NavLink[] = [
  {
    href: 'add-job',
    label: 'Add Job',
    icon: <Layers/>,
  },
  {
    href: 'jobs',
    label: 'Jobs',
    icon: <AppWindow/>,
  },
  {
    href: 'stats',
    label: 'Stats',
    icon: <AreaChart/>
  }
] 


