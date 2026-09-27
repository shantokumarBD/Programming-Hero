"use client";
import { BookContext } from "@/Context/BookContext";
import React, { useContext } from "react";
import ListedBookCard from "../components/shared/ListedBookCard";

const ListedBooksPage = () => {
  const { readBooks, wishListBooks } = useContext(BookContext);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Book Collection</h1>
        <p className="text-gray-500 mt-2">Track books you've read and your wishlist</p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-semibold"
          aria-label={`✅ Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readBooks.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-lg font-medium">No read books yet</p>
              <p className="text-sm mt-1">Start reading and mark books as read!</p>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-semibold"
          aria-label={`📚 Wishlist (${wishListBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishListBooks.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishListBooks.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-lg font-medium">Your wishlist is empty</p>
              <p className="text-sm mt-1">Add books you want to read!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
