import NavItem from './NavItem';

function NavBar(){
    const menuitems = [
        {
          title: 'Market',
          path: '/market'
        },
        {
          title: 'Trade',
          path: '/trade/Qwsogvtv82FCd'
        },
        {
          title: 'Derivatives',
          path: '/',
        },
        {
          title: 'Wealth',
          path: '/',
        },
        {
          title: 'Pro Version',
          path: '/',
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