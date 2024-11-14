import React from "react";
import { useState, useEffect } from "react";
import service from "../appwrite/auth/config";
import { Container, PostCard } from "../components/index";
import img from "../assets/home.png";
import '../App.css'

const Home = () => {
  //     const[posts,setPosts] = useState([])
  //     useEffect(()=>{
  //         service.getPost().then((posts)=>{
  //             if(posts){
  //                 setPosts(posts.documents)
  //             }
  //         })
  //     },[])

  // if(posts.length === 0){
  //     return (
  //         <div className='w-full py-8 mt-4 text-center'>
  //             <Container>
  //                 <div>
  //                 <div className="flex flex-wrap">
  //                         <div className=" flex items-center justify-center p-2 w-full">
  //                             <h1 className=" flex items-center justify-center text-2xl h-72 font-bold hover:text-gray-500">
  //                                 Welcome to THE BLOG
  //                             </h1>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </Container>
  //         </div>
  //     )
  // }
  // return (
  //     <div className='w-full py-8'>
  //         <Container>
  //             <div className='flex flex-wrap'>
  //                 {posts.map((post) => (
  //                     <div key={post.$id} className='p-2 w-1/4'>
  //                         <PostCard {...post} />
  //                     </div>
  //                 ))}
  //             </div>
  //         </Container>
  //     </div>
  // )
  return (
    <>
      <div className="w-full bg-gray-50 mt-1 py-8 text-center">
        <Container>
          {/* <div>
                 <div className="flex flex-wrap mt-10">
                         <div className=" flex items-center justify-around flex-col-reverse lg:flex-row p-2 w-full">
                             <h1 className=" flex items-center justify-center text-2xl h-96 font-bold ">
                                 <img src={img} className='w-full h-full' loading='lazy' alt="" />
                             </h1>
                             <h1 className=" lg:p-24 w-2/3 text-2xl lg:h-72 font-bold ">
                                 <p className='text-3xl text-slate-600'>Welcome to The Blog</p>
                                 <p className='text-xl text-slate-500 py-2 font-medium'>Discover a world of creativity through photos shared by people just like you! The Blog is your space to post, share, and explore moments captured in images.</p>
                             </h1>
                         </div>
                     </div>
                 </div> */}
          <section>
            <div class="px-4 mt-12 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt=""
                    src="https://plus.unsplash.com/premium_photo-1682401101972-5dc0756ece88?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>

                <div class="lg:py-24">
                  <h2 class="text-3xl font-bold sm:text-4xl">
                    Welcome to The Blog
                  </h2>

                  <p class="mt-4 text-gray-600">
                  Discover a world of creativity through photos shared by people just like you! The Blog is your space to post, share, and explore moments captured in images.
                  </p>

                  <a
                    href="/login"
                    class="mt-8 inline-block rounded cursor-pointer bg-gray-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-50"
                    id="btn"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};
export default Home;
