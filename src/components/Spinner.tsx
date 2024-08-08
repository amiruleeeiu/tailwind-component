const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
