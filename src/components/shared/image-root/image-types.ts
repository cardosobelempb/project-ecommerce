export interface ImageRootProps {
  src: string
  alt: string
  className?: string
  width?: string // classes Tailwind, ex: 'w-full' ou 'w-1/2'
  height?: string // classes Tailwind, ex: 'h-64' ou 'h-[300px]'
  classImage?: string;
  size?: string        // Ex: 'w-10 h-10' ou 'w-16 h-16'
  rounded?: string     // Ex: 'rounded-full', 'rounded-md', etc
}