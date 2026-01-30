import { useState, useEffect } from 'react';
import type { BlogPost } from '../data/blogPosts';

const RSS_URL = "https://rss-link.com/feed/k2aNHMKb5hD0nNzq3kHp?blogId=whQgeCekgpxuLtBm77MB&limit=25&loadContent=true";

export const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(RSS_URL);
                if (!response.ok) throw new Error('Failed to fetch RSS feed');

                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "text/xml");

                const items = Array.from(xml.querySelectorAll("item"));

                const parsedPosts: BlogPost[] = items.map(item => {
                    const title = item.querySelector("title")?.textContent || "Untitled Post";
                    const link = item.querySelector("link")?.textContent || "";
                    const id = link.split('/').pop() || ""; // Extract slug from URL
                    const pubDate = item.querySelector("pubDate")?.textContent || "";
                    const date = new Date(pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                    const category = item.querySelector("category")?.textContent || "General";

                    // Specific to GHL: Content is usually in content:encoded
                    const contentEncoded = item.getElementsByTagNameNS("*", "encoded")[0]?.textContent || "";
                    const description = item.querySelector("description")?.textContent || "";

                    // Image Extraction Logic
                    let image = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"; // Default fallback

                    // 1. Check for media:content or media:thumbnail
                    const mediaContent = item.getElementsByTagNameNS("*", "content")[0]?.getAttribute("url") ||
                        item.getElementsByTagNameNS("*", "thumbnail")[0]?.getAttribute("url");
                    if (mediaContent) image = mediaContent;

                    // 2. Fallback: Parse descriptive HTML for first img tag
                    if (!mediaContent && contentEncoded) {
                        const imgMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch) image = imgMatch[1];
                    }

                    // Create plain text excerpt from content
                    const cleanDescription = description.replace(/<[^>]*>?/gm, '').substring(0, 150) + "...";

                    return {
                        id,
                        title,
                        excerpt: cleanDescription,
                        content: contentEncoded,
                        date,
                        image,
                        category
                    };
                });

                setPosts(parsedPosts);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError("Failed to load blog posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};
