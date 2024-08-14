import React, { useContext, useRef } from "react";
import {PostList} from "../store/Post-List-Store";

function CreatePost() {
    const {addPost}=useContext(PostList);

    const userIdElement = useRef();
    const titleElement = useRef();
    const contentElement = useRef();
    const engagementElement = useRef();
    const tagsElement = useRef();

    const handlOnClick = (event)=>{
        event.preventDefault();
        const userId = userIdElement.current.value
        const title = titleElement.current.value
        const content = contentElement.current.value
        const engagement = engagementElement.current.value
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = ""
        titleElement.current.value = ""
        contentElement.current.value = ""
        engagementElement.current.value = ""
        tagsElement.current.value = ""

        
        addPost(userId,title,content,engagement,tags);
    };

  return (
    <form className="create-post" onSubmit={handlOnClick}>
      <div className="mb-3 create-post">
        <label htmlFor="UserId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          placeholder="Enter your User Id here"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3 create-post">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Title"
          placeholder="How are you feeling today..."
          ref={titleElement}
        />
      </div>
      <div className="mb-3 create-post">
        <label htmlFor="Content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="Content"
          placeholder="Tell me more about it..."
          rows="4"
          ref={contentElement}
        />
      </div>
      <div className="mb-3 create-post">
        <label htmlFor="Engagement" className="form-label">
          Engagement
        </label>
        <input
          type="text"
          className="form-control"
          id="engagement"
          ref={engagementElement}
        />
      </div>
      <div className="mb-3 create-post">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="Tags"
          placeholder="Enter Tags here with space in-between"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary create-post">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
