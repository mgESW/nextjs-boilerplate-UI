import Link from "next/link";
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <h1>
          </h1>
        </div>
<Link legacyBehavior href={"/"}><a id="/">Home</a></Link>
<Link legacyBehavior href={"https://vision-aid-prototype-v1.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fvision-aid-prototype-v1.vercel.app%2F"}><a id="https://vision-aid-prototype-v1.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fvision-aid-prototype-v1.vercel.app%2F">Login</a></Link>
      </nav>
  );
  }
   
  export default Navbar;