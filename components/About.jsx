import React from 'react'
import Link from 'next/link';

const About = () => {
    return (
        <div className="absolute inset-0 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
                <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fillOpacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                <defs>
                    <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#776FFF"></stop>
                        <stop offset="1" stopColor="#FF4694"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0">
                <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fillOpacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                <defs>
                    <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#776FFF"></stop>
                        <stop offset="1" stopColor="#FF4694"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h3 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">The Sustainable Living Starter Kit</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-300">The least any of us can do is to try and live sustainably. The Earthist sustainable living starter kit will be your perfect partner.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">It includes:</p>
                    <div className='space-y-4'>
                        <ul className="text-1xl font-bold tracking-tight text-white sm:text-2xl">
                            <li>Bamboo Toothbrush</li>
                            <li>Tongue Cleaner</li>
                            <li>Pack of Bamboo Earbuds</li>
                            <li>Neem Comb Detangler</li>
                            <li>Bamboo Beard comb</li>
                        </ul>

                        <button className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><Link href="/#gallery">Shop Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About