<script setup>
import { createVideo, createVideoSchool, getVideo, getVideoSchool } from '~/utils/api/apiVideo';
import { useVideos } from '../../../composables/video/useVideos';
import { useVideosSchool } from '../../../composables/video/useVideosSchool';
import { useShowModalVideo } from '../../../composables/video/useShowModalVideo';
import { useModalTextVideo } from '../../../composables/video/useModalTextVideo';
import { useDelMarkerForModal } from '../../../composables/video/useDelMarkerForModal';
import DeleteModalVideo from '../../../components/Admin/DeleteModalVideo.vue'

definePageMeta({
    layout: "admin",
    middleware: "auth"
});
/**
 * стейты валидации формы профориентации
 */
const validateName = ref(true);
const validateUrl = ref(true);
const validate = ref(true);

/**
 * стейты валидации формы школьной жизни
 */
const validateNameSchool = ref(true);
const validateUrlSchool = ref(true);
const validateSchool = ref(true);

/**
 * Передаем id удаляемого видео в модальное окно
 */
const idVideo = ref('');
const modal = useShowModalVideo();
const modalText = useModalTextVideo();
const marker = useDelMarkerForModal();

/**
 * получаем видео с свервера
 */
const videos = useVideos();
const videosSchool = useVideosSchool();
/** 
 * собираем данные с формы профориентации
 */
const object = ref({
    link: '',
    name: ''
});
/** 
 * собираем данные с формы школьной жизни
 */
const objectSchool = ref({
    link: '',
    name: ''
});

getVideo()
    .then((res) => {
        videos.value = res.reverse();
    })
    .catch((e) => {
        console.log(e);
    })

getVideoSchool()
    .then((res) => {
        videosSchool.value = res.reverse();
    })
    .catch((e) => {
        console.log(e);
    })
/**
 * регулярка для валидации url
 */
const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

watch((object.value), () => {
    if (object.value.name.length > 5) {
        validateName.value = false;
    } else {
        validateName.value = true;
    }
    if (object.value.link.match(url)) {
        validateUrl.value = false;
    } else {
        validateUrl.value = true;
    }
    if (!validateName.value && !validateUrl.value) {
        validate.value = false;
    } else {
        validate.value = true;
    }

});

watch((objectSchool.value), () => {
    if (objectSchool.value.name.length > 5) {
        validateNameSchool.value = false;
    } else {
        validateNameSchool.value = true;
    }
    if (objectSchool.value.link.match(url)) {
        validateUrlSchool.value = false;
    } else {
        validateUrlSchool.value = true;
    }
    if (!validateNameSchool.value && !validateUrlSchool.value) {
        validateSchool.value = false;
    } else {
        validateSchool.value = true;
    }
});



/**
 * Добавляем видео в профориентацию
 */
const submit = (e) => {
    e.preventDefault();
    createVideo(object.value)
        .then((res) => {
            alert("Видео профориентации успешно добавлено!");
            // news.value.push(object.value);
        })
        .catch((e) => console.log(e));
}

/**
 * Добавляем видео в профориентацию
 */
const submitSchool = (e) => {
    e.preventDefault();
    createVideoSchool(objectSchool.value)
        .then((res) => {
            alert("Видео школьная жизнь успешно добавлено!");
            // news.value.push(object.value);
        })
        .catch((e) => console.log(e));
}


/**
 * Очищаем форму профоринтации
 */
const clearForm = () => {
    object.value.link = "";
    object.value.name = '';
}

/**
 * Очищаем форму профоринтации
 */
const clearFormSchool = () => {
    objectSchool.value.link = "";
    objectSchool.value.name = '';
}

/**
 * 
 * @param id  - номер новости
 * @param  text  - название новости
 */
const showModal = (id, text) => {
    modal.value = true;
    idVideo.value = id;
    modalText.value = text;
    marker.value = false;
}
const showModalSchool = (id, text) => {
    modal.value = true;
    idVideo.value = id;
    modalText.value = text;
    marker.value = true;
}
</script>

