import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const TaskPage = () => {
  let query = useQuery();
  return <h1>{query.get("id")}</h1>;
};
