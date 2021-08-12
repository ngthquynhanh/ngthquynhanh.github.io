// Validate phone number
function errorPhone() {
    var phoneNumber = /^\d{10}$/;
    var number = document.querySelector("#phone").value;
    if (!phoneNumber.test(number)) {
        document.querySelector("#validate-phone").innerHTML = "Số điện thoại không hợp lệ";
    }
}

// Validate email 
function errorEmail() {
    var mail = /^\w+@[a-zA-Z]{3,}\.com$/i;
    var email = document.querySelector("#email").value;
    if (!mail.test(email)) {
        document.querySelector("#validate-email").innerHTML = "Email không hợp lệ";
    }
}

// Display price of courses
function price1() {
    document.querySelector(".price-checkbox1").innerHTML = "989.000 VND";
}
function price2() {
    document.querySelector(".price-checkbox2").innerHTML = "1.995.000 VND";
}

// Check when submitting
function validate() {
    var arr = document.querySelectorAll("input");
    var name = arr[0].value;
    var phone = arr[1].value;
    var email = arr[2].value;
    var checkBox1 = arr[3].checked;
    var checkBox2 = arr[4].checked;
    if (name == "" || phone == "" || email == "" || checkBox1 == false && checkBox2 == false) {
        document.querySelector("#validation").innerHTML = "Vui lòng nhập đủ thông tin!";
    }
    else if (checkBox1 == true && checkBox2 == true) {
        document.querySelector("#validation").innerHTML = "Chỉ được chọn 1 gói học";
    }
    else alert("Đăng ký thành công!");
}

