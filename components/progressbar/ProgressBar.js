import React from "react";
import "./progress-bar.css";

export default function ProgressBar() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-1/2 inline-block relative fluentProgressBar-waiting"></div>
    </div>
  );
}
