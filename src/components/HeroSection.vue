<script setup>

</script>

<template>
    <div class="hero">
        <!-- <div class="hero__header"></div> -->

        <div class="hero__body">
            <h1 class="hero__body__title">
                some text,<br>
                some longer text
            </h1>
            <h2 class="hero__body__subtitle">
                -- a description of something
            </h2>
            <button class="hero__body__button" type="button">
                Über mich
            </button>
        </div>

        <div class="hero__footer">
            <router-link class="hero__footer__link" to="#">Projekte</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__body {
        width: 100%;
        max-width: 50rem; /* TODO: Set on main? in App.vue */
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 25vh;
        overflow: hidden;

        &__title {
            // font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: clamp(3.5rem, 10vw + 1rem, 4rem); /* h1 32px */
            line-height: 110%;
        }

        &__subtitle {
            /* h2 24px font-size */
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-style: italic;
            margin-bottom: 1.5em;
        }

        &__button {
            font-size: 1.125rem;
            padding: .5em 1.5em;
            cursor: pointer;
        }
    }

    &__footer {
        position: absolute;
        bottom: 10%;

        &__link {
            margin-left: auto;
            margin-right: auto;
        }
    }

    // background: hsla(212, 12%, 53%, 1);

    // background: linear-gradient(135deg, hsla(212, 12%, 53%, 1) 0%, hsla(346, 10%, 39%, 1) 43%, hsla(276, 11%, 18%, 1) 100%);

    // background: -moz-linear-gradient(135deg, hsla(212, 12%, 53%, 1) 0%, hsla(346, 10%, 39%, 1) 43%, hsla(276, 11%, 18%, 1) 100%);

    // background: -webkit-linear-gradient(135deg, hsla(212, 12%, 53%, 1) 0%, hsla(346, 10%, 39%, 1) 43%, hsla(276, 11%, 18%, 1) 100%);

    // filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#778595", endColorstr="#6F5A5F", GradientType=1 );
    // background: hsla(256, 52%, 55%, 1);
    // background: radial-gradient(circle, hsla(256, 52%, 55%, 1) 0%, hsla(211, 41%, 53%, 1) 100%);

    // background: -moz-radial-gradient(circle, hsla(256, 52%, 55%, 1) 0%, hsla(211, 41%, 53%, 1) 100%);

    // background: -webkit-radial-gradient(circle, hsla(256, 52%, 55%, 1) 0%, hsla(211, 41%, 53%, 1) 100%);

    // filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7252c8", endColorstr="#5786b9", GradientType=1 );
}
</style>