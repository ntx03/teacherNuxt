<script setup>
import { useMain } from '../../../composables/main/useMain';
import { updateTitle, updateText, updatePhoto } from '../../../utils/api/apiMain';



// данные для главной страницы
const main = useMain();


definePageMeta({
    layout: "admin",
    middleware: 'auth'
})

const arrTitle = ref([0]);
const arrText = ref([0]);

const title = ref(
    [{ title: '' }]
);

const text = ref(
    [{ text: '' }]
);

const photo = ref({
    url: '',
    alt: '',
})



const validateTitle = ref(true);
const validateText = ref(true);
const validatePhoto = ref(true);

/**
 * Добавить абзац заголовка
 */
const addTitle = () => {
    arrTitle.value.push(arrTitle.value[arrTitle.value.length - 1] + 1);
    title.value.push({
        title: '',
    })
}

/**
 * Очистить форму заголовка
 */
const clearTitle = () => {
    title.value = [{ title: '' }];
    arrTitle.value = [0];
}
/**
 * Очистить форму заголовка
 */
const clearText = () => {
    text.value = [{ text: '' }];
    arrText.value = [0];
}
/**
 * Очистить форму заголовка
 */
const clearPhoto = () => {
    photo.value = [{
        url: '',
        alt: '',
    }];
}
/**
 * Добавить абзац приветственного текста
 */
const addText = () => {
    arrText.value.push(arrText.value[arrText.value.length - 1] + 1);
    text.value.push({
        text: '',
    })
}



watch((title.value), () => {
    const arr = [];
    title.value.forEach((i) => {
        if (i.title.length > 5) {
            arr.push(0);
        } else {
            arr.push(1);
        }
    })
    arr.reduce((a, b) => a + b) === 0 ? validateTitle.value = false : validateTitle.value = true;
})

watch((text.value), () => {
    const arr = [];
    text.value.forEach((i) => {
        i.text.length > 5 ? arr.push(0) : arr.push(1);
    })
    arr.reduce((a, b) => a + b) === 0 ? validateText.value = false : validateText.value = true;
})

watch((photo.value), () => {
    const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if (photo.value.url.match(url) && photo.value.alt.length > 4) {
        validatePhoto.value = false;
    } else {
        validatePhoto.value = true;
    }
})
/**
 * Обновляем заголовок
 */
const createUpdateTitle = async () => {
    const arrayTitle = title.value.map((i) => i.title);
    const id = main.value[0]._id;
    const res = await updateTitle(arrayTitle, id);
    if (res) {
        clearTitle();
        validateTitle.value = true;
        alert('Текст заголовка главной страницы обновлен успешно!');
    }
}
/**
 * Обновляем текст
 */
const createUpdateText = async () => {
    const arrayText = text.value.map((i) => i.text);
    const id = main.value[0]._id;
    const res = await updateText(arrayText, id);
    if (res) {
        clearText();
        validateText.value = true;
        alert('Текст главной страницы обновлен успешно!');
    }
}
/**
 * Обновляем фотографию
 */
const createUpdatePhoto = async () => {
    const url = photo.value.url;
    const alt = photo.value.alt;
    const id = main.value[0]._id;
    console.log(id);
    const res = await updatePhoto(url, alt, id);
    if (res) {
        clearPhoto();
        validateText.value = true;
        alert('Фотография на главной странице обновлена успешно!');
    }
}
</script>

<template >
    <ClientOnly>
        <h2 class="title">ЗАМЕНИТЬ ЗАГОЛОВОК</h2>
        <form class="form">
            <div class="form__title_notification"> * - обязятельно к заполению</div>
            <div class="input__container">
                <div class="input__box_description" v-for="i in arrTitle">
                    <p class="form__title">Введите текст предложения заголовка *</p>
                    <input class="form__input " type="text" placeholder="Длинна заголовка должна быть больше пяти символов"
                        v-model="title[i].title" />
                </div>
                <div class="button__box">
                    <button class="form__button form__button__add" @click.prevent="addTitle">Добавить абзац</button>
                    <button class="form__button form__button__add" @click.prevent="clearTitle">Очистить форму</button>
                </div>
                <button :disabled="validateTitle" class="form__button form__button__add"
                    :class="{ 'form__button_disabled': validateTitle }"
                    @click.prevent="createUpdateTitle">Отправить</button>
            </div>
        </form>
        <h2 class="title">ЗАМЕНИТЬ ПРИВЕТСТВЕННЫЙ ТЕКСТ</h2>
        <form class="form">
            <div class="form__title_notification"> * - обязятельно к заполению</div>
            <div class="input__container">
                <div class="input__box_description" v-for="i in arrText">
                    <p class="form__title">Введите текст предложения приветственного текста *</p>
                    <textarea class="form__input form__input_description" type="text"
                        placeholder="Описание новости должно быть больше пяти символов" v-model="text[i].text" />
                </div>
                <div class="button__box">
                    <button class="form__button form__button__add" @click.prevent="addText">Добавить абзац</button>
                    <button class="form__button form__button__add" @click.prevent="clearText">Очистить форму</button>
                </div>
                <button :disabled="validateText" class="form__button form__button__add"
                    :class="{ 'form__button_disabled': validateText }" @click.prevent="createUpdateText">Отправить</button>
            </div>
        </form>
        <h2 class="title">ЗАМЕНИТЬ ФОТОГРАФИЮ</h2>
        <div class="wrapper">
            <form class="form ">
                <div class="form__title_notification"> * - обязятельно к заполению</div>
                <div class="input__container">
                    <div class="input__box_description">
                        <p class="form__title">Введите url новой фотографии *</p>
                        <input class="form__input " type="text" placeholder="url должен начинаться с https://"
                            v-model="photo.url" />
                        <p class="form__title">Введите текст названия фотографии *</p>
                        <input class="form__input " type="text"
                            placeholder="Описание изображения должно быть больше пяти символов" v-model="photo.alt" />
                    </div>
                    <div class="button__box ">
                        <button class="form__button form__button__add" @click.prevent="clearPhoto">Очистить форму</button>
                        <button :disabled="validatePhoto" class="form__button form__button__add"
                            :class="{ 'form__button_disabled': validatePhoto }"
                            @click.prevent="createUpdatePhoto">Отправить</button>
                    </div>

                </div>
            </form>
        </div>
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

.wrapper {
    padding-bottom: 50px;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px auto;
    padding: 1px 0 20px 0;
    max-width: 1000px;
    background-color: $grey;
    border-radius: 10px;

    &_last {
        padding: 0 0 50px 0;

    }
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

    &_data {
        width: 20%;
    }

    &_name {
        width: 80%;
    }

    &_description {
        width: 100%;
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
    flex-direction: column;
    margin: 0 auto 0 auto;
    width: 100%;

    &_photo {
        align-self: center;
        flex-wrap: wrap;
    }
}

.form__input {
    width: 97%;
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