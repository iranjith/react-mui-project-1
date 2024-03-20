import {
    Dns as DnsIcon,
    ImageOutlined as ImageIcon,
    People as PeopleIcon,
    Public as PublicIcon,
    SettingsEthernet as SettingsEthernetIcon,
    SettingsInputComponent as SettingsInputComponentIcon
} from "@mui/icons-material";


export const mainNavItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: "Authentication",
        route: "authentication",
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: "Database",
        route: "database",
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: "Storage",
        route: "storage",
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: "Hosting",
        route: "hosting",
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: "Functions",
        route: "functions",
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: "Machine learning",
        route: "machine-learning",
    },
];
