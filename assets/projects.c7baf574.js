const e=[{name:"vuews",title:"Vuews Projekt",description:"Tagesaktuelle Nachrichten zu verschiedenen Themen mittels der New York Times Article Search API",image:{src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_grid_dark_nonavbar.jpg",alt:"Vier Screenshots von Artikeln horzizontal nebeneinander."},linkGitHub:"https://github.com/jamawe/vue-news-api-project",linkProject:"vuews"},{name:"draggable-article",title:"Draggable Article Projekt",description:"Artikelerstellung mit M\xF6glichkeit der direkten Neusortierung von Abschnitten",image:{src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_zoom.png",alt:"Ein Screenshot des Projekts. Auf der linken Seite sieht man eine Form zur Artikelerstellung. Sie besteht aus vershiedenen Bl\xF6cken, von denen alle bis auf einen zusammengeklappt sind. Bei dem ge\xF6ffneten Block handelt es sich um einen Paragraph-Abschnitt. Auf der rechten Seite sieht man eine Vorschau des Artikels."},linkGitHub:"https://github.com/jamawe/draggable-article",linkProject:"draggable-article"},{name:"trainer-codes",title:"Trainer Codes Projekt",description:"Freunde finden leicht gemacht f\xFCr Pok\xE9mon GO-Spieler",image:{src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_grid.jpg",alt:"Vier Screenshots des Trainer Codes Projekts horizontal nebeneinander."},linkGitHub:"https://github.com/Grischa89/tc_vue_1",linkProject:"trainer-codes"}],n=[{name:"vuews",project:[{name:"headerImage",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_grid_dark_nonavbar.jpg",alt:"Vier Screenshots von Artikeln horzizontal nebeneinander."},{name:"title",content:"Vuews Projekt"},{name:"links",links:[{text:"Live Demo",href:"https://vuews.janawernick.dev"},{text:"GitHub",href:"https://github.com/jamawe/vue-news-api-project"}]},{name:"heading",content:"Beschreibung"},{name:"paragraph",content:"Dies ist ein News API Projekt, das nach bestimmten Kriterien Anfragen an die New York Times (NYT) Article Search API stellt. Die Ergebnisse werden in strukturierter Form als Artikel aufbereitet. Als Kriterien bzw. Filter f\xFCr Anfragen k\xF6nnen z.B. Nachrichtenredaktionen, Schlagw\xF6rter oder Kombinationen aus diesen genutzt werden."},{name:"heading",content:"Stack"},{name:"list",content:["VueJS 2","Vuetify","Vue Tiny Slider","Vue Router","Axios"]},{name:"heading",content:"Features"},{name:"subheading",content:"Infinite Scrolling"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_infinite_loading_dark.gif",alt:"Am oberen Bildrand informiert ein Text dar\xFCber, dass mit der letzten API-Anfrage die maximale Anzahl an Anfragen \xFCberschritten wurde. Direkt darunter z\xE4hlt ein Countdown von 10 bis 0 und ein blinkender Lade-Skeleton, der einen Artikel darstellen soll, indiziert, dass gleich ein neuer Artikel geladen wird. Nachdem der Countdown abgelaufen ist, informiert der Text dar\xFCber, dass nun die Anfrage erneut versucht wird. Diese ist erfolgreich. Der Skeleton verschwindet, neue Artikel werden geladen und Scrollen ist wieder m\xF6glich."},{name:"paragraph",content:"Die NYT API l\xE4sst zehn Anfragen pro Minute bzw. 4000 pro Tag zu. Mittels einer Vuetify-Komponente, die im Kern auf JavaScripts Intersection Observer API basiert, wird, nachdem ein bestimmter Punkt durch Scrollen erreicht wurde, die n\xE4chste Page der vorherigen Anfrage von der NYT API angefragt. Dieser Vorgang geschieht so lange, bis die API einen Fehler mit dem Status-Code 429 \xFCber ein ausgereiztes Request-Limit zur\xFCckgibt. Es wird ein Countdown angezeigt, der die Sekunden bis zum n\xE4chsten Anfrage-Versuch zeigt. Countdown und Anfrage-Versuch wiederholen sich, bis die Anfrage erfolgreich war und neue Artikel angezeigt werden k\xF6nnen."},{name:"subheading",content:"Lade-Skeletons"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_skeletons.jpg",alt:"Zwei Lade-Skeletons im dunklen Modus nebeneinander. Auf der linken Seite wird ein einzelner Artikel geladen bestehend aus Titelbild, \xDCberschrift, Textbl\xF6cken und Buttons. Auf der rechten Seite werden Artikel in Kurzform innerhalb eines horizontalen Sliders geladen, darunter wiederum Buttons."},{name:"paragraph",content:"Im Zusammenhang mit Infinite Scrolling, aber auch an Stellen, an denen diese Funktionalit\xE4t nicht verwendet wird, werden zur besseren User Experience Lade-Skeletons eingesetzt. Diese stellen vor allem Artikel-Ger\xFCste dar, aber auch Buttons in unterschiedlichen Formen."},{name:"subheading",content:"Artikel-Suche"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_search.png",alt:"Ein Screenshot, welcher ein ge\xF6ffnetes Such-Modal zeigt. Im oberen Teil des Modals befindet sich ein Feld, in das ein Suchbegriff eingetragen werden kann. In der Mitte kann die Suche nach einer Auswahl an Redaktionen gefiltert werden. In unteren Bereich befindet sich ein Button, der die Suchanfrage startet. Im Hintergrund des Modals sieht man deaktiviert die Vorschau eines anderen Artikels."},{name:"paragraph",content:"Das Projekt verf\xFCgt \xFCber ein Such-Modal, mit dem Artikel mittels eines Stichworts gesucht werden k\xF6nnen. Optional k\xF6nnen Nachrichtenredaktionen ausgew\xE4hlt werden, die als Filter f\xFCr die Suche dienen. Die m\xF6glichen Redaktionen stellen eine Vorauswahl dar und lassen sich ebenso im Men\xFC wiederfinden."},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/news_search_results_zoom.gif",alt:"Im oberen Bereich befindet sich ein Dropdown-Element, welches durch einen Klick ausgeklappt wird. Es \xF6ffnet sich eine Suchform. Im oberen Teil der Form sich ein Feld, in dem bereits ein Suchbegriff eingetragen wurde. In der Mitte kann die Suche nach einer Auswahl an Redaktionen gefiltert werden. Zwei Redaktionen sind bereits ausgew\xE4hlt. In unteren Bereich befindet sich ein Button, der die Suchanfrage startet. Unterhalb des Dropdown-Elements befindet sich ein geladener Artikel, der eines der Suchergebnisse der obigen Suche darstellt."},{name:"paragraph",content:"Nach erfolgter Suchanfrage \xFCber das Modal wird auf eine Seite mit den Suchergebnissen weitergeleitet. Dort besteht durch eine ausklappbare Dropdown-Suchform die M\xF6glichkeit, die Suche anzupassen."}]},{name:"draggable-article",project:[{name:"headerImage",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_zoom.png",alt:"Ein Screenshot des Projekts. Auf der linken Seite sieht man eine Form zur Artikelerstellung. Sie besteht aus vershiedenen Bl\xF6cken, von denen alle bis auf einen zusammengeklappt sind. Bei dem ge\xF6ffneten Block handelt es sich um einen Paragraph-Abschnitt. Auf der rechten Seite sieht man eine Vorschau des Artikels."},{name:"title",content:"Draggable Article Projekt"},{name:"links",links:[{text:"Live Demo",href:"https://codesandbox.io/s/article-creation-with-draggable-zn9i11?file=/src/components/ArticleForm.vue"},{text:"GitHub",href:"https://github.com/jamawe/draggable-article"}]},{name:"embed",url:"https://codesandbox.io/embed/article-creation-with-draggable-zn9i11?fontsize=14&hidenavigation=1&theme=dark",title:"Article Creation with Draggable"},{name:"heading",content:"Beschreibung"},{name:"paragraph",content:"Dieses Projekt verwendet VueDraggable.next, die Vue3-Version des SortableJS Packages, f\xFCr eine dynamische Artikelerstellung. Es besteht zum einen aus einer Form, in der Abschnitte des Artikels sowohl erstellt als auch ihre Positionierung innerhalb des Artikels ge\xE4ndert werden k\xF6nnen. Zum anderen wird in einer Vorschau der aktuelle Stand des Artikels angezeigt."},{name:"heading",content:"Stack"},{name:"list",content:["Vue3 + Vite","VueDraggable.next"]},{name:"heading",content:"Features"},{name:"subheading",content:"Vielseitige Auswahl von Abschnitts-Typen"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_adding.gif",alt:"Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht zun\xE4chst aus drei zusammengeklappten Bl\xF6cken. Der User f\xFCgt zwei neue Abschnitte hinzu und bef\xFCllt diese mit Inhalt: erst eine Liste, dann eine Tabelle. In der Vorschau werden diese Ver\xE4nderungen am Artikel widergespiegelt."},{name:"paragraph",content:"Einem Abschnitt kann eine der folgenden Auspr\xE4gungen zugewiesen werden: \xDCberschrift, Bild, Liste, Zwischen\xFCberschrift, Zusammenfassung, Tabelle. Pro Artikel kann es jeweils nur eine \xDCberschrift und eine Zusammenfassung geben."},{name:"paragraph",content:"Bei Bildern besteht die Besonderheit, dass zwar mehrere in einem Artikel vorkommen k\xF6nnen, allerdings nur eines davon zum Titelbild erkl\xE4rt werden kann. Wird ein Bild als Titelbild ausgew\xE4hlt, wird diese Funktionalit\xE4t in den anderen Bild-Abschnitten deaktiviert."},{name:"subheading",content:"Verschiebbare Artikel-Abschnitte"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_dragging.gif",alt:"Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht zun\xE4chst aus sechs zusammengeklappten Bl\xF6cken. Durch Ziehen des Elements, wird der Abschnitt vom Typ Tabelle von seiner letzten Position nach weiter oben auf die vierte Position gezogen. Danach wird die Liste von Stelle f\xFCnf auf Stelle sechs gezogen. Alle Ver\xE4nderungen am Artikel werden in der Vorschau widergespiegelt."},{name:"paragraph",content:"Die Reihenfolge der Abschnitte ist ver\xE4nderbar durch die Anwendung des VueDraggable.next Packages. Die M\xF6glichkeiten des Packages wurden so ausgenutzt, dass eine mobile sowie Desktop-Nutzung des Projekts reibungslos verl\xE4uft. Dies beinhaltet zum einen, dass bei einem Touch-Event eine eingestellte Verz\xF6gerung dazu f\xFChrt, dass ein Verschieben erst ab einer Grenze von 200ms geschieht und alles darunter als Scroll gewertet wird."},{name:"paragraph",content:"Ferner wurden bestimme Elemente in der Form (z.B. Input-Felder) durch eine Klassenzuordnung gekennzeichnet und k\xF6nnen so kein Verschieben ausl\xF6sen. Das ist zum Beispiel wichtig f\xFCr das Markieren von Text in Form-Feldern."},{name:"paragraph",content:"Selbstverst\xE4ndlich wird beim Verschieben eines Abschnittes dessen Position auch in der Artikel-Vorschau angepasst. Da diese von der Artikel-Form abgeleitet wird, ist momentan nur das Verschieben von Form- und nicht von Vorschau-Abschnitten m\xF6glich."},{name:"subheading",content:"Zusammenklappen der Artikelabschnitte"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/draggable_collapsed.png",alt:"Auf der linken Seite sieht man eine Form zur Artikelerstellung. Auf der rechten Seite sieht man eine Vorschau des Artikels. Die Form besteht aus vier Abschnitten, von denen drei zusammengeklappt sind. Der dritte Abschnitt, ein Bild, ist ge\xF6ffnet. Das Bild wurde zum Titelbild erkl\xE4rt und erschein in der Vorschau an erster Stelle anstatt an seiner eigentlichen Position drei."},{name:"paragraph",content:"Artikelabschnitte k\xF6nnen zusammengeklappt werden. Das sorgt nicht nur f\xFCr ein h\xF6heres Ma\xDF an \xDCbersicht im Allgemeinen, sondern erleichtert auch das Verschieben von Abschnitten \xFCber mehrere andere Abschnitte hinweg."},{name:"subheading",content:"Vorschau des Artikels"},{name:"paragraph",content:"Sobald ein Abschnitt in der Artikel-Form hinzugef\xFCgt und mit Inhalt bef\xFCllt wurde, erscheint dieser Abschnitt in der Artikel-Vorschau. Diese befindet sich je nach Breakpoint entweder unter (mobil) oder neben der Form. Jeder Abschnitt wird mit einem angemessen Styling angezeigt."},{name:"paragraph",content:"Wird ein Bild zum Titelbild erkl\xE4rt, erscheint dieses, unabh\xE4ngig von seiner Position innerhalb der Form, in der Vorschau oberhalb der \xDCberschrift."}]},{name:"trainer-codes",project:[{name:"headerImage",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_grid.jpg",alt:"Vier Screenshots des Trainer Codes Projekts horizontal nebeneinander."},{name:"title",content:"Trainer Codes Projekt"},{name:"links",links:[{text:"GitHub",href:"https://github.com/Grischa89/tc_vue_1"}]},{name:"heading",content:"Beschreibung"},{name:"paragraph",content:"Trainer Codes ist ein Projekt f\xFCr Pok\xE9mon GO-Spieler. Es wird ihnen erleichtert, andere Spieler aus der ganzen Welt zu finden und sie als Freunde hinzuzuf\xFCgen."},{name:"heading",content:"Stack"},{name:"list",content:["Vue3","Vuex","Vue Router","Axios"]},{name:"heading",content:"Features"},{name:"subheading",content:"Kopieren von Trainer Codes (Smartphone)"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_copy.gif",alt:"In einer Tabelle, die aus zwei Spalten besteht, wird herunter gescrollt. Von links nach rechts hei\xDFen die Spaltenbezeichnungen: Country, Trainercode. In der Country Spalte befindet sich Text, in der Trainercode Spalte befinden sich ein 8-stelliger Code und zwei Icons. Nach Ende des Herunterscrollens wird auf das linke der beiden Icons getippt. Die Hintergrundfarbe des Icons \xE4ndert sich und es erscheint ein Tooltip \xFCber ihm, das darauf hinweist, dass der Code kopiert wurde."},{name:"paragraph",content:"Pok\xE9mon GO ist ein Spiel, in dem man davon profitiert, sich mit anderen Spielern aus der ganzen Welt zu verbinden. Um diesen eine Anfrage zu stellen, muss im Spiel selbst der Freundes-Code eingegeben werden. Trainer Codes bietet eine erleichterte Bedienung f\xFCr Spieler, da es einfaches Kopieren per Tap erm\xF6glicht. So kann Trainer Codes, wie Pok\xE9mon GO selbst, auf dem Smartphone ge\xF6ffnet werden und einfach zwischen den Apps gewechselt oder sie sogar im Split-Screen aufgerufen werden."},{name:"subheading",content:"Kopieren von Trainer Codes (Desktop)"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_qr.jpg",alt:"Ein QR-Code, schwarz auf wei\xDFem Hintergrund, befindet sich zentriert auf einem dunkelgrauen Modal. \xDCber dem QR-Code steht 'Uruguay' als \xDCberschrift, unterhalb des Codes ein 8-stelliger Zahlencode und ein Icon, dass darauf hindeutet, dass der obige Code kopiert werden kann. In der oberen rechten Ecke des Modals kann dieses \xFCber ein X-Icon geschlossen werden. Im Hintergrund des Modals ist verblasst die Seite zu sehen, auf der das Modal ge\xF6ffnet wurde."},{name:"paragraph",content:"Pok\xE9mon GO bietet es an, eine Freundschaftanfrage auch \xFCber Scannen eines QR-Codes zu stellen. Deswegen bietet Trainer Codes neben dem Kopieren per Tap auch das Anzeigen des jeweiligen Codes als QR-Code an. So kann die Seite auf dem Desktop ge\xF6ffnet und mit dem Smartphone der Code gescannt werden."},{name:"subheading",content:"Vielseitige Navigation"},{name:"image",src:"https://portfolio-jamawe.s3.us-east-2.amazonaws.com/tc_nav.gif",alt:"In einer horizontalen Navigation wird zun\xE4chst nach rechts gescrollt, dann zur\xFCck nach links zum Anfang. Gescrollt wird duch eine Reihe an abgerundeten Buttons, braun mit hellbrauner Border und wei\xDFer Schrift, die jeweils franz\xF6sische St\xE4dte als Text haben. \xDCber diesem Navigations-Element befindet sich die \xDCberschrift 'Explore More Cities', unter der Navigation eine Verlinkung, 'Show all Codes from France', mit einem Pfeil als Icon, der nach rechts zeigt."},{name:"paragraph",content:"Kontinente k\xF6nnen \xFCber ein Dropdown-Menu in der Navbar erreicht werden, L\xE4nder \xFCber Links in den Tabellen eines Kontinents. Die Navigation zu St\xE4dten befindet sich zum einen auf der Seite eines Landes, zum anderen wird sie auf der Stadt-Seite selbst zug\xE4nglich gemacht. In beiden f\xE4llen handelt es sich um eine Navigation mit horizontalem Scroll."}]}];export{n as a,e as p};
