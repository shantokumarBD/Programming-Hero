import React from 'react'
import BookCard, { BookProps } from '../Components/BookCard'

const getBooks = async(): Promise<BookProps[]> => {
    try {
        const res = await fetch("http://localhost:5000/books", 
         {cache:"no-store"}
        )
        if(!res.ok){
            throw new Error("faild to fatched")
        }
        return res.json()
    } catch (error) {
        console.log(error);
        return [];
    }
}

const BooksPage = async() => {

    const data = await getBooks()

  return (
    <div className="container mx-auto px-4 mt-24 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">Available Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(book => <BookCard key={book.id} book={book}></BookCard>)}
        </div>
    </div>
  )
}

export default BooksPage