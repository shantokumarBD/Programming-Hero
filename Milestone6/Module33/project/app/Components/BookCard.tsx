import Link from "next/link";

export interface BookProps {
    id: string;
    title: string;
    author: string;
    genre: string;
    price: number;
    publishedYear: number
}

const BookCard = ({book}: {book: BookProps}) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-200">
      <div className="card-body">
        <div className="flex justify-between items-start gap-4">
          <h2 className="card-title text-xl font-bold leading-tight">{book.title}</h2>
          <div className="badge badge-primary badge-sm whitespace-nowrap">{book.genre}</div>
        </div>
        
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-base-content/80 font-medium text-sm">By <span className="text-base-content font-semibold">{book.author}</span></p>
          <p className="text-xs text-base-content/60">Published in {book.publishedYear}</p>
        </div>
        
        <div className="divider my-1"></div>
        
        <div className="card-actions flex justify-between items-center mt-2">
          <div className="text-2xl font-extrabold text-success">
            ${book.price.toFixed(2)}
          </div>
          <div className="flex gap-2">
            <Link href={`/books/${book.id}`} className="btn btn-outline btn-primary btn-sm rounded-full px-4">
              Details
            </Link>
            <button className="btn btn-primary btn-sm rounded-full px-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard