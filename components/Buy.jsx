import React from 'react'
import Link from 'next/link';

const Buy = () => {
    return (
        <div className='flex flex-row item-center justify-center'>
            <div>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Buy Now</button>

            </div>
            <div>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"><Link href="/work">Add to cart</Link></button>

            </div>
        </div>
    )
}

export default Buy