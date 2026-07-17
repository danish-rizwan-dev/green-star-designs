import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

const baseUrl = "https://greenstardesign.in";

const buildingImages = [
  "/buildings/sayamkunjcomplex2.png",
  "/buildings/ZakirComplex.jpg",
  "/buildings/building3.png",
  "/buildings/sayamkunjcomplex.png",
  "/buildings/buildng5.png",
  "/buildings/structureimage2.png",
  "/buildings/trndzmall.png",
  "/buildings/building4.png",
  "/buildings/floormap1.png",
];

const publicImages = [
  "/logo.png",
  "/newlogo.png",
  "/og-image.svg",
  "/erRazida.png",
  "/himanshuPoddar.png",
  "/priyadarshikunal.png",
  "/wasi-reza.jpg",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: ["/logo.png", ...buildingImages.slice(0, 3)],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: ["/erRazida.png", "/himanshuPoddar.png", "/priyadarshikunal.png", "/wasi-reza.jpg", "/newlogo.png"],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: buildingImages,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [post.image],
  }));

  return [...staticPages, ...blogEntries];
}
