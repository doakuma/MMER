import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <h1 className="tit-logo">
            <img src="/images/logo.svg" alt="MMER" />
          </h1>
        </a>
      </Link>
      <nav className="menu-gnb">
        <ul>
          <li>
            <Link href="/recipe/recipeLists">
              <a className="btn-gnb active">Recipe</a>
            </Link>
          </li>
          <li>
            <Link href="/pantry/pantryLists">
              <a className="btn-gnb">Pantry</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="menu-util">
        <ul>
          <li>
            <Link href="/recipe/recipeRegist">
              <a className="btn-util">Add Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/user">
              <a className="btn-util">User</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
