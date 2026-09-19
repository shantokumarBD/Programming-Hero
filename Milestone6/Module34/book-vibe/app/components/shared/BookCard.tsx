import { booksType } from "@/app/Type/type";
import Image from "next/image";
import Link from "next/link";

export interface BookCardProps {
  book: booksType;
}

const BookCard = ({ book }: BookCardProps) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <Link href={`/books/${book.bookId}`}>
      <div className="card bg-base-100 shadow-xl border border-base-200 transition-transform duration-300 hover:scale-105 cursor-pointer">
        <figure className="bg-base-200 py-8 rounded-t-2xl">
          <Image
            src={image}
            alt={bookName}
            width={130}
            height={190}
            className="h-[200px] w-auto object-cover rounded-md drop-shadow-md"
          />
        </figure>
        <div className="card-body p-6">
          <div className="flex gap-2 flex-wrap mb-2">
            {tags?.map((tag: string, index: number) => (
              <div
                key={index}
                className="badge badge-primary badge-outline font-semibold text-xs py-3 px-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title text-xl font-bold text-base-content mt-2 line-clamp-1">
            {bookName}
          </h2>
          <p className="text-base-content/70 font-medium">By : {author}</p>

          <div className="divider my-2"></div>

          <div className="card-actions justify-between items-center text-base-content/80 font-medium text-sm">
            <div>{category}</div>
            <div className="flex items-center gap-2">
              <span>{rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-orange-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
{
}
