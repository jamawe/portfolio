<script setup>
</script>

<template>
    <div class="impressum">
        <h1 class="impressum__title">Impressum</h1>
        <h2 class="impressum__heading">Angaben gem&auml;&szlig; &sect;5 TMG</h2>
        <p class="impressum__paragraph">
            Jana Wernick <br>
            Brauereiweg 2 <br>
            27751 Delmenhorst
        </p>
        <h2 class="impressum__heading">Kontakt</h2>
        <p class="impressum__paragraph">
            E-Mail: jana.wernick@gmail.com
        </p>
    </div>
</template>

<style lang="scss" scoped>
.impressum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;

    font-family: var(--monospace);

    padding-bottom: 20%;
    padding-left: 10%;

    &__title {
        font-family: 'Roboto Medium';
        text-transform: lowercase;
        margin-bottom: 2rem;
    }

    &__heading {
        font-family: 'Roboto Medium';
        margin-bottom: 1rem;
    }

    &__paragraph {
        padding-left: 1rem;
        margin-bottom: 2rem;
    }
}
</style>