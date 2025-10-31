import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import FadeAnimation from '@/components/animations/fade-animation'

type PositionPreset =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

type FadeForwardProps = Omit<ComponentProps<typeof FadeAnimation>, 'className' | 'children'>

type ImageProps = {
  src: string
  alt: string
  className?: string
  position?: PositionPreset
  xPosition?: string
  yPosition?: string
} & FadeForwardProps

export function Image({
  src,
  alt,
  className,
  position = 'center',
  xPosition,
  yPosition,
  ...fadeProps
}: ImageProps) {
  // Position presets
  const positionMap: Record<PositionPreset, { x: string; y: string }> = {
    'top-left': { x: '0%', y: '0%' },
    'top-center': { x: '50%', y: '0%' },
    'top-right': { x: '100%', y: '0%' },
    'center-left': { x: '0%', y: '50%' },
    center: { x: '50%', y: '50%' },
    'center-right': { x: '100%', y: '50%' },
    'bottom-left': { x: '0%', y: '100%' },
    'bottom-center': { x: '50%', y: '100%' },
    'bottom-right': { x: '100%', y: '100%' },
  }

  const finalX = xPosition ?? positionMap[position].x
  const finalY = yPosition ?? positionMap[position].y

  return (
    <FadeAnimation {...fadeProps} className={cn('relative rounded-xs overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: `${finalX} ${finalY}`,
        }}
      />
    </FadeAnimation>
  )
}
