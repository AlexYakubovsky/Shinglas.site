const forms = document.forms;

let validateForm = e => {
    e.preventDefault();

    const button = e.target[4];
    button.onclick = checkForm(e);
};

let checkForm = e => {
    const userNameInput = e.target[1],
        userPhoneInput = e.target[2],
        userMessageInput = e.target[3],
        userNameValue = userNameInput.value,
        userPhoneValue = userPhoneInput.value,
        userMessageValue = userMessageInput.value;

    let resultName = checkName(userNameInput, userNameValue);
    let resultPhone = checkPhone(userPhoneInput, userPhoneValue);

    if (resultName && resultPhone) {
        sendRequest(userNameValue, userPhoneValue, userMessageValue);
        cleanAllForms(userNameInput, userPhoneInput, userMessageInput);
    }
};

let checkName = (input, name) => {
    if (name.length < 5) {
        input.value = '';
        input.insertAdjacentHTML('afterend', '<p>Имя должно быть длинее 3</p>');
        // input.value = 'Имя должно быть длинее 3';
        // alert('Имя должно быть длинее 3');

        return false
    }

    return true;
};

let checkPhone = (input, phone) => {
    const regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    const error = document.createElement('span');
    error.className = 'error';
    error.innerText = '';
    input.after(error);

    //
    // const divError = document.createElement('div');
    // divError.innerHTML = '<span id="error">Введите корректный номер</span>';
    // error.remove();


    if (!phone.match(regExp)) {
        // const divError = document.createElement('div');
        // divError.innerHTML = '<span class="error">Введите корректный номер</span>';

        // input.insertAdjacentHTML('afterend', '');
        error.remove();
        error.innerText = '';
        input.value = '';
        error.innerText = 'номер не кор';


        // input.insertAdjacentElement('afterend', divError);
        // alert('Введите корректный номер');

        return false;
    }

    // console.log(divError)
    divError.remove();
    return true;
};

let sendRequest = (userNameValue, userPhoneValue, userMessageValue) => console.log(userNameValue + ' ' + userPhoneValue  + ' ' + userMessageValue);

let cleanAllForms = (userNameInput, userPhoneInput, userMessageInput) => {
    console.log('clean!!!');
    userNameInput.value = '';
    userPhoneInput.value = '';
    userMessageInput.value = '';
};

for (let form of forms) {
    form.onsubmit = validateForm
}