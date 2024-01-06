import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://inksanctuary.vercel.app/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col  justify-center border-2 border-sky-800 rounded-xl w-fit p-4 mx-auto">
          <div className="my-4">
            <span className="text-xl text-blue-500 mr-4  font-semibold ">
              Book ID:
            </span>
            <span className="text-xl font-normal">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-500 font-semibold ">
              Title:
            </span>
            <span className="text-xl font-normal">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-500 font-semibold ">
              Author:
            </span>
            <span className="text-xl font-normal">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-500 font-semibold ">
              Publish Year:
            </span>
            <span className="text-xl font-normal">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-500 font-semibold ">
              Create Time:
            </span>
            <span className="text-xl font-normal">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-blue-500 font-semibold ">
              Last Update Time:
            </span>
            <span className="text-xl font-normal">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
