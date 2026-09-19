import { getBooks } from '@/app/lib/getBooks'
import Image from 'next/image'

export interface BookDetailsProps {
    params: Promise<{
        bookId: string
    }>
}

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
    const { bookId } = await params
    const bookData = await getBooks()
    const book = bookData.find((b) => b.bookId === Number(bookId))

    if (!book) {
        return (
            <div className="container mx-auto mt-20 text-center">
                <h2 className="text-3xl font-bold text-base-content">Book not found!</h2>
            </div>
        )
    }

    const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book

    return (
        <div className="container mx-auto px-4 md:px-0 mt-10 mb-20">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

                {/* Left — Book Image */}
                <div className="w-full md:w-[350px] lg:w-[420px] shrink-0 bg-base-200 rounded-3xl flex items-center justify-center py-14 px-10">
                    <Image
                        src={image}
                        alt={bookName}
                        width={250}
                        height={360}
                        className="w-auto h-[320px] object-cover drop-shadow-2xl rounded-xl"
                    />
                </div>

                {/* Right — Book Info */}
                <div className="flex-1 space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content leading-tight">
                        {bookName}
                    </h1>
                    <p className="text-lg text-base-content/70 font-medium">By <span className="text-base-content font-semibold">{author}</span></p>

                    <div className="divider my-1"></div>

                    {/* Tags & Category */}
                    <div className="flex flex-wrap items-center gap-2">
                        {tags?.map((tag, index) => (
                            <span key={index} className="badge badge-primary badge-outline font-semibold text-sm py-3 px-4">
                                {tag}
                            </span>
                        ))}
                        <span className="badge badge-secondary font-semibold text-sm py-3 px-4">
                            {category}
                        </span>
                    </div>

                    {/* Book Meta */}
                    <div className="grid grid-cols-2 gap-4 text-base mt-4">
                        <div className="space-y-3">
                            <div>
                                <span className="text-base-content/60 font-medium text-sm uppercase tracking-wide">Rating</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xl font-bold text-base-content">{rating}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <span className="text-base-content/60 font-medium text-sm uppercase tracking-wide">Total Pages</span>
                                <p className="text-xl font-bold text-base-content mt-1">{totalPages}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <span className="text-base-content/60 font-medium text-sm uppercase tracking-wide">Publisher</span>
                                <p className="text-base font-semibold text-base-content mt-1">{publisher}</p>
                            </div>
                            <div>
                                <span className="text-base-content/60 font-medium text-sm uppercase tracking-wide">Year Published</span>
                                <p className="text-xl font-bold text-base-content mt-1">{yearOfPublishing}</p>
                            </div>
                        </div>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="btn btn-primary text-white px-8 h-12 text-base font-semibold">
                            Read
                        </button>
                        <button className="btn btn-outline px-8 h-12 text-base font-semibold">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className="mt-12 bg-base-200 rounded-3xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-base-content mb-4">Review</h2>
                <p className="text-base-content/70 leading-relaxed text-base">{review}</p>
            </div>
        </div>
    )
}

export default BookDetailsPage