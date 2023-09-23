const mouseAction = () => {
  const mauser = document.getElementById("mauser")

  document.onpointermove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null

    const x = e.clientX - mauser.offsetWidth / 2,
      y = e.clientY - mauser.offsetHeight / 2

    animateMauser(x, y, interacting)
  }
}

const animateMauser = (x, y, interacting) => {
  if (interacting) {
    mauser.classList.add("interacting")
  } else {
    mauser.classList.remove("interacting")
  }

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
  }

  mauser.animate(keyframes, { duration: 400, fill: "forwards" })
}

const scrollAction = () => {
  const sections = document.querySelectorAll(".section")
  window.addEventListener("scroll", () => {
    let sy = window.scrollY

    sections.forEach((s) => {
      const sh = s.offsetHeight
      const st = s.getBoundingClientRect().top + sy - 100
      const sid = s.getAttribute("id")

      if (sy >= st && sy < st + sh) {
        document
          .querySelector(`a[href="#${sid}"] div`)
          .classList.add("active-menu")
      } else {
        document
          .querySelector(`a[href="#${sid}"] div`)
          .classList.remove("active-menu")
      }
    })
  })
}

const horizontalScroll = () => {
  const container = document.getElementById("projects-display")
  const cardWidth = document.getElementById("projects-card").offsetWidth

  container.addEventListener("wheel", (e) => {
    e.preventDefault()
    const scrollDistance = e.deltaY * 3
    container.scrollBy({
      top: 0,
      left: scrollDistance,
      behavior: "smooth",
    })
  })
}

mouseAction()
scrollAction()
horizontalScroll()
