"use client";

import React, { useState } from "react";
import Modal from "../components/Modal";
import Post from "../components/Post";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <main className="bg-slate-200 h-screen flex flex-col items-center">
      <Post />
    </main>
  );
}
