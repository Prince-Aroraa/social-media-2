import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/Post-List-Store'

function PostList() {
  const {postList} = useContext(PostListData)

  return (
    <>
      {postList.map((Posts)=><Post key={Posts.id} Posts = {Posts}/>)};
      
    </>
  )
}

export default PostList