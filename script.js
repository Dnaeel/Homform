const form = document.forms['my-form'];
const btnHw =document.getElementById('btn')
const url = 'http://localhost:3000/users';

const getFormValues = (event) => {
    event.preventDefault();
    const user = {
        name: form.name.value,
        second_name: form.second_name.value,
        birth_date: form.birth_date.value
    }
    const options = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    }

    fetch(url, options)
        .then(response => {
            if (response.ok){
                alert('Пользователь успешно добавлен');
            }else {
                alert('Ошибка.Статус:' + response.status)
            }
        })
}

const getTest = () => {
    const user = {
    }
    const options = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    }

    fetch(url, options)
        .then(response => {
            if (response.ok){
                alert('Пользователь успешно добавлен');
            }else {
                alert('Ошибка.Статус:' + response.status)
            }
        })
}

btnHw.addEventListener('click', getTest)
form.addEventListener('submit', getFormValues);