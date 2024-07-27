import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function GeneralSettings() {
    return (
        <div className="grid gap-6 w-full">
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                        Manage your profile information.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <Input placeholder="Full Name" />
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Phone Number" type="tel" />
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                        Set your notification preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="email-notifications" />
                            <label
                                htmlFor="email-notifications"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Email Notifications
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="sms-notifications" />
                            <label
                                htmlFor="sms-notifications"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                SMS Notifications
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="app-notifications" />
                            <label
                                htmlFor="app-notifications"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                In-App Notifications
                            </label>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                        Manage your privacy settings.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="share-data" />
                            <label
                                htmlFor="share-data"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Share data with third-party providers
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="enable-tracking" />
                            <label
                                htmlFor="enable-tracking"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Enable activity tracking
                            </label>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
