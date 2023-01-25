import Link from "next/link";
//============================

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <div>
      <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-blue-400 underline-offset-4 font-bold'}`}>
        {category}
      </Link>
    </div>
  );
}

export default NavLink;
