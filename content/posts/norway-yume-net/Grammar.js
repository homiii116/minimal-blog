/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
}

function Grammar({ size }) {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://dl.dropboxusercontent.com/s/llyav3wtu2s99di/%E8%87%AA%E5%B7%B1%E7%B4%B9%E4%BB%8B.mp4`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default Grammar