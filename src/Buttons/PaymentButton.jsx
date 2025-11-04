import { PiWalletFill } from "react-icons/pi";
function PaymentButton() {
  return (
    <button className="w-55 text-white gap-2 m-auto px-6 py-1.5 cursor-pointer flex justify-center items-center bg-[#1BA672] rounded-[5px]">
      <PiWalletFill /> Payments
    </button>
  );
}

export default PaymentButton;
