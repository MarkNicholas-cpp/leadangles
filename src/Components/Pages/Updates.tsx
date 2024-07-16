import BlogPostCard from "../Utils/BlogPostCard";

const blogPosts = [
  {
    date: "22 November, 2023",
    posts: [
      {
        imageUrl: "https://angular.dev/assets/images/ng-image.jpg",
        tag: "Angular",
        tagColor: "bg-primary",
        title: "Refreshed main menu navigation",
        description:
          "Better align your teams and partners around standardized product principles and consistent implementation standards using the latest architecture shape pack.",
      },
      {
        imageUrl: "https://reactjs.org/logo-og.png",
        tag: "React",
        tagColor: "bg-blue-500",
        title: "New React features",
        description:
          "Discover the latest updates and features in the React ecosystem, enhancing your development experience and improving performance.",
      },
    ],
  },
  {
    date: "21 November, 2023",
    posts: [
      {
        imageUrl:
          "https://img-c.udemycdn.com/course/750x422/4422780_304c_2.jpg",
        tag: "Express.js",
        tagColor: "bg-gray-800",
        title: "Express.js v5 released",
        description:
          "Explore the new features and improvements in Express.js v5, making server-side development more efficient and enjoyable.",
      },
      {
        imageUrl: "https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
        tag: "Node.js",
        tagColor: "bg-green-500",
        title: "Node.js 18: What's new?",
        description:
          "A comprehensive overview of the latest updates and enhancements in Node.js 18, focusing on performance and security improvements.",
      },
    ],
  },
];

function Updates() {
  return (
    <div className="py-20 px-10">
      <p className="text-3xl font-bold font-sans text-primary mb-10">
        New Updates and Features to our application
      </p>
      {blogPosts.map((entry, index) => (
        <div key={index}>
          <div className="date relative">
            <hr />
            <p className="bg-white px-5 text-primary absolute top-[-11px] left-6">
              {entry.date}
            </p>
          </div>
          <div className="grid grid-cols-2  mt-6">
            {entry.posts.map((post, postIndex) => (
              <BlogPostCard
                key={postIndex}
                imageUrl={post.imageUrl}
                tag={post.tag}
                tagColor={post.tagColor}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Updates;
