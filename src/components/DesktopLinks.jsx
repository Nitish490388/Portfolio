import { Link } from "react-router-dom";
function DesktopNavLinks() {
  return (
    <ul className="absolute right-0 flex flex-row space-x-6">
      <li className="btn-primary ">
        <Link href="/">Home</Link>
      </li>
      <li className="btn-primary ">
        <Link href="/">About</Link>
      </li>
      <li className="btn-primary ">
        <Link href="/">Contacts</Link>
      </li>
      <li className="btn-primary ">
        <Link href="/">Projects</Link>
      </li>
    </ul>
  );
}

export default DesktopNavLinks;