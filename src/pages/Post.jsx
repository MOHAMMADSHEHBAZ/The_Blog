import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/auth/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import authService from "../appwrite/auth/auth";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [date, setDate] = useState('');
    
    const navigate = useNavigate();
    
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;
    
    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const user = await authService.getCurrentUser();
                setName(user.labels);
                setUser(user.name);
                setDate(user.$createdAt);
            }
            catch{
                toast.error(error.message);
                throw error;
            }
        }
        fetchUsers();
    },[])

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                toast.success("Post Deleted Successfully")
                navigate("/all-posts");
            }
            else{
                toast.error(error.message)
                console.log(error.message)
            }
        });
    };

    const save = () =>{
        toast.success("Post save successfully")
    }

    return post ? (
        <div className="py-8 mt-20">
            <Toaster/>
            <Container>
                <div className="w-full  bg-gray-50 flex justify-center mb-4 border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {/* {isAuthor && (
                        <div className=" right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )} */}
                </div>
                {isAuthor ? (
                        <div className="float-right">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 bg-green-600">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="mr-3 bg-red-500">
                                Delete
                            </Button>
                            <Link to={`/all-posts`}>
                                <Button bgColor="bg-green-500 ml-2" onClick={save} className="mr-3">
                                    Save
                                </Button>
                            </Link>
                        </div>
                    ):(
                        <Link to={`/all-posts`}>
                                <Button bgColor="bg-green-500 ml-2" className="mr-3 float-right">
                                    Back
                                </Button>
                        </Link>
                    )}
                    {name=='admin' && (
                        <>
                        <Button bgColor="bg-red-500" onClick={deletePost} className="mr-3 float-right bg-red-500">
                            Admin Delete
                        </Button> 
                        </>
                    )}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css text-blue-900 font-bold">
                    Created at {date.slice(0,10)}
                    {/* {parseInt(post.content)} */}
                    </div>
            </Container>
        </div>
    ) : null;
}