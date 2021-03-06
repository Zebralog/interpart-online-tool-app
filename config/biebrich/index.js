import endent from "endent"
import Introduction1 from "./introduction1.svg"
import Introduction2 from "./introduction2.svg"
import Introduction4 from "./introduction4.svg"
import Introduction5 from "./introduction5.svg"
import Introduction6 from "./introduction6.svg"
import dialog2Url from "./question1.jpg"
import dialog4Url from "./dialog4bild.png"

import IconStreetLightPark from "@/config/live/street-light-park.svg"
import IconPedestrianCrossing from "@/config/live/pedestrian-crossing.svg"
import IconCurb from "@/config/live/curb.svg"
import IconBikeLane from "@/config/live/bike-lane.svg"
import IconPieChartGalatea from "@/config/live/pie-chart-galatea-relative.svg"
import IconPieChartPark from "@/config/live/pie-chart-park-relative.svg"
import IconMail from "@/config/live/wahlurne-02.svg"
import IconPlayground from "@/config/live/spiel-und-sportstaette.svg"
import IconRestingPlaces from "@/config/live/ruheorte.svg"

import { default as localConfig } from "@/config/live/local.env"

export default {
  contacts: localConfig.contacts
    ? localConfig.contacts
    : {
        info: "info@company.org",
        label: "info [at] company.org",
        name: "Info",
        company: "Company",
        name_url: "https://www.company.org",
      },
  api: localConfig.api
    ? localConfig.api
    : {
        rest: {
          messages: {
            endpoints: {
              login: "https://api.interpart.org:4321/users/login",
              getAll: "https://api.interpart.org:4321/messages",
              newMessage: "https://api.interpart.org:4321/messages",
            },
            auth: {
              user: "bell3@udk.de",
              password: "valuable bark position choice",
            },
          },
        },
        bellsToDialogs: {
          "BELL-3219794234": 4,
          "BELL-7723427353": 2,
          default: 2,
        },
        dialogsToBells: {
          2: "BELL-7723427353",
          4: "BELL-3219794234",
          default: "BELL-7723427353",
        },
      },
  heroAlt: "Willkommen bei Wiesbaden Biebrich! Los geht???s",
  bellItemIntroText: "Klingelbeitrag zu ",
  genericItemIntroText: "Kommentar zu ",
  informationItems: [
    {
      name: "about",
      title: "??ber das Projekt",
      content: `<p>studio biebrich ist der Name der Mitmach-Formate von dem Forschungsprojekt Interpart. Das Forschungsprojekt m??chte gemeinsam mit der Wiesbadener Verwaltung herausfinden, wie sich zuk??nftig m??glichst alle Stadtbewohner und Stadtbewohnerinnen besser in Themen der Stadtentwicklung einbringen k??nnen. Denn: F??r die Entwicklung unserer Stadt sind alle Meinungen wichtig!</p><p>Mehr Informationen erh??lst du auf <a class="underlined" href="https://www.interpart.org/node/1217#uip-1">studio biebrich</a>.</p>`,
    },
    {
      name: "how-to",
      title: "FAQ",
      content: `<p><strong>Wie benutze ich das Online-Tool?</strong></p>
      <p>Bei Fragen zur Navigation, schau??? dir gerne das Intro noch einmal an oder wende dich ansonsten an unseren Support: <a class="underlined" href="mailto:${localConfig.contacts.info}">${localConfig.contacts.label}</a>.</p>
      <br>
      <p><strong>Was passiert mit meinen Ideen?</strong></p>
      <p>Das Online-Tool zeigt aktuell ausgedachte Beispiele f??r digitale Beteiligung in Biebrich. Das bedeutet, dass deine Abstimmung und dein Kommentar zurzeit nicht an die Stadtverwaltung weitergeleitet werden.</p>
      <br>
      <p><strong>Wie geht es weiter?</strong></p>
      <p>Mit deinem Feedback entwickeln wir das Online-Tool weiter mit dem Ziel, digitale Beteiligung zu vereinfachen und f??r alle zu erm??glichen.</p>
      <br>
      <p><strong>Gibt es noch andere Wege, sich zu beteiligen als online?</strong></p>
    <p>Ja. An Orten, wo gerade Beteiligung stattfindet, stehen Installationen in Form einer T??rklingel. Auch dort kannst du deine Ideen einbringen. Die Kommentare aus den Klingeln findest du hier auf der <a class="underlined" href="/discussion">Beitragsseite</a>.</p>`,
    },
    {
      name: "contact",
      title: "Kontakt",
      content: endent`
	<p>Herausgeber und Anbieter im Sinne des ?? 5 Telemediengesetz (TMG) sowie inhaltliche Verantwortung nach ??55 Abs. 2 des Rundfunkstaatsvertrages (RStV):</p>

	<p>
	<strong>${localConfig.contacts.company}</strong> <br />
	Soundso Stra??e 1/2, HH <br />
	10000 Berlin <br />
	Tel.: +49 (0)30 - 123 4567 - 1 <br />
	Fax: +49 (0)30 - 123 4567 - 99
	</p>
	<p>
	E-Mail: <a class="underlined" href="mailto:${localConfig.contacts.info}">${localConfig.contacts.label}</a> <br />
	Internet: <a class="underlined" href='${localConfig.contacts.company_url}'>${localConfig.contacts.company}</a> <br />
	Gesch??ftsf??hrer: Company CEO, Dr. CFO
	</p>
	<p>
	HRA 12345 B, Berlin <br />
	UST-ID Nr: DE12345678 <br />
	Vertretungsberechtigte Komplement??rin: ${localConfig.contacts.company}
	</p>
	<br />
	<p>
	<strong>Konzept, Gestaltung, Realisierung und technischer Betrieb:</strong> <br />
	${localConfig.contacts.company} GmbH <br />
	Stra??e 1/2, HH <br />
	10000 Berlin
	</p>
	<p>
	Tel.: +49 (0)30 - 123 4567 - 1 <br />
	Fax: +49 (0)30 - 123 4567 - 99 <br />
	E-Mail: <a class="underlined" href="mailto:${localConfig.contacts.info}">${localConfig.contacts.label}</a> <br />
	Internet: <a class="underlined" href="${localConfig.contacts.company_url}">${localConfig.contacts.company}</a>
	</p>
	<p>
	Gesch??ftsf??hrer: Company CEO, Dr. CFO <br />
	</p>
	<p>
	UST-ID Nr: DE12345678 <br />
	Vertretungsberechtigte Komplement??rin: ${localConfig.contacts.company} <br />
	Technische Umsetzung der Plattform auf Basis von Drupal.
	</p>
	<br />
	<p>
	<strong>Ansprechpartner/innen:</strong> <br />
	${localConfig.contacts.name} <br />
	E-Mail: <a class="underlined" href="mailto:${localConfig.contacts.info}">${localConfig.contacts.label}</a>
	</p>
  `,
    },
    {
      name: "datenschutz",
      title: "Datenschutz",
      content: endent`
	<p><strong>Weiterverwendung von Inhalten:</strong></p>
    <p>Die auf der Website eingesetzten Texte, Fotos, Videos und Navigations-Grafiken d??rfen ausschlie??lich im direkten Zusammenhang mit diesem Beteiligungsverfahren abgebildet werden. 
    Falls Sie Inhalte von den durch die Organisatoren eingestellten Informationen weiterverwenden m??chten, 
    fragen Sie bitte die oben genannten Herausgeber der Beteiligungsplattform, in welcher Form eine Nutzung m??glich ist.
    </p>
    <p><strong>Haftungsausschluss:</strong></p>
    <p>Die Organisatoren dieses Projekts haben stets die Richtigkeit, Vollst??ndigkeit und Aktualit??t der auf diesem Online-Angebot bereitgestellten redaktionellen 
    Informationen zum Ziel. Dennoch k??nnen Fehler und Unklarheiten nicht ausgeschlossen werden. 
    F??r Sch??den, die durch die Nutzung der zur Verf??gung gestellten Informationen oder Daten oder durch die Nutzung 
    fehlerhafter bzw. unvollst??ndiger Informationen oder Daten verursacht werden, wird keine Haftung ??bernommen. 
    Die inhaltliche Verantwortung f??r die eingestellten redaktionellen Inhalte liegt bei der Amprion GmbH. 
    F??r die Richtigkeit von Dritten erstellten Inhalte auf diesem Online-Angebot (bspw. Beitr??ge von Nutzenden) sind die jeweiligen 
    Urheber verantwortlich.
    </p>
    <p>Soweit auf diesem Online-Angebot durch redaktionelle Informationen ein Zugang zu fremden Inhalten, etwa in Form von Links, 
    vermittelt wird, die von anderen Anbietern bereitgestellt werden, wird darauf hingewiesen, dass wir auf diese fremden Inhalte keinen Einfluss haben,
    wir somit keine Haftung f??r diese Inhalte ??bernehmen und uns diese Inhalte auch nicht zu eigen machen.
	</p>
  `,
    },
  ],
  introductionItems: [
    {
      content: endent`
        Hallo und willkommen beim studio biebrich - Mitmachformat von INTERPART f??r die Gestaltung einer sicheren (Fort-) Bewegung in Biebrich. <br/><br/>
        Daf??r ist das Fachwissen von Stadtplanern und Stadtplanerinnen genauso wichtig, wie dein Wissen und deine Erfahrung aus deinem Alltag in der Stadt.<br/><br/>
        Und so machst du mit...
      `,
      image: {
        src: Introduction1,
        alt: "Hallo und willkommen beim studio biebrich ...",
        title: "Hallo und willkommen beim studio biebrich ...",
      },
    },
    {
      content: endent`
        Konkret geht es um deine Meinung zu den M??glichkeiten, sich in Biebrich zu bewegen. 
        Was funktioniert gut? Was nicht so gut und welche Vorschl??ge hast du f??r die Zukunft der Mobilit??t in Biebrich?
      `,
      image: {
        src: Introduction2,
        alt: "Konkret geht es um deine Meinung ...",
        title: "Konkret geht es um deine Meinung ...",
      },
    },
    {
      content:
        "Auf der ??bersichtskarte siehst du, wo sich Biebrich grade ver??ndert. Du kannst ??ber (Ver??nderungs-) Vorschl??ge abstimmen, deine Bed??rfnisse und Ideen ??u??ern oder eigene Vorschl??ge machen.",
      image: {
        src: Introduction4,
        alt: "Auf der ??bersichtskarte siehst du ...",
        title: "Auf der ??bersichtskarte siehst du ...",
      },
    },
    {
      content: endent`
        In der unteren Leiste findest du drei Grundfunktionen zur schnellen Navigation: 
        <a class="underlined" href="/information">Informationen</a> zum studio biebrich ??? Mitmachformat, 
        die <a class="underlined" href="/map">??bersichtskarte</a> und die Kommentare der anderen Nutzer und Nutzerinnen, 
        die ihre <a class="underlined" href="/discussion">Meinungen</a> eingebracht haben.
      `,
      image: {
        src: Introduction5,
        alt: "In der unteren Leiste ...",
        title: "In der unteren Leiste ...",
      },
    },
    {
      content: endent`
        <div class="is-size-5 text-center">
          <p class="pb-1">
            <strong>Alles verstanden?</strong><br/>
          </p>
          <p><a class="button" href="/information/about">Nein, ich m??chte mehr erfahren!</a></p>
          <p><a class="button" href="/map">Ja, ich will jetzt mitmachen!</a></p>
        </div>
      `,
      image: {
        src: Introduction6,
        alt: "",
        title: "",
      },
    },
  ],
  dialogs: {
    // for emoji codes look into plugin's collection data file, es. node_modules/emoji-mart-vue/data/apple.json
    "1": {
      id: "1",
      disabled: true,
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
          image: {
            src: dialog2Url,
            alt: "Was denkst du, wenn du  ...",
            title: "Was denkst du, wenn du ...",
          },
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "????", value: "grimacing" },
            { emoji: "????", value: "angry" },
            { emoji: "????", value: "slightly-smiling" },
            {
              emoji: "????",
              value: "cold-sweat",
            },
            { emoji: "????", value: "love" },
            { emoji: "????", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Stra??e uberqueren. Was ware dich wirtig?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
              icon: IconStreetLightPark,
            },
            { key: "B", content: "Zebrastreifen", value: "zebra" },
            {
              key: "C",
              content: "Weniger autos, mehr Fahrradwege",
              value: "fahrradwege",
              icon: IconBikeLane,
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
      askForMessage: false,
      initial: {
        discussion: [],
      },
    },
    "2": {
      id: "2",
      title: "Verkehrssituation an der Galatea-Anlage",
      trigger: {
        x: 75,
        y: 20,
      },
      subtitle: "",
      buttonLabel:
        "Stimme jetzt dar??ber ab, wie die Kreuzung gestaltet sein sollte.",
      color: "#cc76af",
      socialBarPosition: "end",
      socialBarMessage: "Teile deine Abstimmung mit deinen Freunden",
      questions: [
        {
          type: "emoji",
          image: {
            src: dialog2Url,
            alt:
              "Ausschnitt einer Stra??enkreuzung mit einem roten Auto an der Galatea-Anlage",
            title:
              "Ausschnitt einer Stra??enkreuzung mit einem roten Auto an der Galatea-Anlage",
          },
          question:
            "Welcher Emoji passt am besten zu deiner Stimmung, wenn du dir das Bild anguckst?",
          answers: [
            { emoji: "????", value: "confused" },
            { emoji: "????", value: "slightly-smiling" },
            { emoji: "????", value: "angry" },
          ],
        },
        {
          // type: "radio",
          type: "multiple",
          image: null,
          showAnswerKey: false,
          question: {
            title: "",
            content:
              "Stell dir vor, du musst ??ber die Kreuzung ??? Was ist f??r dich am wichtigsten, um gut und sicher auf die andere Seite zu kommen?",
          },
          answers: [
            {
              key: "A",
              content: "Gute Beleuchtung",
              value: "good",
              icon: IconStreetLightPark,
            },
            {
              key: "B",
              content: "Weniger Autos und mehr Fahrradwege",
              value: "fahrradwege",
              icon: IconBikeLane,
            },
            {
              key: "C",
              content: "Zebrastreifen",
              value: "zebra",
              icon: IconPedestrianCrossing,
            },
            {
              key: "D",
              content: "Niedrige Bordsteinkanten",
              value: "bordsteinkanten",
              icon: IconCurb,
            },
          ],
        },
      ],
      completionIcon: IconMail,
      completionMessage: "",
      opinionSentIcon: IconPieChartGalatea,
      opinionSentMessage:
        "<span style='font-weight: bold; text-decoration: underline;'>100</span> Personen haben bisher abgestimmt",
      askForMessage: false,
      initial: {
        discussion: [
          {
            dialogId: 2,
            id: 1,
            type: "text",
            date: new Date("December 19, 2019 15:15:30"),
            content:
              "Mir w??rde ein Zebrastreifen an dieser Kreuzung sehr helfen, um mit dem Kinderwagen sicher ??ber die Stra??e zu kommen.",
          },
          {
            dialogId: 2,
            id: 2,
            type: "text",
            date: new Date("July 20, 2020 15:00:00"),
            content:
              "Eine niedrige Bordsteinkante f??nde ich gut, damit ich sicherer mit dem Fahrrad die Stra??e ??berqueren kann.",
          },
          {
            dialogId: 2,
            id: 3,
            type: "text",
            date: new Date(),
            content:
              "Wenn die Kreuzung besser beleuchtet wird, k??nnen mich Autofahrer an der Kreuzung auch abends als Fahrradfahrerin besser erkennen und w??rde mir den Weg nach Hause erleichtern.",
          },
        ],
      },
    },
    "3": {
      id: "3",
      disabled: true,
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
          image: {
            src: dialog2Url,
            alt: "Was denkst du, wenn du ...",
            title: "Was denkst du, wenn du ...",
          },
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "????", value: "grimacing" },
            { emoji: "????", value: "angry" },
            { emoji: "????", value: "slightly-smiling" },
            {
              emoji: "????",
              value: "cold-sweat",
            },
            { emoji: "????", value: "love" },
            { emoji: "????", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Stra??e uberqueren. Was ware dich wichtig?",
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
        discussion: [],
      },
    },
    "4": {
      id: "4",
      title: "Bewegung und Aufenthalt im Park",
      trigger: {
        x: 55,
        y: 30,
      },
      subtitle: "Stimme jetzt dar??ber ab, wie der Park gestaltet werden sollte",
      buttonlabel: "Los geht???s",
      color: "#A9D9E7",
      questions: [
        {
          type: "emoji",
          image: {
            src: dialog4Url,
            alt:
              "Offene Parkanlage mit Sitzb??nken und Blick auf die gegen??berliegende Stra??e",
            title:
              "Offene Parkanlage mit Sitzb??nken und Blick auf die gegen??berliegende Stra??e",
          },
          question:
            "Welcher Emoji passt am besten zu deiner Stimmung, wenn du dir das Bild anguckst?",
          answers: [
            { emoji: "????", value: "confused" },
            { emoji: "????", value: "slightly-smiling" },
            { emoji: "????", value: "angry" },
          ],
        },
        {
          type: "multiple",
          image: null,
          showAnswerKey: false,
          question: {
            title: "",
            content:
              "Stell dir vor, du bist in der Robert-Krekel-Anlage unterwegs ??? Was ist f??r dich in dem Park am wichtigsten, damit du dich wohlf??hlst?",
          },
          answers: [
            {
              key: "A",
              content: "Guter Bodenbelag zum durchfahren",
              value: "goodroads",
              icon: IconBikeLane,
            },
            {
              key: "B",
              content: "Spiel- und Sportst??tten f??r alle Generationen",
              value: "playground",
              icon: IconPlayground,
            },
            {
              key: "C",
              content: "Beleuchtete Wege",
              value: "lighting",
              icon: IconStreetLightPark,
            },
            {
              key: "D",
              content: "Ruheorte",
              value: "resting",
              icon: IconRestingPlaces,
            },
          ],
        },
      ],
      completionIcon: IconMail,
      completionMessage: "",
      opinionSentIcon: IconPieChartPark,
      opinionSentMessage:
        "<span style='font-weight: bold; text-decoration: underline;'>100</span> Personen haben bisher abgestimmt",
      askForMessage: false,
      socialBarPosition: "end",
      socialBarMessage: "Teile deine Abstimmung mit deinen Freunden",
      initial: {
        discussion: [
          {
            dialogId: 4,
            id: 1,
            type: "text",
            date: new Date(),
            content:
              "Ich br??uchte etwas bessere Beleuchtung um mich sicher zu f??hlen.",
          },
          {
            dialogId: 4,
            id: 2,
            type: "text",
            date: new Date(),
            isBellMessage: true,
            content: "I wish there was a better ground for riding my bike.",
            translatedContent:
              "Ich w??nschte es g??be einen besseren Bodenbelag zum Fahrradfahren.",
          },
        ],
      },
    },
    "5": {
      id: "5",
      disabled: true,
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
          image: {
            src: dialog2Url,
            alt: "Was denkst du, wenn du dieses Bield ...",
            title: "Was denkst du, wenn du dieses Bield ...",
          },
          question: "Was denkst du, wenn du dieses Bield siehst?",
          answers: [
            { emoji: "????", value: "grimacing" },
            { emoji: "????", value: "angry" },
            { emoji: "????", value: "slightly-smiling" },
            {
              emoji: "????",
              value: "cold-sweat",
            },
            { emoji: "????", value: "love" },
            { emoji: "????", value: "confused" },
          ],
        },
        {
          type: "radio",
          image: null,
          question: {
            title: "Okay aber jetzt nochmal genau...",
            content:
              "stell dir vor, du sollst diese Stra??e uberqueren. Was ware dich wirtig?",
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
        discussion: [],
      },
    },
    "6": {
      id: "6",
      closed: true,
      title: "Neugestaltung des Mariannenplatzes",
      trigger: {
        x: 71,
        y: 74,
      },
      subtitle: "Hier startet demn??chst eine Beteiligung.",
      buttonlabel: "Los geht???s",
      color: "#F6CD86",
      questions: [
        {
          type: "emoji",
          image: {
            src: dialog4Url,
            alt:
              "Offene Parkanlage mit Sitzb??nken und Blick auf die gegen??berliegende Stra??e",
            title:
              "Offene Parkanlage mit Sitzb??nken und Blick auf die gegen??berliegende Stra??e",
          },
          question:
            "Welcher Emoji passt am besten zu deiner Stimmung, wenn du dir das Bild anguckst?",
          answers: [
            { emoji: "????", value: "confused" },
            { emoji: "????", value: "slightly-smiling" },
            { emoji: "????", value: "angry" },
          ],
        },
        {
          type: "multiple",
          image: null,
          showAnswerKey: false,
          question: {
            title: "",
            content:
              "Stell dir vor, du bist in der Robert-Krekel-Anlage unterwegs ??? Was ist f??r dich in dem Park am wichtigsten, damit du dich wohlf??hlst?",
          },
          answers: [
            {
              key: "A",
              content: "Guter Bodenbelag zum durchfahren",
              value: "goodroads",
              icon: IconBikeLane,
            },
            {
              key: "B",
              content: "Spiel- und Sportst??tten f??r alle Generationen",
              value: "playground",
              icon: IconPlayground,
            },
            {
              key: "C",
              content: "Beleuchtete Wege",
              value: "lighting",
              icon: IconStreetLightPark,
            },
            {
              key: "D",
              content: "Ruheorte",
              value: "resting",
              icon: IconRestingPlaces,
            },
          ],
        },
      ],
      completionIcon: IconMail,
      completionMessage: "",
      opinionSentIcon: IconPieChartPark,
      opinionSentMessage: "",
      askForMessage: false,
      socialBarPosition: "end",
      socialBarMessage: "Teile deine Abstimmung mit deinen Freunden",
      initial: {
        discussion: [
          {
            dialogId: 4,
            id: 1,
            type: "text",
            date: new Date(),
            content:
              "Ich br??uchte etwas bessere Beleuchtung um mich sicher zu f??hlen.",
          },
          {
            dialogId: 4,
            id: 2,
            type: "text",
            date: new Date(),
            isBellMessage: true,
            content: "I wish there was a better ground for riding my bike.",
            translatedContent:
              "Ich w??nschte es g??be einen besseren Bodenbelag zum Fahrradfahren.",
          },
        ],
      },
    },
  },
}
