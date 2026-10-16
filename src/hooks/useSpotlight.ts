import { useEffect, type RefObject } from 'react'

/**
 * Moves a soft glow under the cursor by updating CSS custom properties
 * (--mx / --my) on the element. Writes straight to the DOM inside rAF,
 * so mouse movement never triggers a React re-render.
 */
export function useSpotlight(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
    }
  }, [ref])
}
