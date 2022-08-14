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
            <button @click="showMenu=!showMenu" class="navbar__toggle__button" type="button">
                <IconMenu v-if="!showMenu" />
                <IconClose v-else />
            </button>
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
        //     width: 20%;
        // }

        &__toggle {
            width: 100%; /* brand: 20, toggle: 80, button: float right */
            
            &__button {
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-top: .5rem;
                margin-bottom: .5rem;
                background-color: transparent;
                border: none;
                cursor: pointer;

                svg {
                    height: 1.25rem;
                    width: 1.25rem;
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
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
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
                margin-right: 0;
                margin-top: 0;
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
</style>