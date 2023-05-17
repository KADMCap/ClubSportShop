const OrderSkeleton = () => {
  return (
    <div
      role="status"
      className="flex flex-row items-center justify-between w-full animate-pulse gap-4 px-4 py-2  h-[68px] rounded-md bg-gray-200 dark:bg-primaryDark md:rounded-lg"
    ></div>
  );
};

export default OrderSkeleton;
