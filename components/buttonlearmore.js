export const Readmore = ({children}) => {
    return<>
     
        <h1 className='
              capitalize text-neutral-800 border-neutral-800 border inline-block py-2 px-4 rounded-full
              hover:bg-indigo-500 transition duration-300 ease-in-out hover:border-indigo-500
              select-none z-10
              '>
          {children}
        </h1>
    </>
}