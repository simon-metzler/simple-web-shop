import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Simple Web Shop
        </Link>
      </div>
      <div className="navbar-center">
        <Link href={"/about"} className="btn btn-ghost">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="btn btn-success">
          Buy
        </Link>
      </div>
    </div>
  );
}
