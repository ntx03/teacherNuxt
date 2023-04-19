<script setup>
import { createNews } from '~/utils/api/api';
import { newsList } from '~/utils/api/api';
import { useNews } from '~/composables/news/useNews';
import { useModalText } from '~/composables/news/useModalText';

definePageMeta({
    layout: "admin",
    middleware: "auth"
});

const arr = ref([0]);

const validateName = ref(true);
const validateUrl = ref(true);
const validate = ref(true);
const validateButtonAddPhoto = ref(true);
const idNews = ref('');

const modal = useShowModalDeleteNews();
const modalText = useModalText();

const news = useNews();

const object = ref({
    name: '',
    date: '',
    description: '',
    photo: [{
        link: '',
        name: ''
    },]
});
const getNews = async () => {
    const res = await newsList();
    if (res.length > 0) {
        news.value = res.reverse();
    }
}
getNews();

watch((object.value), () => {
    const arr = [];
    const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

    if (object.value.date.length && object.value.description.length && object.value.name.length > 5) {
        validateName.value = false;
    } else {
        validateName.value = true;
    }

    object.value.photo.forEach((i) => {
        i.link.match(url) ? arr.push(0) : arr.push(1);
    })

    arr.reduce((a, b) => a + b) === 0 ? validateUrl.value = false : validateUrl.value = true;

    !validateName.value && !validateUrl.value ? validate.value = false : validate.value = true;
});

watch((arr.value), () => {
    arr.value.length > 5 ? validateButtonAddPhoto.value = false : validateButtonAddPhoto.value = true;
})

/**
 * Отправляем форму
 */
const submit = (e) => {
    e.preventDefault();
    createNews(object.value)
        .then((res) => {
            alert("Новость успешно создана!");
            news.value.push(object.value);
        })
        .catch((e) => console.log(e));
}

/**
 * Добавляем фотографию 
 */
const addPhoto = (e) => {
    e.preventDefault();
    arr.value.push(arr.value[arr.value.length - 1] + 1);
    object.value.photo.push({
        link: '',
        name: ''
    })
}

/**
 * Очищаем форму
 */
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
/**
 * 
 * @param id  - номер новости
 * @param  text  - название новости
 */
const showModal = (id, text) => {
    modal.value = true;
    idNews.value = id;
    modalText.value = text;
}



</script>

<template >
    <ClientOnly>
        <h2 class="title">ДОБАВИТЬ НОВОСТЬ</h2>
        <form class="form">
            <div class="form__title_notification"> * - обязятельно к заполению</div>
            <div class="input__container">
                <div class="input__box_data">
                    <p class="form__title">Введите дату новости *</p>
                    <input class="form__input" type="date" v-model="object.date" />
                </div>
                <div class="input__box_name">
                    <p class="form__title">Введите название новости *</p>
                    <input class="form__input" type="text" v-model="object.name"
                        placeholder="Название новости должно быть больше пяти символов" />
                </div>
            </div>
            <div class="input__box_description">
                <p class="form__title">Введите описание новости *</p>
                <textarea class="form__input form__input_description" type="text" v-model="object.description"
                    placeholder="Описание новости должно быть больше семи символов" />
            </div>
            <div class="input__container input__container_photo">
                <div class="input__box" v-for="number in arr">
                    <p class="input__box-title">{{ `Фотография номер ${number + 1}` }}</p>
                    <p class="form__title">Введите url фотографии *</p>
                    <input class="form__input" type="url" v-model="object.photo[number].link"
                        placeholder=" URL изображения https://" />
                    <p class="form__title">Введите название изображения</p>
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
        <h2 class="title" v-show="news.length > 0">УДАЛИТЬ НОВОСТЬ</h2>
        <div class="delete__wrapper">
            <div class="delete" v-for="index in news">
                <div class="delete__news-container">
                    <p class="delete__news-name delete__news-name_header">Название: </p>
                    <p class="delete__news-name">{{ index.name }}</p>
                    <p class="delete__news-name delete__news-name_header">Описание: </p>
                    <p class="delete__news-name">{{ index.description }}</p>
                </div>
                <button class="delete__news-button" @click="showModal(index._id, index.name)">Удалить</button>

            </div>
        </div>
        <WarningModal v-show="modal" :id="idNews" />
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
    margin: 0 auto 20px auto;
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

    &_notification {
        margin: 10px 20px 5px auto;
    }
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

.delete {
    display: flex;
    margin: 20px auto 0 auto;
    padding: 1px 0 10px 0;
    max-width: 800px;
    background-color: $grey;
    border-radius: 10px;
    justify-content: space-between;

    &__wrapper {
        padding: 0 0 50px 0;
    }
}

.delete__news-container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px auto 10px 20px;
}

.delete__news-name {
    max-width: 500px;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: inter;

    &_header {
        font-size: 18px;
        font-weight: 500;
    }
}

.delete__news-button {
    width: 100px;
    height: 30px;
    margin: auto 20px auto auto;
    background-color: #dc2626;
    color: white;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
}
</style>