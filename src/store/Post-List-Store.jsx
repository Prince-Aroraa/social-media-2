import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList,action)=>{
    let newPostList = currPostList
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter(Post=>Post.id!==action.payload.id);
    } else if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const DEFAULT_POST_LIST = [{
        id: '1',
        title: 'Going to japan',
        body:'feeling happy to meet anime k 14 in japan. japani gudiya and japani tel is good for health and ding dong',
        reactions:'50',
        userId:'user-69',
        tags:['feeling', 'awesome', 'travelling']
      },
      {
        id: '2',
        title: 'Going to Marry',
        body:'I can not believe i am going to marry and also i have to celebrate my suhageraat tonight, and i dont have japani tel and rubber',
        reactions:'100',
        userId:'user-96',
        tags:['Excited', 'Congratulation', 'Suhagraat']
      },];

  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

  const addPost = (userId,title,content,engagement,tags)=>{
    dispatchPostList({
        type: "ADD_POST",
        payload:{
            id:Date.now(),
            title: title,
            body:content,
            reactions:engagement,
            userId:userId,
            tags:tags
        }
    })
  };

  
  const deletePost = (postId)=>{
    dispatchPostList({
        type: "DELETE_POST",
        payload:{
            id:postId
        }
    })
  };



  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );

  
};

export default PostListProvider;
