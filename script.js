const passWord = document.querySelector("[data-psw]")
const passConfirm = document.querySelector("[data-psw-con]")
const pMsg = document.querySelector("[data-p-msg]")
const pBtn = document.querySelector("[data-btn]")

let ConfirmPassword = function () {
    if (passWord.value === passConfirm.value){
        pMsg.className = "green"
        pMsg.innerHTML = "Passwords match!"
        pMsg.style.visibility = "visible"
        pBtn.disabled = false
    } else {
        pMsg.className = "red"
        pMsg.innerHTML = "Passwords do NOT match!"
        pMsg.style.visibility = "visible"
        pBtn.disabled = true
    }
}