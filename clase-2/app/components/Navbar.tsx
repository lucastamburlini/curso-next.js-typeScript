import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-6 w-full max-w-4xl m-auto">
      <div>Logo</div>
      <div className="flex gap-8">
        <Link href={"/"}>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
