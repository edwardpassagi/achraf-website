/**
 * Get the base path for assets based on environment
 * In production (GitHub Pages): /achraf-website
 * In development (localhost): empty string
 */
export function getBasePath(): string {
    return process.env.NODE_ENV === 'production' ? '/achraf-website' : '';
}

/**
 * Get the full asset path with base path prefix
 */
export function getAssetPath(path: string): string {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}