<script setup>
import ProjectTemplate from "../components/ProjectTemplate.vue";
import { useRoute } from 'vue-router';
import NotFound from "../components/NotFound.vue";
const route = useRoute();
const projects = [
    {
        name: 'trainercodes-v1',
        project: [
            {
                name: 'title',
                content: 'Trainer Codes v1'
            },
            {
                name: 'links',
                links: [
                    {
                        text: 'Live Demo',
                        href: '#'
                    },
                    {
                        text: 'GitHub',
                        href: '#'
                    }
                ]
            },
            {
                name: 'heading',
                content: 'Beschreibung'
            },
            {
                name: 'paragraph',
                content: 'Trainer Codes ist eine Webseite für Pokémon GO Spieler, die es ihnen erleichtert andere Spieler aus der ganzen Welt zu finden und sie als Freunde hinzuzufügen.'
            },
            {
                name: 'heading',
                content: 'Stack'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut iure perspiciatis molestiae dolores voluptates quos saepe tempora consectetur omnis.'
            },
            {
                name: 'list',
                content: ['Laravel', 'jQuery', 'Bootstrap', 'AWS SDK', 'AWS Beanstalk']
            },
            {
                name: 'heading',
                content: 'Features',
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut iure perspiciatis molestiae dolores voluptates quos saepe tempora consectetur omnis.'
            },
            {
                name: 'subheading',
                content: 'quite a long subtitle for feature one'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
            {
                name: 'subheading',
                content: 'some feature 2'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text 3'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
            {
                name: 'subheading',
                content: 'some other feature 1'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
        ]
    },
    {
        name: 'trainercodes-v2',
        project: [
            {
                name: 'title',
                content: 'Trainer Codes v2'
            },
            {
                name: 'links',
                links: [
                    {
                        text: 'Live Demo',
                        href: '#'
                    },
                    {
                        text: 'GitHub',
                        href: '#'
                    }
                ]
            },
            {
                name: 'heading',
                content: 'Beschreibung'
            },
            {
                name: 'paragraph',
                content: 'Trainer Codes ist eine Webseite für Pokémon GO Spieler, die es ihnen erleichtert andere Spieler aus der ganzen Welt zu finden und sie als Freunde hinzuzufügen.'
            },
            {
                name: 'heading',
                content: 'Stack'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut iure perspiciatis molestiae dolores voluptates quos saepe tempora consectetur omnis.'
            },
            {
                name: 'list',
                content: ['Laravel', 'jQuery', 'Bootstrap', 'AWS SDK', 'AWS Beanstalk']
            },
            {
                name: 'heading',
                content: 'Features',
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut iure perspiciatis molestiae dolores voluptates quos saepe tempora consectetur omnis.'
            },
            {
                name: 'subheading',
                content: 'quite a long subtitle for feature one'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
            {
                name: 'subheading',
                content: 'some feature 2'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text 3'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
            {
                name: 'subheading',
                content: 'some other feature 1'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text'
            },
            {
                name: 'paragraph',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam quibusdam et deserunt! Nam minus reiciendis atque officia facilis nulla omnis quasi, repellendus alias ad recusandae laudantium optio nemo adipisci?'
            },
        ]
    }
];
const param = route.params.project;
const i = projects.findIndex(element => element.name === param);
</script>

<template>
    <NotFound v-if="i === -1"/>

    <ProjectTemplate v-else-if="i !== -1"
    :project="projects[i]" />
</template>

<style lang="scss">
</style>