import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  status: 'idle',
  joke: undefined,
  error: undefined,
}

function dadJokeReducer(state = initialState, event: any) {
  switch (event.type) {
    case 'FETCH':
      return {
        ...state,
        status: 'loading',
      }
    case 'RESOLVE':
      return {
        ...state,
        status: 'success',
        joke: event.data.joke,
      }
    case 'REJECT':
      return {
        ...state,
        status: 'failure',
        error: event.error,
      }
    case 'CANCEL':
      return {
        ...state,
        status: 'idle',
      }
    default:
      return state
  }
}

function DadJoke() {
  const [state, dispatch] = useReducer(dadJokeReducer, initialState)

  useEffect(() => {
    if (state.status === 'loading') {
      let canceled = false

      axios
        .get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        })
        .then(({ data }) => {
          if (canceled) return
          dispatch({ type: 'RESOLVE', data })
        })
        .catch(error => {
          if (canceled) return
          dispatch({ type: 'REJECT', error })
        })
      return () => {
        canceled = true
      }
    }
  }, [state.status])

  return (
    <div className="flex flex-col w-full max-w-[75%]">
      <div className="p-6 font-bold bg-white text-lg rounded-2xl shadow-xl flex items-center flex-col md:flex-row">
        <div className="min-w-[300px]">
          <button className="bg-blue-600 text-white p-4 mx-2" onClick={() => dispatch({ type: 'FETCH' })}>
            Fetch Dad Joke
          </button>
          <button className="bg-red-500 text-white p-4 mx-2" onClick={() => dispatch({ type: 'CANCEL' })}>
            Cancel
          </button>
        </div>

        <div className="my-4">
          {state.status === 'loading' && <p>{state.status}</p>}
          {state.joke && state.status !== 'loading' && <p>{state.joke}</p>}
        </div>
      </div>

      <pre className="bg-gray-700 p-4 my-4 text-white text-lg rounded-2xl shadow-xl">
        <code>{JSON.stringify(state, undefined, 2)}</code>
      </pre>
    </div>
  )
}

export default DadJoke
