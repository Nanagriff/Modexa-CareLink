import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function RadioGroupInput() {
    return (
        <RadioGroup required defaultValue="">
            <h2>Gender</h2>
            <div className="flex gap-10 mt-2 dark:bg-slate-100 bg-white h-12 px-[20px]">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="r1" />
                    <Label htmlFor="r2">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="r2" />
                    <Label htmlFor="r3">Female</Label>
                </div>
            </div>
        </RadioGroup>
    )
}

