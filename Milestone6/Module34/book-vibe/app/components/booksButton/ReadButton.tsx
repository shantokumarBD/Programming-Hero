"use client";

import { booksType } from "@/app/Type/type";
import { BookContext } from "@/Context/BookContext";
import { useContext } from "react";

interface BookBtnProps {
  book: booksType;
}

const ReadButton = ({ book }: BookBtnProps) => {
  const { readBooks, setReadBooks  } = useContext(BookContext);

  const handleReadBtn = () => {
    setReadBooks([...readBooks, book])
      
  };

  console.log(readBooks);
  
  return (
    <div>
      <button
        onClick={handleReadBtn}
        className="btn btn-primary text-white px-8 h-12 text-base font-semibold"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
