<script setup>
import { onMounted, ref } from "vue";
import IconDownload from "../components/icons/IconDownload.vue";
let controller = new ScrollMagic.Controller();
const image1 = new ScrollMagic.Scene({
  triggerHook: .3,
  duration: '100%',
  offset: 50
});

const image2 = new ScrollMagic.Scene({
  duration: '100%',
  offset: 300
});

const image3 = new ScrollMagic.Scene({
  duration: '100%',
  offset: 750
});

const image4 = new ScrollMagic.Scene({
  triggerHook: .3,
  duration: '100%',
  offset: 1800,
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
  'Vue',
  'HTML',
  'Vue Router',
  'Vuex',
  'CSS (Sass)',
  'TailwindCSS',
  'Bootstrap',
  'Vuetify'
];

const keywords = [
  'Sport',
  'Familie',
  'Meditation',
  'Studio Ghibli-Filme'
];

let counter = ref(0);
let keyword = ref(keywords[0]);

function cycleKeywords() {
  setTimeout(() => {
    if (counter.value >= keywords.length) counter.value = 0; 
    keyword.value = keywords[counter.value];
    // run function that spells out word?
    counter.value++;
    cycleKeywords();
  }, 15000); // TODO: Decrease ms ~8000 !!!
}

cycleKeywords();
</script>
<template>
  <div class="about">
    <div class="about__header">
      <h1 class="about__header__title" id="trigger1">Über</h1>
      <!-- Download CV -->
      <a class="about__header__link" href="#">
        Lebenslauf
        <IconDownload class="about__header__link__icon" />
      </a>
    </div>

    <div class="about__body">
      <div class="about__body__section" id="trigger2">
        <img class="about__body__section__image about__body__section__image--image1" src="../assets/images/asal-lotfi-8ePZbdxnpi0-unsplash.jpg" height="200" width="200" id="image1" />
        <h2 class="about__body__section__title">Das habe ich studiert</h2>
        <p class="about__body__section__paragraph">
          Meinen Abschluss habe ich Editions- und Dokumentwissenschaft,
          durchstarten möchte ich nun als Frontend-Entwicklerin.
        </p>
        <p class="about__body__section__paragraph">
          Für meine Masterarbeit habe ich mich mit der Weiterentwicklung von
          Benutzeroberflächen in Online-Editionen auseinandergesetzt und mich dazu entschlossen:
        </p>
        <p class="about__body__section__paragraph about__body__section__paragraph-centered" id="trigger3">
          Das will ich weitermachen.
        </p>
      </div>

      <div class="about__body__section">
        <img class="about__body__section__image about__body__section__image--image2" src="../assets/images/mukil-menon-I8uA8kG4O1g-unsplash.jpg" height="200" width="200" id="image2" />
        <h2 class="about__body__section__title">Das habe ich danach gemacht</h2>
        <p class="about__body__section__paragraph about__body__section__paragraph-centered">
          Also habe ich mich durch einen Dschungel an Online-Kursen, Dokumentationen und Selbstzweifeln gekämpft &mdash; und stehe nun hier.
        </p>
      </div>

      <div class="about__body__section">
        <img class="about__body__section__image about__body__section__image--image3" src="../assets/images/altumcode-FoTs3ntRoIs-unsplash.jpg" height="200" width="200" id="image3" />
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
        <div class="trigger4"></div>
        <h2 class="about__body__section__title">Dadurch tanke ich Energie</h2>
        <p class="about__body__section__paragraph about__body__section__paragraph--special">{{ keyword }}</p>
        <img class="about__body__section__image about__body__section__image--profile" src="../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg" height="250" width="250" id="image4" />
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    min-height: 100vh;
    padding: 5%;
    overflow: hidden;

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
        display: flex;
        flex-direction: column;
        position: relative;
        // margin-top: 5rem;
        // margin-bottom: 5rem;
        padding-bottom: 2rem;
        min-height: 50vh;

        &__title {
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-weight: bold;
          font-size: 1.625rem; // 26px
          text-transform: lowercase;
          font-style: italic;
          line-height: 110%;
          margin-top: 20%;
          margin-bottom: 5%;
          mix-blend-mode: difference;
        }

        &__paragraph {
          font-size: 1.125rem; // 18px 
          line-height: 190%;
          text-justify: inter-ideograph;
          color: var(--text-grey);
          width: 100%;
          max-width: 50ch; // 50-70ch
          padding-right: 5%;
          margin-left: auto;
          margin-right: auto;
          mix-blend-mode: difference;

          @include tablet {
            max-width: 60ch;
          }

          &--special {
            font-family: 'Arial Black', Gadget, sans-serif;
            font-size: 2rem;
            font-weight: bolder;
            text-transform: uppercase;
            letter-spacing: .125ch;
            text-align: center;
            line-height: 110%;
            margin-top: 2rem;
            padding-right: 0;
            min-height: 125px;

            background-image: var(--gradient);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-size: 300%;
            animation: gradient-text 2000ms infinite alternate;

            @keyframes gradient-text {
              0% {
                background-position: left;
              }
              100% {
                background-position: right;
              }
            }
          }
        }

        &__list {
          color: var(--text-grey);
          list-style-type: '—';
          font-size: 1.125rem; // 18px
          text-indent: 1ch;
          line-height: 180%;
        }

        &__image {
          opacity: 0;
          position: absolute;
          border-radius: 50%;
          height: 200px;
          width: 200px;
          filter: grayscale(0%);
          transition: all 2500ms ease-out;

          &--image1 {
            transform: translate(-50%, -30%);
          }

          &--image2 {
            transform: translate(120%, -30%);

          }

          &--image3 {
            transform: translate(-50%, -30%);
          }

          &--profile {
            position: static;
            opacity: 1;
            height: 250px;
            width: 250px;
            margin-left: auto;
            margin-right: auto;
            transform: scale(.8);
            filter: grayscale(100%);
          }
        }

      }
    }

    &__footer {

    }
  }
.visible1 {
  opacity: 1;
  transform: translate(120%, 120%);
  filter: grayscale(100%);
}

.visible2 {
  opacity: 1;
  transform: translate(-50%, 120%);
  filter: grayscale(100%);
}

.visible3 {
  opacity: 1;
  transform: translate(120%, 120%);
  filter: grayscale(100%);
}

.visible4 {
  opacity: 1;
  transform: scale(1);
  filter: grayscale(0%);
}
</style>
