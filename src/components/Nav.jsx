import { mainlogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
// import Button from "./Button";
// export {navLinks} from "../constants"

// Other imports...

const Nav = () => {
    return (
      <header className="padding-x py-2 px-4 absolute w-full">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <img src={mainlogo} alt="LOGO" width={80} height={40} />
          </Link>
          <ul className="flex flex-1 justify-center items gap-16 max-lg:hidden">
            <li className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-coral-red cursor-pointer">
              <Link to="/">Home</Link>
            </li> 
  
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red">
                  {item.label}
                </a>
              </li>
            ))}
  
            <li className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red cursor-pointer">
            <a href="#FAQs">FAQs</a> 
              
            </li>
          </ul>
          <Link to="/login">
            <button className="cursor-pointer px-5 text-white py-3 border font-montserrat text-lh leading-none animate-bounce bg-coral-red rounded-full border-coral-red">
              Donate Now
            </button>
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Nav;
  

{/* <header className='padding-x py-8 absolute z-10 w-full shadow-lg'>
<nav className='flex items-center justify-between  '>
    <a href="/">
        <img src={mainlogo} alt="LOGO" width={130} height={30}/>
    </a>
    <ul className='flex-1 flex justify-center items gap-16 max-lg:hidden '>
{navLinks.map((item) =>(
<li key={item.label}>
    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'>
        {item.label}
    </a>
</li>
))}
</ul>
        </nav>
</header> */}
