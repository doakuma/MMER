import Image from "next/image";
import Link from "next/link";
const ListItem = ({
  imgSrc,
  imgWidth,
  imgHeight,
  menuNm,
  menuDate,
  menuId,
  menuTag,
}) => {
  return (
    <Link href={`/recipe/recipeDetail?menuId=${menuId}`}>
      <a>
        <dl className="list-item">
          <dt>
            <strong className="tit-item">{menuNm}</strong>
            <span className="info-item">+ {menuDate}days ago</span>
          </dt>
          <dd>
            <Image
              src={imgSrc}
              width={imgWidth}
              height={imgHeight}
              alt={menuNm}
            />
            <ul className="list-tag">
              {menuTag.map((row, idx) => {
                return <li key={idx}>#{row}</li>;
              })}
            </ul>
          </dd>
        </dl>
      </a>
    </Link>
  );
};

export default ListItem;
