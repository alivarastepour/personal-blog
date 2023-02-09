import { Link } from "react-router-dom";
import { Wrapper } from "./BlogCard.styles";
import "./styles.scss";
const BlogCard = ({
  title,
  summery,
  id,
  urlPath,
}: {
  title: string;
  summery: string | null;
  id: number;
  urlPath: string | null;
}) => {
  return (
    <>
      {urlPath ? (
        <Wrapper className="blog-card">
          <Link to={`/blog/${urlPath}+${id}`}>
            <h1>{title}</h1>
            <div>{summery}</div>
          </Link>
        </Wrapper>
      ) : (
        <Wrapper className="blog-card soon">
          <div>
            <h3>{title}</h3>
          </div>
        </Wrapper>
      )}
    </>
  );
};
export default BlogCard;
