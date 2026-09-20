import { booksType } from "@/app/Type/type";
import Image from "next/image";
import Link from "next/link";

export interface BookCardProps {
  book: booksType;
}

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i <= stars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i <= stars ? 0 : 1.5}
          className={`w-3.5 h-3.5 ${i <= stars ? "text-amber-400" : "text-gray-300"}`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      <span className="ml-1 text-xs font-bold text-gray-500">{rating}</span>
    </div>
  );
};

const BookCard = ({ book }: BookCardProps) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <Link href={`/books/${book.bookId}`} className="block h-full">
      <div
        className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden
                   border border-gray-100 shadow-sm hover:shadow-2xl
                   transition-all duration-400 hover:-translate-y-2 cursor-pointer"
        style={{ transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)" }}
      >
        {/* Book Cover Image */}
        <div className="relative w-full h-[220px] overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-100 flex-shrink-0">
          <Image
            src={image}
            alt={bookName}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Category badge - top left */}
          <div className="absolute top-3 left-3">
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full
                         bg-white/90 backdrop-blur-sm text-violet-700 shadow-sm"
            >
              {category}
            </span>
          </div>

          {/* Rating badge - top right */}
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 bg-amber-400/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[11px] font-bold text-white">{rating}</span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full
                             bg-violet-50 text-violet-600 border border-violet-100"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className="font-bold text-gray-900 text-[15px] leading-snug line-clamp-2
                       group-hover:text-violet-700 transition-colors duration-200"
          >
            {bookName}
          </h2>

          {/* Author */}
          <p className="text-gray-400 text-xs">
            By{" "}
            <span className="font-semibold text-gray-600">{author}</span>
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Divider */}
          <div className="border-t border-dashed border-gray-100" />

          {/* Footer */}
          <div className="flex items-center justify-between pt-1">
            <StarRating rating={rating} />

            {/* Arrow icon */}
            <div
              className="w-7 h-7 rounded-full bg-violet-50 group-hover:bg-violet-600
                          flex items-center justify-center transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 text-violet-500 group-hover:text-white transition-colors duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-indigo-500
                     group-hover:w-full transition-all duration-500"
        />
      </div>
    </Link>
  );
};

export default BookCard;
