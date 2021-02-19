import React, { useState, useEffect } from 'react'

export default function DynamicThing ({ id }) {
  const [thing, setThing] = useState(null)

  useEffect(() => {
    (async () => {
      const thing = await loadThing(id)
      setThing(thing)
    })()
  }, [id])

  return (
    <>
      <h1>This is the dynamic page</h1>
      {thing
        ? <pre>{JSON.stringify(thing, null, 2)}</pre>
        : <p>...loading...</p>
      }
    </>
  )
}

async function loadThing (id) {
  return new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, { id, hello: 'world' })
  })
}
