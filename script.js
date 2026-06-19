//   رسالة النجاح عند الإرسال
function showAlert() {
    alert("شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنقوم بالرد عليك قريباً.");
}

//   تغيير الوضع المظلم/المضيء
function toggleDarkMode() {
    const body = document.body;
    
    if (body.style.backgroundColor === "rgb(51, 51, 51)") {
        body.style.backgroundColor = "lightgray";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "#333333";
        body.style.color = "white";
    }
}
