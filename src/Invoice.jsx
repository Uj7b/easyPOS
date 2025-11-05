import PaymentButton from "./Buttons/PaymentButton";
import PrintInvoiceButton from "./Buttons/PrintInvoiceButton";

function Invoice() {
  return (
    <div className="w-60 bg-white rounded-2xl p-4">
      <span className="text-[#90939B] text-[14px]">
        Invoice No: 123454 {new Date().toLocaleDateString("en-US")}
        {" | "}
        {new Date().toLocaleTimeString("en-US", { hour12: false })}
      </span>
      <hr className="border-t border-dotted border-gray-400" />
      <div>LOGO GOES HERE</div>
      <div className="flex justify-between">
        <span className="text-[#FF5733]">table 04</span>
        <span>order: #0029</span>
      </div>
      <div>Order 1</div>
      <hr />
      <div>Order 2</div>
      <hr />
      <div>Order 3</div>
      <hr />
      <div>Order 4</div>
      <hr />
      <hr />
      <div>Total items quantity $77</div>
      <PrintInvoiceButton />
      <PaymentButton />
    </div>
  );
}

export default Invoice;
