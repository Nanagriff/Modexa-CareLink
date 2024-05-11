// import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function CustomButton({title}: {title:string}) {
  return (
    <Button className="w-[250px] h-[45px] bg-blue">
      {/* <Mail className="mr-2 h-4 w-4" />  */}
      {title}
    </Button>
  )
}


