import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-column items-center justify-between p-10 sm:px-16">
        <div className="">
          <h1 className="font-jacquard text-[2vw]">H</h1>
        </div>
        <div className="hidden sm:flex sm:gap-5 sm:font-mono sm:font-thin sm:uppercase sm:text-[0.75rem]">
          <Link href="/blog">blog</Link>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
