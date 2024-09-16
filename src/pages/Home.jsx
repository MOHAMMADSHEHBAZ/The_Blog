import React from 'react'
import { useState,useEffect } from 'react'
import service from '../appwrite/auth/config'
import { Container,PostCard } from '../components/index'
import img from '../assets/home.png'

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
return(
    <>
    <div className='w-full py-8 mt-4 text-center'>
             <Container>
                 <div>
                 <div className="flex flex-wrap mt-10">
                         <div className=" flex items-center justify-around p-2 w-full">
                             <h1 className=" flex items-center justify-center text-2xl h-96 font-bold ">
                                 <img src={img} className='w-full h-full' loading='lazy' alt="" />
                             </h1>
                             <h1 className=" p-24 w-2/3 text-2xl h-72 font-bold ">
                                 <p className='text-3xl text-slate-600'>Welcome to The Blog</p>
                                 <p className='text-xl text-slate-500 py-2 font-medium'>Discover a world of creativity through photos shared by people just like you! The Blog is your space to post, share, and explore moments captured in images.</p>
                             </h1>
                         </div>
                     </div>
                 </div>
             </Container>
         </div>
    </>
)
};
export default Home
