/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  default: {
    width: 360,
    height: 220,
  },
}

function News({ size }) {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://dl.dropboxusercontent.com/s/hx4ycc7jmfv3ept/Supernytt.mp4`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default News