const NavHeader = () => {
  return (
    <>
      <nav className=" w-80 sm:w-96 mt-2 mx-auto ">
        <div className=" py-1  bg-white opacity-85 rounded-3xl  gap-5 flex justify-center ">
          <a
            href="#"
            className="md:text-sm text-xs font-semibold sm:p-1 hover:bg-gray-300 hover:rounded-3xl hover:transition-colors hover:duration-500  text-gray-900"
          >
            Experiencia
          </a>
          <a
            href="#"
            className="md:text-sm text-xs font-semibold sm:p-1  hover:bg-gray-300 hover:rounded-3xl hover:transition-colors hover:duration-500 text-gray-900"
          >
            Proyectos
          </a>
          <a
            href="#"
            className="md:text-sm text-xs font-semibold sm:p-1  hover:bg-gray-300 hover:rounded-3xl hover:transition-colors hover:duration-500 text-gray-900"
          >
            Sobre mi
          </a>
          <a
            href="#"
            className="md:text-sm text-xs font-semibold sm:p-1  hover:bg-gray-300 hover:rounded-3xl hover:transition-colors hover:duration-500 text-gray-900"
          >
            contacto
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
