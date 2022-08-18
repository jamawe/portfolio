<script setup>
import { ref } from 'vue';
import IconGitHub from './icons/IconGitHub.vue';
import IconCopy from './icons/IconCopy.vue';

const stack = ref([
    'Vue3 & Vite',
    'Vue Router',
    'Sass'
]);

function copyEmailToClipboard(e) {
    const email = e.currentTarget.dataset.email;

    // Clipboard API not supported?
    if (!navigator.clipboard) {
        fallbackCopyEmailToClipboard(email);
        return;
    }

    navigator.clipboard.writeText(email);
}

function fallbackCopyEmailToClipboard(email) {
    let tempEl = document.createElement('input');
    tempEl.value = email;

    document.body.appendChild(tempEl);
    tempEl.select();

    document.execCommand('copy');
    document.body.removeChild(tempEl);
}
</script>

<template>
    <div class="footer">
        <div class="footer__section">
            <h4 class="footer__section__title">Gemacht mit</h4>
            <ul class="footer__section__list">
                <li
                    v-for="(item, i) in stack"
                    class="footer__section__list__item">
                        &mdash; {{ item }}
                </li>
                <li class="footer__section__list__item">&mdash; &#9749;</li>
            </ul>
        </div>
        <div class="footer__section">
            <h4 class="footer__section__title">Kontakt</h4>
            <div class="footer__section__container">
                    <div class="footer__section__container__row">
                        <a class="footer__section__container__row__link" href="https://github.com/jamawe" target="_blank">
                            <IconGitHub class="footer__section__container__row__link__icon " />
                        </a>
                    </div>
                    <div class="footer__section__container__row">
                        <a class="footer__section__container__row__link" href="mailto:jana.wernick@gmail.com">
                            jana.wernick@gmail.com
                        </a>
                        <button 
                        @click="copyEmailToClipboard" 
                        class="footer__section__container__row__button" type="button" 
                        title="Adresse kopieren" 
                        data-email="jana.wernick@gmail.com">
                            <IconCopy class="footer__section__container__row__button__icon" />
                        </button>
                    </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5%;
    height: min(25vh, 400px);
    padding: 5%;
    margin-top: 10%;
    font-family: 'Monaco', monospace;

    &__section {
        height: 100%;
        grid-column: span 3;

        &__title {
            font-weight: bold;
            letter-spacing: .25ch;
            margin-bottom: 1rem;
        }

        &__list {
            list-style-type: none;
            padding-inline-start: 0;

            // &__item {
            // }
        }

        &__container {
            display: flex;
            flex-direction: column;

            &__row {
                display: flex;

                &__link {
                    color: var(--text);
                    margin-right: 1rem;
                    margin-bottom: .5rem;

                    &__icon {
                        border-radius: 50%;
                        height: 29px;
                        width: 29px;
                    }

                    // &:hover TODO color
                }

                &__button {
                    position: relative;
                    background-color: transparent;
                    border: none;
                    vertical-align: middle;
                    height: 1.75rem;
                    width: 1.75rem;
                    cursor: pointer;
                    margin-right: 1rem;
                    margin-bottom: .5rem;

                    &::before {
                        content: '';
                        background-color: var(--theme-icon-bg-light); /* TODO: colors! */
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                        transform: scale(0);
                        transition: all 200ms cubic-bezier(.17,.67,1,1.23);
                    }

                    &:hover::before {
                        transform: scale(1);
                    }

                    &__icon {
                        position: absolute;
                        top: calc(calc(1.75rem - 1.125rem) / 2);
                        left: calc(calc(1.75rem - 1.125rem) / 2);
                        height: 1.125rem;
                        width: 1.125rem;
                        border-radius: 50%;
                    }
                }

            }

        }
    }
}
</style>