import { Player } from "@lottiefiles/react-lottie-player"
import LoadingSpinner from '/src/assets/lottie/LoadingSpinner'

function Spinner() {
  return (
    <Player
    loop
    autoplay
    style={{width: '20px', height: '20px'
    }}
    src={LoadingSpinner}
    />
  )
}

export default Spinner