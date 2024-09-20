import React from 'react'

export default function Form() {
  return (
    <div>
      <div className="flex justify-center items-center ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your user name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Heading
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Heading name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contactNum"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNum"
            name="contactNum"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}
