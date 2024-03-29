import { Link } from "react-router-dom"

function LinkButton({to, buttonText, primaryColor}:{to:string, buttonText:string, primaryColor:boolean}) {
  return (
    <Link className={`font-medium rounded-lg px-4 py-2 whitespace-nowrap\
    ${primaryColor? 'bg-primary-default hover:bg-primary-hover': 'bg-gray-100 hover:bg-gray-200'}`} to={to}>
        {buttonText}
    </Link>
  )
}

export default LinkButton