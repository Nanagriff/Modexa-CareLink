"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { List, ListItem, ListItemText } from "@/components/ui/list";

interface Device {
    id: number;
    name: string;
}

const initialDevices: Device[] = [
    { id: 1, name: 'Fitbit Charge 4' },
    { id: 2, name: 'Apple Watch Series 6' },
];

export default function ConnectedDevicesSettings() {
    const [devices, setDevices] = useState<Device[]>(initialDevices);
    const [newDevice, setNewDevice] = useState<string>('');

    const handleAddDevice = () => {
        if (newDevice) {
            setDevices([...devices, { id: devices.length + 1, name: newDevice }]);
            setNewDevice('');
        }
    };

    const handleRemoveDevice = (id: number) => {
        setDevices(devices.filter(device => device.id !== id));
    };

    return (
        <div className="grid gap-6 w-full">
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Add New Device</CardTitle>
                    <CardDescription>
                        Connect a new health device to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <Input 
                            placeholder="Device Name" 
                            value={newDevice} 
                            onChange={(e) => setNewDevice(e.target.value)} 
                        />
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button onClick={handleAddDevice}>Add Device</Button>
                </CardFooter>
            </Card>

            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Connected Devices</CardTitle>
                    <CardDescription>
                        Manage your connected health devices.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <List>
                        {devices.length === 0 ? (
                            <ListItem className="flex justify-between items-center">
                                <ListItemText>No devices connected.</ListItemText>
                            </ListItem>
                        ) : (
                            devices.map(device => (
                                <ListItem key={device.id} className="flex justify-between items-center">
                                    <ListItemText>{device.name}</ListItemText>
                                    <Button variant="destructive" onClick={() => handleRemoveDevice(device.id)}>Remove</Button>
                                </ListItem>
                            ))
                        )}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}
