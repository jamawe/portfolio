const projectList = [
    {
        name: 'news-api',
        title: 'News API Projekt',
        description: 'Tagesaktuelle Nachrichten aus verschiedenen Themenbereichen',
        image: {
            src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
            alt: 'alt text',
        },
        linkGitHub: 'https://github.com/jamawe/vue-news-api-project',
        linkProject: 'news-api',
    },
    {
        name: 'draggable-article',
        title: 'Draggable Article Projekt',
        description: 'Artikelerstellung mit Möglichkeit der direkten Neusortierung von Abschnitten',
        image: {
            src: '/assets/images/draggable_zoom.png',
            alt: 'Ein Screenshot des Projekts. Auf der linken Seite sieht man eine Form zur Artikelerstellung. Sie besteht aus vershiedenen Blöcken, von denen alle bis auf einen zusammengeklappt sind. Bei dem geöffneten Block handelt es sich um einen Paragraph-Abschnitt. Auf der rechten Seite sieht man eine Vorschau des Artikels.',
        },
        linkGitHub: 'https://github.com/jamawe/draggable-article',
        linkProject: 'draggable-article',
    },
    {
        name: 'trainercodes',
        title: 'Trainer Codes Projekt',
        description: 'Freunde finden leicht gemacht für Pokémon GO Spieler',
        image: {
            src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
            alt: 'alt text',
        },
        linkGitHub: '#',
        linkProject: 'trainercodes',
    }
]
const projects = [
    {
        name: 'news-api',
        project: [
            {
                name: 'headerImage',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'texttext',
            },
            {
                name: 'title',
                content: 'News API\nProjekt'
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
                        href: 'https://github.com/jamawe/vue-news-api-project'
                    }
                ]
            },
            {
                name: 'heading',
                content: 'Beschreibung'
            },
            {
                name: 'paragraph',
                content: 'Dieses Projekt beschäftigt sich mit der News API, mit der Nachrichten von unterschiedlichsten Quellen und Sprachen angefragt werden können.'
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
        name: 'draggable-article',
        project: [
            {
                name: 'headerImage',
                src: '/assets/images/draggable_zoom.png',
                alt: 'Ein Screenshot des Projekts. Auf der linken Seite sieht man eine Form zur Artikelerstellung. Sie besteht aus vershiedenen Blöcken, von denen alle bis auf einen zusammengeklappt sind. Bei dem geöffneten Block handelt es sich um einen Paragraph-Abschnitt. Auf der rechten Seite sieht man eine Vorschau des Artikels.',
            },
            {
                name: 'title',
                content: 'Draggable Article Projekt'
            },
            {
                name: 'links',
                links: [
                    {
                        text: 'Live Demo',
                        href: 'https://codesandbox.io/s/article-creation-with-draggable-zn9i11?file=/src/components/ArticleForm.vue'
                    },
                    {
                        text: 'GitHub',
                        href: 'https://github.com/jamawe/draggable-article'
                    }
                ]
            },
            {
                name: 'embed',
                url: 'https://codesandbox.io/embed/article-creation-with-draggable-zn9i11?fontsize=14&hidenavigation=1&theme=dark',
                title: 'Article Creation with Draggable',
            },
            {
                name: 'heading',
                content: 'Beschreibung'
            },
            {
                name: 'paragraph',
                content: 'Dieses Projekt verwendet VueDraggable.next, die Vue3-Version des SortableJS Packages, für eine dynamische Artikelerstellung. Es besteht zum einen aus einer Form, in der Abschnitte des Artikels sowohl erstellt als auch ihre Positionierung innerhalb des Artikels geändert werden können. Zum anderen wird in einer Vorschau der aktuelle Stand des Artikels angezeigt.'
            },
            {
                name: 'heading',
                content: 'Stack'
            },
            {
                name: 'list',
                content: ['Vue3 + Vite', 'VueDraggable.next']
            },
            {
                name: 'heading',
                content: 'Features',
            },
            {
                name: 'subheading',
                content: 'Vielseitige Auswahl an Artikel-Abschnitten'
            },
            {
                name: 'image',
                src: '/assets/images/draggable_adding.gif',
                alt: 'Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht zunächst aus drei zusammengeklappten Blöcken. Der User fügt zwei neue Abschnitte hinzu und befüllt diese mit Inhalt: erst eine Liste, dann eine Tabelle. In der Vorschau werden diese Veränderungen am Artikel widergespiegelt.'
            },
            {
                name: 'paragraph',
                content: 'Einem Abschnitt kann eine der folgenden Ausprägungen zugewiesen werden: Überschrift, Bild, Liste, Zwischenüberschrift, Zusammenfassung, Tabelle. Pro Artikel kann es jeweils nur eine Überschrift und eine Zusammenfassung geben.'
            },
            {
                name: 'paragraph',
                content: 'Bei den Bildern besteht die Besonderheit, dass zwar mehrere in einem Artikel vorkommen können, allerdings nur eines davon zum Titelbild erklärt werden kann. Wird ein Bild als Titelbild ausgewählt, wird diese Funktionalität in den anderen Bild-Abschnitten deaktiviert.'
            },
            {
                name: 'subheading',
                content: 'Verschiebbare Artikel-Abschnitte'
            },
            {
                name: 'image',
                src: '/assets/images/draggable_dragging.gif',
                alt: 'Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht zunächst aus sechs zusammengeklappten Blöcken. Durch Ziehen des Elements, wird der Abschnitt vom Typ Tabelle von seiner letzten Position nach weiter oben auf die vierte Position gezogen. Danach wird die Liste von Stelle fünf auf Stelle sechs gezogen. Alle Veränderungen am Artikel werden in der Vorschau widergespiegelt.'
            },
            {
                name: 'paragraph',
                content: 'Die Reihenfolge der Abschnitte ist veränderbar durch die Anwendung des VueDraggable.next Packages. Die Möglichkeiten des Packages wurden so ausgenutzt, dass eine mobile sowie Desktop-Nutzung des Projekts reibungslos verläuft. Dies beinhaltet zum einen, dass bei einem Touch-Event eine eingestellte Verzögerung dazu führt, dass ein Verschieben erst ab einer Grenze von 200ms geschieht und alles darunter als Scroll gewertet wird.'
            },
            {
                name: 'paragraph',
                content: 'Ferner wurden bestimme Elemente in der Form (z.B. Input-Felder) durch eine Klassenzuordnung gekennzeichnet und können so kein Verschieben auslösen. Das ist zum Beispiel wichtig für das Markieren von Text in Form-Feldern.'
            },
            {
                name: 'paragraph',
                content: 'Selbstverständlich wird beim Verschieben eines Abschnittes dessen Position auch in der Artikel-Vorschau angepasst. Da diese von der Artikel-Form abgeleitet wird, ist momentan nur das Verschieben von Form- und nicht von Vorschau-Abschnitten möglich.'
            },
            {
                name: 'subheading',
                content: 'Zusammenklappen der Artikelabschnitte'
            },
            {
                name: 'image',
                src: '/assets/images/draggable_collapsed.png',
                alt: 'Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht aus vier Abschnitten, von denen drei zusammengeklappt sind. Der dritte Abschnitt, ein Bild, ist geöffnet. Das Bild wurde zum Titelbild erklärt und erschein in der Vorschau an erster Stelle anstatt an seiner eigentlichen Position drei.'
            },
            {
                name: 'paragraph',
                content: 'Artikelabschnitte können zusammengeklappt werden. Das sorgt nicht nur für ein höheres Maß an Übersicht im Allgemeinen, sondern erleichtert auch das Verschieben von Abschnitten über mehrere andere Abschnitte hinweg.'
            },
            {
                name: 'subheading',
                content: 'Vorschau des Artikels'
            },
            {
                name: 'paragraph',
                content: 'Sobald ein Abschnitt in der Artikel-Form hinzugefügt und mit Inhalt befüllt wurde, erscheint dieser Abschnitt in der Artikel-Vorschau. Diese befindet sich je nach Breakpoint entweder unter (mobil) oder neben der Form. Jeder Abschnitt wird mit einem angemessen Styling angezeigt.'
            },
            {
                name: 'paragraph',
                content: 'Wird ein Bild zum Titelbild erklärt, erscheint dieses, unabhängig von seiner Position innerhalb der Form, in der Vorschau oberhalb der Überschrift.'
            },
        ]
    },
    {
        name: 'trainercodes',
        project: [
            {
                name: 'title',
                content: 'Trainer Codes Projekt'
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
                content: ['Vue3', 'Vue Router', 'Sass', 'AWS SDK', 'AWS Beanstalk']
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
                content: 'Leichtes Kopieren von Trainer Codes'
            },
            {
                name: 'image',
                src: '/assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
                alt: 'alt text'
            },
            {
                name: 'paragraph',
                content: 'Dgfjfcjf'
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
];

export { projectList, projects };