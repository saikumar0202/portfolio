import { useEffect } from 'react'

/**
 * Fades `.reveal` sections in as they scroll into view.
 * Only sections that start below the fold are hidden (by JS, at mount), so
 * the first screen is always complete and the page works without JS.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const below = [...document.querySelectorAll<HTMLElement>('.reveal')].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    )
    below.forEach((el) => el.classList.add('is-pending'))

    const show = (el: Element) => el.classList.remove('is-pending')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    below.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
