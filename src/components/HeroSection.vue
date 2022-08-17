<script setup>
import IconChevronDoubleDown from './icons/IconChevronDoubleDown.vue';
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
                &mdash; a description of something
            </h2>
                <router-link class="hero__body__link" :to="{ name: 'about' }">
                Über mich</router-link>
        </div>

        <div class="hero__footer">
            <router-link class="hero__footer__link" :to="{ name: 'home', hash: '#projects' }">
                <IconChevronDoubleDown class="hero__footer__link__icon" />
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    position: relative;
    height: calc(100vh - 64px); /* TODO: Get height of navbar component in App.vue and pass it to routerview as prop */
    display: flex;
    justify-content: center;
    align-items: center;

    &__body {
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 25vh;

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
            margin-top: .5rem;
            margin-bottom: 1.5em;
        }

        &__link {
            font-size: 1rem;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: .05rem;
            color: var(--textInverse);
            background-color: var(--surfaceInverse); // todo: accent color
            border-radius: .25rem;
            padding: .75rem 1.5rem;
            cursor: pointer;
            transition: background-color 200ms ease-in-out;

            &:hover {
                background-color: var(--surfaceInverseHover);
            }
        }
    }

    &__footer {
        position: absolute;
        bottom: 12.5%;

        @include tablet {
            bottom: 5%;
        }

        &__link {
            position: relative;
            display: block; // Needed for animation
            text-decoration: none;
            text-transform: lowercase;
            color: var(--text);
            letter-spacing: .0625rem;
            margin-left: auto;
            margin-right: auto;

            animation-name: bounce;
            animation-duration: 1500ms;
            animation-delay: 500ms;
            animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
            animation-iteration-count: infinite;

            @keyframes bounce {
                70% { 
                    transform:translateY(0%); 
                }
                80% { 
                    transform:translateY(30%); //15
                }
                90% { 
                    transform:translateY(0%); 
                }
                95% { 
                    transform:translateY(14%); // 7
                }
                100% { 
                    transform:translateY(0); 
                }
            }

            /* 
                Cute transition from when 
                link was text and not an icon:
            */

            // &::before {
            //     content: '';
            //     background-color: lightgreen; /* TODO: colors! */
            //     position: absolute;
            //     left: 0;
            //     bottom: 4px;
            //     width: 3px;
            //     height: 100%;
            //     z-index: -1;
            //     transition: all 200ms ease-in-out;
            // }

            // &:hover::before {
            //     width: 100%;
            // }

            &__icon {
                height: 1.375rem;
                width: 1.375rem;
            }
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