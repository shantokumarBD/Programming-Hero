import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16 md:mt-24">
      <div className="container mx-auto px-5 md:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 text-base-content">
          
          {/* Brand Column */}
          <aside className="max-w-xs space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span>Book Vibe</span>
            </div>
            <p className="text-base-content/80 text-sm leading-relaxed">
              Freshen up your bookshelf with our curated collection of books. Discover your next great read today.
            </p>
          </aside>
          
          {/* Navigation Columns */}
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title uppercase tracking-widest text-base-content/60 font-bold mb-2">Explore</h6>
            <a className="link link-hover text-base-content/90">Books</a>
            <a className="link link-hover text-base-content/90">Authors</a>
            <a className="link link-hover text-base-content/90">Genres</a>
            <a className="link link-hover text-base-content/90">Bestsellers</a>
          </nav>
          
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title uppercase tracking-widest text-base-content/60 font-bold mb-2">About</h6>
            <a className="link link-hover text-base-content/90">About Us</a>
            <a className="link link-hover text-base-content/90">Contact</a>
            <a className="link link-hover text-base-content/90">Careers</a>
            <a className="link link-hover text-base-content/90">Blog</a>
          </nav>
          
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title uppercase tracking-widest text-base-content/60 font-bold mb-2">Legal</h6>
            <a className="link link-hover text-base-content/90">Terms of Service</a>
            <a className="link link-hover text-base-content/90">Privacy Policy</a>
            <a className="link link-hover text-base-content/90">Cookie Policy</a>
          </nav>
        </div>
        
        {/* Bottom Copyright */}
        <div className="py-6 border-t border-base-300 text-base-content/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Book Vibe</p>
          <div className="flex gap-4 text-sm font-medium">
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer