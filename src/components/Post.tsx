import React, { useState } from "react";
import Modal from "./Modal";
import CustomModal from "./CustomModal";

export default function Post() {
  const [isClicked, setIsClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      <div className="bg-green-300 w-3/4 p-4 flex-col rounded-2xl">
        <div className="flex flex-row items-center">
          <div className="bg-blue-200 rounded-full border border-red-500 h-14 w-14 m-1"></div>
          <div className="flex flex-col">
            <h2 className="font-bold ">Profile Name</h2>
            <h3 className="text-gray-100 text-sm">Profile Title</h3>
          </div>
        </div>

        {/* POST */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus corporis saepe ex atque, aliquam repellendus
            similique dolorum maxime deserunt qui!
          </p>
        </div>
        {/* Like, Comment */}
        <div className="bg-red-500 w-full h-full flex flex-col">
          <div className="flex flex-row gap-4 justify-end">
            <div>LikesNumber</div>
            <div>CommentsNumber</div>
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
            <button onClick={handleOpen}>Comment</button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <CustomModal
          open={modalOpen}
          onClose={handleClose}
          title="{Users name} Post"
        >
          <div className="bg-green-300 w-full p-4 flex-col rounded-2xl">
            <div className="flex flex-row items-center">
              <div className="bg-blue-200 rounded-full border border-red-500 h-14 w-14 m-1"></div>
              <div className="flex flex-col">
                <h2 className="font-bold ">Profile Name</h2>
                <h3 className="text-gray-100 text-sm">Profile Title</h3>
              </div>
            </div>

            {/* POST */}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus corporis saepe ex atque, aliquam repellendus
                similique dolorum maxime deserunt qui!
              </p>
            </div>
            {/* Like, Comment */}
            <div className="bg-red-500 w-full h-full flex flex-col">
              <div className="flex flex-row gap-4 justify-end">
                <div>LikesNumber</div>
                <div>CommentsNumber</div>
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
                <button onClick={handleOpen}>Comment</button>
              </div>
            </div>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-md"
              placeholder="Write a comment..."
            />
          </div>
        </CustomModal>
      )}
    </div>
  );
}
