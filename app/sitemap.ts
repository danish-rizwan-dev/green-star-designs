import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

const baseUrl = "https://greenstardesign.in";

const img = (path: string) => path.startsWith("http") ? path : `${baseUrl}${path}`;

const buildingImages = [
  img("/buildings/sayamkunjcomplex2.png"),
  img("/buildings/ZakirComplex.jpg"),
  img("/buildings/building3.png"),
  img("/buildings/sayamkunjcomplex.png"),
  img("/buildings/buildng5.png"),
  img("/buildings/structureimage2.png"),
  img("/buildings/trndzmall.png"),
  img("/buildings/building4.png"),
  img("/buildings/floormap1.png"),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: [img("/logo.png"), ...buildingImages.slice(0, 3)],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [img("/erRazida.png"), img("/himanshuPoddar.png"), img("/priyadarshikunal.png"), img("/wasi-reza.jpg"), img("/newlogo.png")],
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
    images: [img(post.image)],
  }));

  return [...staticPages, ...blogEntries];
}
