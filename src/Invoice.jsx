import PaymentButton from "./Buttons/PaymentButton";
import PrintInvoiceButton from "./Buttons/PrintInvoiceButton";

function Invoice() {
  return (
    <div className="w-60 bg-cyan-500">
      <span>
        Invoice No: 123454 {new Date().toLocaleDateString("en-US")}
        {" | "}
        {new Date().toLocaleTimeString("en-US", { hour12: false })}
      </span>
      <hr className="border-t border-dotted border-gray-400" />
      <div>LOGO GOES HERE</div>
      <div>
        table 04
        order: #0029
      </div>
      <div>Order 1</div><hr />
      <div>Order 2</div><hr />
      <div>Order 3</div><hr />
      <div>Order 4</div><hr />
      <hr/>
      <div>
        Total
        items quantity $77
      </div>
      <PrintInvoiceButton/>
      <PaymentButton/>
    </div>
  );
}

export default Invoice;
