import Link from "next/link";

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <h1></h1>
        </div>
<Link legacyBehavior href={"/"}><a id="/">Home</a></Link>
<Link legacyBehavior href={"/login"}><a id="/login">Login</a></Link>
      </nav>
  );
  }
   
  export default Navbar;