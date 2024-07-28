import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSettings from "./GeneralSettings";
import SecuritySettings from "./SecuritySetting";
import NotificationSettings from "./NotificationSetting";
import ConnectedDevicesSettings from "./ConnectedDevicesSetting";
import SupportSettings from "./SupportSetting";

export default function Settings() {
    const tabs = [
        {
            label: "General",
            value: "general",
            component: <GeneralSettings />
        },
        {
            label: "Security",
            value: "security",
            component: <SecuritySettings />
        },
        {
            label: "Notifications",
            value: "notifications",
            component: <NotificationSettings />
        },
        {
            label: "Connected Devices",
            value: "connected-devices",
            component: <ConnectedDevicesSettings />
        },
        {
            label: "Support",
            value: "support",
            component: <SupportSettings />
        },
    ];

    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <div className="">
                    <Tabs defaultValue="general" className="w-[400px]">
                        <TabsList>
                            {tabs.map((tab) => (
                                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                            ))}
                        </TabsList>
                        {tabs.map((tab) => (
                            <TabsContent className="w-full" value={tab.value} key={tab.value}>
                                {tab.component}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </main>
    );
}
