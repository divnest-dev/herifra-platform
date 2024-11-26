import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Register", href: "/register" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div>
        <h2>Herifra</h2>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">Hjem</Link>
          </li>
          <li>
            <Link href="/login">Login / Signup</Link>
          </li>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
