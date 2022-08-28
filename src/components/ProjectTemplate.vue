<script setup>
import { defineProps } from 'vue';
const props = defineProps(['project']);
</script>


<template>
<div class="project">
<!-- {{ section }} -->
    <template v-for="(section, i) in props.project.project" :key="i">
        <div v-if="section.name === 'title'" class="project__header">
            <h1  class="project__header__title">{{ section.content }}</h1>
        </div>

        <div v-if="section.name === 'links'" class="project__body__section__links">
            <a v-for="(link, i) in section.links" :key="i" class="project__body__section__links__item" :href="link.href" target="_blank">{{ link.text }}</a>
        </div>

        <h2 v-if="section.name === 'heading'" class="project__body__section__title">{{ section.content }}</h2>

        <h3 v-if="section.name === 'subheading'" class="project__body__section__subtitle">{{ section.content }}</h3>

        <p v-if="section.name === 'paragraph'" class="project__body__section__paragraph">{{ section.content }}</p>

        <img v-if="section.name === 'image'" class="project__body__section__image" :src="`/src/${section.src}`" :alt="section.alt" />

        <ul v-if="section.name === 'list'" class="project__body__section__list">
            <li v-for="(item, i) in section.content" :key="i" class="project__body__section__list__item">{{ item }}</li>
        </ul>
    </template>
</div>
</template>

<style lang="scss" scoped>
.project {
    min-height: 100vh;
    margin-bottom: 5rem;

    &__header {
        position: relative;
        height: 50vh;
        width: 100%;
        background-image: url(../assets/images/durian-bullet-1_bLJ4BHkXA-unsplash.jpg);
        background-size: cover;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #252323;
            opacity: .4;        
        }

        &__title {
            position: absolute;
            bottom: .5rem;
            left: 1rem;
            font-family: 'Roboto Black';
            font-size: 4rem;
            line-height: 110%;;
            color: var(--text-project-title);
        }
    }

    &__body {
        padding-left: 5%;
        padding-right: 5%;

        &__section {
            max-width: 50ch; // 50-70ch
            margin-left: auto;
            margin-right: auto;

            @include tablet {
                max-width: 70ch;
            }

            &__title {
                font-weight: bold;
                font-size: clamp(1rem, 10vw + 1rem, 2rem); /* h1 32px */
                line-height: 110%;
                text-transform: lowercase;
                text-align: center;
                margin-top: 5rem;
                margin-bottom: 10%;
            }

            &__subtitle {
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 1.75rem;
                font-style: italic;
                line-height: 110%;
                margin-top: .5rem;
                margin-bottom: 1.5em;
            }

            &__links {
                display: flex;
                justify-content: center;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;

                &__item {
                    outline-offset: 5px;;
                    color: var(--textInverse);
                    background-color: var(--surfaceInverse);
                    text-decoration: none;
                    border-radius: .25rem;
                    padding: .25rem 1.25rem;
                    margin-left: .75rem;
                    margin-right: .75rem;

                    &:hover {
                        background-color: var(--surfaceInverseHover);
                    }
                }
            }

            &__paragraph {
                font-size: 1.125rem; // 18px 
                line-height: 190%;
                color: var(--text-grey);
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                margin-top: 3rem;
                margin-bottom: 3rem;
            }

            &__image {
                height: 300px;
                width: 100%;
            }

            &__list {
                font-size: 1.125rem; // 18px 
                list-style-type: '—';
                line-height: 190%;
                // color: var(--text-grey);

                &__item {
                    padding-left: .5rem;
                }
            }
        }
    }

    &__footer {


    }
}
</style>