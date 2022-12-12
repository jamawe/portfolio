<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import IconMenu from './icons/IconMenu.vue';
import IconClose from './icons/IconClose.vue';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';
import IconGitHub from './icons/IconGitHub.vue';

let showMenu = ref(false);
const route = useRoute();
let onHomeRoute = ref(true);

let darkTheme = ref(false);
// Get theme set in localStorage
const colorTheme = JSON.parse(localStorage.getItem('theme')) || '';
// If dark value theme set in localStorage, assign values to @root and this component's darkTheme accordingly
// NOTE: darkTheme cannot be directly derived from the localStorage value since it is supposed to be reactive to also the components toggle button
if (colorTheme === 'dark') {
    document.documentElement.setAttribute('color-theme', 'dark');
    darkTheme.value = true;
}

let scrolled = ref(false);
//Listen to scroll in order to toggle navbar bg-color
window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 0 ? true : false;
})

function toggleTheme(e) {
    // Find out which button was clicked
    const theme = e.currentTarget.dataset.theme;

    // Set color-theme @root
    document.documentElement.setAttribute('color-theme', `${theme}`);

    // Toggle this component's darkTheme value in order to toggle theme buttons
    theme === 'dark' ? darkTheme.value = true : darkTheme.value = false;

    // Set theme in localStorage
    localStorage.setItem('theme', JSON.stringify(theme));

    // In case menu is expanded, close it
    if (showMenu.value) showMenu.value = !showMenu.value;
}

// Watch route.name in order to toggle home link in menu
watch(
    () => route.name,
    newRoute => {
        onHomeRoute.value = newRoute === 'home' ? true : false;
    }
);
</script>t

<template>
    <nav class="navbar" :class="{'navbar--scrolled': scrolled}">
        <div class="navbar__brand">
            <button v-if="!darkTheme" @click="toggleTheme($event)" class="navbar__list__item__button" type="button" data-theme="dark" title="Zu dunklem Modus wechseln">
                <IconMoon class="navbar__list__item__button__icon navbar__list__item__button__icon" />
            </button>
            <button v-else-if="darkTheme" @click="toggleTheme($event)" class="navbar__list__item__button" type="button" data-theme="light" title="Zu hellem Modus wechseln">
                <IconSun class="navbar__list__item__button__icon navbar__list__item__button__icon" />
            </button>
        </div>
         <div class="navbar__toggle">
            <Transition name="slide-down" mode="out-in">
                <button v-if="!showMenu" @click="showMenu = !showMenu" class="navbar__toggle__button" type="button">
                        <IconMenu />
                </button>
                <button v-else-if="showMenu" @click="showMenu = !showMenu" class="navbar__toggle__button" type="button">
                        <IconClose />
                </button>
            </Transition>
        </div>

            <ul :class="{'navbar__list--hidden': !showMenu}" class="navbar__list">
                <li v-if="!onHomeRoute" @click="showMenu = !showMenu" class="navbar__list__item">
                    <router-link class="navbar__list__item__link" :to="{ name: 'home' }" title="Zur Startseite">Home</router-link>
                </li>
                <li @click="showMenu = !showMenu" class="navbar__list__item">
                    <router-link class="navbar__list__item__link" :to="{ name: 'home', hash: '#projects' }" title="Projekte">Projekte</router-link>
                </li>
                <li @click="showMenu = !showMenu" class="navbar__list__item">
                    <router-link class="navbar__list__item__link" :to="{ name: 'about' }" title="Über mich">Über</router-link>
                </li>
                <li class="navbar__list__item">
                    <a href="#" class="navbar__list__item__link navbar__list__item__link--no-effect">
                        <IconGitHub class="navbar__list__item__link__icon" />
                    </a>
                </li>
            </ul>

       
    </nav>
</template>

<style lang="scss">
   .navbar {
        position: relative;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        position: fixed;
        top: 0;
        z-index: 50;
        padding: .5rem;
        width: 100%;
        background-color: transparent;
        transition: all 300ms ease-in-out;
        
        &--scrolled {
            background-color: var(--surfaceNav);
            backdrop-filter: blur(15px);
        }

        &__brand {
            position: absolute;
            top: 18px;
            left: 12.5px;
            width: 20%; /* toggle: 80, button: float right */
        }

        &__toggle {
            position: relative;
            height: var(--navbar-toggle-size);
            width: var(--navbar-toggle-size);
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
            
            &__button {
                position: absolute;
                /* absolute center in parent (navbar__toggle):
                   - parent needs static height and width (--navbar-toggle-size)
                   - child (navbar__toggle__button / svg) needs static width and height (--navbar-toggle-button-size)
                   - calculation: (parent size - child size) / 2
                   - NOTE: Remove all padding and margin from child
                */ 
                left: calc(calc(var(--navbar-toggle-size) - var(--navbar-toggle-button-size)) / 2);
                top: calc(calc(var(--navbar-toggle-size) - var(--navbar-toggle-button-size)) / 2);
                background-color: transparent;
                padding: 0;
                border: none;
                cursor: pointer;

                svg {
                    height: var(--navbar-toggle-button-size);
                    width: var(--navbar-toggle-button-size);
                }
            }

            /* mobile-first, then hide toggle buttons */
            @include tablet-landscape {
                display: none;
            }
        }

        &__list {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-top: .5rem;
            padding-bottom: .5rem;
            list-style-type: none;
            padding-inline-start: 0; /* Remove left side padding of list items */
            // background-color: var(--surface3);

            /* mobile-first: do not show menu items (!showMenu) */
            &--hidden {
                display: none;
            }

            /* mobile-first */
            @include tablet-landscape {
                display: flex;
                flex-direction: row;
                justify-content: center;
                /* to achieve same margin as absolute top value of menu button */
                margin-top: calc(calc(var(--toggle-container-size) - var(--menu-icon-size)) / 2);
                // padding: 0;
                background-color: transparent;
            }

            &__item {
                margin-bottom: .5rem;
                /* mobile-first */
                @include tablet-landscape {
                    margin-left: 1rem;
                    margin-bottom: 0;
                }

                &__link {
                    position: relative;
                    color: var(--text);
                    text-decoration: none;
                    font-size: 1rem;
                    text-transform: lowercase;
                    letter-spacing: .0625rem;

                    &__icon {
                        border-radius: 50%;
                        margin-top: .5rem;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: .0125rem;
                        right: .0125rem;
                        height: 1px;
                        background: currentColor;
                        transform: scale(0);
                        transition: transform 150ms ease-in-out;
                    }

                    &:hover::after {
                        transform: scale(1);
                    }

                    &--no-effect::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 0;
                        background: transparent;
                        transform: scale(0);
                        transition: transform 150ms ease-in-out;
                    }

                    // &--no-effect:hover {
                        // TODO color
                    // }
                }

                &__button {
                    position: relative;
                    background-color: transparent;
                    border: none;
                    vertical-align: middle;
                    height: 1.5rem;
                    width: 1.5rem;
                    cursor: pointer;
                    z-index: 1;

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
                        top: calc(calc(1.5rem - 1.125rem) / 2);
                        left: calc(calc(1.5rem - 1.125rem) / 2);
                        height: 1.125rem;
                        width: 1.125rem;
                        border-radius: 50%;
                        color: var(--theme-icon-color-light);
                    }
                }
            }
        }
   }

    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: all 150ms cubic-bezier(.17,.67,1,1.23);
    }

    .slide-down-enter-from {
        opacity: 0;
        transform: translateY(20px);
    }

    .slide-down-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
</style>