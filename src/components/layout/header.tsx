import UserDropdown from "./user-dropdown"

const Header = () => {
  return (
    <header className="flex flex-row flex-nowrap justify-between p-4">
      <UserDropdown className="ml-auto"/>
    </header>
  )
}
export default Header