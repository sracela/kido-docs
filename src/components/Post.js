import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch((e) => console.log("error", e));
  }, []);

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-4xl flex justify-center">Documentation</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Full documentation reference about KIDO webapp.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData.length !== 0 && postData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-400"
                  key={index}
                >
                  <img
                    src={post.mainImage?.asset.url}
                    alt={post.mainImage?.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-gray-100 text-lg font-blog px-3 py-4 bg-opacity-75 rounded bg-pink-700 ">
                      {post.title}
                    </h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
