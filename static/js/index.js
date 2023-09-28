const mouseTracker = () => {
  const mauser = document.getElementById("mauser")

  // Firefox doesn't support document.onmousemove for some reason
  document.onmouseover = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null

    const x = e.clientX - mauser.offsetWidth / 2,
      y = e.clientY - mauser.offsetHeight / 2

    animateTracker(x, y, interacting)
  }
}

const animateTracker = (x, y, interacting) => {
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

const highlightActiveMenuItem = () => {
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

if (document.getElementById("mauser") !== null && window.innerWidth > 768) {
  mouseTracker()
}

if (window.location.pathname === "/") {
  highlightActiveMenuItem()
}
