export const Button = ({ children: text = "TEXT", type, className, onClick, ...props }) => {
    if (type === "outline")
        return (
            <button 
            onClick={e => onClick(e)}
            {...props}
            className={`min-w-[20rem] px-20 py-1 rounded-sm border-2 border-black font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase ${className ? className : ''} `}>
                {text}
            </button>
        )
    else
        return (
            <button 
            onClick={e => onClick(e)}
            {...props}
            className={`min-w-[20rem] px-20 py-1 rounded-sm border-2 border-black font-semibold bg-black text-white hover:bg-white hover:text-black transition-all duration-300 uppercase ${className ? className : ''} `}>
                {text}
            </button>
        )
}

export const BigButton = ({ children: text = "TEXT", type, className, onClick, ...props }) => {
    if (type === "outline")
        return (
            <button 
            onClick={e => onClick(e)}
            {...props}
            className={`min-w-[10rem] px-8 py-3 rounded-sm  border-2   border-black font-semibold hover:bg-black hover:text-white transition-all duration-300  ${className ? className : ''} `}>
                {text}
            </button>
        )
    else
        return (
            <button 
            onClick={e => onClick(e)}
            {...props}
            className={`min-w-[10rem] px-8 py-3 rounded-sm border-2 border-black font-semibold bg-black text-white hover:bg-white hover:text-black transition-all duration-300  ${className ? className : ''} `}>
                {text}
            </button>
        )
}
