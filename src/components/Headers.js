import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

const Headers = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 bg-white shadow-md">
      {/* Logo */}
      <div className="relative flex items-center w-32 h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="AirbnbLogo"
          className="object-contain object-left cursor-pointer"
        />
      </div>

      {/* Search */}
      <div className="flex justify-between items-center py-2 md:border-2 md:shadow-sm rounded-full">
        <input
          type="text"
          placeholder="Start your search.."
          className="ml-5 w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Headers
