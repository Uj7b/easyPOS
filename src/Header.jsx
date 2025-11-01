import NavBar from "./NavBar";
import "./index.css"
export default function Header() {
  return (
    <div className="bg-white flex items-center py-4 px-5 justify-between">
      <a href="/" className="logo text-2xl">
        Easy <span className="pos">POS</span>
      </a>
      <NavBar></NavBar>
    </div>
  );
}
