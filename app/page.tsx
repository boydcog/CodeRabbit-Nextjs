"use client";

import {useState} from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};

/**
 * Renders a bulletin board interface for viewing, adding, editing, and deleting posts.
 *
 * Displays a list of posts with options to edit or remove each post, and provides a button to add new posts.
 */
export default function Home() {
    const [posts, setPosts] = useState<Post[]>([
        {id: 1, title: "Welcome to the Board", content: "This is the first post!"},
        {id: 2, title: "Next.js Tips", content: "Learn how to use Next.js effectively."},
    ]);

    const addPost = (title: string, content: string) => {
        const newPost: Post = {
            id: posts.length + 1,
            title,
            content,
        };
        setPosts([...posts, newPost]);
    };

    const editPost = (id: number, updatedTitle: string, updatedContent: string) => {
        setPosts(
            posts.map((post) =>
                post.id === id ? {...post, title: updatedTitle, content: updatedContent} : post
            )
        );
    };

    const deletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Bulletin Board</h1>
            <div className="space-y-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 bg-white shadow rounded flex justify-between items-start"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <p className="text-gray-600">{post.content}</p>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => editPost(post.id, "Updated Title", "Updated Content")}
                                className="text-blue-500 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deletePost(post.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => addPost("New Post", "This is a new post.")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add Post
            </button>
        </div>
    );
}