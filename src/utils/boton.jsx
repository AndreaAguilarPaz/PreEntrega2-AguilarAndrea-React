
export const Boton = ({ children, className = "", onClick }) => {

    return (
      <button
          onClick={onClick}
        className={`bg-purple rounded flex items-center py-2 px-4 text-center text-green font-semibold my-4 ${className}`}
      >
        {children}
      </button>
    );
  };
 