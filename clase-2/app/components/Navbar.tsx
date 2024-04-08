import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-6 w-full max-w-4xl m-auto">
      <div>2° Class - Next.Js</div>
      <div className="flex gap-8">
        <Link href={"/"}>Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
