export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800">
      <h1 className="text-xl font-bold text-teal-400">MTA Portfolio</h1>
      <ul className="flex gap-6">
        <li className="hover:text-teal-400 cursor-pointer">Home</li>
        <li className="hover:text-teal-400 cursor-pointer">Projects</li>
        <li className="hover:text-teal-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
