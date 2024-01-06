import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/Bookstable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://inksanctuary.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-[#F1F0E8] h-screen">
      <div className="md:pl-10 flex justify-between items-center flex-col sm:flex-row pb-6">
        <div>
          <h1 className="text-4xl lg:pb-2 md:text-7xl font-bold  text-center text-gray-800">
            The Ink Sanctuary
          </h1>
          <p className="pt-2 pb-6 md:pl-2 max-w-[350px] text-left font-sans font-medium ">
            Craft your bookshelf your way – add, edit, or delete books with
            ease. Happy Reading!
          </p>
        </div>
        <Link
          to="/books/create"
          className="flex font-semibold flex-row items-center "
        >
          <p className="border-b-2 border-gray-900">Add a book!</p>
          <MdOutlineAddBox className="text-sky-800 text-4xl mx-4" />
        </Link>
      </div>
      {loading ? <Spinner /> : <BooksTable books={books} />}
    </div>
  );
};

export default Home;
