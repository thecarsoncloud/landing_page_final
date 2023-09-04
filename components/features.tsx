export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-gray-400" d="M18 6h28v4H18zM12 6a2 2 0 00-2 2v46a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2H12zm0 6h40v34H12z"/>
              </svg>
              <h4 className="h4 mb-2">Schedule</h4>
              <p className="text-lg text-gray-400 text-center">schedule your survey with our scheduling team</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-current text-gray-400" strokeWidth="2" strokeLinecap="round" d="M30.5 52C43.806 52 54 41.806 54 28.5S43.806 5 30.5 5 7 15.194 7 28.5c0 4.5 1.5 8.41 4 11.417" fill="none" />
                <path className="stroke-current text-gray-400" strokeWidth="2" strokeLinecap="round" d="M47 47l15 15" />
              </svg>
              <h4 className="h4 mb-2">Survey</h4>
              <p className="text-lg text-gray-400 text-center">pre-installation & post installation surveys</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center mt-5 mb-0" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-10 mb-5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="stroke-current text-gray-300" strokeWidth="1" x="6" y="16" width="8" height="52" rx="1" />
                <rect className="stroke-current text-gray-300" strokeWidth="1" x="22" y="8" width="8" height="60" rx="1" />
                <rect className="stroke-current text-gray-300" strokeWidth="1" x="38" y="24" width="8" height="44" rx="1" />
                <rect className="stroke-current text-gray-300" strokeWidth="1" x="54" y="32" width="8" height="36" rx="1" />
              </svg>
              <h4 className="h4 mb-5 mt-0">Analyze</h4>
              <p className="text-lg text-gray-400 text-center">analyze with Scanifly</p>
              <a className="btn text-black bg-white hover:bg-gray-200 w-full mb-3 mt-3 sm:w-auto sm:mb-0 text-xs px-2.5 py-1.5" href="https://scanifly.com/" target="_blank" rel="noopener noreferrer">Learn more about Scanifly</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
