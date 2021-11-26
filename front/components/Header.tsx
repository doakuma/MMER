import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <h1>
            <Image src="/images/logo.png" width={150} height={150} alt="MMER" />
          </h1>
        </a>
      </Link>
    </header>
  );
};
export default Header;
