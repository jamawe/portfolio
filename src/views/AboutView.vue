<script setup>
import IconDownload from "../components/icons/IconDownload.vue";
const stack = [
  'JavaScript',
  'Vue',
  'HTML',
  'Vue Router',
  'Vuex',
  'CSS (Sass)',
  'TailwindCSS',
  'Bootstrap',
  'Vuetify'
]
</script>
<template>
  <div class="about">
    <div class="about__header">
      <h1 class="about__header__title">Über</h1>
      <!-- Download CV -->
      <a class="about__header__link" href="#">
        Lebenslauf
        <IconDownload class="about__header__link__icon" />
      </a>
    </div>

    <div class="about__body">
      <div class="about__body__section">
        <h2 class="about__body__section__title">Das habe ich studiert</h2>
        <p class="about__body__section__paragraph">
          Meinen Abschluss habe ich Editions- und Dokumentwissenschaft,
          durchstarten möchte ich nun als Frontend-Entwicklerin.
        </p>
        <p class="about__body__section__paragraph">
          Für meine Masterarbeit habe ich mich mit der Weiterentwicklung von
          Benutzeroberflächen in Online-Editionen auseinandergesetzt und mich dazu entschlossen:
        </p>
        <p class="about__body__section__paragraph about__body__section__paragraph-centered">
          Das will ich weitermachen.
        </p>
      </div>

      <div class="about__body__section">
        <h2 class="about__body__section__title">Das habe ich danach gemacht</h2>
        <p class="about__body__section__paragraph about__body__section__paragraph-centered">
          Also habe ich mich durch einen Dschungel an Online-Kursen, Dokumentationen und Selbstzweifeln gekämpft &mdash; und stehe nun hier.
        </p>
      </div>

      <div class="about__body__section">
        <h2 class="about__body__section__title">Das habe ich dadurch gelernt</h2>
        <p class="about__body__section__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime et aspernatur, molestias reprehenderit consectetur tempore nobis harum, deserunt culpa voluptates placeat ratione explicabo eos quisquam! Tempore ea vel repellendus?</p>
      </div>

      <div class="about__body__section">
        <h2 class="about__body__section__title">Das ist mein Stack</h2>
        <ul class="about__body__section__list">
          <li v-for="item in stack" class="about__body__section__list__item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="about__body__section">
        <h2 class="about__body__section__title">Dadurch tanke ich Energie</h2>
        <p class="about__body__section__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, doloribus.</p>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    min-height: 100vh;
    padding: 5%;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 2.5%;
      padding-right: 2.5%;
      margin-bottom: 2rem;

      &__title {
        font-size: 2.25rem; // 36px
        font-weight: bold;
        text-transform: lowercase;
      }

      &__link {
        display: inline-block;
        // font-family: 'Monaco', monospace;
        font-weight: bold;
        letter-spacing: .05rem;
        text-decoration: none;
        color: var(--textInverse);
        background-color: var(--surfaceInverse);
        border-radius: .25rem;
        padding: .3875rem 1.5rem;
        margin-top: 5%;
        margin-bottom: 10%;
        width: fit-content;

        &__icon {
          height: 1.25rem;
          width: 1.25rem;
          margin-left: .5rem;
          vertical-align: text-bottom;
        }
      }
    }

    &__body {
      padding-left: 2.5%;
      padding-right: 2.5%;

      &__section {
        margin-top: 20%;
        margin-bottom: 20%;

        &__title {
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-weight: bold;
          font-size: 1.625rem; // 26px
          text-transform: lowercase;
          font-style: italic;
          line-height: 110%;
          margin-top: 20%;
          margin-bottom: 5%;
        }

        &__paragraph {
          font-size: 1.125rem; // 18px 
          line-height: 190%;
          text-justify: inter-ideograph;
          color: var(--text-grey);
          max-width: 50ch; // 50-70ch
          padding-right: 5%;
          margin-left: auto;
          margin-right: auto;

          @include tablet {
            max-width: 60ch;
          }
        }

        &__list {
          color: var(--text-grey);
          list-style-type: '—';
          font-size: 1.125rem; // 18px
          text-indent: 1ch;
          line-height: 180%;
        }

      }
    }

    &__footer {

    }
  }
</style>
