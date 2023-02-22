import mitt from 'mitt'
import { MITT_KEY_ENUM } from '@/enums/mittEnum'
const emitter = mitt()

export default function useEmitter() {
  const MITT_KEY = MITT_KEY_ENUM
  return {
    MITT_KEY,
    $on: emitter.on,
    $emit: emitter.emit,
  }
}
