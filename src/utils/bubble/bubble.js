import React from 'react'
import './bubble.css'

const LEAVE_DURATION_MS = 2100 // matches synth envelope: attack(0.1) + decay(0.8) + release(1.2)

export function splitLetters(text) {
  return [...text].map((char, ci) =>
    char === ' ' ? ' ' : char === '\n' ? <br key={ci} /> : <span key={ci} data-bl="" style={{ '--i': ci }}>{char}</span>
  )
}

export function handleBubbleEnter(element) {
  if (element._leaveRAF) {
    cancelAnimationFrame(element._leaveRAF)
    element._leaveRAF = null
  }
  element.classList.add('bubbling')
  const startAmp = parseFloat(element.style.getPropertyValue('--bubble-amp') || 0)
  if (startAmp < 1) {
    const duration = 300
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = startAmp + (1 - startAmp) * (1 - Math.pow(1 - progress, 2))
      element.style.setProperty('--bubble-amp', eased)
      if (progress < 1) {
        element._enterRAF = requestAnimationFrame(animate)
      } else {
        element.style.setProperty('--bubble-amp', 1)
        element._enterRAF = null
      }
    }
    element._enterRAF = requestAnimationFrame(animate)
  }
}

export function handleBubbleLeave(element, { leaveDuration = LEAVE_DURATION_MS } = {}) {
  if (element._enterRAF) {
    cancelAnimationFrame(element._enterRAF)
    element._enterRAF = null
  }
  element.style.setProperty('--leave-duration', `${leaveDuration}ms`)
  const start = performance.now()
  const startAmp = parseFloat(element.style.getPropertyValue('--bubble-amp') || 1)

  const animate = (now) => {
    const progress = Math.min((now - start) / leaveDuration, 1)
    const eased = startAmp * Math.pow(1 - progress, 2)
    element.style.setProperty('--bubble-amp', eased)
    if (progress < 1) {
      element._leaveRAF = requestAnimationFrame(animate)
    } else {
      element.style.removeProperty('--bubble-amp')
      element.classList.remove('bubbling')
      element._leaveRAF = null
    }
  }
  element._leaveRAF = requestAnimationFrame(animate)
}

export function BubbleText({ as: Tag = 'span', className, children }) {
  return <Tag className={className} style={{ whiteSpace: 'nowrap' }}>{splitLetters(children)}</Tag>
}

export function BubbleContainer({ as: Tag = 'div', variant, underline, leaveDuration = LEAVE_DURATION_MS, className, onMouseEnter, onMouseLeave, onClick, children, ...rest }) {
  const ref = React.useRef()

  const classes = [
    className,
    variant === 'dramatic' ? 'bubble--dramatic' : null,
    underline ? 'bubble--underline' : null,
  ].filter(Boolean).join(' ') || undefined

  function handleMouseEnter(e) {
    handleBubbleEnter(ref.current)
    if (onMouseEnter) onMouseEnter(e)
  }

  function handleMouseLeave(e) {
    handleBubbleLeave(ref.current, { leaveDuration })
    if (onMouseLeave) onMouseLeave(e)
  }

  const autoSplit = typeof children === 'string'
  const content = autoSplit ? splitLetters(children) : children

  return (
    <Tag ref={ref} className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick} style={autoSplit ? { whiteSpace: 'nowrap' } : undefined} {...rest}>
      {content}
    </Tag>
  )
}
