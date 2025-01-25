import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

interface ImageData {
    img: string;
}
interface ProjectImagesProps {
  data: ImageData[];
}
export default function ProjectImages({ data }: ProjectImagesProps) {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {data.map((item: ImageData & { rows?: number; cols?: number }) => (
  <ImageListItem
    key={item.img}
    cols={item.cols || 1}
    rows={item.rows || 1}
  >
    <Image
      {...srcset(item.img, 121, item.rows, item.cols)}
      alt={item.img}
      loading="lazy"
    />
  </ImageListItem>
))}

    </ImageList>
  );
}