<template >
    <ClientOnly>
        <h2 class="title">ДОБАВИТЬ ВИДЕО</h2>
        <div class="form__container">
            <form class="form">
                <p class="form__title">ДОБАВЛЕНИЕ В ПРОФОРИЕНТАЦИЮ</p>
                <div class="form__title_notification"> * - обязятельно к заполнению</div>
                <div class="input__container input__container_photo">
                    <div class="input__box">
                        <p class="form__title">Введите url video *</p>
                        <input class="form__input" type="url" v-model="object.link" placeholder=" URL видео https://" />
                        <p class="form__title">Введите описание видео *</p>
                        <input class="form__input" type="text" v-model="object.name" placeholder="Больше пяти символов" />
                    </div>
                </div>
                <div class="button__box">
                    <button class="form__button form__button__add" @click.prevent="clearForm">Очистить форму</button>
                    <button :disabled="validate" class="form__button form__button__add"
                        :class="{ 'form__button_disabled': validate }" @click="submit">Отправить</button>
                </div>
            </form>
            <form class="form">
                <p class="form__title">ДОБАВЛЕНИЕ В ШКОЛЬНУЮ ЖИЗНЬ</p>
                <div class="form__title_notification"> * - обязятельно к заполнению</div>
                <div class="input__container input__container_photo">
                    <div class="input__box">
                        <p class="form__title">Введите url video *</p>
                        <input class="form__input" type="url" v-model="objectSchool.link"
                            placeholder=" URL видео https://" />
                        <p class="form__title">Введите описание видео *</p>
                        <input class="form__input" type="text" v-model="objectSchool.name"
                            placeholder="Больше пяти символов" />
                    </div>
                </div>
                <div class="button__box">
                    <button class="form__button form__button__add" @click.prevent="clearFormSchool">Очистить форму</button>
                    <button :disabled="validateSchool" class="form__button form__button__add"
                        :class="{ 'form__button_disabled': validateSchool }" @click="submitSchool">Отправить</button>
                </div>
            </form>
        </div>
        <h2 class="title" v-show="videos.length > 0 || videosSchool.length > 0">УДАЛИТЬ ВИДЕО</h2>
        <div class="delete__container">
            <div class="delete__wrapper">
                <p class="form__title" v-show="videos.length > 0">СПИСОК ВИДЕО ИЗ ПРОФОРИЕНТАЦИИ</p>
                <div class="delete" v-for="index in videos">
                    <div class="delete__news-container">
                        <p class="delete__news-name delete__news-name_header">Название: </p>
                        <p class="delete__news-name">{{ index.name }}</p>
                    </div>
                    <button class="delete__news-button" @click="showModal(index._id, index.name)">Удалить</button>
                </div>

            </div>
            <div class="delete__wrapper">
                <p class="form__title" v-show="videosSchool.length > 0">СПИСОК ВИДЕО ИЗ ШКОЛЬНОЙ ЖИЗНИ</p>
                <div class="delete" v-for="index in videosSchool">
                    <div class="delete__news-container">
                        <p class="delete__news-name delete__news-name_header">Название: </p>
                        <p class="delete__news-name">{{ index.name }}</p>
                    </div>
                    <button class="delete__news-button" @click="showModalSchool(index._id, index.name)">Удалить</button>
                </div>
            </div>
        </div>
        <DeleteModalVideo v-show="modal" :id="idVideo" />
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
    max-width: 500px;
    background-color: $grey;
    border-radius: 10px;
}

.form__container {
    display: flex;
    width: max-content;
    margin: 0 auto 0 auto;
    gap: 50px;
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
        margin: 5px 20px 0px auto;
        font-size: 12px;
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
    width: 400px;
    background-color: $grey;
    border-radius: 10px;
    justify-content: space-between;

    &__wrapper {
        padding: 0 0 50px 0;
    }

    &__container {
        display: flex;
        gap: 50px;
        margin: 0 auto 0 auto;
        width: max-content;
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