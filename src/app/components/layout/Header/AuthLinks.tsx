import Link from "next/link";

const AuthLinks = () => (
  <div className="uppercase hidden lg:flex items-center">
    <Link href="/auth/register" className="cursor-pointer">Register</Link>
    <span>/</span>
<Link href="/auth/login" className="cursor-pointer">Login</Link>
  </div>
);

export default AuthLinks;
