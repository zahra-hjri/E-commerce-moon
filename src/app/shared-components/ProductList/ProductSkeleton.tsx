const ProductSkeleton = () => {
  return (
    <div className="border p-6 rounded shadow-2xl bg-gray-100 flex flex-col items-center animate-pulse">
      <div className="w-full h-60 bg-gray-300 rounded mb-4" />
      <div className="w-3/4 h-5 bg-gray-300 rounded mb-2" />
      <div className="w-1/2 h-5 bg-gray-300 rounded mb-4" />
      <div className="flex space-x-4 mt-auto">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};
export default ProductSkeleton;
