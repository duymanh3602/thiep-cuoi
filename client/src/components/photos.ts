import type { Photo } from 'react-photo-album'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

function imageLink(path: string) {
  return `https://uyenlong.manhdinh.dev/${path}.JPG`
}

const photos = [
  { src: 'BAC_5872.0822d131.4024x6048.jpg', alt: 'Hiking boots' },
  { src: 'BAC_5865.7561b5a4.4024x6048.jpg', alt: 'Purple petaled flowers near a mountain' },
  { src: 'BAC_5878.334d8e07.4024x6048.jpg', alt: 'A person pointing at a beige map' },
  { src: 'BAC_5920.635260bf.4024x6048.jpg', alt: 'Two hikers walking toward a snow-covered mountain' },
  { src: 'BAC_5927.9962a853.4024x6048.jpg', alt: 'A silver and black coffee mug on a brown wooden table' },
  { src: 'BAC_5942.607b0ab6.4024x6048.jpg', alt: "A worm's eye view of trees at night" },
  { src: 'BAC_5960.7a68edb7.4024x6048.jpg', alt: 'A pine tree forest near a mountain at sunset' },
  { src: 'BAC_5967.2c9f5784.4024x6048.jpg', alt: 'Silhouette photo of three hikers near tall trees' },
  { src: 'BAC_5971.6a8477e9.4024x6048.jpg', alt: 'A person sitting near a bonfire surrounded by trees' },
  { src: 'BAC_5976.5536924a.4024x6048.jpg', alt: 'Green moss on gray rocks in a river' },
  { src: 'BAC_5979.fddf96d5.4024x6048.jpg', alt: 'Landscape photography of mountains' },
  { src: 'BAC_5982.761f839b.4024x6048.jpg', alt: 'A pathway between green trees during daytime' },
  {
    src: 'BAC_5997.5f09a6e5.4024x6048.jpg',
    alt: 'A man wearing a black jacket and backpack standing on a grass field during sunset'
  },
  { src: 'BAC_6005.0341af8e.4024x6048.jpg', alt: 'Green pine trees under white clouds during the daytime' },
  { src: 'BAC_6008.6a693017.4024x6048.jpg', alt: 'A hiker sitting near the cliff' },
  { src: 'BAC_6017.38feb9dc.4024x6048.jpg', alt: 'A tall mountain with a waterfall running down its side' },
  { src: 'BAC_5872.5010dd5c.4024x6048.jpg', alt: 'Blue mountains' },
  {
    src: 'BAC_5872.f533ed48.4024x6048.jpg',
    alt: 'Green trees on a brown mountain under a blue sky during the daytime'
  },
  { src: 'BAC_5872.7afeb6fd.4024x6048.jpg', alt: 'A red flower on a green grass field during the daytime' },
  { src: 'BAC_5872.027297a5.4024x6048.jpg', alt: 'A sign warning people not to disturb nature' },
  { src: 'BAC_5872.3b170653.4024x6048.jpg', alt: 'A small creek in Yosemite National Park' }
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
