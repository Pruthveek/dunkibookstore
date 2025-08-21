"use client";
import Link from "next/link";
import Image from "next/image";
type BookTypeCardProps={
    title:string;
    image:string;
    link:string;
}
const CollectionCard: React.FC<BookTypeCardProps> = (
  {title,image,link}
 ) => {
  return (
    <div className="border border-gray-100 my-4 p-4 text-center hover:shadow-lg transition ease-in-out duration-500">
      <Link href={link}>
        <div className="relative w-full h-[120px] mb-3">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </Link>
    </div>
  );
};

export default CollectionCard;
