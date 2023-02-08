import { Link } from "react-router-dom";
import { Wrapper } from "./BlogCard.styles";
import "./styles.scss";
const BlogCard = ({
  title,
  summery,
  id,
}: {
  title: string;
  summery: string;
  id: number;
}) => {
  return (
    <>
      <Wrapper className="blog-card">
        <Link to={`blog/${id}`}>
          <h1>{title}</h1>
          <div>{summery}</div>
        </Link>
      </Wrapper>
    </>
  );
};
export default BlogCard;
