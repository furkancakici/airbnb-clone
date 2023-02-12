import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const Headers = () => {
  const [searchInput, setSearchInput] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [noOfGuest, setNoOfGuest] = useState();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 bg-white shadow-md">
      {/* Logo */}
      <div className="relative flex items-center w-32 h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          sizes="128px"
          alt="AirbnbLogo"
          className="object-contain object-left cursor-pointer"
        />
      </div>

      {/* Search */}
      <div className="flex justify-between items-center py-2 md:border-2 md:shadow-sm rounded-full">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5861']}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guest</h2>

            <UserIcon className="h-8" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Headers;
