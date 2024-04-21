import SidebarHead from "./sidebar-head"

const Sidebar = () => {
  return (
    <div className="sidebar grid-rows-2 w-fit h-full">
      <SidebarHead className="py-[0.5rem] bg-red-600 h-fit" />
      <div className="bg-blue-600 h-full">
        content
      </div>
    </div>
  )
}

export default Sidebar