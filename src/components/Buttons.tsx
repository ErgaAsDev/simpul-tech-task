import { FunctionComponent, useEffect, useState } from "react";
import TodoButton from "./TodoButton";
import ChatButton from "./ChatButton";

type ButtonsType = {
  onClose?: () => void;
};

const Buttons: FunctionComponent<ButtonsType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative flex flex-row items-start justify-start gap-[24px] max-w-full max-h-full text-left text-sm text-white font-inter">
      <div
        className="flex flex-col items-center justify-start gap-[14px] [&.animate]:animate-[0.3s_ease_0.1s_1_normal_forwards_slide-in-bottom] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="relative font-semibold">Task</div>
        <TodoButton />
      </div>
      <div
        className="flex flex-col items-center justify-start gap-[14px] [&.animate]:animate-[0.3s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="relative font-semibold">Inbox</div>
        <ChatButton />
      </div>
    </div>
  );
};

export default Buttons;
