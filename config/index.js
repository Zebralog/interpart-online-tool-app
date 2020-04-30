import endent from "endent"
import Introduction1 from "./introduction1.svg"
import Introduction2 from "./introduction2.svg"
import Introduction3 from "./introduction3.svg"
import Introduction4 from "./introduction4.svg"
import Introduction5 from "./introduction5.svg"
import Introduction6 from "./introduction6.svg"

export default {
  heroAlt: "Willkommen bei Wiesbaden Biebrich! Los gehts",
  discussion: [
    {
      id: 1,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 2,
      type: "text",
      author: "User 2",
      timestamp: "2020-03-01 14:00:00",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 3,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 4,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 5,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 6,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 7,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 8,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 9,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 10,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 11,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 12,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
    {
      id: 13,
      type: "text",
      author: "User 1",
      timestamp: "2020-04-21 10:10:10",
      content: "lorem ipsum dolor amet",
    },
  ],
  places: [
    {
      id: "place-1",
      title: "Situation 1",
      position: {
        x: "10%",
        y: "20%",
      },
      subtitle: "Lorem Ipsum",
      color: "#47b9dd",
    },
    {
      id: "place-2",
      title: "Situation 2",
      position: {
        x: "52%",
        y: "0",
      },
      subtitle: "sicut dolor amet",
      color: "#cc76af",
    },
    {
      id: "place-3",
      title: "Situation 3",
      position: {
        x: "51%",
        y: "41%",
      },
      subtitle: "",
      color: "#9199d6",
    },
    {
      id: "place-4",
      title: "Situation 4",
      position: {
        x: "19%",
        y: "32%",
      },
      subtitle: "",
      color: "#74ceb7",
    },
  ],
  informationItems: [
    {
      name: "about",
      title: "Über das Projekt",
      content:
        "<p>Ich dann im hohen Grase am fallenden Bache liege, und näher an <strong>der Erde tausend</strong> mannigfaltige Gräschen mir merkwürdig werden;</p><p>Wenn ich das <strong>Wimmeln</strong> der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart.</p>",
    },
    {
      name: "goals",
      title: "Was wollen wir erreichen?",
      content:
        "<p>das Wehen des Alliebenden, der uns in ewiger <strong>Wonne schwebend</strong> trägt und erhält; mein Freund!</p><p>Wenn’s dann um meine Augen dämmert, und die Welt um mich her und der Himmel.</p>",
    },
    {
      name: "how-to",
      title: "Wie bediene ich das Tool?",
      content:
        "<p>das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Aber ich gehe darüber zugrunde, ich erliege unter der <strong>Gewalt der Herrlichkeit</strong> dieser Erscheinungen.</p><p>Oder sieh dir einfach <strong>Tutorial</strong> an.</p>",
    },
    {
      name: "contact",
      title: "Kontakt",
      content:
        "<p><strong>Bürgerverein Biebrich e.V.</strong><br/>Gaugasse 12<br/>65203 Biebrich</p><p><strong>Interpart</strong><br/>Max Mustermann<br/>0657 5887462</p><p><strong>Zebralog</strong><br/>Omid Nowzamani<br/>0228 763706 14<br/>nowzamani@zebralog.de</p>",
    },
  ],
  introductionItems: [
    {
      content: endent`
        Hallo, hier ist studio biebrich – das Mitmachformat von INTERPART.<br/>
        Wir wollen deine Meinung zu Sicherheit und Fortbewegung in Biebrich. So machst du mit!
      `,
      image: Introduction1,
    },
    {
      content: endent`
        Gerne würden wir über die App deine Meinung zu Mobilität in Biebrich erfahren.
        In mehreren Spaces kannst du deine Meinung sagen. 
      `,
      image: Introduction2,
    },
    {
      content: endent`
        In den Spaces findest du die jeweiligen Themenfelder, zu der wir dich brauchen.
        Wo soll der neue Basketballplatz entstehen? Was brauchst du für Sportgeräte im Park?
      `,
      image: Introduction3,
    },
    {
      content:
        "Auf der Übersichtskarte von Moabit kannst du dich in die jeweiligen Spaces klicken und in mehreren Leveln, ganz unterschiedlich, deine Meinung sagen.",
      image: Introduction4,
    },
    {
      content: endent`
        In der unteren Leiste hast du 3 Grundfunktionen.
        Da findest du weitere Informationen zu unserem Projekt und die Kommentare der weiteren Nutzer.
      `,
      image: Introduction5,
    },
    {
      content: endent`
        <div class="is-size-5 text-center">
          <p class="pb-1">
            <strong>Alles verstanden?</strong><br/>
            Dann kann es ja losgehen
          </p>
          <p><a class="button" href="/map">Los gehts!</a></p>
        </div>
      `,
      image: Introduction6,
    },
  ],
}
