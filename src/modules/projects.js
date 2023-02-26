const projectList = [
    {
        name: 'vuews',
        title: 'Vuews Projekt',
        description: 'Tagesaktuelle Nachrichten zu verschiedenen Themen mittels der New York Times Article Search API',
        image: {
            src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_grid_dark_nonavbar.jpg',
            alt: 'Vier Screenshots von Artikeln horzizontal nebeneinander.',
        },
        linkGitHub: 'https://github.com/jamawe/vue-news-api-project',
        linkProject: 'vuews',
    },
    {
        name: 'draggable-article',
        title: 'Draggable Article Projekt',
        description: 'Artikelerstellung mit Möglichkeit der direkten Neusortierung von Abschnitten',
        image: {
            src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_zoom.png',
            alt: 'Ein Screenshot des Projekts. Auf der linken Seite sieht man eine Form zur Artikelerstellung. Sie besteht aus vershiedenen Blöcken, von denen alle bis auf einen zusammengeklappt sind. Bei dem geöffneten Block handelt es sich um einen Paragraph-Abschnitt. Auf der rechten Seite sieht man eine Vorschau des Artikels.',
        },
        linkGitHub: 'https://github.com/jamawe/draggable-article',
        linkProject: 'draggable-article',
    },
    {
        name: 'trainer-codes',
        title: 'Trainer Codes Projekt',
        description: 'Freunde finden leicht gemacht für Pokémon GO-Spieler',
        image: {
            src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_grid.jpg',
            alt: 'Vier Screenshots des Trainer Codes Projekts horizontal nebeneinander.',
        },
        linkGitHub: 'https://github.com/Grischa89/tc_vue_1',
        linkProject: 'trainer-codes',
    }
]
const projects = [
    {
        name: 'vuews',
        project: [
            {
                name: 'headerImage',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_grid_dark_nonavbar.jpg',
                alt: 'Vier Screenshots von Artikeln horzizontal nebeneinander.',
            },
            {
                name: 'title',
                content: 'Vuews Projekt'
            },
            {
                name: 'links',
                links: [
                    {
                        text: 'Live Demo',
                        href: 'https://vuews.janawernick.dev'
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
                content: 'Dies ist ein News API Projekt, das nach bestimmten Kriterien Anfragen an die New York Times (NYT) Article Search API stellt. Die Ergebnisse werden in strukturierter Form als Artikel aufbereitet. Als Kriterien bzw. Filter für Anfragen können z.B. Nachrichtenredaktionen, Schlagwörter oder Kombinationen aus diesen genutzt werden.'
            },
            {
                name: 'heading',
                content: 'Stack'
            },
            {
                name: 'list',
                content: ['VueJS 2', 'Vuetify', 'Vue Tiny Slider', 'Vue Router', 'Axios']
            },
            {
                name: 'heading',
                content: 'Features',
            },
            {
                name: 'subheading',
                content: 'Infinite Scrolling'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_infinite_loading_dark.gif',
                alt: 'Am oberen Bildrand informiert ein Text darüber, dass mit der letzten API-Anfrage die maximale Anzahl an Anfragen überschritten wurde. Direkt darunter zählt ein Countdown von 10 bis 0 und ein blinkender Lade-Skeleton, der einen Artikel darstellen soll, indiziert, dass gleich ein neuer Artikel geladen wird. Nachdem der Countdown abgelaufen ist, informiert der Text darüber, dass nun die Anfrage erneut versucht wird. Diese ist erfolgreich. Der Skeleton verschwindet, neue Artikel werden geladen und Scrollen ist wieder möglich.'
            },
            {
                name: 'paragraph',
                content: 'Die NYT API lässt zehn Anfragen pro Minute bzw. 4000 pro Tag zu. Mittels einer Vuetify-Komponente, die im Kern auf JavaScripts Intersection Observer API basiert, wird, nachdem ein bestimmter Punkt durch Scrollen erreicht wurde, die nächste Page der vorherigen Anfrage von der NYT API angefragt. Dieser Vorgang geschieht so lange, bis die API einen Fehler mit dem Status-Code 429 über ein ausgereiztes Request-Limit zurückgibt. Es wird ein Countdown angezeigt, der die Sekunden bis zum nächsten Anfrage-Versuch zeigt. Countdown und Anfrage-Versuch wiederholen sich, bis die Anfrage erfolgreich war und neue Artikel angezeigt werden können.'
            },
            {
                name: 'subheading',
                content: 'Lade-Skeletons'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_skeletons.jpg',
                alt: 'Zwei Lade-Skeletons im dunklen Modus nebeneinander. Auf der linken Seite wird ein einzelner Artikel geladen bestehend aus Titelbild, Überschrift, Textblöcken und Buttons. Auf der rechten Seite werden Artikel in Kurzform innerhalb eines horizontalen Sliders geladen, darunter wiederum Buttons.'
            },
            {
                name: 'paragraph',
                content: 'Im Zusammenhang mit Infinite Scrolling, aber auch an Stellen, an denen diese Funktionalität nicht verwendet wird, werden zur besseren User Experience Lade-Skeletons eingesetzt. Diese stellen vor allem Artikel-Gerüste dar, aber auch Buttons in unterschiedlichen Formen.'
            },
            {
                name: 'subheading',
                content: 'Artikel-Suche'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_search.png',
                alt: 'Ein Screenshot, welcher ein geöffnetes Such-Modal zeigt. Im oberen Teil des Modals befindet sich ein Feld, in das ein Suchbegriff eingetragen werden kann. In der Mitte kann die Suche nach einer Auswahl an Redaktionen gefiltert werden. In unteren Bereich befindet sich ein Button, der die Suchanfrage startet. Im Hintergrund des Modals sieht man deaktiviert die Vorschau eines anderen Artikels.'
            },
            {
                name: 'paragraph',
                content: 'Das Projekt verfügt über ein Such-Modal, mit dem Artikel mittels eines Stichworts gesucht werden können. Optional können Nachrichtenredaktionen ausgewählt werden, die als Filter für die Suche dienen. Die möglichen Redaktionen stellen eine Vorauswahl dar und lassen sich ebenso im Menü wiederfinden.'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_search_results_zoom.gif',
                alt: 'Im oberen Bereich befindet sich ein Dropdown-Element, welches durch einen Klick ausgeklappt wird. Es öffnet sich eine Suchform. Im oberen Teil der Form sich ein Feld, in dem bereits ein Suchbegriff eingetragen wurde. In der Mitte kann die Suche nach einer Auswahl an Redaktionen gefiltert werden. Zwei Redaktionen sind bereits ausgewählt. In unteren Bereich befindet sich ein Button, der die Suchanfrage startet. Unterhalb des Dropdown-Elements befindet sich ein geladener Artikel, der eines der Suchergebnisse der obigen Suche darstellt.'
            },
            {
                name: 'paragraph',
                content: 'Nach erfolgter Suchanfrage über das Modal wird auf eine Seite mit den Suchergebnissen weitergeleitet. Dort besteht über eine ausklappbare Dropdown-Suchform die Möglichkeit, die Suche anzupassen.'
            },
        ]
    },
    {
        name: 'draggable-article',
        project: [
            {
                name: 'headerImage',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_zoom.png',
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
                content: 'Dieses Projekt verwendet VueDraggable.next, die Vue3-Version des SortableJS Packages, für eine dynamische Artikelerstellung. Es besteht aus einer Form, in der Abschnitte des Artikels sowohl erstellt als auch ihre Positionierung innerhalb des Artikels geändert werden können. Der aktuelle Stand des Artikels wird ständig in einer Vorschau angezeigt.'
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
                content: 'Vielseitige Auswahl von Abschnitts-Typen'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_adding.gif',
                alt: 'Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht zunächst aus drei zusammengeklappten Blöcken. Der User fügt zwei neue Abschnitte hinzu und befüllt diese mit Inhalt: erst eine Liste, dann eine Tabelle. In der Vorschau werden diese Veränderungen am Artikel widergespiegelt.'
            },
            {
                name: 'paragraph',
                content: 'Einem Abschnitt kann eine der folgenden Ausprägungen zugewiesen werden: Überschrift, Bild, Liste, Zwischenüberschrift, Zusammenfassung, Tabelle. Pro Artikel kann es jeweils nur eine Überschrift und eine Zusammenfassung geben.'
            },
            {
                name: 'paragraph',
                content: 'Bei Bildern besteht die Besonderheit, dass zwar mehrere in einem Artikel vorkommen können, allerdings nur eines davon zum Titelbild erklärt werden kann. Wird ein Bild als Titelbild ausgewählt, wird diese Funktionalität in den anderen Bild-Abschnitten deaktiviert.'
            },
            {
                name: 'subheading',
                content: 'Verschiebbare Artikel-Abschnitte'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_dragging.gif',
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
                content: 'Selbstverständlich wird beim Verschieben eines Abschnittes dessen Position auch in der Artikel-Vorschau angepasst.'
            },
            {
                name: 'subheading',
                content: 'Zusammenklappen der Artikelabschnitte'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_collapsed.png',
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
        name: 'trainer-codes',
        project: [
            {
                name: 'headerImage',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_grid.jpg',
                alt: 'Vier Screenshots des Trainer Codes Projekts horizontal nebeneinander.',
            },
            {
                name: 'title',
                content: 'Trainer Codes Projekt'
            },
            {
                name: 'links',
                links: [
                    // {
                    //     text: 'Live Demo',
                    //     href: '#'
                    // },
                    {
                        text: 'GitHub',
                        href: 'https://github.com/Grischa89/tc_vue_1'
                    }
                ]
            },
            {
                name: 'heading',
                content: 'Beschreibung'
            },
            {
                name: 'paragraph',
                content: 'Trainer Codes ist ein Projekt für Pokémon GO-Spieler. Es wird ihnen erleichtert, andere Spieler aus der ganzen Welt zu finden und sie als Freunde hinzuzufügen.'
            },
            {
                name: 'heading',
                content: 'Stack'
            },
            {
                name: 'list',
                content: ['Vue3', 'Vuex', 'Vue Router', 'Axios']
            },
            {
                name: 'heading',
                content: 'Features',
            },
            {
                name: 'subheading',
                content: 'Kopieren von Trainer Codes (Smartphone)'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_copy.gif',
                alt: 'In einer Tabelle, die aus zwei Spalten besteht, wird herunter gescrollt. Von links nach rechts heißen die Spaltenbezeichnungen: Country, Trainercode. In der Country Spalte befindet sich Text, in der Trainercode Spalte befinden sich ein 8-stelliger Code und zwei Icons. Nach Ende des Herunterscrollens wird auf das linke der beiden Icons getippt. Die Hintergrundfarbe des Icons ändert sich und es erscheint ein Tooltip über ihm, das darauf hinweist, dass der Code kopiert wurde.'
            },
            {
                name: 'paragraph',
                content: 'Pokémon GO ist ein Spiel, in dem man davon profitiert, sich mit anderen Spielern aus der ganzen Welt zu verbinden. Um diesen eine Anfrage zu stellen, muss im Spiel selbst der Freundes-Code eingegeben werden. Trainer Codes bietet eine erleichterte Bedienung für Spieler, da es einfaches Kopieren per Tap ermöglicht. So kann Trainer Codes, wie Pokémon GO selbst, auf dem Smartphone geöffnet werden und einfach zwischen den Apps gewechselt oder sie sogar im Split-Screen aufgerufen werden.'
            },
            {
                name: 'subheading',
                content: 'Kopieren von Trainer Codes (Desktop)'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_qr.jpg',
                alt: 'Ein QR-Code, schwarz auf weißem Hintergrund, befindet sich zentriert auf einem dunkelgrauen Modal. Über dem QR-Code steht \'Uruguay\' als Überschrift, unterhalb des Codes ein 8-stelliger Zahlencode und ein Icon, dass darauf hindeutet, dass der obige Code kopiert werden kann. In der oberen rechten Ecke des Modals kann dieses über ein X-Icon geschlossen werden. Im Hintergrund des Modals ist verblasst die Seite zu sehen, auf der das Modal geöffnet wurde.'
            },
            {
                name: 'paragraph',
                content: 'Pokémon GO bietet es an, eine Freundschaftanfrage auch über Scannen eines QR-Codes zu stellen. Deswegen bietet Trainer Codes neben dem Kopieren per Tap auch das Anzeigen des jeweiligen Codes als QR-Code an. So kann die Seite auf dem Desktop geöffnet und mit dem Smartphone der Code gescannt werden.'
            },
            {
                name: 'subheading',
                content: 'Vielseitige Navigation'
            },
            {
                name: 'image',
                src: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_nav.gif',
                alt: 'In einer horizontalen Navigation wird zunächst nach rechts gescrollt, dann zurück nach links zum Anfang. Gescrollt wird duch eine Reihe an abgerundeten Buttons, braun mit hellbrauner Border und weißer Schrift, die jeweils französische Städte als Text haben. Über diesem Navigations-Element befindet sich die Überschrift \'Explore More Cities\', unter der Navigation eine Verlinkung, \'Show all Codes from France\', mit einem Pfeil als Icon, der nach rechts zeigt.'
            },
            {
                name: 'paragraph',
                content: 'Kontinente können über ein Dropdown-Menu in der Navbar erreicht werden, Länder über Links in den Tabellen eines Kontinents. Die Navigation zu Städten befindet sich zum einen auf der Seite eines Landes, zum anderen wird sie auf der Stadt-Seite selbst zugänglich gemacht. In beiden fällen handelt es sich um eine Navigation mit horizontalem Scroll.'
            },
        ]
    },
];

const projectMeta = [
    {
      name: 'vuews',
      title: 'Vuews Projekt',
      description: 'Vuews stellt mittels NYT Article Search API tagesaktuelle Nachrichten in aufbereiteter Form dar. Finde heraus, was das Projekt sonst noch so kann!'
    },
    {
      name: 'draggable-article',
      title: 'Draggable Article Projekt',
      description: 'Erstelle mit VueDraggable.next individuelle Artikel mit verschiebbaren Abschnitten und schaue sie dir in einer Vorschau an. Probier es jetzt aus!'
    },
    {
      name: 'trainer-codes',
      title: 'Trainer Codes Projekt',
      description: 'Leicht Freunde finden für Pokemon GO Spieler! Entdecke ein Projekt, das Freundes-Codes in aufbereiter Form und für alle Endgeräte leicht zugänglich darstellt.'
    },
  ];

export { projectList, projects, projectMeta };