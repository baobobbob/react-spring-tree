import cn from 'classnames'
import { defaultTo } from 'lodash'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useMeasure, usePrevious } from 'react-use'
import * as Icons from './icons'
import './style.scss'

interface ITreeProps {
  name: React.ReactNode
  children?: any
  open?: boolean
  className?: string
  style?: React.CSSProperties
  toggleIcon?: any
  onClickToggle?(): void
}

export function SpringTreeNode(props: ITreeProps) {
  const { children, name, style, open } = props
  const prev = usePrevious(open)
  const [ref, { height: viewHeight }] = useMeasure()

  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    height: open ? viewHeight : 0,
    opacity: open ? 1 : 0,
    transform: `translate3d(${open ? 0 : 20}px,0,0)`,
  })
  const svgKey = `${children ? (open ? 'Minus' : 'Plus') : 'Close'}SquareO` as
    | 'PlusSquareO'
    | 'MinusSquareO'
    | 'CloseSquareO'
  const Icon = Icons[svgKey]
  return (
    <div style={props.style} className={cn('TreeNode', props.className)}>
      <div className={'TreeNode__title'}>
        <span
          className={'TreeNode__toggle'}
          onClick={() => props.onClickToggle && props.onClickToggle()}
        >
          {defaultTo(
            props.toggleIcon,
            <Icon className={'TreeNode__icon'} style={{ opacity: children ? 1 : 0.3 }} />
          )}
        </span>
        <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
      </div>
      <animated.div
        className={'TreeNode__content'}
        style={{
          opacity,
          height: height.interpolate((_height: any) =>
            open && prev === open ? 'auto' : _height
          ),
        }}
      >
        <animated.div ref={ref as any} style={{ transform }}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  )
}
