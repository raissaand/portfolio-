// Simples exemplo de alternância de tema
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
})
const header = document.getElementById("main-header")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    header.classList.add("hidden")
  } else {
    // Rolando para cima
    header.classList.remove("hidden")
  }

  lastScrollTop = scrollTop
})

function togglePlayer() {
  const player = document.getElementById("spotify-player")
  player.style.display = player.style.display === "none" ? "block" : "none"
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  const statusMessage = document.getElementById("status-message")

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault() // Impede o envio padrão do formulário e o redirecionamento

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json", // Crucial para o FormSubmit.co retornar JSON
        },
      })

      if (response.ok) {
        statusMessage.textContent = "Mensagem enviada com sucesso! Em breve entrarei em contato."
        statusMessage.style.color = "green"
        form.reset() // Limpa os campos do formulário
      } else {
        const errorData = await response.json()
        statusMessage.textContent = `Erro ao enviar mensagem: ${errorData.message || "Ocorreu um erro desconhecido."}`
        statusMessage.style.color = "red"
        console.error("Erro no envio do formulário:", errorData)
      }
    } catch (error) {
      statusMessage.textContent = "Ocorreu um erro de conexão. Por favor, tente novamente mais tarde."
      statusMessage.style.color = "red"
      console.error("Erro de rede:", error)
    }
  })
})

// Funcionalidade de scroll horizontal para os projetos
document.addEventListener("DOMContentLoaded", () => {
  // Get the scroll container and buttons
  const scrollContainer = document.querySelector(".projects-scroll")
  const leftButton = document.querySelector(".scroll-left")
  const rightButton = document.querySelector(".scroll-right")

  // Check if elements exist
  if (scrollContainer && leftButton && rightButton) {
    // Scroll left when left button is clicked
    leftButton.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -320, // Scroll one card width + gap
        behavior: "smooth",
      })
    })

    // Scroll right when right button is clicked
    rightButton.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: 320, // Scroll one card width + gap
        behavior: "smooth",
      })
    })

    // Show/hide arrows based on scroll position
    function updateArrowVisibility() {
      // Show/hide left arrow
      leftButton.style.opacity = scrollContainer.scrollLeft > 0 ? "1" : "0.5"

      // Show/hide right arrow
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth
      rightButton.style.opacity = scrollContainer.scrollLeft < maxScrollLeft - 10 ? "1" : "0.5"
    }

    // Update arrow visibility on load and scroll
    updateArrowVisibility()
    scrollContainer.addEventListener("scroll", updateArrowVisibility)

    // Update on window resize
    window.addEventListener("resize", updateArrowVisibility)
  }
})
