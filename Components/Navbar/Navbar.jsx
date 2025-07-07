import {React,useState} from 'react'

import './Navbar.css'
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}} style={menu=="home"?{textDecoration : "underline" , transition: "0.5s", transform:"scale(1.55"}:{}}>Home</li>
            <li onClick={()=>{setMenu("about-me")}} style={menu=="about-me"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>About Me</li>
            <li onClick={()=>{setMenu("projects")}}  style={menu=="projects"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Projects</li>
            <li onClick={()=>{setMenu("achievements")}} style={menu=="achievements"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Achivements</li>
            <li onClick={()=>{setMenu("portfolio")}} style={menu=="portfolio"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Portfolio</li>
            <li onClick={()=>{setMenu("contacts")}} style={menu=="contacts"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Contacts</li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar