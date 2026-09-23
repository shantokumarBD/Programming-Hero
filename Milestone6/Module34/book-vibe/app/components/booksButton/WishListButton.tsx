'use client'

import { booksType } from "@/app/Type/type";
import { BookContext } from "@/Context/BookContext";
import { useContext } from "react";

interface BookBtnProps {
  book: booksType;
}

const WishListButton = ({book}: BookBtnProps) => {

  const {wishListBooks, setWishListBooks} = useContext(BookContext)

  const handleWishListBtn = () => {
    setWishListBooks([...wishListBooks, book])
  }
  return (
    <div>
      <button 
      onClick={handleWishListBtn}
      className="btn btn-outline px-8 h-12 text-base font-semibold">
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
