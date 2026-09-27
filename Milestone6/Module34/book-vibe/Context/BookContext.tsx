'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { booksType } from "@/app/Type/type"

interface BookContextType {
    readBooks: booksType[]
    wishListBooks: booksType[]
    setReadBooks: Dispatch<SetStateAction<booksType[]>>
    setWishListBooks: Dispatch<SetStateAction<booksType[]>>
}

export const BookContext = createContext<BookContextType>({} as BookContextType)

const BookProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<booksType[]>([])
    const [wishListBooks, setWishListBooks] = useState<booksType[]>([])

    const sheredData = {
        readBooks,
        wishListBooks,
        setReadBooks,
        setWishListBooks
    }
  return <BookContext.Provider value={sheredData}>
    {children}
  </BookContext.Provider>
}

export default BookProvider