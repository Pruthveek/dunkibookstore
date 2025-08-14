import React from "react";
import Image from "next/image";

type AuthorCardProps = {
  authorName: string;
  authorImage: string;
  publishedBooksNum?: number;
};
const AuthorCard: React.FC<AuthorCardProps> = ({
  authorName,
  authorImage,
  publishedBooksNum,
}) => {
  return (
    <div>
      <Image
        src={authorImage}
        alt={authorName}
        height={380}
        width={320}
        className="object-cover transition-transform duration-300"
      ></Image>
      <div className="p-4 text-center">
        <p className="text-base ">{authorName}</p>
        <p className="text-sm text-gray-500">
          {publishedBooksNum ?? 0} Published Books
        </p>
      </div>
    </div>
  );
};
export default AuthorCard;