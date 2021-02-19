import { Link } from 'gatsby'
import React from 'react'

export default function IndexPage () {
  return (
    <>
      <p>
        Here's the page with the bug: {' '}
        <Link to='/dynamic/thing/42'>
          Click me!
        </Link>
      </p>
    </>
  )
}
