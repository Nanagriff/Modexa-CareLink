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

export default function SupportSettings() {
    return (
        <div className="grid gap-6 w-full">
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                    <CardDescription>
                        Get in touch with our support team.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>If you have any issues or questions, please reach out to our support team for assistance.</p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <a href="/support/contact" target="_blank" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Contact Support
                    </a>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
                    <CardDescription>
                        Find answers to common questions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Browse our frequently asked questions to find answers to common issues and queries.</p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <a href="/support/faq" target="_blank" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Go to FAQ
                    </a>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>User Guides and Tutorials</CardTitle>
                    <CardDescription>
                        Learn how to use our platform with our user guides and tutorials.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Access detailed guides and video tutorials to help you make the most out of our platform.</p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <a href="/support/guides" target="_blank" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        User Guides
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}
