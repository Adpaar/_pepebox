import { Routes, Route } from "react-router-dom";
import { Soap, Hexa, /* About */ NotFound } from "../pages/index";

export const Router = () => {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Soap />} />
        <Route path="/hexa" element={<Hexa />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
{
  /* <Route path="/about" element={<About />} /> */
}
