<script setup>
import HeaderTemplate from './template-sections/HeaderTemplate.vue';
import LinksTemplate from './template-sections/LinksTemplate.vue';
import HeadingTemplate from './template-sections/HeadingTemplate.vue';
import SubheadingTemplate from './template-sections/SubheadingTemplate.vue';
import ParagraphTemplate from './template-sections/ParagraphTemplate.vue';
import ImageTemplate from './template-sections/ImageTemplate.vue';
import ListTemplate from './template-sections/ListTemplate.vue';
import EmbedTemplate from './template-sections/EmbedTemplate.vue';

const props = defineProps(['project']);
const project = props.project.project;
const i = project.findIndex(section => section.name === 'headerImage');
// NOTE: Add '/src' to path! (Either in projects array or in inline :style)
const url = props.project.project[i].src;
</script>

<template>
    <div class="project">
        <template v-for="(section, i) in props.project.project" :key="i">
            <HeaderTemplate
                v-if="section.name === 'title'"
                :url="url"
                :title="section.content" />

            <LinksTemplate
                v-else-if="section.name === 'links'"
                :links="section.links" />

            <HeadingTemplate
                v-else-if="section.name === 'heading'"
                :heading="section.content" />

            <SubheadingTemplate 
                v-else-if="section.name === 'subheading'"
                :subheading="section.content" />
            
            <ParagraphTemplate
                v-else-if="section.name === 'paragraph'"
                :paragraph="section.content" />

            <ImageTemplate
                v-else-if="section.name === 'image'"
                :src="section.src"
                :alt="section.alt" />

            <ListTemplate
                v-else-if="section.name === 'list'"
                :list="section.content" />

            <EmbedTemplate
                v-else-if="section.name === 'embed'"
                :url="section.url"
                :title="section.title" />
                
        </template>
    </div>
</template>

<style lang="scss">
.project {
    align-items: center;
    min-height: 100vh;
    margin-bottom: 5rem;

    &__header {
        position: relative;
        height: 400px;
        width: 100%;
        background: var(--surface2);
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

    &__links {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        &__item {
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

    &__body {
        display: flex;
        justify-content: center;
        padding-left: 2.5%;
        padding-right: 2.5%;
        margin-left: auto;
        margin-right: auto;
        max-width: 50ch;

        @include tablet {
            padding-left: 0;
            padding-right: 0;
            max-width: 70ch;
        }

        &__embed{
            margin-top: 4rem;
        }

        &__title {
            font-weight: bold;
            font-size: clamp(1rem, 10vw + 1rem, 2rem); /* h1 32px */
            line-height: 110%;
            text-transform: lowercase;
            text-align: center;
            margin-top: 4rem;
        }

        &__subtitle {
            font-family: var(--serif);
            font-size: 1.75rem;
            font-style: italic;
            line-height: 125%;
            text-align: left;
            margin-top: 3rem;
            margin-right: auto;
        }

        &__paragraph {
            font-size: 1.125rem; // 18px 
            line-height: 190%;
            color: var(--text-grey);
            width: 100%;
            margin-top: 2rem;
        }

        &__image {
            flex-grow: 1;
            height: 300px;
            width: 100%;
            margin-top: 2rem;
        }

        &__list {
            font-size: 1.125rem; // 18px 
            list-style-type: '—';
            line-height: 190%;
            margin-top: 2rem;
            padding-right: 30%;

            &__item {
                padding-left: .5rem;
            }
        }
    }
}
</style>