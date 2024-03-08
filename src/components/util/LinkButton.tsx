
function LinkButton({to, buttonText, primaryColor}:{to:string, buttonText:string, primaryColor:boolean}) {
  return (
    <button className={`font-medium rounded-lg px-4 py-2 whitespace-nowrap \
    ${primaryColor? 'bg-primary-default hover:bg-primary-hover': 'hover:bg-gray-100'}`} to={to}>
        {buttonText}
    </button>
  )
}

export default LinkButton