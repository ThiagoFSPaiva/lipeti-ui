import { MetadataRoute } from 'next'
import { SERVICES } from './constants/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lipeti.com.br'

    const serviceUrls = SERVICES.map((service) => ({
        url: `${baseUrl}/servicos/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...serviceUrls,
    ]
}
