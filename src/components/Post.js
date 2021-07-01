import React, {useState, useEffect} from 'react';
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type="post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
        }`)
            .then((data) => setPost(data))
            .catch(console.err);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div>
                    <article>
                        {/*<Link>*/}
                        <span>
                            <img />
                            <span>
                                <h3></h3>
                            </span>
                        </span>
                        {/*</Link>*/}
                    </article>
                </div>
            </section>
        </main>
    )


}