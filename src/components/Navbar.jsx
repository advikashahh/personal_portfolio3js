import { styles } from '../styles';
import { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { HashLink as Link } from 'react-router-hash-link';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logo from '../assets/Logo.png';  // Correctly import your logo

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  function clickHandler(link) {
    setActive(link.title);
    console.log(link.title);
    if (link.title === "Home") {
      window.scrollTo(0, 0);
    }
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex gap-2 items-center' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-5 h-5 object-contain' />
          <p className='text-white text-[18px] cursor-pointer font-bold'>Advika</p>
        </Link>

        <div className='flex flex-row gap-5 items-center'>
          <a href="mailto:thisisadvikaa@gmail.com" target='_blank' rel='noopener noreferrer'>
            <IoIosMail className='text-2xl hover:scale-110'></IoIosMail>
          </a>
          <a href="https://github.com/advikashahh" target='_blank' rel='noopener noreferrer'>
            <FaGithub className='text-2xl hover:scale-110'></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/advika-shah-989772218/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-2xl hover:scale-110'></FaLinkedin>
          </a>
          <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => clickHandler(link)}
              >
                <Link smooth to={`#${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile navigation bar */}
          <div className='md:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex md:hidden justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      clickHandler(link);
                      setToggle(!toggle);
                    }}
                  >
                    <Link smooth to={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End of mobile specific navbar */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
