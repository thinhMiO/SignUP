const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const passEle = document.getElementById('pw');
const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
        setTimeout(dieuhuong,1500);
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;
    let passValue = passEle.value;
    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Name cannot be blank');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email cannot be blank');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email invalidate');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (phoneValue == '') {
        setError(phoneEle, 'Phone number can not be left blank');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Phone number is not in the correct format');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }
    if(passValue == '') {
        setError(passEle, 'Password can not be blank');
        isCheck = false;
    } else if (!isPass(passValue)) {
        setError(passEle, 'Invalid password(6<)');
        isCheck = false;
    } else {
        setSuccess(passEle);
    }
    
    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPass(number) {
    return /^\d{6,20}$/.test(number);
}
function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
function dieuhuong(){
    window.location="/index.html";
}