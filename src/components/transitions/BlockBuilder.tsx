import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const randomColor = () => {
  const randomColorHex = () => Math.floor(Math.random() * 255)
  return `rgb(${randomColorHex()}, ${randomColorHex()}, ${randomColorHex()})`
}

const StyledBlock = styled.div<{ background: string }>`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  background: ${props => props.background};
  margin: 1rem 1rem 1rem 0;
  cursor: pointer;
`

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`

function BlockBuilder() {
  const [blocks, setBlocks] = useState([
    {
      color: randomColor(),
      num: 1,
    },
  ])

  return (
    <div className="container max-h-32">
      <button
        className="border-2 border-gray-600 p-4 bg-white hover:bg-gray-200 my-4 shadow-md"
        onClick={() => setBlocks(blocks => [...blocks, { color: randomColor(), num: blocks.length + 1 }])}
      >
        Add Block
      </button>

      <TransitionGroup component={StyledContainer}>
        {blocks.map((block, index) => {
          return (
            <CSSTransition key={block.num} timeout={300} classNames="transition">
              <StyledBlock
                background={block.color}
                className="shadow-md hover:shadow-xl"
                key={block.num}
                onClick={() => {
                  setBlocks(blocks => {
                    return [...blocks.slice(0, index), ...blocks.slice(index + 1)]
                  })
                }}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default BlockBuilder
