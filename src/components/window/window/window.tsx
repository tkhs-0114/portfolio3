interface WindowProps {
  children?: React.ReactNode;
}

export const Window = ({ children }: WindowProps) => {
  return (
    <div
      className={`bg-gray-900/75 text-white w-full h-full rounded-md p-2 border-2 border-transparent hover:border-cyan-400 transition-colors duration-200`}
    >
      {children}
    </div>
  );
};
