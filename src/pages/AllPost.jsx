import React from "react";
import service from "../appwrite/auth/config";
import { PostCard, Container } from "../components/index";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import authService from "../appwrite/auth/auth";
import { ThreeDots } from "react-loader-spinner";

const AllPost = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const user = await authService.getCurrentUser();
        setName(user.name);
        setLabel(user.labels);
      } catch {
        toast.error(error.message);
        throw error;
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {}, []);
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
      setLoading(false);
    }
  });

  return (
    <div className="w-full py-8 mt-20">
      <Toaster />
      {loading ? (
        <></>
      ) : (
        <p className="text-center top-0 text-2xl font-mono">
          All Posts
          {label == "admin" && <>(Admin)</>}
        </p>
      )}
      <Container>
        {loading ? (
          <p className="flex items-center justify-center text-center text-xl">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </p>
        ) : (
          <div className="lg:flex flex-wrap mt-5">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
