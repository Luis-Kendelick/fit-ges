"use client"

import * as React from "react"
import {
  AudioWaveform,
  BadgeDollarSignIcon,
  BookOpen,
  Calendar1Icon,
  CalendarDaysIcon,
  CogIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareChevronRightIcon,
  UsersIcon,
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { useIsMobile } from "@/hooks/use-mobile"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: SquareChevronRightIcon,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Alunos",
      url: "/users",
      icon: UsersIcon,
      isActive: true,
      items: [
        {
          title: "Adicionar",
          url: "/users/add",
        }
      ],
    },
    {
      title: "Calendário",
      url: "/calendar",
      icon: CalendarDaysIcon,
      items: [
        {
          title: "Gerenciar",
          url: "/calendar/admin"
        }
      ],
    },
    {
      title: "Pagamentos",
      url: "/payment-cycles",
      icon: BadgeDollarSignIcon,
      items: [
        {
          title: "Administrar Planos",
          url: "/payment-cycles/admin",
        },
      ],
    },
    {
      title: "Configurações",
      url: "/config",
      icon: CogIcon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile()
  return (
    <Sidebar side={isMobile ? 'right' : 'left'} collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
        {isMobile &&
          <div className="w-full flex justify-end pr-10 mb-6">
            <SidebarTrigger className="size-9 bg-black/45 text-white rounded-full" iconSize="sm" />
          </div>
        }
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}
