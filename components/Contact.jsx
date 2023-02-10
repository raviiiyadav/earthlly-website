import React from 'react'

const Contact = () => {
  return (
      <div className='max-w-[1240px] m-auto p-4 h-screen '>
        <h1 className='text-2xl font-bold text-center p-4 text-blue-600'>Suggestions</h1>
        <form className='max-w-[600px] m-auto'>
          <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3 border-gray-300 ' type="text" placeholder='Name' />
            <input className='border shadow-lg p-3 border-gray-300' type="email" placeholder='Email' />
          </div>
          <input className='border shadow-lg p-3 w-full my-2 border-gray-300' type="text" placeholder='Subject' />
          <textarea className='border shadow-lg p-3 w-full border-gray-300' cols="30" rows="10" placeholder='Message'></textarea>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500 mt-2">terms and conditions</a>.</label>
          </div>
          <button className='border border-gray-300 shadow-lg p-3 w-full'>Submit</button>
        </form>
      </div>
      )
}

      export default Contact