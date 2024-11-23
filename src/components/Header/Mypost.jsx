import React, { useState, useEffect } from "react";
import service from "../../appwrite/auth/config";
import { PostCard, Container } from "../index";
import toast, { Toaster } from "react-hot-toast";
import authService from "../../appwrite/auth/auth";
import { Query } from "appwrite";
import { ThreeDots } from "react-loader-spinner";

const MyPost = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const user = await authService.getCurrentUser();
        const userId = user.$id;
        const userPosts = await service.getPosts1([
          Query.equal("userId", userId),
        ]);
        if (userPosts) {
          setPost(userPosts.documents);
        } else {
          toast.error("Failed to load posts.");
        }
      } catch (error) {
        toast.error("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <div className="w-full py-8 mt-20">
      <Toaster />
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
          <div className="flex flex-wrap">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <p>No posts created by you yet</p>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default MyPost;
