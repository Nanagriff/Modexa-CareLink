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

export default function NotificationSettings() {
    return (
        <div className="grid gap-6 w-full">
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>
                        Manage your email notification preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="enable-email-notifications" />
                            <label
                                htmlFor="enable-email-notifications"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Enable Email Notifications
                            </label>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="email-appointment-reminders" />
                                <label
                                    htmlFor="email-appointment-reminders"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Appointment Reminders
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="email-new-messages" />
                                <label
                                    htmlFor="email-new-messages"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    New Messages
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="email-platform-updates" />
                                <label
                                    htmlFor="email-platform-updates"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Platform Updates
                                </label>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>SMS Notifications</CardTitle>
                    <CardDescription>
                        Manage your SMS notification preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="enable-sms-notifications" />
                            <label
                                htmlFor="enable-sms-notifications"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Enable SMS Notifications
                            </label>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sms-appointment-reminders" />
                                <label
                                    htmlFor="sms-appointment-reminders"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Appointment Reminders
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sms-new-messages" />
                                <label
                                    htmlFor="sms-new-messages"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    New Messages
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sms-platform-updates" />
                                <label
                                    htmlFor="sms-platform-updates"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Platform Updates
                                </label>
                            </div>
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
