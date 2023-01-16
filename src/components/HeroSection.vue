<script setup>
import IconChevronDoubleDown from './icons/IconChevronDoubleDown.vue';
</script>

<template>
    <div class="hero">

        <div class="hero__body">
            <h1 class="hero__body__title">
                hi,<br>
                ich bin<br>
                jana wernick
            </h1>
            <h2 class="hero__body__subtitle">
                &mdash; frontend developerin
            </h2>
            <router-link class="hero__body__link" :to="{ name: 'about' }">
                Über mich
            </router-link>
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
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @include tablet {
        height: 100vh;
    }

    &__body {
        padding-left: 5%;
        padding-right: 5%;
        margin-top: 20vh;
        margin-bottom: 25vh;

        &__title {
            // font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: clamp(3.5rem, 10vw + 1rem, 4rem); /* h1 32px */
            text-transform: lowercase;
            line-height: 110%;
        }

        &__subtitle {
            /* h2 24px font-size */
            font-family: var(--serif);
            font-style: italic;
            text-transform: lowercase;
            margin-top: .5rem;
            margin-bottom: 1.5em;
        }

        &__link {
            font-family: 'Roboto Medium';
            font-size: 1.125rem;
            text-decoration: none;
            text-transform: lowercase;
            font-weight: 500;
            letter-spacing: .05rem;
            color: var(--textInverse);
            background-color: var(--surfaceInverse); // todo: accent color
            border-radius: .25rem;
            padding: .625rem 1.5rem;
            cursor: pointer;
            
            transition: all 150ms cubic-bezier(.17,.67,1,1.23);

            &:hover {
                background-color: var(--surfaceInverseHover);
            }
        }
    }

    &__footer {
        position: absolute;
        bottom: 3%;

        @include tablet {
            bottom: 2%;
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

                transition: all 150ms cubic-bezier(.17,.67,1,1.23);

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>