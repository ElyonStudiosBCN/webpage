import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";

const posts = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const path = `../posts/${slug}.md`;
    const loader = posts[path];
    if (loader) {
      loader().then((text) => {
        setContent(marked(text));
      });
    } else {
      setContent("# Post no encontrado");
    }
  }, [slug]);

  return (
    <section className="section section-light container card">
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}