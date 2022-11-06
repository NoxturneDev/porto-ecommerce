import { useState } from "react"
import { Search } from "./Icons"
import { Arrow } from "./Icons"

export function Input({ placeholder = "placeholder", search='true', className, ...props }) {
    return (
        <div className={`flex items-center justify-center  h-max transition-smooth-medium min-w-[20rem] w-4/5 max-w-[30rem] border-b-2 border-b-basic-200 hover:placeholder-basic-300  py-3 ${className ? className : ''}`} {...props}>
            <input
                type="text"
                name=""
                placeholder={placeholder}
                className={`grow outline-none  w-full h-full `}
            />

            {
                search =='true' ?
                <span className="h-full ">
                {/* TODO: change to button submit form, it can be used to search query button submit and so on */}
                <Search size={16} />
            </span> : ""
             }
            
        </div>
    )
}

export function Dropdown({ children: text = "select", ...props }) {
    const [optionHidden, setOptionHidden] = useState(true)
    const toggleSelect = () => {
        if (!optionHidden) {
            setOptionHidden(currState => currState = true)
        } else {
            setOptionHidden(currState => currState = false)
        }
    }

    return (
        <>
            {/* button for toggling the select option */}
            <button className="transition-smooth-medium min-w-max w-[15rem] border-b-2 border-b-basic-200 hover:placeholder-basic-300 focus:border-b-black px-3 py-2 outline-none flex items-center justify-start"
                onClick={toggleSelect}>
                <span className="grow text-left">
                    {text}
                </span>
                <span className="h-full ml-3">
                    <Arrow type="down" size={16} />
                </span>
            </button>

            <div id="dropdown" className={`${optionHidden ? 'hidden' : ''} z-10 w-[15rem] bg-white rounded  shadow-md `}>
                <ul class="py-1 text-sm text-black" aria-labelledby="dropdownDefault">
                    {/* TODO : turns this option into forms, since it will be used for filter and sort option query */}
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-basic-300 hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-basic-300 hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-basic-300 hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-basic-300 hover:text-white">Dashboard</a>
                    </li>
                </ul>
            </div>
        </>
    )
}