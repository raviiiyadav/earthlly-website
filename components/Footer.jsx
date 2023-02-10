import React from 'react'
import Link from 'next/link';

const About = () => {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 | All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                </li>
                <li>
                    <Link href="/contact" className="mr-4 hover:underline">Contact</Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/raviiiyadav/" className="mr-4 hover:underline">LinkedIn</Link>
                </li>
                <li>
                    <Link href="https://github.com/raviiiyadav" className="hover:underline">GitHub</Link>
                </li>
            </ul>
        </footer>
    )
}

export default About