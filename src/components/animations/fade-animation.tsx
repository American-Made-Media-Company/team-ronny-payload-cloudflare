'use client'

import { JSX, type ReactNode } from 'react'
import { motion } from 'motion/react'

type Props<T extends keyof JSX.IntrinsicElements = 'div'> = {
  children?: ReactNode
  key?: string
  delay?: number
  duration?: number
  displayOnce?: boolean
  className?: string
  as?: T
} & Omit<JSX.IntrinsicElements[T], 'children'>

export default function FadeAnimation<T extends keyof JSX.IntrinsicElements = 'div'>({
  children,
  key,
  delay,
  displayOnce,
  duration,
  className,
  as = 'div' as T,
  ...rest
}: Props<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = (motion as any)[as]

  return (
    <MotionComponent
      key={key}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: displayOnce ? displayOnce : false }}
      transition={{
        type: 'tween',
        delay: delay ? delay : 0,
        duration: duration ? duration : 1,
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
