import React from 'react';
import { useGlobalContext } from '../Context';

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="px-4 py-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        My Tech News Posts
      </h2>

      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;

        return (
          <div
            key={objectID}
            className="bg-white shadow-md rounded-2xl p-4 my-4 w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              By{' '}
              <span className="font-medium text-indigo-600">{author}</span> |{' '}
              <span className="text-gray-700">{num_comments} comments</span>
            </p>

            <div className="flex gap-4 justify-around">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Read More
              </a>

              <button
                className="text-sm bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition"
                onClick={( ) => removePost(objectID)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Stories;
