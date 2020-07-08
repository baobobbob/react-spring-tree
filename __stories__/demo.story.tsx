import React, { useState } from 'react'
import { SpringTreeNode } from '../src'

export const Demo = () => {
  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  return (
    <div>
      <SpringTreeNode open={open} onClickToggle={() => setOpen(!open)} name={'root'}>
        <SpringTreeNode name={'info'} />
        <SpringTreeNode name={'info'} />

        <SpringTreeNode
          toggleIcon={
            <div style={{ cursor: 'pointer', width: 18, textAlign: 'center' }}>
              {open1 ? '-' : '+'}
            </div>
          }
          open={open1}
          onClickToggle={() => setOpen1(!open1)}
          name={'custom icon'}
        >
          <SpringTreeNode name={'info'} />
          <SpringTreeNode name={'info'} />
        </SpringTreeNode>
      </SpringTreeNode>
    </div>
  )
}

export const DemoStory = () => <Demo />

export default {
  title: 'Base',
  component: DemoStory,
}

DemoStory.story = {
  name: 'example',
}
