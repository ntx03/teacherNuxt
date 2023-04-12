<template>
    <div class="popup" :class="{ 'popup_open': popup }">
        <div class="popup__container-image">
            <button class="popup__icon popup__icon-image" type="button" aria-label="закрытие"
                @click="popup = false"></button>
            <img class="popup__image" :src="image" :alt="name" />
            <p class="popup__title-image">{{ name }}</p>
        </div>
        <div class="popup__overlay" @click="popup = false"></div>
    </div>
</template>

<script setup>
const popup = usePopup();
const image = usePopupImage();
const name = usePopupName();
</script>

<style scoped lang="scss">
.popup {
    background: $overlayBlack;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.2s, opacity 0.2s linear;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &_open {
        display: flex;
        visibility: visible;
        opacity: 1;
        transition: visibility 0.2s, opacity 0.2s linear;
        background: $overlayBlack;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.popup__container-image {
    margin: auto;
    margin-top: auto;
    margin-bottom: auto;
    max-width: 75vw;
    max-height: 75vh;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
}

.popup__icon {
    width: 32px;
    height: 32px;
    position: absolute;
    top: -40px;
    right: -40px;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(../assets/Close_Icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    z-index: 3;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
}

.popup__icon-image {}

.popup__image {
    max-width: 75vw;
    max-height: 75vh;
    object-fit: cover;
}

.popup__title-image {
    margin: 0;
    max-width: 75vw;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    font-style: normal;
    color: white;
    margin-top: 10px;
}

.popup__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $overlayBlack;
    cursor: pointer;
    z-index: 1;
}

@media (max-width: 690px) {
    .popup__icon {
        width: 20px;
        height: 20px;
        right: 0;
    }
}
</style>