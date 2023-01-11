<script setup>
import IconArrowRight from "./icons/IconArrowRight.vue";
import IconGitHub from "./icons/IconGitHub.vue";
import { projectList } from "../modules/projects.js";
</script>

<template>
    <div class="projects" id="projects">
        <div class="projects__header">
            <h2 class="projects__header__title">Projekte</h2>
        </div>

        <div class="projects__body">
            <div
                v-for="(project, i) in projectList"
                :key="i"
                class="projects__body__item">

                <div class="projects__body__item__header">
                    <h3 class="projects__body__item__header__title">{{ project.title }}</h3>
                    <h4 class="projects__body__item__header__subtitle">{{ project.description }}</h4>
                </div>
                <div class="projects__body__item__body">
                    <router-link
                        class="projects__body__item__body__image"
                        :to="{ name: 'project', params: { project: project.linkProject } }">
                        <img
                            :src="project.image.src"
                            :alt="project.image.alt"
                            class="projects__body__item__body__image">
                    </router-link>
                    <div class="projects__body__item__body__append">
                        <a class="projects__body__item__body__append__link" :href="project.linkGitHub">
                            <IconGitHub class="projects__body__item__body__append__link__icon" />
                        </a>

                        <router-link class="projects__body__item__body__append__link" :to="{ name: 'project', params: { project: project.linkProject } }">
                            <IconArrowRight class="projects__body__item__body__append__link__icon" />
                        </router-link>

                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="projects__footer"></div> -->
    </div>
</template>

<style lang="scss" scoped>
.projects {
    padding: 5%;

    &__header {

        &__title {
            font-weight: bold;
            font-size: clamp(1rem, 10vw + 1rem, 2rem); /* h1 32px */
            line-height: 110%;
            text-transform: lowercase;
            text-align: center;
            margin-bottom: 10%;
        }
    }

    &__body {
        /* 
            first thought: grid
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 5%;
        */
        display: flex;
        flex-direction: column;
        padding-top: 5%;

        &__item {
            /*
                first thought: grid cont.
                grid-column-start: 2;
                grid-column-end: 13; // 13 col not included
            */
            position: relative;
            align-self: flex-end;

            display: flex;
            flex-direction: column;

            width: 90%;
            height: min(50vh, 600px); // default, largest // TODO: responsiveness
            margin-bottom: 20%;

            &:nth-of-type(2n) {
                /*
                    first thought: grid cont.
                    grid-column-start: 1;
                    grid-column-end: 12;
                */
                align-self: flex-start;
            }

            &:last-of-type {
                margin-bottom: 0;
            }

            &__header {
                margin-bottom: 2%;
                
                &__title {
                    font-family: 'Roboto Medium', 'Roboto Regular', sans-serif;
                    font-size: 1.5rem;
                    text-transform: lowercase;
                    // font-weight: 500;
                    letter-spacing: .05rem;
                    line-height: 120%;
                    padding-bottom: 5%;
                }

                &__subtitle {
                    font-size: 1.125rem;
                    font-family: var(--serif);
                    font-style: italic;
                    line-height: 150%;
                    padding-bottom: 2%;
                }
            }

            &__body {
                position: relative;
                width: 100%;
                flex-grow: 1;

                &__image {
                    position: absolute;
                    border-radius: .25rem;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    cursor: pointer;

                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: hsla(0, 0%, 28%, .2);
                        border-radius: .25rem;

                        transition: opacity 150ms ease-in-out;
                    }

                    &:hover {
                        &::after {
                            opacity: 0;
                        }
                    }
                }

                &__append {
                    position: absolute;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    bottom: -5%;
                    right: 5%;
                    width: 100px;
                    height: 3rem;
                    z-index: 1;

                    &__link {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;
                        background-color: var(--surface1); // TODO: colors

                        &__icon {
                            color: var(--text); // TODO: color
                            background-color: var(--surface1);
                            border-radius: 50%;
                            height: 28px;
                            width: 28px;
                        }
                    }

                }
            }
        }

    }
}
</style>