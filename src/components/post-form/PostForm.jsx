import React ,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select} from '../index'
// import RTE from '../RTE'
import service from '../../appwrite/auth/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toaster,toast } from 'react-hot-toast'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            // content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

            if (file) {
                service.deleteFile(post.featuredImage);
            }

            const dbPost = await service.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await service.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await service.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                    toast.success("Post Added Successfully");
                }
                else{
                    toast.error(error.message)
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
            else{
                toast.error(error.message);
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    const validateFileType = (file) => {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return validImageTypes.includes(file[0].type) || 
        toast.error("Only JPEG, PNG, or GIF formats are allowed");
    };
      const validateFileSize = (file) => {
          return file[0].size <= 512000 || 
          toast.error("File size should not exceed 500Kb");
      };

    return (
        
        <div className='m-28 border rounded-lg p-20 shadow-md'>
            <Toaster/>
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title *"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label=""
                    placeholder="Slug"
                    className="mb-4 hidden"
                    disabled
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {/* <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /> */}
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Image *"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post,validate: {
                        checkFileSize: validateFileSize,
                        checkFileType: validateFileType,
                      }, }    
                    )}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <p className='text-gray-600 dark:text-gray-300'>Status *</p>
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
        </div>
    );
}
