import { NavLink } from "react-router-dom";
import  "./NavBar.css"
const NavBar = () => {
  const links = (
    <>
      <div className="flex gap-5 font-bold">
      <NavLink  to={'/'}>Home</NavLink>
      {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> */}
      <NavLink  to={'/statistics'}>Statistics</NavLink>
      <NavLink to={'/deshboard'}>Deshboard</NavLink>
      </div>
    </>
  );
  return (
    <div>
      <div className="flex justify-around items-center  bg-[#9538E2] rounded-t-lg text-white mt-5 mr-5 ml-5 p-2">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >{links}</ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className=" flex gap-5">
         <button className="btn button rounded-full"><img className="w-[30px] h-[30px]" src={"https://i.ibb.co.com/phw968t/icons8-cart-50.png"}></img></button>

         <button className="btn button rounded-full"><img className="w-[30px] h-[30px]" src={"https://i.ibb.co.com/Db6k2Bk/icons8-heart-50.png"}></img></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
