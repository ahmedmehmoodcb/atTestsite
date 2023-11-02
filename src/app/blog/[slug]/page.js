import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

// import Blog from "@/components/Blog";
import API from "../../../api.json";

const page = ({ params }) => {
  return <Blog slug={params.slug} />;
};

export default page;

export async function generateStaticParams() {
  const posts = await fetch(`${API.BACKEND_API_URL}/blog/1`).then((res) =>
    res.json()
  );
  // return null;
  return posts?.blogs.map((post) => ({
    slug: post.slug.toString(),
  }));
}
