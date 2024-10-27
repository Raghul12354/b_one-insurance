const Navbar = () => {
  return (
    <header className="flex justify-between">
      <div>logo</div>
      <ul className="flex gap-5">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <button>Call us +1234567890</button>
    </header>
  );
};

export default Navbar;