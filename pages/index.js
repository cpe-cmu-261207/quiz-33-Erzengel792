import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  const result = comments.filter((x) => x.likeNum > 0);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/*PostOwner*/}
        <PostOwner />
        {/*Comment*/}
        {result.map((x, i) => (
          <Comment
            username={x.username}
            userImagePath={x.userImagePath}
            commentText={x.commentText}
            likeNum={x.likeNum}
            replies={x.replies}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
