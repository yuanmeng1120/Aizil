"use client"
import React, { useEffect, useState } from 'react';
import { FaStar, FaMoneyBillWave } from 'react-icons/fa';
import data from './web_data';

function App() {

    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedFavRange, setSelectedFavRange] = useState(null);

    const checkFavRange = (favCount, favRange) => {
        switch (favRange) {
          case '0-100':
            return favCount >= 0 && favCount <= 100;
          case '100-200':
            return favCount > 100 && favCount <= 200;
          case '200-500':
            return favCount > 200 && favCount <= 500;
          case '500-1000':
            return favCount > 500 && favCount <= 1000;
          case '1000+':
            return favCount > 1000;
          default:
            return true;
        }
      };

    const handleTagSelect = (tag) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      };
    
      const handleFavRangeSelect = (favRange) => {
        setSelectedFavRange(favRange);
      };
    
      const filteredData = data.filter((item) => {
        if (selectedTags.length === 0 && !selectedFavRange) {
          return true;
        } else {
          return (
            (selectedTags.length === 0 || selectedTags.some((tag) => item.tagsIndex.includes(tag))) &&
            (!selectedFavRange || checkFavRange(item.favCount, selectedFavRange))
          );
        }
      });
    
    
      return (
        <div className="p-4">
          <div className="mb-4 mx-20 my-20">
            <h2 className="text-xl font-bold mb-2">Filter by Tags:</h2>
            <div className="flex flex-wrap">
              {data.flatMap((item) => item.tagsIndex).filter((tag, index, self) => self.indexOf(tag) === index).map((tag, index) => (
                <button
                  key={index}
                  className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                    selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                  onClick={() => handleTagSelect(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 mx-20 my-20">
            <h2 className="text-xl font-bold mb-2">Filter by Favorites:</h2>
            <div className="flex flex-wrap">
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === null ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect(null)}
              >
                All
              </button>
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === '0-100' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect('0-100')}
              >
                0-100 fav
              </button>
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === '100-200' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect('100-200')}
              >
                100-200 fav
              </button>
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === '200-500' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect('200-500')}
              >
                200-500 fav
              </button>
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === '500-1000' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect('500-1000')}
              >
                500-1000 fav
              </button>
              <button
                className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
                  selectedFavRange === '1000+' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => handleFavRangeSelect('1000+')}
              >
                1000+ fav
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-20 my-20">
            {filteredData.map((item, index) => ( item.favCount > 10 &&

              <div key={index} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
                <div className="px-4 pt-4 flex justify-between items-center">
                  <a href={item.websiteUrl} className="text-2xl truncate font-bold text-blue-500 hover:underline mb-2 inline-block mr-2">
                    {item.toolName}
                  </a>
                  <div className="flex items-center space-x-2">
              </div>

                </div>
                <div className="px-4 flex flex-row items-stretch">
                <p className="flex items-center  pr-10 ">
                    <FaStar className="text-yellow-500" />
                    <strong>{item.favCount}</strong>
                    </p>
                    <p className="flex items-center">
                    <FaMoneyBillWave className="text-green-500" />
                    <strong>{item.pricing[0]}</strong>
                </p>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-gray-700 mb-2 line-clamp-2">{item.toolShortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default App;
    