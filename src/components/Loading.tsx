function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75 backdrop-blur-sm">
      <div className="w-14 h-14 border-[6px] border-white border-b-red-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
