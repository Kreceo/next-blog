export default function Archive() {
    return (
        <h1>Blog page</h1>
    )
}

// Example of looping through the post pages from a CMS
// function Posts({ posts }) {
//     return (
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
//               <a>{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     )
//   }