import React from "react";
import { Loader2Icon } from "lucide-react";

function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Loader2Icon className="h-[150px] w-[150px] animate-spin" />
    </div>
  );
}

export default LoadingPage;
