import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const result = props.replies.filter((x) => x.likeNum > 0);
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={`${props.userImagePath}`}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}> {`${props.likeNum} คน`}</span>
          </div>
        </div>
      </div>

      {/*render Reply here... */}
      {result.map((x, i) => (
        <Reply
          username={x.username}
          userImagePath={x.userImagePath}
          replyText={x.replyText}
          likeNum={x.likeNum}
          key={i}
        />
      ))}
    </div>
  );
}
