import BlogCard from "../BlogCard";
import Header from "../Header";
import { Wrapper } from "./Blog.styles";
import { data } from "./dummy";

const Blog = () => {
  let dataToRender = [];
  if (data.length < 6) {
    dataToRender.push(...data);
    for (let index = 6 - data.length; index >= 0; index--) {
      dataToRender.push({
        title: "به زودی...",
        summery: null,
        urlPath: null,
        id: index,
      });
    }
  }
  return (
    <>
      <Header />
      <Wrapper>
        {dataToRender.map((item) => (
          <BlogCard
            id={item.id}
            urlPath={item.urlPath}
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
