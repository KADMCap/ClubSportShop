import {
  CartIcon,
  HeartIcon,
  NotificationIcon,
  SearchIcon,
} from "@/components/Icons";
import { useCartCount } from "@/hooks/useCartCount";
import { cartItems } from "@/redux/slices/cartSlice";
import {
  setOpenCart,
  setOpenFavoriteModal,
  setOpenNotification,
  setOpenSearchBar,
} from "@/redux/slices/headerSlice";
import { useAppDispatch } from "@/redux/store";

export const RightSide = () => {
  const dispatch = useAppDispatch();
  const { cartCount } = useCartCount();

  const toggleNotification = () => {
    dispatch(setOpenNotification());
  };
  const toggleFavouriteModal = () => {
    dispatch(setOpenFavoriteModal());
  };
  const toggleOpenCart = () => {
    dispatch(setOpenCart());
  };
  const toggleOpenSearchBar = () => {
    dispatch(setOpenSearchBar());
  };

  return (
    <div className="flex items-center justify-end w-full gap-2">
      <button
        className="bg-transparent outline-none sm:hidden"
        onClick={toggleOpenSearchBar}
      >
        <SearchIcon />
      </button>
      <button
        className="bg-transparent outline-none"
        onClick={toggleNotification}
      >
        <NotificationIcon />
      </button>
      <button
        className="bg-transparent outline-none"
        onClick={toggleFavouriteModal}
      >
        <HeartIcon />
      </button>
      <button className="bg-transparent outline-none" onClick={toggleOpenCart}>
        <CartIcon />
        <div className="absolute w-4 h-4 text-sm text-white rounded-full right-1 bottom-3 bg-primaryBlue">
          {cartCount}
        </div>
      </button>
    </div>
  );
};
