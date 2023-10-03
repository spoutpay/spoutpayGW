import Navigation from "../../components/Navigation";

const navItems = [
  {
    name: "Card",
    imageSrc: "/card-menu-icon.svg",
    href: "/checkout",
    navItemClass: "icon-dark text-white",
  },
  { name: "Bank", imageSrc: "/bank-menu-icon.svg", href: "/checkout/bank" },
  {
    name: "Transfer",
    imageSrc: "/transfer-menu-icon.svg",
    href: "/checkout/transfer",
  },
  { name: "USSD", imageSrc: "/ussd-menu-icon.svg", href: "/checkout/ussd" },
  {
    name: "PayAttitude",
    imageSrc: "/payattitude-menu-icon.svg",
    href: "/checkout/payattitude",
  },
  {
    name: "Paycode",
    imageSrc: "/spoutpay-logo.svg",
    href: "/checkout/paycode",
  },
  { name: "QR Code", imageSrc: "/qr-logo.svg", href: "/checkout/qrcode" },
];

export default function CheckoutLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-max">
      <div className="hidden md:block md:w-sidebar bg-white uppercase text-xs border-r-2 md:border-e-2 md:border-e-2 text-light-gray">
        <div className="flex flex-col">
          <h1 className="font-bold border-b-2 py-5 px-3 text-dark-blue">
            Select payment method
          </h1>
        </div>
        <Navigation navItems={navItems} />
      </div>
      <div className="flex-auto">
        <div className="flex justify-end align-center text-xs border-b-2 py-5 px-3">
          <div className="">
            <h6>emailaddress@gmail.com</h6>
            <p className="uppercase text-tulip text-end">pay NGN1000</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
