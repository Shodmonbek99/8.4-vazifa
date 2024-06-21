import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg p-4">
      <div className="navbar-start">
        <Link href="/" legacyBehavior>
          <a className="btn btn-ghost normal-case text-xl">MY MARKET</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/logout" legacyBehavior>
          <a className="btn btn-primary">Logout</a>
        </Link>
      </div>
    </div>
  );
}
