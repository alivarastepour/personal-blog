import { useParams } from "react-router-dom";
import Header from "../Header";
import { articles } from "../Blog/dummy";
import { Wrapper } from "./BlogArticle.styles";
import "./styles.scss";
const BlogArticle = () => {
  const { blogID } = useParams();
  const id = blogID ? +blogID.split("+")[1] : 0;
  const article = articles.filter((article) => article.id === id)[0];
  return (
    <>
      <Header />
      <Wrapper className="blog-article">
        <h1>{article.title}</h1>
        <div>
          {article.body.map((section) => {
            return (
              <div key={section.id}>
                {section.topic && <h2>{section.topic}</h2>}
                <div className="article-detail">{section.detail}</div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default BlogArticle;
