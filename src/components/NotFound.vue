<template>
<div class="found">
    <h1 class="found__title">404</h1>
    <p class="found__text">
        Die angefragte Seite konnte nicht gefunden werden.
    </p>
    <router-link class="found__link" :to="{ name: 'home' }">Zur Startseite</router-link>
</div>
</template>

<style lang="scss" scoped>
.found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 15% 5%;

    &__title {
        font-size: 4rem;
        font-family: var(--monospace);
        margin-bottom: 2rem;
    }

    &__text {
        font-size: 1.125rem;
        min-height: 2vh;
        margin-bottom: 2rem;
    }

    &__link {
        color: var(--textInverse);
        background-color: var(--surfaceInverse);
        text-decoration: none;
        border-radius: .25rem;
        padding: .5rem 1.5rem;
        margin-left: .75rem;
        margin-right: .75rem;

        &:hover {
            background-color: var(--surfaceInverseHover);
        }
    }

}
</style>