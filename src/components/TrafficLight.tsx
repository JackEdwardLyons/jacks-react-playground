import React from 'react'
import styled from 'styled-components'
import { createMachine } from 'xstate'
import { useMachine } from '@xstate/react'

const StyledTrafficLight = styled.div`
  max-width: 100px;

  .traffic-light {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .light {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    margin-bottom: 10px;
    opacity: 0.5;
  }

  .yellow {
    background-color: #ffff00;
  }

  .green {
    background-color: #4cbb17;
  }

  .red {
    background-color: #e60000;
  }

  input[type='radio'] {
    appearance: none;
  }

  input:checked {
    opacity: 1;
  }
`

export const trafficLightMachine = createMachine({
  id: 'traffic-light',
  initial: 'ON',
  states: {
    OFF: {
      on: {
        TURN_ON: 'ON',
      },
    },
    ON: {
      initial: 'red',
      on: {
        TURN_OFF: 'OFF',
      },
      states: {
        red: {
          on: { NEXT: 'green' },
          after: {
            2500: 'green',
          },
        },
        yellow: {
          on: { NEXT: 'red' },
          after: {
            1500: 'red',
          },
        },
        green: {
          on: { NEXT: 'yellow' },
          after: {
            2500: 'yellow',
          },
        },
      },
    },
  },
})

const TrafficLight: React.FC = () => {
  const [currentState, send] = useMachine(trafficLightMachine)

  return (
    <>
      <StyledTrafficLight>
        <div className="pole" />
        <div className="traffic-light">
          <input type="radio" readOnly className="light red" checked={currentState.matches({ ON: 'red' })} />
          <input type="radio" readOnly className="light yellow" checked={currentState.matches({ ON: 'yellow' })} />
          <input type="radio" readOnly className="light green" checked={currentState.matches({ ON: 'green' })} />
          {currentState.value !== 'OFF' && (
            <button className="bg-white px-2" onClick={() => send('NEXT')}>
              NEXT
            </button>
          )}
          <button
            className="bg-white px-2 m-1"
            onClick={() => {
              if (currentState.matches('OFF')) {
                send('TURN_ON')
              } else {
                send('TURN_OFF')
              }
            }}
          >
            {currentState.value === 'OFF' ? 'ON' : 'OFF'}
          </button>
        </div>
      </StyledTrafficLight>
      <pre className="bg-gray-700 p-4 my-4 text-white text-lg rounded-2xl shadow-xl min-w-1/2 max-w-[800px]">
        <code>{JSON.stringify(currentState, undefined, 2)}</code>
      </pre>
    </>
  )
}

export default TrafficLight
