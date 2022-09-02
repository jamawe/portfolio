<script setup>
import { ref } from 'vue';
import IconGitHub from './icons/IconGitHub.vue';
import IconCopy from './icons/IconCopy.vue';

const stack = ref([
    'Vue3 & Vite',
    'Vue Router',
    'Sass'
]);

const year = ref(new Date().getFullYear());

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
            <h4 class="footer__section__title">Stack für diese Seite</h4>
            <ul class="footer__section__list">
                <li
                    v-for="(item, i) in stack"
                    class="footer__section__list__item">
                        {{ item }}
                </li>
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
                            Schreibt mir! 
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

        <div class="footer__section">
            <div class="footer__section__container">
                <div class="footer__section__container__row">
                    made with &#128156; + &#9749; in {{ year }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: grid;
    gap: 5%;
    // height: min(25vh, 400px);
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 2rem;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    // font-family: var(--monospace);

    @include tablet {
        grid-template-columns: repeat(6, 1fr);
        padding-left: 0;
        padding-right: 0;
    }

    &__section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-bottom: 2rem;

        &:last-of-type {
            margin-bottom: 1rem;
        }

        @include tablet {
            grid-column: span 3;

            &:last-of-type {
                grid-column: span 6;
            }
        }

        &__title {
            font-weight: bold;
            font-size: 1.175rem;
            letter-spacing: .25ch;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
        }

        &__list {
            font-family: var(--monospace);
            list-style-type: none;
            padding-inline-start: 0;

            @include tablet-landscape {
                display: flex;
            }

            &__item {
                white-space: nowrap;

                &::before {
                    content: '—';
                    margin-right: .5rem;

                    @include tablet-landscape {
                        content: '';
                        margin-right: 1rem;

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }
        }

        &__container {
            display: flex;
            flex-direction: column;
            font-family: var(--monospace);

            @include tablet-landscape {
                flex-direction: row;
                align-items: flex-start;
            }

            &__row {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: .5rem;

                @include tablet-landscape {
                    margin-right: 1rem;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }

                &__link {
                    color: var(--text);
                    margin-right: .5rem;
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
                        top: calc(calc(1.75rem - 1.25rem) / 2);
                        left: calc(calc(1.75rem - 1.25rem) / 2);
                        height: 1.25rem;
                        width: 1.25rem;
                        border-radius: 50%;
                    }
                }

            }

        }
    }

    &__section:last-of-type {
      font-size: .875rem; // 15px
    }
}
</style>