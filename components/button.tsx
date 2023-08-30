"use client";

import { useCallback } from "react";

const Button = ({
  children,
  url,
  method = "GET",
  hover,
}: {
  children: string;
  url?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  hover?: React.ReactNode;
}) => {
  const incrementCount = useCallback(() => {
    if (url)
      fetch(url, {
        method,
        ...(method === "POST" ? { body: "Some Body" } : {}),
      })
        .then((res) => res.json())
        .then(console.log);
  }, [url, method]);

  return (
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg dark:from-blue-600 dark:to-blue-700 dark:shadow-xl dark:hover:from-blue-700 dark:hover:to-blue-800 dark:hover:shadow-2xl group"
      onClick={incrementCount}
    >
      {children}
      {hover && (
        <div className="absolute top-10 left-10 text-white hidden group-hover:block">
          {hover}
        </div>
      )}
    </button>
  );
};

export default Button;
