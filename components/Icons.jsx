import React from 'react'

export const Search = ({ size = 16, color = "black", }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='cursor-pointer'
            style={{
                width: `${typeof (size) === Number ? toString(size) : size}px`,
                height: `${typeof (size) === Number ? toString(size) : size}px`,
                color: color
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.1916 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    )
}


export const Cart = ({ size = 16, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='cursor-pointer'
            style={{
                width: `${typeof (size) === Number ? toString(size) : size}px`,
                height: `${typeof (size) === Number ? toString(size) : size}px`,
                color: color
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.3816c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
    )
}

export const Account = ({ size = 16, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='cursor-pointer'
            style={{
                width: `${typeof (size) === Number ? toString(size) : size}px`,
                height: `${typeof (size) === Number ? toString(size) : size}px`,
                color: color
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 16a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    )
}

export const Plus = ({ size = 16, color = "black" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='cursor-pointer'
            style={{
                width: `${typeof (size) === Number ? toString(size) : size}px`,
                height: `${typeof (size) === Number ? toString(size) : size}px`,
                color: color
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    )
}

export const Minus = ({ size = 16, color = "black" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='cursor-pointer'
            style={{
                width: `${typeof (size) === Number ? toString(size) : size}px`,
                height: `${typeof (size) === Number ? toString(size) : size}px`,
                color: color
            }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    )
}



export const Arrow = ({ size = 16, color = "black", type = "down" }) => {
    switch (type) {
        case 'down':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokelinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            )
        case 'up':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            )
        case 'right':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>

                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            )
        case 'left':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            )
    }
}

export const Socials = ({ size = 16, color = "black", type = "instagram" }) => {
    switch (type) {
        case 'instagram':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            )
        case 'gmail':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            )
        case 'facebook':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>

                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            )
        case 'twitter':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            )
        case 'linkedin':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            )
        case 'github':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className='cursor-pointer'
                    style={{
                        width: `${typeof (size) === Number ? toString(size) : size}px`,
                        height: `${typeof (size) === Number ? toString(size) : size}px`,
                        color: color
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            )
    }
}

