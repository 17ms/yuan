const mouseAction = () => {
  const mauser = document.getElementById("mauser")

  document.onpointermove = (e) => {
    // TODO: fix the disgusting if statement
    if (
      e.target.tagName === "A" ||
      e.target.parentNode.tagName === "svg" ||
      (e.target.parentNode &&
        (e.target.parentNode.tagName === "A" ||
          (e.target.parentNode.parentNode &&
            e.target.parentNode.parentNode.tagName === "A")))
    ) {
      mauser.classList.add("mauser-hover")
    } else {
      mauser.classList.remove("mauser-hover")
    }

    mauser.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 120, fill: "forwards" },
    )
  }
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

mouseAction()
scrollAction()
