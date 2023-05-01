const nav_user_profile = document.querySelector(".nav-user-profile")
const drop_btn = document.querySelector(".nav-user-profile img")
const theme_toggle_btn = document.querySelector(".toggle-btn")
const switchBtn = document.querySelector(".toggle-btn span")

drop_btn.addEventListener("click", () => {
    nav_user_profile.classList.toggle("show-dropdown")
})

theme_toggle_btn.addEventListener("click", () => {

    switchBtn.classList.toggle("on")
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
})

// close dropdown menu if clicked outside
document.addEventListener("click", e => {
    const userOptions = document.querySelector(".user-options")
    let targetEl = e.target
    do {
        if (targetEl == userOptions || targetEl == drop_btn) {
            // alert("clicked inside!")
            return
        }

        targetEl = targetEl.parentNode
    } while (targetEl)

    if (nav_user_profile.classList.contains("show-dropdown")) {
        nav_user_profile.classList.remove("show-dropdown")
    }
})

if (localStorage.getItem("theme") == "light") {
    switchBtn.classList.remove("on")
    document.body.classList.remove("dark-theme")
} else if (localStorage.getItem("theme") == "dark") {
    switchBtn.classList.add("on")
    document.body.classList.add("dark-theme")
} else {
    localStorage.setItem("theme", "light")
}

// fake loading
const loadBtn = document.querySelector(".load-btn")
const loadErr = document.querySelector(".load_err")

loadBtn.addEventListener("click", () => {
    loadBtn.innerHTML = "Loading..."
    setTimeout(() => {
        loadBtn.style.display = "none"
        loadErr.classList.add("show")
    }, 2000)
})