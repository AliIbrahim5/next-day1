import server from "../config";
import Articlelist from "../components/ArticleList";
export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcom to Next.js</h1>

      <Articlelist articles={articles} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
