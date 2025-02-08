export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] flex flex-col mx-auto p-6 md:p-14 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Logo Section */}
        <div className="w-full lg:w-[292px] mb-8 lg:mb-0">
          <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
          <p className="text-gray-600 text-justify mt-4">
            Our vision is to provide convenience and help increase your sales
            business
          </p>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-2 flex-col-reverse md:grid-cols-3 gap-12 justify-between lg:justify-start">
          {/* About */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">About</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                How it works
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Featured
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Partnership
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Business Relation
              </p>
            </div>
          </div>
          {/* Community */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">Community</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Events
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Blog
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Podcast
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Invite a friend
              </p>
            </div>
          </div>
          {/* Socials */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">Socials</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Discord
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Instagram
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Twitter
              </p>
              <p className="text-gray-600 pt-3 hover:underline cursor-context-menu">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="md:border-t md:border-t-gray-400 mt-8 pt-4 flex md:flex-row justify-between md:items-center flex-col-reverse text-nowrap">
        <p className="text-[#1A202C] text-left font-semibold pt-10 md:pt-0">
          &copy;2022 MORENT. All rights reserved.
        </p>
        <div className="flex items-center gap-10 md:gap-6 mt-4 md:mt-0 text-nowrap text-sm md:text-base">
          <p className="text-[#1A202C] font-semibold">Privacy & Policy</p>
          <p className="text-[#1A202C] font-semibold">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
