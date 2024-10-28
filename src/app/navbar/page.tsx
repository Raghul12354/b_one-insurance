import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-around items-center h-20 shadow-2xl">
      <div>
        <Image
          src="/b-one_logo.png"
          alt="B-One_Logo"
          width={120}
          height={120}
        />
      </div>
      <ul className="flex gap-5 text-lg font-medium">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <button className="btn h-14 text-lg px-4">Call us +1234567890</button>
    </header>
  );
};

export default Navbar;