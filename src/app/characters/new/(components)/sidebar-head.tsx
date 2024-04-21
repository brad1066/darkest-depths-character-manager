import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import styles from "./components.module.css"

type SidebarHeadProps = {
  className?: string
}

const SidebarHead = ({ className }: SidebarHeadProps) => {
  return (
    <div className={cn(className, "flex flex-col w-full items-center")}>
      <Avatar className="m-[0.5rem] size-[4rem]">
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
      <input
        type="text"
        placeholder="Name"
        defaultValue="New Character"
        className="w-fit max-w-[80%] text-center bg-transparent border-0 border-b-2 text-xl pb-1" />
    </div>
  )
}
export default SidebarHead