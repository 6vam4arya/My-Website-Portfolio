import {React,useState} from 'react'


import './Navbar.css'
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar' id="HOME">
        {/* <img src={logo} alt="" /> */}
        <ul className="nav-menu">
            <a className="anchor" offset={50} href="#HOME"><li onClick={()=>{setMenu("home")}} style={menu=="home"?{textDecoration : "underline" , transition: "0.5s", transform:"scale(1.55)"}:{}}>Home</li></a>
            <a className="anchor" offset={50} href="#ABOUT"><li onClick={()=>{setMenu("about-me")}} style={menu=="about-me"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>About Me</li></a>
            <a className="anchor" offset={50} href="#PROJECT"><li onClick={()=>{setMenu("projects")}}  style={menu=="projects"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Projects</li></a>
            <a className="anchor" offset={50} href="#ACHIEVEMENT"><li onClick={()=>{setMenu("achievements")}} style={menu=="achievements"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Achivements</li></a>
            <a className="anchor" offset={50} href="#HOME"><li onClick={()=>{setMenu("portfolio")}} style={menu=="portfolio"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Portfolio</li></a>
            <a className="anchor" offset={50} href="#CONTACT"><li onClick={()=>{setMenu("contacts")}} style={menu=="contacts"?{textDecoration : "underline", transition: "0.5s", transform:"scale(1.5)"}:{}}>Contact Me</li></a>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}

export default Navbar