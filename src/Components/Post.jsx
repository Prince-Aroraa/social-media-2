
import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/Post-List-Store";

function Post({Posts}) {
  const {deletePost}=useContext(PostList)
  return (
    <div className="card post" style={{ width: "80%" }}>
      <div className="card-body">
        <h5 className="card-title">
          {Posts.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger dlt" onClick={()=>deletePost(Posts.id)}>
            <FaDeleteLeft />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{Posts.body}</p>
        
        <div className="Tags">
          {Posts.tags.map((tag) => (
            <a href="#" className="btn btn-primary Tag" key={tag}>
              {tag}
            </a>
          ))}
        </div>
        <div className="alert alert-success reaction" role="alert">
          {`This Post has been Reacted by ${Posts.reactions} People.`}
        </div>
      </div>
    </div>
  );
}

export default Post;
