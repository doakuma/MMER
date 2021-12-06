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
      <nav className="menu-gnb">
        <ul>
          <li>
            <Link href="/recipe/recipeLists">
              <a className="btn-gnb active">Recipe List</a>
            </Link>
          </li>
          <li>
            <Link href="/pantry/pantryLists">
              <a className="btn-gnb">Pantry</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
