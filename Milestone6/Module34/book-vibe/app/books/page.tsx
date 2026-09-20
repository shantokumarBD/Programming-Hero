import { getBooks } from "@/app/lib/getBooks";
import { booksType } from "@/app/Type/type";
import BookCard from "../components/shared/BookCard";

const BooksPage = async () => {
    const data = await getBooks()
  return (
    <div className="container mx-auto mt-10 px-4 md:px-0">    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((book: booksType) => {
                return <BookCard key={book.bookId} book={book}></BookCard>
            })}
        </div>
    </div>
  )
}

export default BooksPage