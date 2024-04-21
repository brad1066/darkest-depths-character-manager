import UserDropdown from "./user-dropdown"

const Header = () => {
  return (
    <header className="flex flex-row flex-nowrap justify-between p-4">
      <h1 className="text-4xl font-semibold">Darkest Depths</h1>
      <UserDropdown />
    </header>
  )
}
export default Header