const Experianecia = () => {
  return (
    <div className=" container md:px-4 px-8 pt-6 md:pt-28  border">
      <div className="grid grid-rows-2 grid-flow-col gap-2 py-4">
        <div className="row-span-2  ">
          <img
            width={90}
            className="ml-auto md:mr-3 rounded-full"
            src="https://avatars.githubusercontent.com/u/98001070?s=400&u=7f967690633232bf130d553bdbff0750ad4905ee&v=4"
          />
        </div>
        <div className="col-span-2 row-span-2 my-auto ">
          <div className="  border-2 hover:bg-gray-500 border-green-800 text-left  items-start justify-center w-44 px-3 py-1 text-xs text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
            Disponible para trabajar
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-left ">
            Soy Enrique Altuna
          </h1>
         
          <h5 className="text-sm font-semibold text-left">
            Ingeniero de sistemas
          </h5>
        </div>
      </div>
      <div className="text-left grid gap-4 text-lg sm:text-xl">
        <p className="">
          Cuentos con +6 años de experiencia en la programación web y desarrollo
          de aplicaciones, en este tiempo eh podido ir evolucionando y mejorando
          las herramientas para lograr salir adelante en cada proyecto.
        </p>
        <p className=""> Soy Venezolano, de barquisimeto estado lara.</p>
      </div>

      <div className="flex  gap-6 p-6">
        <a
          href="mailto:altuna90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
            <path d="M3 6l9 6l9 -6"></path>
            <path d="M15 18h6"></path>
            <path d="M18 15l3 3l-3 3"></path>
          </svg>
          Contáctame
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-altuna-9069a5251/"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Experianecia;
