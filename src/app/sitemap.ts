import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://hansdurchholz.com",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            images: ["https://hansdurchholz.com/Frog.gif", "https://hansdurchholz.com/worm_foreground.png", "https://hansdurchholz.com/Sun.png", "https://hansdurchholz.com/Moon.png", "https://hansdurchholz.com/Bob Ross.png"]
        },
        {
            url: "https://hansdurchholz.com/bio",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            // TODO: images: ['pic_of_me.png'],
        },
        {
            url: "https://hansdurchholz.com/portfolio",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            // TODO: images: ['pic_of_portfolio.png'],
        },
        {
            url: "https://hansdurchholz.com/contact",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9
            // TODO: images: ['pic_of_me_professional'],
        },
    ]
}