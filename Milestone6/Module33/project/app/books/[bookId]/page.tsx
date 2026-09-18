import Link from "next/link";

interface PageProps {
    params: Promise<{ bookId: string }>;
}

const BookDetailsPage = async ({ params }: PageProps) => {
    const {bookId} = await params
    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const data = await res.json()

  return (
    <div className="container mx-auto px-4 mt-24 mb-10 max-w-3xl">
      <Link href="/books" className="btn btn-outline mb-6">
        &larr; Back to Books
      </Link>
      
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-8">
          <h1 className="card-title text-4xl mb-2">{data.title}</h1>
          <p className="text-xl text-base-content/80 mb-4">By <span className="font-semibold text-base-content">{data.author}</span></p>
          
          <div className="flex gap-2 mb-6">
            <span className="badge badge-primary badge-lg">{data.genre}</span>
            <span className="badge badge-outline badge-lg">Published: {data.publishedYear}</span>
          </div>
          
          <div className="divider"></div>
          
          <p className="text-base-content/70 my-4 leading-relaxed">
            Discover the fascinating world of "{data.title}". A compelling {data.genre.toLowerCase()} that has captivated readers since its publication in {data.publishedYear}.
          </p>
          
          <div className="card-actions justify-between items-center mt-4 pt-4">
            <div className="text-3xl font-bold text-success">
              ${Number(data.price).toFixed(2)}
            </div>
            <button className="btn btn-primary px-8">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
