import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import CustomModal from "./CustomModal";
import axios from "axios";

export default function Post() {
  const [isClicked, setIsClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState([]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  console.log(modalOpen);
  return (
    <div>
      {userPosts.map((post) => (
        <div className="bg-green-300 w-[680px] p-4 flex-col rounded-2xl">
          <div className="flex flex-row items-center">
            <div className="bg-blue-200 rounded-full border border-red-500 h-14 w-14 m-1"></div>
            <div className="flex flex-col">
              <h2 className="font-bold ">{post.userName}</h2>
              <h3 className="text-gray-100 text-sm">{post.userTitle}</h3>
            </div>
          </div>

          {/* POST */}

          <div>
            <p>{post.post}</p>
          </div>
          {/* Like, Comment */}
          <div className="bg-red-500 w-full h-full flex flex-col pr-4">
            <div className="flex flex-row gap-4 justify-end">
              <div>{post.likes}</div>
              <div>{post.comments.length}</div>
            </div>
            <div className="flex flex-row gap-16 justify-center">
              <button
                className={`hover:bg-gray-300 rounded-md w-36 transition-all ${
                  isClicked &&
                  "transform: translate-y-0.5 transition-all: duration-0 "
                }`}
                onClick={handleClick}
              >
                Like
              </button>
              <button
                className={`hover:bg-gray-300 rounded-md w-36 transition-all ${
                  isClicked &&
                  "transform: translate-y-0.5 transition-all: duration-0 "
                }`}
                onClick={handleOpen}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <CustomModal
          open={modalOpen}
          onClose={handleClose}
          title="{Users name} Post"
        >
          {userPosts.map((post) => (
            <div className="bg-green-300 w-full p-4 flex-col rounded-2xl">
              <div className="flex flex-row items-center">
                <div className="bg-blue-200 rounded-full border border-red-500 h-14 w-14 m-1"></div>
                <div className="flex flex-col">
                  <h2 className="font-bold ">{post.userName}</h2>
                  <h3 className="text-gray-100 text-sm">{post.userTitle}</h3>
                </div>
              </div>

              {/* POST */}
              <div>
                <p>
                  {post.post}
                </p>
              </div>
              {/* Like, Comment */}
              <div className="bg-red-500 w-full h-full flex flex-col pr-4">
                <div className="flex flex-row gap-4 justify-end">
                  <div>{post.likes}</div>
                  <div>{post.comments.length}</div>
                </div>
                <div className="flex flex-row gap-16 justify-center">
                  <button
                    className={`hover:bg-gray-300 rounded-md w-36 transition-all ${
                      isClicked &&
                      "transform: translate-y-0.5 transition-all: duration-0 "
                    }`}
                    onClick={handleClick}
                  >
                    Like
                  </button>
                </div>
              </div>
              <textarea
                className="w-full h-24 p-2 border resize-none border-gray-300 rounded-md"
                placeholder="Write a comment..."
              />
            </div>
          ))}
        </CustomModal>
      )}
    </div>
  );
}

interface Comment {
  userName: string;
  likes: number;
  comment: string;
  timestamp: string;
}

interface Post {
  id: number;
  userName: string;
  userTitle: string;
  post: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
}

const userPosts = [
  {
    id: 1,
    userName: "JoeMan",
    userTitle: "Backend Bandit",
    post: "I am bingchilling man",
    timestamp: "2024-07-31T12:00:00Z",
    likes: 23,
    comments: [
      {
        userName: "Alex D.",
        likes: 3,
        comment: "Great post!",
        timestamp: "2024-07-31T12:30:00Z",
      },
    ],
  },
  {
    id: 2,
    userName: "Trum Pet",
    userTitle: "Frontend Firebrand",
    post: "The rock be cookin",
    timestamp: "2024-07-31T14:00:00Z",
    likes: 17,
    comments: [
      {
        userName: "Sam T.",
        likes: 1,
        comment: "Interesting perspective!",
        timestamp: "2024-07-31T14:45:00Z",
      },
    ],
  },
];
