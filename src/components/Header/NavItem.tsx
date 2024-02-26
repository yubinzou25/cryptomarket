import { useState } from 'react'

type NavItem = {
    title:string,
    path: string,
    children?: DropDownItem[] | undefined
}
type DropDownItem = {
    title:string,
    path: string
}

function NavItem({item}:{item:NavItem}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
  return (
    <div
        className="relative"
        aria-expanded={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                <span>{item.title}</span>
                <DropDownIcon
                    toggle={isHovered}
                />
            </div>
            {/* ${!isHovered && 'hidden'} */}
            { item.children &&
                <div className={`absolute block w-0 z-10 ${!isHovered && 'hidden'} transition-opacity duration-1000`} aria-expanded={isHovered}>
                    <div
                    className="w-full lg:w-48 z-10 lg:left-0 origin-top-right"
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
                </div>
            }
    </div>
  )
}
function DropDownIcon({toggle}:{toggle:boolean}){
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className={`w-3 h-3 mt-0.5 ${toggle && 'rotate-180'} transition-transform duration-500`}>
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
        </svg>
    )
}

export default NavItem