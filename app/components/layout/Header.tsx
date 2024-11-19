import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div>
        <h2>Herifra</h2>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <ul>
          <li>Hjem</li>
          <li>Login / Signup</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
}
