import type { Photo } from 'react-photo-album'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

function imageLink(path: string) {
  return `https://uyenlong.manhdinh.dev/${path}.webp`
}

const photos = [
  { src: 'BAC_5628.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5639.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  // { src: 'BAC_5647.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5658.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5662.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  // { src: 'BAC_5670.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5682.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5690.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5696.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5750.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5761.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5771.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5783.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5865.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5872.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5878.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5920.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5927.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5942.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5960.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5967.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5971.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5976.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5979.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5982.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_5997.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_6005.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_6008.0822d131.4024x6048.webp', alt: 'Hiking boots' },
  { src: 'BAC_6017.0822d131.4024x6048.webp', alt: 'Hiking boots' }
].map(({ src, ...rest }) => {
  const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!

  const path = matcher[1]
  const fileName = path.split('.')[0]
  const width = Number.parseInt(matcher[2], 10)
  const height = Number.parseInt(matcher[3], 10)

  return {
    src: imageLink(fileName),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: imageLink(fileName),
      width: breakpoint,
      height: Math.round((height / width) * breakpoint)
    })),
    ...rest
  } as Photo
})

export default photos
