import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <p>Home page. Hello!</p>
      <Link to="/about">Link to about page</Link>
    </div>
  );
};
