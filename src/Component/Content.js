import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { router } from "../router.js";

function Content() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center h-screen bg-[#1a2c38]">
            {/* You can add a Loader component here if needed */}
          </div>
        }
      >
        <Routes>
          {router?.map((route, ind) => (
            <Route
              key={ind}
              path={route.path}
              name={route.name}
              element={<route.element />}
            />
          ))}
          <Route path="/" element={<Navigate to="/myExpense" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Content;
