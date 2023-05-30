import {
  CartIcon,
  HeartIcon,
  NotificationIcon,
  SearchIcon,
} from "@/components/Icons";
import { useCartCount } from "@/hooks/useCartCount";
import {
  notificationIsOpen,
  setOpenCart,
  setOpenFavoriteModal,
  setOpenNotification,
  setOpenSearchBar,
} from "@/redux/slices/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export const HeaderActions = () => {
  const dispatch = useAppDispatch();
  const { cartCount } = useCartCount();
  const openNotification = useAppSelector(notificationIsOpen);

  const toggleNotification = () => {
    if (openNotification) {
      dispatch(setOpenNotification(false));
    } else {
      dispatch(setOpenNotification(true));
    }
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
