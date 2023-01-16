<script setup>
import { onMounted, ref } from "vue";
import IconDownload from "../components/icons/IconDownload.vue";
let controller = new ScrollMagic.Controller();
const image1 = new ScrollMagic.Scene({
  triggerHook: .3,
  duration: '100%',
  offset: 50,
  // reverse: false
});

const image2 = new ScrollMagic.Scene({
  duration: '100%',
  offset: 300,
  // reverse: false
});

const image3 = new ScrollMagic.Scene({
  duration: '100%',
  offset: 750,
  // reverse: false
});

const image4 = new ScrollMagic.Scene({
  triggerHook: .3,
  duration: '100%',
  offset: 1500,
  reverse: false
});

onMounted(() => {
  image1.setClassToggle("#image1", "visible1");
  image2.setClassToggle("#image2", "visible2");
  image3.setClassToggle("#image3", "visible3");
  image4.setClassToggle("#image4", "visible4");
  // .addIndicators({
  //   name: 'TRIGGER',
  //   colorTrigger: 'white',
  //   colorStart: 'yellow'
  // });
  controller.addScene([image1, image2, image3, image4]);
});

const stack = [
  'JavaScript',
  'VueJS (2 + 3)',
  'HTML',
  'Vue Router',
  'Vuex',
  'CSS (Sass)',
  'TailwindCSS',
  'Bootstrap',
  'Vuetify'
];
</script>
<template>
  <div class="about">
    <div class="about__header">
      <h1 class="about__header__title">Über</h1>
    </div>

    <div class="about__body">
      <div class="about__body__section">
        <img class="about__body__section__image about__body__section__image--image1" src="https://portfolio-jamawe.s3.us-east-2.amazonaws.com/asal-lotfi-8ePZbdxnpi0-unsplash.jpg" height="200" width="200" id="image1" />
        <p class="about__body__section__credits">
          Photo by <a href="https://unsplash.com/@asal_lotfi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Asal Lotfi</a> on <a href="https://unsplash.com/photos/8ePZbdxnpi0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <h2 class="about__body__section__title">Das habe ich studiert</h2>
        <p class="about__body__section__paragraph">
          Meinen Abschluss habe ich Editions- und Dokumentwissenschaft gemacht,
          durchstarten möchte ich nun als Frontend-Entwicklerin.
        </p>
        <p class="about__body__section__paragraph">
          Woher der Richtungswechsel? Für meine Masterarbeit habe ich mich mit der Weiterentwicklung von
          Benutzeroberflächen in Online-Editionen auseinandergesetzt und mich dazu entschieden: Das will ich weitermachen.
        </p>
      </div>

      <div class="about__body__section">
        <img class="about__body__section__image about__body__section__image--image2" src="https://portfolio-jamawe.s3.us-east-2.amazonaws.com/durian-bullet-1_bLJ4BHkXA-unsplash.jpg" height="200" width="200" id="image2" />
        <p class="about__body__section__credits">
          Photo by <a href="https://unsplash.com/@durianbullet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Durian Bullet</a> on <a href="https://unsplash.com/photos/1_bLJ4BHkXA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <h2 class="about__body__section__title">Das habe ich danach gemacht</h2>
        <p class="about__body__section__paragraph about__body__section__paragraph-centered">
          Mich durchgekämpft &mdash; nicht nur durch einen Dschungel and Online-Kursen (Hi, Udemy! Grüß dich, Youtube!), sondern auch durch eine Meer an Dokumentationen und Coding-Foren (Hello, StackOverflow!), sowie natürlich, zu guter Letzt, über Berge von Selbstzweifeln.
        </p>
      </div>

      <div class="about__body__section">
        <img class="about__body__section__image about__body__section__image--image3" src="https://portfolio-jamawe.s3.us-east-2.amazonaws.com/altumcode-FoTs3ntRoIs-unsplash.jpg" height="200" width="200" id="image3" />
        <p class="about__body__section__credits">
          Photo by <a href="https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AltumCode</a> on <a href="https://unsplash.com/photos/FoTs3ntRoIs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <h2 class="about__body__section__title">Das habe ich dadurch gelernt (bis jetzt)</h2>
        <ul class="about__body__section__list">
          <li class="about__body__section__list__item">Vertraue darauf, Skills on demand lernen zu können</li>
          <li class="about__body__section__list__item">Der Tag ist vorbei, wenn das Feature fertig ist</li>
          <li class="about__body__section__list__item">Unterscheide, welche Aufgaben besonders dringlich oder wichtig sind</li>
          <li class="about__body__section__list__item">Teile Aufgabe in Etappen ein</li>
        </ul>
      </div>

      <div class="about__body__section">
        <h2 class="about__body__section__title">Das ist mein Stack</h2>
        <ul class="about__body__section__list">
          <li v-for="item in stack" class="about__body__section__list__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="about__footer">
      <img class="about__footer__image" src="https://portfolio-jamawe.s3.us-east-2.amazonaws.com/jamawe.jpg" height="250" width="250" id="image4" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    min-height: 100vh;
    padding: 5%;
    overflow: hidden;
          // overflow: visible;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 2.5%;
      padding-right: 2.5%;
      margin-top: 4rem;
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
        display: flex;
        flex-direction: column;
        position: relative;
        padding-bottom: 2rem;
        min-height: 50vh;

        &__title {
          font-family: var(--serif);
          font-weight: bold;
          font-size: 1.625rem; // 26px
          text-transform: lowercase;
          font-style: italic;
          line-height: 110%;
          margin-top: min(20%, 100px);
          margin-bottom: 5%;
        }

        &__paragraph {
          font-size: 1.125rem; // 18px 
          line-height: 190%;
          text-justify: inter-ideograph;
          color: var(--text-grey);
          width: 100%;
          max-width: 50ch; // 50-70ch
          // padding-right: 5%;
          margin-left: auto;
          margin-right: auto;
          mix-blend-mode: difference;
          
          @include tablet {
            max-width: 60ch;
          }
        }

        &__list {
          color: var(--text-grey);
          list-style-type: '— ';
          list-style-position: outside;
          font-size: 1.125rem; // 18px
          line-height: 180%;
          padding-right: 2%;
        }

        &__image {
          opacity: 0;
          position: absolute;
          border-radius: 50%;
          height: 150px;
          width: 150px;
          filter: grayscale(0%);
          transition: all 2000ms cubic-bezier(.11,.56,.65,.72);

          &--image1 {
            transform: translate(175%, 0%);
          }

          &--image2 {
            transform: translate(-50%, -30%);
          }

          &--image3 {
            transform: translate(175%, -30%);
          }

          @include tablet {
            height: 250px;
            width: 250px;

            &--image1 {
              transform: translate(170%, 0%);
            }

            &--image2 {
              transform: translate(0%, -30%);
            }

            &--image3 {
              transform: translate(170%, -30%);
            }
          }
        }

        &__credits {
          // Visually hide sth, source: https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/
          position: absolute;
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
      margin-bottom: 2rem;

      @include tablet {
        margin-top: 4rem;
      }

      &__image {
        height: 250px;
        width: 250px;
        border-radius: 50%;
        transform: scale(.75);
        filter: grayscale(100%);
        transition: all 1000ms cubic-bezier(.11,.56,.65,.72);
      }
    }
  }
.visible1 {
  opacity: 1;
  transform: translate(-50%, 275%);
  // filter: grayscale(100%);
}

.visible2 {
  opacity: 1;
  transform: translate(175%, 250%);
  // filter: grayscale(100%);
}

.visible3 {
  opacity: 1;
  transform: translate(-50%, 250%);
  // filter: grayscale(100%);
}

.visible4 {
  opacity: 1;
  transform: scale(1.2);
  filter: grayscale(0%);
}

@include tablet {
  .visible1 {
    opacity: 1;
    transform: translate(0%, 120%);
  }

  .visible2 {
    opacity: 1;
    transform: translate(170%, 120%);
  }

  .visible3 {
    opacity: 1;
    transform: translate(0%, 120%);
  }

  .visible4 {
    opacity: 1;
    transform: scale(1.4);
    filter: grayscale(0%);
  }
}
</style>
