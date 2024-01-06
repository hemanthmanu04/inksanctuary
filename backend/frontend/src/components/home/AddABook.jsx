import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Add from "../../assets/add2.png";

const AddABook = ({ books }) => {
  return (
    <div className="border-2 rounded-md border-slate-700 bg-[#F1F0E8] text-[#2b2a29]">
      <table className="w-full border-separate border-spacing-2 p-2">
        <thead>
          <tr>
            <th className="border bg-[#bdbcb6] border-slate-600 rounded-md">
              No
            </th>
            <th className="border bg-[#bdbcb6]  border-slate-600 rounded-md">
              Title
            </th>
            <th className="border bg-[#bdbcb6] border-slate-600 rounded-md max-pmd:hidden">
              Author
            </th>
            <th className="border bg-[#bdbcb6] border-slate-600 rounded-md max-pmd:hidden">
              Publish year
            </th>
            <th className="border bg-[#bdbcb6] border-slate-600 rounded-md">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr className="h-8" key={book._id}>
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4">
        <div className="border-2 border-slate-600 rounded-md max-w-[800px] my-10 mx-auto flex flex-col bg-white items-center">
          <img src={Add} alt="illustation" className="w-[400px]" />
          <p className="text-3xl font-semibold text-slate-800 px-4 pb-4 text-center">
            It seems our bookshelf is empty! Be sure to add some literary gems
            by clicking the {"'+'"} button in the top right corner. Happy
            reading!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddABook;
