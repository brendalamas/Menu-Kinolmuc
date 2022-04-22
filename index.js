// modo oscuro - modo claro

const btnSwitch = document.querySelector("#switch");

btnSwitch.onclick = () => {
    document.body.classList.toggle("light")
    btnSwitch.classList.toggle("active")

}