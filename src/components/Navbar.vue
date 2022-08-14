<script setup>
import { onMounted, ref, toRef } from 'vue';
import IconMenu from './icons/IconMenu.vue';
import IconClose from './icons/IconClose.vue';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';

let showMenu = ref(false);
let darkTheme = ref(false);
// Get theme set in localStorage
const colorTheme = JSON.parse(localStorage.getItem('theme')) || '';
// If dark value theme set in localStorage, assign values to @root and this component's darkTheme accordingly
// NOTE: darkTheme cannot be directly derived from the localStorage value since it is supposed to be reactive to also the components toggle button
if (colorTheme === 'dark') {
    document.documentElement.setAttribute('color-theme', 'dark');
    darkTheme.value = true;
}

// scrollPosition for navbar color change?

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
</script>t

<template>
    <nav class="navbar">
        <!-- <div class="navbar__brand">BrandName</div> -->
         <div class="navbar__toggle">
            <Transition name="slide-down">
                <button v-if="!showMenu" @click="showMenu=!showMenu" class="navbar__toggle__button" type="button">
                        <IconMenu />
                </button>
                <button v-else-if="showMenu" @click="showMenu=!showMenu" class="navbar__toggle__button" type="button">
                        <IconClose />
                </button>
            </Transition>
        </div>

        <ul :class="{'navbar__list--hidden': !showMenu}" class="navbar__list">
            <li class="navbar__list__item">
                <router-link class="navbar__list__item__link" to="#">Projects</router-link>
            </li>
            <li class="navbar__list__item">
                <router-link class="navbar__list__item__link" to="#">About</router-link>
            </li>
            <li class="navbar__list__item">
                <router-link class="navbar__list__item__link" to="#">Contact</router-link>
            </li>
            <li v-if="!darkTheme" class="navbar__list__item">
                <button @click="toggleTheme" class="navbar__list__item__button" type="button" data-theme="dark">
                    <IconMoon />
                </button>
            </li>
            <li v-if="darkTheme" class="navbar__list__item">
                <button @click="toggleTheme" class="navbar__list__item__button" type="button" data-theme="light">
                    <IconSun />
                </button>
            </li>
        </ul>

       
    </nav>
</template>

<style lang="scss">
   .navbar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        position: sticky;
        top: 0;
        z-index: 50;
        padding: .5rem;
        width: 100%;

        // &__brand {
        //     width: 20%; /* toggle: 80, button: float right */
        // }

        &__toggle {
            position: relative;
            height: var(--navbar-toggle-size);
            width: var(--navbar-toggle-size);
            margin-left: auto;
            margin-right: auto;
            
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
            margin-top: 2rem;
            margin-bottom: 1rem;
            list-style-type: none;
            padding-inline-start: 0; /* Remove left side padding of list items */

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
                margin-left: auto;
                margin-right: auto;
            }

            &__item {

                /* mobile-first */
                @include tablet-landscape {
                    margin-left: 1rem;
                }

                // &__link {

                // }

                &__button {
                    background-color: transparent;
                    border: none;
                    vertical-align: middle;
                    cursor: pointer;

                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                }
            }


        }
   }

    .slide-down-enter-active {
        transition: all 500ms ease-in-out;
    }

    .slide-down-leave-active {
        transition: all 200ms ease-out;
    }

    .slide-down-enter-from {
        opacity: 0;
        transform: translateY(-20px);
    }

    .slide-down-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>