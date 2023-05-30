import {
  favoriteModalIsOpen,
  setOpenFavoriteModal,
} from "@/redux/slices/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CloseIcon } from "../Icons";
import ProductCard from "../Products/ProductCard";
import { useQuery } from "react-query";
import { Button } from "../Buttons/Button";

export const FavoriteModal = () => {
  const dispatch = useAppDispatch();
  const openFavoriteModal = useAppSelector(favoriteModalIsOpen);
  const { data } = useQuery(["favProducts"], () =>
    fetch(`https://naszsklep-api.vercel.app/api/products`).then((res) =>
      res.json()
    )
  );
  const onUserAction = (e: React.ChangeEvent<HTMLDivElement>) => {
    if (e.target.id === "background") {
      dispatch(setOpenFavoriteModal());
    }
  };

  const handleDialogClose = () => {
    dispatch(setOpenFavoriteModal());
  };
  return openFavoriteModal ? (
    <>
      <div
        id="background"
        className="fixed inset-0 z-50 flex justify-center h-full overflow-hidden outline-none focus:outline-none"
        onClick={(e: any) => onUserAction(e)}
      >
        <div className="w-full h-auto max-w-[1200px] m-6 ">
          {/*content*/}
          <div className="relative flex flex-col justify-start w-full h-full p-4 overflow-auto border-0 rounded-lg shadow-lg outline-none scrollbar-thin bg-secondaryLight scrollbar-track-white scrollbar-thumb-primaryBlue dark:bg-secondaryDark focus:outline-none">
            {/*header*/}
            <section className="flex flex-row items-center justify-between p-4">
              <p className="font-medium leading-6 text-black text-md dark:text-white">
                My favorite products
              </p>
              <button
                className="bg-transparent outline-none"
                onClick={handleDialogClose}
              >
                <CloseIcon />
              </button>
            </section>
            {/*body*/}
            <div className="grid grid-cols-2 gap-2 pb-4 lg:grid-cols-3 xl:grid-cols-4 dark:text-white">
              {data?.map((product: any) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id.toString()}
                    title={product.title}
                    image={product.image}
                    slug={"test"}
                    sale={false}
                    sizes={["xl"]}
                    prices={[]}
                    category={product.category}
                  />
                );
              })}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200 dark:border-slate-700">
              <Button onClick={handleDialogClose}>Close</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  ) : null;
};
