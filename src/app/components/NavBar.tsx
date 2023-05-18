import Link from 'next/link';

export default function NavBar() {
    return (
        <div>
      <nav style={{backgroundColor: '#147396'}} className="w-full h-14 shadow">
        <div className="flex items-center justify-between px-4 py-2">
          <div>
            <a href="#">
            </a>
            <div>
              <button className="">
              </button>
            </div>
          </div>
          <div>
            <div className="">
              <ul className="flex items-center space-x-6">
                <li className="text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white">
                  <Link href="/about">About US</Link>
                </li>
                <li className="text-white">
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/victor-valverde-fernandez-271a74276/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
   