


export interface SubTabData {
  id: string;
  label: string;
  description: string;
  stats: {
    value: string;
    label: string;
    icon: string; // icon name as string
  }[];
  tableData: {
    period: string;
    invoices: string;
    percentage: string;
    duration: string;
    color: string;
  }[];
  imageUrl: string;
}

export interface TabData {
  id: string;
  label: string;
  icon: string; // icon name as string
  color: string;
  title: string;
  description: string;
  subTabs: SubTabData[];
}

export const tabsData: TabData[] = [
  {
    id: "billing",
    label: "Battle's Lounge",
    icon: "Coins",
    color: "bg-pink-200",
    title: "Hybrid Esports Tournament Platform",
    description:
      "Merges in-person and online gameplay, allowing youth athletes to compete in our facility's esports arena or remotely.",
    subTabs: [
      {
        id: "tournaments",
        label: "In-Person & Online Tournaments",
        description:
          "Host real-time esports events from anywhere. Seamlessly connects players competing from our facility or remotely.",
        stats: [
          {
            value: "2,450",
            label: "Active Players",
            icon: "Users",
          },
          {
            value: "156",
            label: "Tournaments/Month",
            icon: "Zap",
          },
          {
            value: "24/7",
            label: "Platform Uptime",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Fortnite",
            invoices: "78 Players",
            percentage: "Live",
            duration: "2 HR 15 MIN",
            color: "bg-green-400",
          },
          {
            period: "Rocket League",
            invoices: "45 Players",
            percentage: "Live",
            duration: "1 HR 30 MIN",
            color: "bg-blue-400",
          },
          {
            period: "Valorant",
            invoices: "92 Players",
            percentage: "Queue",
            duration: "Starting Soon",
            color: "bg-yellow-400",
          },
          {
            period: "FIFA 25",
            invoices: "34 Players",
            percentage: "Live",
            duration: "45 MIN",
            color: "bg-green-400",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Tournament+Arena+View",
      },
      {
        id: "management",
        label: "Tournament Management System",
        description:
          "Complete tournament lifecycle management with registration, brackets, and real-time updates.",
        stats: [
          {
            value: "1,245",
            label: "Registered Teams",
            icon: "BarChart3",
          },
          {
            value: "98.5%",
            label: "Match Success Rate",
            icon: "Zap",
          },
          {
            value: "15s",
            label: "Avg Registration Time",
            icon: "Users",
          },
        ],
        tableData: [
          {
            period: "Summer Championship",
            invoices: "164 Teams",
            percentage: "Active",
            duration: "Finals Week",
            color: "bg-green-400",
          },
          {
            period: "Weekly League",
            invoices: "89 Teams",
            percentage: "Active",
            duration: "Round 6",
            color: "bg-blue-400",
          },
          {
            period: "Youth Cup",
            invoices: "234 Teams",
            percentage: "Registration",
            duration: "Opens Monday",
            color: "bg-yellow-400",
          },
          {
            period: "Pro Qualifier",
            invoices: "45 Teams",
            percentage: "Completed",
            duration: "Results Published",
            color: "bg-green-500",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Tournament+Management+Dashboard",
      },
      {
        id: "dashboard",
        label: "Personal Gaming Dashboard",
        description:
          "Track tournament history, upcoming events, and gaming achievements with comprehensive analytics.",
        stats: [
          {
            value: "1,850",
            label: "Player Profiles",
            icon: "Settings",
          },
          {
            value: "4.2",
            label: "Avg Skill Rating",
            icon: "BarChart3",
          },
          {
            value: "87%",
            label: "Achievement Rate",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Tournament Wins",
            invoices: "127",
            percentage: "Gold",
            duration: "+15 This Month",
            color: "bg-yellow-400",
          },
          {
            period: "Match Wins",
            invoices: "2,340",
            percentage: "Platinum",
            duration: "78% Win Rate",
            color: "bg-blue-400",
          },
          {
            period: "Hours Played",
            invoices: "456",
            percentage: "Active",
            duration: "This Season",
            color: "bg-green-400",
          },
          {
            period: "Skill Ranking",
            invoices: "#87",
            percentage: "Rising",
            duration: "Global Leaderboard",
            color: "bg-green-500",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Player+Gaming+Dashboard",
      },
    ],
  },
  {
    id: "charging",
    label: "YSN",
    icon: "Zap",
    color: "bg-yellow-200",
    title: "Live-Streaming & Media Platform",
    description:
      "Captures every game and event using HD cameras, offering families and recruiters a front-row seat from anywhere.",
    subTabs: [
      {
        id: "streaming",
        label: "Professional Live Streaming",
        description:
          "Broadcast high-quality live streams with professional presentation and sponsor integration.",
        stats: [
          {
            value: "15K",
            label: "Live Viewers",
            icon: "Zap",
          },
          {
            value: "8",
            label: "HD Cameras",
            icon: "Atom",
          },
          {
            value: "4K",
            label: "Stream Quality",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Basketball Court A",
            invoices: "2.4K Viewers",
            percentage: "Live",
            duration: "2 HR 15 MIN",
            color: "bg-green-400",
          },
          {
            period: "Soccer Field 1",
            invoices: "1.8K Viewers",
            percentage: "Live",
            duration: "1 HR 45 MIN",
            color: "bg-green-400",
          },
          {
            period: "Baseball Diamond",
            invoices: "950 Viewers",
            percentage: "Starting Soon",
            duration: "3:30 PM EST",
            color: "bg-yellow-400",
          },
          {
            period: "Tennis Courts",
            invoices: "1.2K Viewers",
            percentage: "Live",
            duration: "45 MIN",
            color: "bg-green-400",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Live+Streaming+Control+Room",
      },
      {
        id: "interactive",
        label: "Interactive Viewing Experience",
        description:
          "Engage with live chat, multiple camera angles, and match schedules for enhanced viewing.",
        stats: [
          {
            value: "12.5K",
            label: "Monthly Viewers",
            icon: "Users",
          },
          {
            value: "450",
            label: "Chat Messages/Hour",
            icon: "BarChart3",
          },
          {
            value: "6",
            label: "Camera Angles",
            icon: "Atom",
          },
        ],
        tableData: [
          {
            period: "Main View",
            invoices: "Primary",
            percentage: "Active",
            duration: "4K Stream",
            color: "bg-green-400",
          },
          {
            period: "Player Cam",
            invoices: "Secondary",
            percentage: "Active",
            duration: "1080p",
            color: "bg-blue-400",
          },
          {
            period: "Crowd View",
            invoices: "Tertiary",
            percentage: "Active",
            duration: "1080p",
            color: "bg-cyan-400",
          },
          {
            period: "Replay Cam",
            invoices: "Special",
            percentage: "On Demand",
            duration: "Variable",
            color: "bg-yellow-400",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Interactive+Viewer+Dashboard",
      },
      {
        id: "teammanagement",
        label: "Team Management Platform",
        description:
          "Comprehensive team administration with player rosters, match history, and organizational tools.",
        stats: [
          {
            value: "89",
            label: "Active Teams",
            icon: "Settings",
          },
          {
            value: "1,245",
            label: "Registered Players",
            icon: "Users",
          },
          {
            value: "324",
            label: "Matches Scheduled",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Thunder Bolts",
            invoices: "24 Players",
            percentage: "Active",
            duration: "Championship",
            color: "bg-green-400",
          },
          {
            period: "Lightning Eagles",
            invoices: "18 Players",
            percentage: "Active",
            duration: "Playoffs",
            color: "bg-blue-400",
          },
          {
            period: "Storm Warriors",
            invoices: "22 Players",
            percentage: "Active",
            duration: "Regular Season",
            color: "bg-cyan-400",
          },
          {
            period: "Fire Dragons",
            invoices: "20 Players",
            percentage: "Draft",
            duration: "Recruiting",
            color: "bg-yellow-400",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Team+Management+Console",
      },
    ],
  },
  {
    id: "catalog",
    label: "Connected Athlete",
    icon: "Layers",
    color: "bg-green-200",
    title: "Connected Athlete",
    description:
      "Connected Athlete is an AI-powered performance and health analytics platform that uses computer vision to analyze athlete movements, compare them to elite professionals, and generate actionable performance reports. It also identifies potential injury risks and automatically shares data with on-site physical therapists and medical partners for proactive care.",
    subTabs: [
      {
        id: "ai-movement-analysis",
        label: "AI Movement Analysis",
        description:
          "Breaks down form and technique using video data and pro benchmarks. Advanced computer vision technology analyzes every movement for optimal performance.",
        stats: [],
        tableData: [],
        imageUrl: "",
      },
      {
        id: "injury-risk-detection",
        label: "Injury Risk Detection",
        description:
          "Spots inefficiencies and flags physical issues before they become injuries. Proactive identification of potential problems through movement pattern analysis.",
        stats: [],
        tableData: [],
        imageUrl: "",
      },
      {
        id: "integrated-recovery-loop",
        label: "Integrated Recovery Loop",
        description:
          "Syncs with physical therapists and health systems to deliver personalized improvement plans. Seamless data sharing for comprehensive athlete care.",
        stats: [],
        tableData: [],
        imageUrl: "",
      },
    ],
  },
  {
    id: "events",
    label: "PlayerHub",
    icon: "Atom",
    color: "bg-cyan-200",
    title: "Centralized Digital Athlete Profile",
    description:
      "Digital profile for every athlete to manage schedules, track stats, register for events, and build recruitment-ready profiles.",
    subTabs: [
      {
        id: "profiles",
        label: "Athlete Profiles & Stats",
        description:
          "Track performance, growth, and milestones with comprehensive data visualization.",
        stats: [
          {
            value: "3,245",
            label: "Active Athletes",
            icon: "Users",
          },
          {
            value: "1.2M",
            label: "Stats Recorded",
            icon: "BarChart3",
          },
          {
            value: "98.5%",
            label: "Profile Completion",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Basketball Players",
            invoices: "892",
            percentage: "Active",
            duration: "Season Stats",
            color: "bg-orange-400",
          },
          {
            period: "Soccer Players",
            invoices: "1,245",
            percentage: "Active",
            duration: "Season Stats",
            color: "bg-green-400",
          },
          {
            period: "Baseball Players",
            invoices: "678",
            percentage: "Active",
            duration: "Season Stats",
            color: "bg-blue-400",
          },
          {
            period: "Tennis Players",
            invoices: "430",
            percentage: "Active",
            duration: "Tournament Stats",
            color: "bg-yellow-400",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Athlete+Profile+Dashboard",
      },
      {
        id: "events",
        label: "Event & Tournament Management",
        description:
          "Register, schedule, and stay updated on upcoming games with seamless calendar integration.",
        stats: [
          {
            value: "456",
            label: "Upcoming Events",
            icon: "Atom",
          },
          {
            value: "89%",
            label: "Registration Rate",
            icon: "Zap",
          },
          {
            value: "24hr",
            label: "Event Notifications",
            icon: "Layers",
          },
        ],
        tableData: [
          {
            period: "Spring Tournament",
            invoices: "156 Registered",
            percentage: "Open",
            duration: "March 15",
            color: "bg-green-400",
          },
          {
            period: "Skills Showcase",
            invoices: "89 Registered",
            percentage: "Open",
            duration: "March 22",
            color: "bg-blue-400",
          },
          {
            period: "Championship Finals",
            invoices: "24 Qualified",
            percentage: "Closed",
            duration: "April 5",
            color: "bg-yellow-400",
          },
          {
            period: "Summer Camp",
            invoices: "234 Interested",
            percentage: "Early Bird",
            duration: "June 10",
            color: "bg-green-500",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Event+Registration+Portal",
      },
      {
        id: "recruitment",
        label: "Recruitment & Gear Hub",
        description:
          "Showcase highlights, connect with scouts, and purchase sport-specific gear in one platform.",
        stats: [
          {
            value: "124",
            label: "Scout Connections",
            icon: "Settings",
          },
          {
            value: "2,456",
            label: "Highlight Views",
            icon: "Users",
          },
          {
            value: "$45K",
            label: "Gear Sales",
            icon: "Zap",
          },
        ],
        tableData: [
          {
            period: "College Scouts",
            invoices: "89 Active",
            percentage: "Viewing",
            duration: "This Month",
            color: "bg-green-400",
          },
          {
            period: "Pro Scouts",
            invoices: "23 Active",
            percentage: "Viewing",
            duration: "This Month",
            color: "bg-blue-400",
          },
          {
            period: "Highlight Reels",
            invoices: "456 Uploaded",
            percentage: "Published",
            duration: "This Season",
            color: "bg-cyan-400",
          },
          {
            period: "Gear Orders",
            invoices: "234 Orders",
            percentage: "Fulfilled",
            duration: "This Month",
            color: "bg-green-500",
          },
        ],
        imageUrl:
          "/placeholder.svg?height=400&width=600&text=Recruitment+Hub+Dashboard",
      },
    ],
  },
];