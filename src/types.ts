export type MenuList = {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export type ImageProps = {
  src: string;
  w?: number;
  h?: number;
  alt?: string;
  className?: string;
  tr?: boolean;
  fill?: boolean;
}