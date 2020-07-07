import endent from "endent"
import Introduction1 from "./introduction1.svg"
import Introduction2 from "./introduction2.svg"
import Introduction3 from "./introduction3.svg"
import Introduction4 from "./introduction4.svg"
import Introduction5 from "./introduction5.svg"
import Introduction6 from "./introduction6.svg"
import question1Url from "./question1.png"

export default {
  heroAlt: "Willkommen bei Wiesbaden Biebrich! Los gehts",
  informationItems: [
    {
      name: "about",
      title: "Über das Projekt",
      content:
        "<p>studio biebrich ist der Name der Mitmach-Formate von dem Forschungsprojekt Interpart. Das Forschungsprojekt möchte gemeinsam mit der Wiesbadener Verwaltung herausfinden, wie sich zukünftig möglichst alle Stadtbewohner und Stadtbewohnerinnen besser in Themen der Stadtentwicklung einbringen können. Denn: Für die Entwicklung unserer Stadt sind alle Meinungen wichtig!</p><p>Mehr Informationen erhälst du auf studio biebrich.</p>",
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
        Hallo und willkommen beim studio biebrich - Mitmachformat von INTERPART für die Gestaltung einer sicheren (Fort-) Bewegung in Biebrich. <br/><br/>
        Dafür ist das Fachwissen von Stadtplanern und Stadtplanerinnen genauso wichtig, wie Erfahrungs- und Alltagswissen von Stadtnutzern und Stadtnutzerinnen.<br/><br/>
        Und so machst du mit...
      `,
      image: Introduction1,
    },
    {
      content: endent`
        Konkret geht es um deine Meinung zu den Möglichkeiten, sich in Biebrich zu bewegen. 
        Was funktioniert gut? Was nicht so gut und welche Vorschläge hast du für die Zukunft der Mobilität in Biebrich?
      `,
      image: Introduction2,
    },
    {
      content: endent`
        Auch Biebrich verändert sich als Stadt - Hier kannst du deine Perspektive & Meinung einbringen und damit Biebrich aktiv mitgestalten!
      `,
      image: Introduction3,
    },
    {
      content:
        "Auf der Übersichtskarte siehst du, wo sich Biebrich grade verändert. Du kannst über (Veränderungs-) Vorschläge abstimmen, deine Bedürfnisse und Ideen äußern oder eigene Vorschläge machen.",
      image: Introduction4,
    },
    {
      content: endent`
        In der unteren Leiste findest du drei Grundfunktionen zur schnellen Navigation: Informationen zum studio biebrich – Mitmachformat, die Übersichtskarte und die Beiträge der anderen Nutzer und Nutzerinnen, die ihre Meinungen eingebracht haben.
      `,
      image: Introduction5,
    },
    {
      content: endent`
        <div class="is-size-5 text-center">
          <p class="pb-1">
            <strong>Alles verstanden?</strong><br/>
          </p>
          <p><a class="button" href="/information">Nein, ich möchte mehr erfahren!</a></p>
          <p><a class="button" href="/map">Ja, ich will jetzt mitmachen!</a></p>
        </div>
      `,
      image: Introduction6,
    },
  ],
  dialogs: {
    // for emoji codes look into plugin's collection data file, es. node_modules/emoji-mart-vue/data/apple.json
    "1": {
      id: "1",
      title: "Situation 1 - Verkehr in Biebrich",
      trigger: {
        x: 29,
        y: 30,
      },
      subtitle: "Lorem Ipsum",
      color: "#47b9dd",
      questions: [
        {
          type: "emoji",
          image: question1Url,
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "😬", value: "grimacing" },
            { emoji: "😠", value: "angry" },
            { emoji: "🙂", value: "slightly-smiling" },
            {
              emoji: "😰",
              value: "cold-sweat",
            },
            { emoji: "😍", value: "love" },
            { emoji: "😕", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Straße uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
            },
            { key: "B", content: "Zebrastreifen", value: "zebra" },
            {
              key: "C",
              content: "Weniger autos, mehr Fahrradwege",
              value: "fahrradwege",
            },
            {
              key: "D",
              content: "Niedrige Bordsteinkanten",
              value: "bordsteinkanten",
            },
          ],
        },
      ],
      completionMessage: "",
      askForMessage: true,
      initial: {
        discussion: [
          {
            id: 1,
            type: "text",
            author: "User 1",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
          {
            id: 2,
            type: "text",
            author: "User 2",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
        ],
      },
    },
    "2": {
      id: "2",
      title: "Verkehrssituation an der Galatea-Anlage",
      trigger: {
        x: 63,
        y: 7,
      },
      subtitle: "",
      buttonLabel:
        "Stimme jetzt darüber ab, wie die Kreuzung gestaltet sein sollte.",
      color: "#cc76af",
      socialBarPosition: "end",
      socialBarMessage:
        "Teile deine Abstimmung mit deinen Freunden und gestaltet zusammen euer Biebrich der Zukunft!",
      questions: [
        {
          type: "emoji",
          image: question1Url,
          question:
            "Stell dir vor, du musst über die Kreuzung – Was ist für dich am wichtigsten, um gut und sicher auf die andere Seite zu kommen?",
          answers: [
            { emoji: "😕", value: "confused" },
            { emoji: "🙂", value: "slightly-smiling" },
            { emoji: "😠", value: "angry" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Straße uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
            },
            {
              key: "B",
              content: "Weniger Autos und mehr Fahrradwege",
              value: "fahrradwege",
            },
            { key: "C", content: "Zebrastreifen", value: "zebra" },
            {
              key: "D",
              content: "Niedrige Bordsteinkanten",
              value: "bordsteinkanten",
            },
          ],
        },
      ],
      completionMessage: "",
      askForMessage: true,
      initial: {
        discussion: [
          {
            id: 1,
            type: "text",
            author: "User 1",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
          {
            id: 2,
            type: "text",
            author: "User 2",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
        ],
      },
    },
    "3": {
      id: "3",
      title: "Situation 3",
      trigger: {
        x: 78,
        y: 75,
      },
      subtitle: "",
      color: "#7681CA",
      questions: [
        {
          type: "emoji",
          image: question1Url,
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "😬", value: "grimacing" },
            { emoji: "😠", value: "angry" },
            { emoji: "🙂", value: "slightly-smiling" },
            {
              emoji: "😰",
              value: "cold-sweat",
            },
            { emoji: "😍", value: "love" },
            { emoji: "😕", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Straße uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
            },
            {
              key: "B",
              content: "Weniger autos, mehr Fahrradwege",
              value: "fahrradwege",
            },
            { key: "C", content: "Zebrastreifen", value: "zebra" },
            {
              key: "D",
              content: "Niedrige Bordsteinkanten",
              value: "bordsteinkanten",
            },
          ],
        },
      ],
      initial: {
        discussion: [
          {
            id: 1,
            type: "text",
            author: "User 1",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
          {
            id: 2,
            type: "text",
            author: "User 2",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
        ],
      },
    },
    "4": {
      id: "4",
      title: "Bewegung und Aufenthalt im Park",
      trigger: {
        x: 56,
        y: 45,
      },
      subtitle: "",
      buttonlabel: "Los geht’s",
      color: "#A9D9E7",
      questions: [
        {
          type: "emoji",
          image: question1Url,
          question:
            "Stell dir vor, du bist in der Robert-Krekel-Anlage unterwegs – Was ist für dich in dem Park am wichtigsten, damit du dich wohlfühlst?",
          answers: [
            { emoji: "😕", value: "confused" },
            { emoji: "🙂", value: "slightly-smiling" },
            { emoji: "😠", value: "angry" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Straße uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Guter Bodenbelag zum durchfahren",
              value: "good",
            },
            {
              key: "B",
              content: "Spiel- und Sportstätten für alle Generationen",
              value: "fahrradwege",
            },
            { key: "C", content: "Zebrastreifen", value: "zebra" },
            {
              key: "D",
              content: "Ruheorte",
              value: "bordsteinkanten",
            },
          ],
        },
      ],
      completionMessage: "",
      askForMessage: true,
      socialBarMessage:
        "Teile deine Abstimmung mit deinen Freunden und gestaltet zusammen euer Biebrich der Zukunft!",
      initial: {
        discussion: [
          {
            id: 1,
            type: "text",
            author: "User 1",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
          {
            id: 2,
            type: "text",
            author: "User 2",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
        ],
      },
    },
    "5": {
      id: "5",
      title: "Situation 5 - Lorem Ipsum III",
      trigger: {
        x: 35,
        y: 58,
      },
      subtitle: "Lorem Ipsum",
      color: "#74ceb7",
      questions: [
        {
          type: "emoji",
          image: question1Url,
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "😬", value: "grimacing" },
            { emoji: "😠", value: "angry" },
            { emoji: "🙂", value: "slightly-smiling" },
            {
              emoji: "😰",
              value: "cold-sweat",
            },
            { emoji: "😍", value: "love" },
            { emoji: "😕", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Straße uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
            },
            {
              key: "B",
              content: "Weniger autos, mehr Fahrradwege",
              value: "fahrradwege",
            },
            { key: "C", content: "Zebrastreifen", value: "zebra" },
            {
              key: "D",
              content: "Niedrige Bordsteinkanten",
              value: "bordsteinkanten",
            },
          ],
        },
      ],
      initial: {
        discussion: [
          {
            id: 1,
            type: "text",
            author: "User 1",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
          {
            id: 2,
            type: "text",
            author: "User 2",
            date: new Date(),
            content: "lorem ipsum dolor amet",
          },
        ],
      },
    },
  },
}
