function Invoice() {
  return (
    <div className="w-60">
      <span>
        Invoice No: 123454 {new Date().toLocaleDateString("en-US")}
        {" | "}
        {new Date().toLocaleTimeString("en-US", { hour12: false })}
      </span>
      <hr className="border-t border-dotted border-gray-400" />
    </div>
  );
}

export default Invoice;
