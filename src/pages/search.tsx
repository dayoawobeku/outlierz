import Carousel from '../components/carousel';

function Search() {
  return (
    <div className='bg-white  dark:bg-[#0c0c0c]'>
      <div className='w-full dark:bg-[#101010] py-12 px-12 md:pb-24 md:pt-48 md:px-24'>
        <div className=' h-80 max-w-screen-md mx-auto'>
          <div className='flex flex-row w-full justify-center items-center'>
            <input
              type='text'
              id='large-input'
              placeholder='Search players'
              className='flex w-3/4 p-4  h-20 text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 sm:text-md  dark:bg-gray-800 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white '
            />
            <button
              type='button'
              className='text-white text-base justify-center w-1/4 h-20 bg-[#050708] hover:bg-[#050708]/90  font-medium rounded-r-lg px-5 py-2.5 text-center flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 '>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='py-12 px-12 md:py-16 md:px-24  dark:bg-[#0c0c0c] -top-32 relative max-w-screen-lg mx-auto rounded-t-lg'>
        <h2 className='text-5xl dark:text-white pt-4 font-bold'>
          Featured Players
        </h2>
        <p className='text-lg dark:text-white pt-4 pb-4'>
          Check out the latest featured professionals available for
          collaborating this week
        </p>
        <Carousel />
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-12'>
          <h2 className='text-5xl dark:text-white pt-12 font-bold'>
            Scout more players
          </h2>
          <p className='text-lg dark:text-white pt-4 pb-12'>
            Check out the latest players available for collaborating this week
          </p>

          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#0f0f0f] dark:text-gray-400 '>
              <tr className='text-center'>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Player
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3 '>
                  Goals
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Team
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Position
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Age
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
                  Market Value
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
                  Matches Played
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
                  Minutes Played
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
                  Birth Country
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Foot
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Height
                </th>
                <th scope='col' className='font-bold text-sm px-6 py-3'>
                  Weight
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>

              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
              <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    K. Mbappe
                  </span>
                </th>
                <td className='px-6 py-4 '>45</td>
                <td className='px-6 py-4'>PSG</td>
                <td className='px-6 py-4 '>CF, LWF</td>
                <td className='px-6 py-4 '>23</td>
                <td className='px-6 py-4 '>€ 160M</td>
                <td className='px-6 py-4 '>35</td>
                <td className='px-6 py-4 '>1235</td>
                <td className='px-6 py-4 '>🇫🇷</td>
                <td className='px-6 py-4 '>right</td>
                <td className='px-6 py-4 '>178</td>
                <td className='px-6 py-4 '>73</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search;
