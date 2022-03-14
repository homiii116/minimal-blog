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

function Grammar({ size }) {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://dl.dropboxusercontent.com/s/syfv70f0kcsfnr8/%E6%96%87%E6%B3%95%E7%B7%B4%E7%BF%92.mp4`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default Grammar