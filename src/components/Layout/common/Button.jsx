export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button className={"text-white font-bold" + className} onClick={onClick}>
      {children}
    </button>
  );
};
