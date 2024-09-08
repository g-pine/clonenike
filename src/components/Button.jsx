const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-monserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bgCoral text-white border-[#FF7F50]'} rounded-full ${fullWidth && 'w-full'}"}s`}>
      {label}  
      {iconURL && <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button
