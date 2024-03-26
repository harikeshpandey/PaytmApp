import { Link } from "react-router-dom";

export default function BottomWarning({ label, buttontext, to }) {
  return (
    <div className="py-2 text-sm flex justify-centre">
      <div>{label}</div>
      <Link to={to} className="pointer underline pl-1 cursor-pointerm ">
        {buttontext}
      </Link>
    </div>
  );
}
