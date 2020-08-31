import React, { useState } from 'react'
import { ReactSpringTreeNode } from '../src'

export const Demo = () => {
  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <div>
      <ReactSpringTreeNode open={open} onClickToggle={() => setOpen(!open)} name={'root'}>
        <ReactSpringTreeNode name={'info'} />
        <ReactSpringTreeNode name={'info'} />

        <ReactSpringTreeNode
          toggleIcon={
            <div style={{ cursor: 'pointer', width: 18, textAlign: 'center' }}>
              {open1 ? '-' : '+'}
            </div>
          }
          open={open1}
          onClickToggle={() => setOpen1(!open1)}
          name={'custom icon'}
        >
          <ReactSpringTreeNode
            onClickToggle={() => setOpen2(!open2)}
            open={open2}
            name={'info'}
          >
            <div style={{ paddingTop: 10 }}>
              <div
                style={{
                  background: '#39a3bf',
                  height: 150,
                  width: 200,
                  borderRadius: 5,
                }}
              >
                <span>title</span>
              </div>
            </div>
          </ReactSpringTreeNode>
          <ReactSpringTreeNode name={'info'} />
          <ReactSpringTreeNode toggleIcon={''} name={<span>hide toggle</span>} />
        </ReactSpringTreeNode>
      </ReactSpringTreeNode>
    </div>
  )
}

export default {
  title: 'Base',
  component: Demo,
}
