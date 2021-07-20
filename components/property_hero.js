



// here's the link to the video on youtube http://youtube.com/watch?v=UTYGjBhMp0g

const property_hero = (props) => {
    return (
      <div className="cursor-default relative z-0 top-0 w-full h-screen bg-hero-image">
        
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50" />
  
        <div className="max-w-screen-md mx-auto h-full relative z-100 flex flex-col justify-center items-center space-y-8 transform translate-y-12">
          <div className="text-white w-full border-b border-blue-200 border-dotted">
            <h1 className="text-5xl spacing tracking-tight">Discover your</h1>
            <h1 className="text-6xl tracking-wide">New Home</h1>
          </div>
          <div className="border w-full flex items-stretch m-0">
            <select className="rounded-none px-5 focus:outline-none transform scale-105 border-0 border-none">
              <option>Rent</option>
              <option>Buy</option>
            </select>
            <input type="text" className="bg-transparent transform text-white tracking-wide px-6 focus:outline-none flex-1 border-0 border-none" placeholder="Search Property Locations." />
            <button className="search-btn focus:outline-none h-12 w-12 transform scale-105 bg-white rounded-none px-2 flex justify-center items-center border-0 border-none">
              <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default property_hero;