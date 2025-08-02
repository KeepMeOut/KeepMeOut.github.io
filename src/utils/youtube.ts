export const buildYouTubeEmbedUrl = (embedId: string): string => {
  return `https://www.youtube.com/embed/${embedId}`
}

export const buildYouTubeVideoUrl = (embedId: string): string => {
  return `https://www.youtube.com/watch?v=${embedId}`
}