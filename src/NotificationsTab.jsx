import Notification from "./Notification";

//* this component represent the tab where all notifications -messages- are listed
function NotificationsTab() {
    function handleToggle () {
        console.log("hi");
    }
    return (
      <div
        className="fixed inset-0 flex  items-center justify-center backdrop-blur-sm bg-black/30 invisible"
        onClick={handleToggle}
      >
        <div className="bg-white p-4 rounded-xl shadow-xl w-[700px] h-[500px]">
          <div className="modal-header flex justify-between h-fit text-2xl">
            <span>Notifications</span>
            <button className="cursor-pointer h-7 w-7 flex justify-center items-center aspect-square rounded-full text-gray-500">X</button>
          </div>
        <hr className="border my-3 border-gray-200"/>
        <Notification></Notification>
        </div>
      </div>
    );
}

export default NotificationsTab;