import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaInput() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Enter your Bio</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}



