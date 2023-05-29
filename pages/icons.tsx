import { Button } from "@/components/Buttons/Button";
import {
  HomeIcon,
  BookmarkIcon,
  HeartIcon,
  ProductsIcon,
  SalesIcon,
  OrdersIcon,
  AuctionIcon,
  TicketIcon,
  PremiumIcon,
  LogoutIcon,
  CartIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronSelectIcon,
  FootballIcon,
  BasketballIcon,
  ShirtIcon,
  ShortIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  HeartOutlinedIcon,
  TennisIcon,
  ShoeIcon,
  RunningIcon,
  VolleyballIcon,
  OtherIcon,
  AllIcon,
  CheckIcon,
} from "@/components/Icons";
import { NotificationPopup } from "@/components/Modals/NotificationPopup";

const IconsPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row flex-wrap w-full h-auto gap-4 bg-white">
        <div className="flex flex-col">
          <HomeIcon /> <div className="text-sm">HomeIcon</div>
        </div>
        <div className="flex flex-col">
          <BookmarkIcon /> <div className="text-sm">BookmarkIcon</div>
        </div>
        <div className="flex flex-col">
          <HeartIcon /> <div>HeartIcon</div>
        </div>
        <div className="flex flex-col">
          <HeartOutlinedIcon /> <div>HeartOutlinedIcon</div>
        </div>
        <div className="flex flex-col">
          <ProductsIcon /> <div>ProductsIcon</div>
        </div>
        <div className="flex flex-col">
          <SalesIcon /> <div>SalesIcon</div>
        </div>
        <div className="flex flex-col">
          <OrdersIcon /> <div>OrdersIcon</div>
        </div>
        <div className="flex flex-col">
          <AuctionIcon /> <div>AuctionIcon</div>
        </div>
        <div className="flex flex-col">
          <TicketIcon /> <div>TicketIcon</div>
        </div>
        <div className="flex flex-col">
          <PremiumIcon /> <div>PremiumIcon</div>
        </div>
        <div className="flex flex-col">
          <LogoutIcon /> <div>LogoutIcon</div>
        </div>
        <div className="flex flex-col">
          <CartIcon /> <div>CartIcon</div>
        </div>
        <div className="flex flex-col">
          <StarIcon /> <div>StarIcon</div>
        </div>
        <div className="flex flex-col">
          <ChevronDownIcon /> <div>ChevronDownIcon</div>
        </div>
        <div className="flex flex-col">
          <ChevronLeftIcon /> <div>ChevronLeftIcon</div>
        </div>
        <div className="flex flex-col">
          <ChevronRightIcon /> <div>ChevronRightIcon</div>
        </div>
        <div className="flex flex-col">
          <ChevronUpIcon /> <div>ChevronUpIcon</div>
        </div>
        <div className="flex flex-col">
          <ChevronSelectIcon /> <div>ChevronSelectIcon</div>
        </div>
        <div className="flex flex-col">
          <AllIcon /> <div>AllIcon</div>
        </div>
        <div className="flex flex-col">
          <FootballIcon /> <div>FootballIcon</div>
        </div>
        <div className="flex flex-col">
          <BasketballIcon /> <div>BasketballIcon</div>
        </div>
        <div className="flex flex-col">
          <VolleyballIcon /> <div>VolleyballIcon</div>
        </div>
        <div className="flex flex-col">
          <TennisIcon /> <div>TennisIcon</div>
        </div>
        <div className="flex flex-col">
          <RunningIcon /> <div>RunningIcon</div>
        </div>
        <div className="flex flex-col">
          <ShirtIcon /> <div>ShirtIcon</div>
        </div>
        <div className="flex flex-col">
          <ShortIcon /> <div>ShortIcon</div>
        </div>
        <div className="flex flex-col">
          <ShoeIcon /> <div>ShoeIcon</div>
        </div>
        <div className="flex flex-col">
          <OtherIcon /> <div>OtherIcon</div>
        </div>
        <div className="flex flex-col">
          <SunIcon /> <div>SunIcon</div>
        </div>
        <div className="flex flex-col">
          <MoonIcon /> <div>MoonIcon</div>
        </div>
        <div className="flex flex-col">
          <MenuIcon /> <div>MenuIcon</div>
        </div>
        <div className="flex flex-col">
          <CloseIcon /> <div>CloseIcon</div>
        </div>
        <div className="flex flex-col">
          <CheckIcon /> <div>CheckIcon</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => {}}>Primary</Button>
        <Button onClick={() => {}} variant="secondary">
          Secondary
        </Button>
        <Button onClick={() => {}} variant="tertiary">
          Tertiary
        </Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => {}} size="small">
          <span className="font-bold">small</span>
        </Button>
        <Button onClick={() => {}} size="small">
          <span className="text-sm font-bold">S</span>
        </Button>
        <Button onClick={() => {}} size="small" variant="secondary">
          <span className="text-sm">XL</span>
        </Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => {}} size="small" variant="secondary">
          <span className="text-sm font-bold">S</span>
        </Button>
        <Button onClick={() => {}} size="small" variant="tertiary">
          <span className="text-sm font-bold">M</span>
        </Button>
        <Button onClick={() => {}} size="small">
          <span className="text-sm font-bold">L</span>
        </Button>
        <Button onClick={() => {}} size="small" variant="secondary">
          <span className="text-sm font-bold">XL</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button onClick={() => {}} variant="secondary">
            Medium
          </Button>
          <Button onClick={() => {}}>Add to cart</Button>
          <Button onClick={() => {}} variant="secondary">
            Details
          </Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => {}} size="large" variant="tertiary">
            Large
          </Button>
          <Button onClick={() => {}} size="large">
            Add to cart
          </Button>
          <Button onClick={() => {}} size="large" variant="secondary">
            Details
          </Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => {}} full>
            Full
          </Button>
          <Button onClick={() => {}} full variant="secondary">
            Full
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <NotificationPopup />
      </div>
    </div>
  );
};

export default IconsPage;
