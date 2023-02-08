import BlogCard from "../BlogCard";
import Header from "../Header";
import { Wrapper } from "./Blog.styles";
import { data } from "./dummy";

const Blog = () => {
  return (
    <>
      <Header />
      <Wrapper>
        {data.map((item) => (
          <BlogCard
            id={item.id}
            summery={item.summery}
            title={item.title}
            key={item.id}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Blog;
