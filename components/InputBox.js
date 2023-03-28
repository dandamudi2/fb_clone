import React from "react";
import Image from "next/legacy/image";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase";

function InputBox() {
  const { data: session } = useSession();

  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: new Date().getTime(),
      });
    } catch (err) {}
    inputRef.current.value = "";
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl 
    shadow-md text-gray-500 font-medium mt-6"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={session.user.image}
          className="rounded-full"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-group px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind,${session.user.name}`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="input-icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="input-icon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/ Video</p>
        </div>
        <div className="input-icon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling / Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
