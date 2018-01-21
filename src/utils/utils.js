import { TimelineMax, Power3, Elastic } from 'gsap'

const getSvg = color => `<div><svg t="1515995941008" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="4.6vw" height="4vh" fill="${color || '#000'}"><path d="M18.881772 480.019692l0 384C18.881772 916.795077 60.07808 945.230769 97.651003 945.230769l78.769231 0L176.420234 393.846154 97.651003 393.846154C60.07808 393.846154 18.881772 427.165538 18.881772 480.019692zM940.481772 575.960615c68.292923 0 102.4-191.960615 0-191.960615L735.681772 384C940.481772 64.039385 792.23808 0 735.681772 0c0 155.884308-234.653538 327.837538-480.492308 405.504l0 526.099692C506.227003 961.614769 424.464542 1024 701.574695 1024c68.292923 0 136.507077-31.980308 136.507077-96.019692 68.292923 0 102.4-159.980308 68.292923-159.980308C974.588849 768 1018.384542 575.960615 940.481772 575.960615z"></path></svg></div>`
const svgAnimate = svg => {
  const timeline = new TimelineMax({
    onComplete () {
      svg.parentNode.removeChild(svg)
    }
  })
  timeline.to(svg, 0.2, {scale: 1.2, y: -15, ease: Elastic.easeOut.config(2, 1)})
  timeline.to(svg, 2, {y: -100, autoAlpha: 0, scale: 1, x: Math.random() * 30 - 15, ease: Power3.easeOut})
}

export const sample = arr => arr[Math.floor(Math.random() * arr.length)]

export const showUpvote = (event, color) => {
  const $svg = document.createElement('div')
  const touch = event.changedTouches[0]

  $svg.innerHTML = getSvg(color)
  $svg.style.position = 'absolute'
  $svg.style.left = touch.pageX - 15 + 'px'
  $svg.style.top = touch.pageY - 15 + 'px'
  document.body.appendChild($svg)

  svgAnimate($svg)
}

export const dateFormat = dateStr => {
  return `${dateStr.substr(5, 2)}月${dateStr.substr(8, 2)}日  ${dateStr.substr(11, 5)}`
}
