// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="primary">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/users'>Users</NavLink>
    </nav>
  )
}
