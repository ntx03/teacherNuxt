<script setup>
import { createNews } from '~/utils/api';

definePageMeta({
    layout: "admin",
});

const arr = ref([0]);

const validateName = ref(true);
const validateUrl = ref(true);
const validate = ref(true);
const validateButtonAddPhoto = ref(true);

const object = ref({
    name: '',
    date: '',
    description: '',
    photo: [{
        link: '',
        name: ''
    },]
});

watch((object.value), () => {
    const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if (object.value.date.length && object.value.description.length && object.value.name.length > 7) {
        validateName.value = false;
    } else {
        validateName.value = true;
    }
    object.value.photo.forEach((i) => {
        console.log(i.link);
        if (i.link.match(url)) {
            validateUrl.value = false;
        } else {
            validateUrl.value = true;
        }
    })
    // if (object.value.photo[0].link.match(url) && object.value.photo[1].link.match(url) && object.value.photo[2].link.match(url)) {
    //     validateUrl.value = false;
    // } else {
    //     validateUrl.value = true;
    // }
    if (!validateName.value && !validateUrl.value) {
        validate.value = false;
    } else {
        validate.value = true;
    }

});

watch((arr.value), () => {
    if (arr.value.length > 5) {
        validateButtonAddPhoto.value = false;
    } else {
        validateButtonAddPhoto.value = true;
    }
})

/**
 * Отправляем форму
 */
const submit = (e) => {
    e.preventDefault();
    console.log(object.value);
    createNews(object.value)
        .then((res) => {
            alert("Новость успешно создана!")
            console.log(res);
        })
        .catch((e) => console.log(e));
}

const addPhoto = (e) => {
    e.preventDefault();
    arr.value.push(arr.value[arr.value.length - 1] + 1);
    object.value.photo.push({
        link: '',
        name: ''
    })
    console.log(arr);
}
const clearForm = () => {
    object.value = {
        name: '',
        date: '',
        description: '',
        photo: [{
            link: '',
            name: ''
        },]
    }
    arr.value = [0];
}
</script>

<template >
    <ClientOnly>
        <h2 class="title">ДОБАВИТЬ НОВОСТЬ</h2>
        <form class="form">
            <div class="input__container">
                <div class="input__box_data">
                    <p class="form__title">Введите дату новости</p>
                    <input class="form__input" type="date" v-model="object.date" />
                </div>
                <div class="input__box_name">
                    <p class="form__title">Введите название новости</p>
                    <input class="form__input" type="text" v-model="object.name" />
                </div>
            </div>
            <div class="input__box_description">
                <p class="form__title">Введите описание новости</p>
                <textarea class="form__input form__input_description" type="text" v-model="object.description" />
            </div>
            <div class="input__container input__container_photo">
                <div class="input__box" v-for="number in arr">
                    <p class="input__box-title">{{ `Фотография номер ${number + 1}` }}</p>
                    <p class="form__title">Введите url фотографии</p>
                    <input class="form__input" type="url" v-model="object.photo[number].link" />
                    <p class="form__title">Введите название фотографии</p>
                    <input class="form__input" type="text" v-model="object.photo[number].name" />
                </div>
            </div>
            <div class="button__box">
                <button :disabled="!validateButtonAddPhoto" class="form__button form__button__add"
                    :class="{ 'form__button_disabled': !validateButtonAddPhoto }" @click="addPhoto">Добавить
                    фотографию</button>
                <button class="form__button form__button__add" @click.prevent="clearForm">Очистить форму</button>
            </div>
            <button :disabled="validate" class="form__button " :class="{ 'form__button_disabled': validate }"
                @click="submit">Отправить</button>
        </form>
    </ClientOnly>
</template>

<style scoped lang="scss">
.title {
    font-family: inter;
    font-size: 20px;
    line-height: 46px;
    font-weight: 500;
    margin: 0 auto 20px auto;
    width: max-content;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    padding: 1px 0 20px 0;
    max-width: 1000px;
    background-color: $grey;
    border-radius: 10px;
}

.input__box-title {
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 0px 10px;
}

.input__box {
    margin: 0px auto 0px auto;
    background-color: $grey;
    width: 330px;

    // border: 1px red solid;

    &_data {
        width: 20%;
    }

    &_name {
        width: 80%;
    }

    &_description {
        width: 95%;
    }
}

.form__title {
    font-family: inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 10px 0 0 0;
    margin: 0px auto 5px 10px;
}

.input__container {
    display: flex;
    // border: 1px red solid;

    &_photo {
        align-self: center;
        flex-wrap: wrap;
    }
}

.form__input {
    width: 90%;
    margin: 0 0 0px 10px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    background-color: $ligthGrey;
    font-size: 14px;
    font-family: inter;
    line-height: 19px;
    font-weight: 400;


    &_description {
        width: 96.8%;
        height: 50px;
    }
}

.button__box {
    display: flex;
    width: max-content;
    gap: 10px;
    margin: auto;
}

.form__button {
    margin: 20px auto 0 auto;
    width: 100px;
    height: 30px;
    background-color: $buttonGreen;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.726);
    transition: 0.3s;

    &__add {
        height: 40px;
        font-size: 14px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &_disabled {
        background-color: $ligthGrey;

        &:hover {
            cursor: default;
        }
    }
}
</style>