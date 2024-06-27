const NavHeader = () => {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-full items-center justify-between  "
         
        >
     
          <div className="   flex  ">
            

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavHeader;
