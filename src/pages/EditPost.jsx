import React from 'react'
import { useState,useEffect } from 'react'
import { Container,Post} from '../components/index'
import service from '../appwrite/auth/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
          }  else{
                    navigate('/all-posts')
                }
        },[slug,navigate])

  return (
    post ? (
        <div className='py-8'>
            <Container>
                <Post post={post}/>
            </Container>
        </div>
    ) : null
  )
}
export default EditPost
