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

function Intro({ size }) {
  return (
    <iframe
      title="Norway-yume-net"
      src={`https://dl.dropboxusercontent.com/s/llyav3wtu2s99di/%E8%87%AA%E5%B7%B1%E7%B4%B9%E4%BB%8B.mp4`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default Intro
