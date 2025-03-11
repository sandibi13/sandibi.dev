import React from "react";
import { notFound } from "next/navigation";

export default function BlogIDPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <h1>Blog ID Page</h1>
    </div>
  );
}
