import { booksType } from "@/app/Type/type";
import Image from "next/image";
import Link from "next/link";

export interface ListedBookCardProps {
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
          className={`w-3.5 h-3.5 ${
            i <= stars ? "text-amber-400" : "text-gray-200"
          }`}
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

const ListedBookCard = ({ book }: ListedBookCardProps) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div
      className="group flex flex-row bg-white rounded-2xl border border-gray-100
                 shadow-sm hover:shadow-xl transition-all duration-300
                 hover:-translate-y-0.5 overflow-hidden w-full"
    >
      {/* Left accent bar */}
      <div className="w-1 flex-shrink-0 bg-gradient-to-b from-violet-400 to-indigo-500" />

      {/* Book Cover */}
      <div className="relative flex-shrink-0 w-[85px] sm:w-[100px] self-stretch min-h-[150px]">
        <Image
          src={image}
          alt={bookName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Book Details */}
      <div className="flex flex-col flex-1 min-w-0 px-4 py-3 gap-2">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full
                           bg-violet-50 text-violet-600 border border-violet-100"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2
          className="font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2
                     group-hover:text-violet-700 transition-colors duration-200"
        >
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-gray-400 text-xs">
          By <span className="font-semibold text-gray-600">{author}</span>
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {/* Pages */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-3 h-3 text-violet-400 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="text-[10px] text-gray-400">
              <span className="font-semibold text-gray-600">{totalPages}</span> pages
            </span>
          </div>

          {/* Year */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-3 h-3 text-violet-400 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span className="text-[10px] text-gray-400">
              <span className="font-semibold text-gray-600">{yearOfPublishing}</span>
            </span>
          </div>

          {/* Publisher - hide on very small */}
          <div className="hidden sm:flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-3 h-3 text-violet-400 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <span className="text-[10px] text-gray-400 truncate max-w-[100px]">
              <span className="font-semibold text-gray-600">{publisher}</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-100 mt-auto pt-2">
          {/* Footer: category + rating LEFT, button RIGHT */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Left: category + rating */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full
                           bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap"
              >
                {category}
              </span>
              <StarRating rating={rating} />
            </div>

            {/* Right: View Details button */}
            <Link href={`/books/${book.bookId}`}>
              <button
                className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full
                           bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-sm
                           hover:shadow-md hover:shadow-violet-200 hover:from-violet-600 hover:to-indigo-600
                           transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-2.5 h-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
