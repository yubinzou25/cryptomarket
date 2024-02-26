import NavItem from './NavItem';

function NavBar(){
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
          children: [
            { title: "Action", path: "/" },
            { title: "Another action", path: "#" },
            { title: "Dropdown Submenu", path: "#" },
            { title: "404 Page", path: "/404" },
          ],
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
          path: "https://astroship-pro.web3templates.com/",
        },
      ];
    return (
        <nav className="hidden lg:flex w-full lg:w-auto mt-2 lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:gap-3">
                {menuitems.map((item, index) => {
                    return (
                        <li
                            key={index}
                            >
                        <NavItem
                            item={item}
                            />
                        </li>
                    )
                })}
            </ul>
            

        </nav>
    );
}

export default NavBar