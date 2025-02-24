import React from "react";
import { notFound } from "next/navigation";

export default function ProjectIDPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <h1>Project ID Page</h1>
    </div>
  );
}
