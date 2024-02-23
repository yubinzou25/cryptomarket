import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavaBar() {
  const [hoverdIdx, setHoverdIdx] = useState(-1);

  const handleMouseEnter = (idx:number) => {
    setHoverdIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoverdIdx(-1);
  };
  const menuitems = [
    {
      title: 'Buy Crypto',
      path: '/buycrypto',
      children: [
        { title: "Action", path: "/" },
        { title: "Another action", path: "#" },
        { title: "Dropdown Submenu", path: "#" },
        { title: "404 Page", path: "/404" },
      ],
    },
    {
      title: 'Market',
      path: '/market',
    },
    {
      title: 'Trade',
      path: "/trade",
    },
    {
      title: "Derivatives",
      path: "/derivatives",
    },
    {
      title: "Wealth",
      path: "/wealth",
    },
    {
      title: "Pro Version",
      badge: true,
      path: "https://astroship-pro.web3templates.com/",
    },
  ];
  return (
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
                <div>
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="text-lg"
              ><span className="font-bold text-slate-800">DIGIF</span><span
                className="text-slate-500">INEX</span>
            </a>
            <div className="block lg:hidden">
              <div className="w-4 h-4 text-gray-800" />
            </div>
          </div>
          <div className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              {
                menuitems.map((item, index) => (
                  <>
                    <div
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      key={index}
                      className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                      <span>{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3"
                          stroke="currentColor"
                          className={`w-3 h-3 mt-0.5 ${hoverdIdx === index && 'rotate-180'}`}>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                    { item.children && 
                      <div
                        className="lg:absolute w-full lg:w-48 z-10 lg:left-0 origin-top-right"
                      >
                      <div
                        className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
                        {
                          item.children.map((child, childIdx) => (
                            <a
                              href={child.path}
                              className="py-1 text-gray-600 hover:text-gray-900"
                              key={childIdx}
                              >
                              {child.title}
                            </a>
                          ))
                        }
                      </div>
                    </div>
                    }
                  </>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex items-center gap-4">
            <a href="#">Log in</a>
            <Link to="#">Sign up</Link>
          </div>
        </div>
      </header>
  
  );
}

export default NavaBar