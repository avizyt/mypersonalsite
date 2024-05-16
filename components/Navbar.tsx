import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-xl">Avijit Biswas</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">AboutMe</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
