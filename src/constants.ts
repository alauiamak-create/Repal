import { MenuCategory, Translation, Language, Review } from './types';

export const MENU_DATA: Record<Language, MenuCategory[]> = {
  de: [
    {
      title: "DÖNER GERICHTE",
      icon: "🥙",
      items: [
        { name: "Döner im Brot", price: "6.00€" },
        { name: "Döner im Brot (doppelt Fleisch)", price: "7.00€" },
        { name: "Döner im Brot Spezial", price: "7.50€" },
        { name: "Döner mit Käse", price: "6.50€" },
        { name: "XXL Döner", price: "8.50€" },
        { name: "Gemischter Döner (doppelt Fleisch)", price: "7.00€" },
      ]
    },
    {
      title: "DÜRÜM",
      icon: "🌯",
      items: [
        { name: "Dürüm Döner", price: "6.00€" },
        { name: "Dürüm Döner (doppelt Fleisch)", price: "8.50€" },
      ]
    },
    {
      title: "TÜRKISCHE PIZZA",
      icon: "🍕",
      items: [
        { name: "Mit Dönerfleisch", price: "7.50€" },
        { name: "Mit doppelt Fleisch", price: "8.50€" },
      ]
    },
    {
      title: "BOXEN",
      icon: "🍱",
      items: [
        { name: "Döner Box klein", price: "6.00€" },
        { name: "Döner Box groß", price: "6.50€" },
        { name: "Mit Pommes oder Salat", price: "6.00€–6.50€" },
        { name: "Nur Fleisch", price: "7.00€–7.50€" },
      ]
    },
    {
      title: "TELLER",
      icon: "🍽️",
      items: [
        { name: "Döner Teller", price: "11.50€" },
        { name: "Döner Teller doppelt Fleisch", price: "15.00€" },
        { name: "Nur Fleisch Teller", price: "17.00€" },
      ]
    },
    {
      title: "SPEZIAL",
      icon: "🥩",
      items: [
        { name: "Sucuk im Brot", price: "6.00€" },
        { name: "Sucuk + Ei", price: "7.50€" },
        { name: "Köfte im Brot", price: "6.00€" },
        { name: "Köfte Teller", price: "10.50€" },
      ]
    },
    {
      title: "VEGETARISCH",
      icon: "🥗",
      items: [
        { name: "Falafel im Brot", price: "6.00€" },
        { name: "Falafel Teller", price: "9.00€" },
        { name: "Halloumi Döner", price: "6.00€" },
        { name: "Halloumi Teller", price: "9.00€" },
        { name: "Vegetarischer Döner", price: "5.50€" },
        { name: "Vegetarischer Teller", price: "10.00€" },
      ]
    },
    {
      title: "BURGER",
      icon: "🍔",
      items: [
        { name: "Hamburger", price: "5.50€" },
        { name: "Cheeseburger", price: "6.00€" },
        { name: "Crispy Chicken Burger", price: "5.50€" },
        { name: "Mustafas Burger", price: "6.00€" },
      ]
    },
    {
      title: "BURGER MENÜ",
      icon: "🍟",
      items: [
        { name: "Hamburger Menü", price: "8.50€" },
        { name: "Cheeseburger Menü", price: "9.00€" },
        { name: "Chicken Burger Menü", price: "9.00€" },
        { name: "Mustafas Menü", price: "9.00€" },
      ]
    },
    {
      title: "SNACKS",
      icon: "🍗",
      items: [
        { name: "Currywurst", price: "3.50€ / 6.50€" },
        { name: "Chicken Nuggets (6x / 9x)", price: "6.00€ / 9.00€" },
        { name: "Pommes", price: "3.30€ / 6.50€" },
      ]
    },
    {
      title: "HÄHNCHEN",
      icon: "🍗",
      items: [
        { name: "Halbes Grillhähnchen", price: "6.00€" },
        { name: "Mit Pommes oder Salat", price: "9.00€" },
        { name: "Mit Pommes und Salat", price: "11.00€" },
        { name: "Ganzes Hähnchen", price: "12.00€" },
      ]
    },
    {
      title: "GETRÄNKE",
      icon: "🥤",
      items: [
        { name: "Coca Cola", price: "2.40€" },
        { name: "Fanta", price: "2.60€–2.80€" },
        { name: "Ayran", price: "2.50€" },
        { name: "Fritz Cola", price: "2.80€" },
        { name: "Kaffee", price: "1.80€" },
        { name: "Türkischer Kaffee", price: "1.50€" },
        { name: "Club Mate", price: "3.00€" },
      ]
    }
  ],
  en: [
    {
      title: "DÖNER DISHES",
      icon: "🥙",
      items: [
        { name: "Döner in Bread", price: "6.00€" },
        { name: "Döner in Bread (Double Meat)", price: "7.00€" },
        { name: "Döner in Bread Special", price: "7.50€" },
        { name: "Döner with Cheese", price: "6.50€" },
        { name: "XXL Döner", price: "8.50€" },
        { name: "Mixed Döner (Double Meat)", price: "7.00€" },
      ]
    },
    {
      title: "DÜRÜM",
      icon: "🌯",
      items: [
        { name: "Dürüm Döner", price: "6.00€" },
        { name: "Dürüm Döner (Double Meat)", price: "8.50€" },
      ]
    },
    {
      title: "TURKISH PIZZA",
      icon: "🍕",
      items: [
        { name: "With Döner Meat", price: "7.50€" },
        { name: "With Double Meat", price: "8.50€" },
      ]
    },
    {
      title: "BOXES",
      icon: "🍱",
      items: [
        { name: "Döner Box Small", price: "6.00€" },
        { name: "Döner Box Large", price: "6.50€" },
        { name: "With Fries or Salad", price: "6.00€–6.50€" },
        { name: "Meat Only", price: "7.00€–7.50€" },
      ]
    },
    {
      title: "PLATES",
      icon: "🍽️",
      items: [
        { name: "Döner Plate", price: "11.50€" },
        { name: "Döner Plate Double Meat", price: "15.00€" },
        { name: "Meat Only Plate", price: "17.00€" },
      ]
    },
    {
      title: "SPECIAL",
      icon: "🥩",
      items: [
        { name: "Sucuk in Bread", price: "6.00€" },
        { name: "Sucuk + Egg", price: "7.50€" },
        { name: "Köfte in Bread", price: "6.00€" },
        { name: "Köfte Plate", price: "10.50€" },
      ]
    },
    {
      title: "VEGETARIAN",
      icon: "🥗",
      items: [
        { name: "Falafel in Bread", price: "6.00€" },
        { name: "Falafel Plate", price: "9.00€" },
        { name: "Halloumi Döner", price: "6.00€" },
        { name: "Halloumi Plate", price: "9.00€" },
        { name: "Vegetarian Döner", price: "5.50€" },
        { name: "Vegetarian Plate", price: "10.00€" },
      ]
    },
    {
      title: "BURGERS",
      icon: "🍔",
      items: [
        { name: "Hamburger", price: "5.50€" },
        { name: "Cheeseburger", price: "6.00€" },
        { name: "Crispy Chicken Burger", price: "5.50€" },
        { name: "Mustafas Burger", price: "6.00€" },
      ]
    },
    {
      title: "BURGER MENU",
      icon: "🍟",
      items: [
        { name: "Hamburger Menu", price: "8.50€" },
        { name: "Cheeseburger Menu", price: "9.00€" },
        { name: "Chicken Burger Menu", price: "9.00€" },
        { name: "Mustafas Menu", price: "9.00€" },
      ]
    },
    {
      title: "SNACKS",
      icon: "🍗",
      items: [
        { name: "Currywurst", price: "3.50€ / 6.50€" },
        { name: "Chicken Nuggets (6x / 9x)", price: "6.00€ / 9.00€" },
        { name: "Fries", price: "3.30€ / 6.50€" },
      ]
    },
    {
      title: "CHICKEN",
      icon: "🍗",
      items: [
        { name: "Half Grilled Chicken", price: "6.00€" },
        { name: "With Fries or Salad", price: "9.00€" },
        { name: "With Fries and Salad", price: "11.00€" },
        { name: "Whole Chicken", price: "12.00€" },
      ]
    },
    {
      title: "DRINKS",
      icon: "🥤",
      items: [
        { name: "Coca Cola", price: "2.40€" },
        { name: "Fanta", price: "2.60€–2.80€" },
        { name: "Ayran", price: "2.50€" },
        { name: "Fritz Cola", price: "2.80€" },
        { name: "Coffee", price: "1.80€" },
        { name: "Turkish Coffee", price: "1.50€" },
        { name: "Club Mate", price: "3.00€" },
      ]
    }
  ],
  ar: [
    {
      title: "أطباق الدونر",
      icon: "🥙",
      items: [
        { name: "دونر في الخبز", price: "6.00€" },
        { name: "دونر في الخبز (لحم مضاعف)", price: "7.00€" },
        { name: "دونر في الخبز سبيشال", price: "7.50€" },
        { name: "دونر مع الجبن", price: "6.50€" },
        { name: "دونر XXL", price: "8.50€" },
        { name: "دونر مشكل (لحم مضاعف)", price: "7.00€" },
      ]
    },
    {
      title: "دوروم",
      icon: "🌯",
      items: [
        { name: "دوروم دونر", price: "6.00€" },
        { name: "دوروم دونر (لحم مضاعف)", price: "8.50€" },
      ]
    },
    {
      title: "بيتزا تركية",
      icon: "🍕",
      items: [
        { name: "مع لحم الدونر", price: "7.50€" },
        { name: "مع لحم مضاعف", price: "8.50€" },
      ]
    },
    {
      title: "بوكسات",
      icon: "🍱",
      items: [
        { name: "بوكس دونر صغير", price: "6.00€" },
        { name: "بوكس دونر كبير", price: "6.50€" },
        { name: "مع بطاطس أو سلطة", price: "6.00€–6.50€" },
        { name: "لحم فقط", price: "7.00€–7.50€" },
      ]
    },
    {
      title: "أطباق",
      icon: "🍽️",
      items: [
        { name: "طبق دونر", price: "11.50€" },
        { name: "طبق دونر لحم مضاعف", price: "15.00€" },
        { name: "طبق لحم فقط", price: "17.00€" },
      ]
    },
    {
      title: "سبيشال",
      icon: "🥩",
      items: [
        { name: "سجق في الخبز", price: "6.00€" },
        { name: "سجق + بيض", price: "7.50€" },
        { name: "كفتة في الخبز", price: "6.00€" },
        { name: "طبق كفتة", price: "10.50€" },
      ]
    },
    {
      title: "نباتي",
      icon: "🥗",
      items: [
        { name: "فلافل في الخبز", price: "6.00€" },
        { name: "طبق فلافل", price: "9.00€" },
        { name: "دونر حلومي", price: "6.00€" },
        { name: "طبق حلومي", price: "9.00€" },
        { name: "دونر نباتي", price: "5.50€" },
        { name: "طبق نباتي", price: "10.00€" },
      ]
    },
    {
      title: "برجر",
      icon: "🍔",
      items: [
        { name: "هامبرجر", price: "5.50€" },
        { name: "تشيز برجر", price: "6.00€" },
        { name: "برجر دجاج مقرمش", price: "5.50€" },
        { name: "برجر مصطفى", price: "6.00€" },
      ]
    },
    {
      title: "وجبات برجر",
      icon: "🍟",
      items: [
        { name: "وجبة هامبرجر", price: "8.50€" },
        { name: "وجبة تشيز برجر", price: "9.00€" },
        { name: "وجبة برجر دجاج", price: "9.00€" },
        { name: "وجبة مصطفى", price: "9.00€" },
      ]
    },
    {
      title: "سناكس",
      icon: "🍗",
      items: [
        { name: "كاري فورست", price: "3.50€ / 6.50€" },
        { name: "ناجتس دجاج (6/9 قطع)", price: "6.00€ / 9.00€" },
        { name: "بطاطس مقلية", price: "3.30€ / 6.50€" },
      ]
    },
    {
      title: "دجاج",
      icon: "🍗",
      items: [
        { name: "نصف دجاجة مشوية", price: "6.00€" },
        { name: "مع بطاطس أو سلطة", price: "9.00€" },
        { name: "مع بطاطس وسلطة", price: "11.00€" },
        { name: "دجاجة كاملة", price: "12.00€" },
      ]
    },
    {
      title: "مشروبات",
      icon: "🥤",
      items: [
        { name: "كوكا كولا", price: "2.40€" },
        { name: "فانتا", price: "2.60€–2.80€" },
        { name: "عيران", price: "2.50€" },
        { name: "فريتز كولا", price: "2.80€" },
        { name: "قهوة", price: "1.80€" },
        { name: "قهوة تركية", price: "1.50€" },
        { name: "كلوب ميت", price: "3.00€" },
      ]
    }
  ],
  tr: [
    {
      title: "DÖNER ÇEŞİTLERİ",
      icon: "🥙",
      items: [
        { name: "Ekmek Arası Döner", price: "6.00€" },
        { name: "Ekmek Arası Döner (Bol Etli)", price: "7.00€" },
        { name: "Ekmek Arası Döner Özel", price: "7.50€" },
        { name: "Peynirli Döner", price: "6.50€" },
        { name: "XXL Döner", price: "8.50€" },
        { name: "Karışık Döner (Bol Etli)", price: "7.00€" },
      ]
    },
    {
      title: "DÜRÜM",
      icon: "🌯",
      items: [
        { name: "Dürüm Döner", price: "6.00€" },
        { name: "Dürüm Döner (Bol Etli)", price: "8.50€" },
      ]
    },
    {
      title: "TÜRK PİZZASI",
      icon: "🍕",
      items: [
        { name: "Döner Etli", price: "7.50€" },
        { name: "Bol Etli", price: "8.50€" },
      ]
    },
    {
      title: "BOX",
      icon: "🍱",
      items: [
        { name: "Döner Box Küçük", price: "6.00€" },
        { name: "Döner Box Büyük", price: "6.50€" },
        { name: "Patates veya Salata ile", price: "6.00€–6.50€" },
        { name: "Sadece Et", price: "7.00€–7.50€" },
      ]
    },
    {
      title: "TABAKLAR",
      icon: "🍽️",
      items: [
        { name: "Döner Tabağı", price: "11.50€" },
        { name: "Döner Tabağı Bol Etli", price: "15.00€" },
        { name: "Sadece Et Tabağı", price: "17.00€" },
      ]
    },
    {
      title: "ÖZEL",
      icon: "🥩",
      items: [
        { name: "Sucuk Ekmek", price: "6.00€" },
        { name: "Sucuk + Yumurta", price: "7.50€" },
        { name: "Köfte Ekmek", price: "6.00€" },
        { name: "Köfte Tabağı", price: "10.50€" },
      ]
    },
    {
      title: "VEJETARYEN",
      icon: "🥗",
      items: [
        { name: "Falafel Ekmek", price: "6.00€" },
        { name: "Falafel Tabağı", price: "9.00€" },
        { name: "Hellim Döner", price: "6.00€" },
        { name: "Hellim Tabağı", price: "9.00€" },
        { name: "Vejetaryen Döner", price: "5.50€" },
        { name: "Vejetaryen Tabak", price: "10.00€" },
      ]
    },
    {
      title: "BURGER",
      icon: "🍔",
      items: [
        { name: "Hamburger", price: "5.50€" },
        { name: "Cheeseburger", price: "6.00€" },
        { name: "Çıtır Tavuk Burger", price: "5.50€" },
        { name: "Mustafas Burger", price: "6.00€" },
      ]
    },
    {
      title: "BURGER MENÜ",
      icon: "🍟",
      items: [
        { name: "Hamburger Menü", price: "8.50€" },
        { name: "Cheeseburger Menü", price: "9.00€" },
        { name: "Tavuk Burger Menü", price: "9.00€" },
        { name: "Mustafas Menü", price: "9.00€" },
      ]
    },
    {
      title: "APERATİFLER",
      icon: "🍗",
      items: [
        { name: "Currywurst", price: "3.50€ / 6.50€" },
        { name: "Tavuk Nuggets (6x / 9x)", price: "6.00€ / 9.00€" },
        { name: "Patates Kızartması", price: "3.30€ / 6.50€" },
      ]
    },
    {
      title: "TAVUK",
      icon: "🍗",
      items: [
        { name: "Yarım Piliç Izgara", price: "6.00€" },
        { name: "Patates veya Salata ile", price: "9.00€" },
        { name: "Patates ve Salata ile", price: "11.00€" },
        { name: "Bütün Tavuk", price: "12.00€" },
      ]
    },
    {
      title: "İÇECEKLER",
      icon: "🥤",
      items: [
        { name: "Coca Cola", price: "2.40€" },
        { name: "Fanta", price: "2.60€–2.80€" },
        { name: "Ayran", price: "2.50€" },
        { name: "Fritz Cola", price: "2.80€" },
        { name: "Kahve", price: "1.80€" },
        { name: "Türk Kahvesi", price: "1.50€" },
        { name: "Club Mate", price: "3.00€" },
      ]
    }
  ]
};

export const REVIEWS: Review[] = [
  {
    author: "Lukas M.",
    text: "Ich war sehr positiv überrascht von diesem Döner-Restaurant! Das Fleisch war saftig und gut gewürzt, das Brot frisch und knusprig, und die Soßen hausgemacht – besonders die Knoblauchsoße war ein Highlight. Auch die Portion war großzügig, und das Preis-Leistungs-Verhältnis stimmt. Das Personal war freundlich und schnell, das Restaurant sauber und gemütlich eingerichtet. Ich komme auf jeden Fall wieder!",
    rating: 5
  },
  {
    author: "Sarah K.",
    text: "Einen so guten Döner, hab ich ewig nicht mehr bekommen. Super.",
    rating: 5
  },
  {
    author: "Maximilian W.",
    text: "Wenn du in Schwedt unterwegs bist und der Magen knurrt, führt kein Weg an diesem Döner-Imbiss vorbei. Der Döner? Ein Gedicht. Frisch, saftig, würzig – einfach lecker. Man schmeckt sofort: Hier wird mit Liebe und Qualität gearbeitet. Die Preise? Stabil wie Beton. In Zeiten, in denen überall alles teurer wird, bleibt dieser Laden fair. Da isst man gern auch mal öfter. Was mir besonders positiv aufgefallen ist: Das Personal. Immer freundlich, immer mit einem Lächeln – selbst wenn der Laden voll ist. So wünscht man sich das! Und wer mal keinen Döner möchte (warum auch immer…), wird hier trotzdem fündig: Es gibt auch andere Gerichte auf der Karte, die genauso überzeugen. Fazit: Für mich ganz klar der beste Döner-Imbiss in Schwedt. Wer woanders hingeht, ist selbst schuld.",
    rating: 5
  },
  {
    author: "Christian R.",
    text: "Ich bin absolut begeistert von meinem Besuch im Dönerladen Musterfar! Der Döner war einfach lecker, die Fleischqualität war hervorragend und die Soßen waren perfekt abgestimmt. Ich habe mich wie im Urlaub gefühlt, so gut war das Essen! Aber nicht nur das Essen war großartig, auch das Ambiente ist einfach toll! Der Laden ist modern und stylisch eingerichtet. Die Mitarbeiter waren freundlich und aufmerksam, ich habe mich sofort wohl gefühlt. Ich kann Musterfar ohne Einschränkung empfehlen! Wenn Sie nach einem leckeren Döner suchen, der auch noch in einem schönen Ambiente serviert wird, sind Sie hier genau richtig. Ich werde definitiv wiederkommen und habe bereits meinen Freunden davon erzählt. Fünf Sterne sind noch zu wenig, ich würde zehn Sterne geben, wenn ich könnte! Musterfar ist definitiv einer der besten Dönerläden, den ich je besucht habe.",
    rating: 5
  },
  {
    author: "Paul M.",
    text: "Ich war dort Döner essen der Dönner schmeckt sehr lecker alles sehr frisch Mitarbeiter sehr freundlich der Laden in sich sehr sauber kann ich wirklich nur weiter empfehlen!!!",
    rating: 5
  },
  {
    author: "Julia S.",
    text: "Wie immer sehr lecker , Der schnitzel Döner ist mega , das Hähnchen liebe ich . Sie sind sehr kinder freundlich meine Kids essen immer Dönerbox oder Cheesburger.",
    rating: 5
  },
  {
    author: "Kamil P.",
    text: "Mega Soßen, gutes Fleisch – ich empfehle es von ganzem Herzen. Ich komme extra aus Polen hierher, weil es nah ist und man richtig guten Kebab essen kann, wenn einen die Lust packt. 😇",
    rating: 5
  },
  {
    author: "Anja B.",
    text: "Die Atmosphäre war sehr angenehm und sauber, es gab keine Parkplatzprobleme. Außerdem war der Döner sehr lecker und großzügig portioniert. Das freundliche Personal und ihre Aufmerksamkeit haben mir sehr gefallen.",
    rating: 5
  },
  {
    author: "Thomas H.",
    text: "Alles schmeckt soweit außer das Fleisch. Am ZOB schmeckt das Fleisch viel besser und auch die Soßen am ZOB sind besser. Cheesburger und Co. schmecken bei Mustafa 1 A.",
    rating: 3
  },
  {
    author: "Dennis K.",
    text: "Fünf Sterne ☝🏼 ⭐️⭐️⭐️⭐️⭐️ ✅Sehr guter Döner in Schwedt. ✅Mustafas Döner hat auch “der Gerät” die 3 Mitarbeiter arbeiten sehr zügig die Bestellungen ab. ✅Alles gut Zwei kleine Kritikpunkte habe ich ❌Kartenzahlung sollte im Jahr 2024 Standard sein. ❌Ich habe ganz genau eine Serviette bekommen. Der Mitarbeiter hätte mir bestimmt auf Nachfrage noch mehr gegeben . Trotzdem find ich das immer komisch. Die Punkte reichen nicht für einen Stern Abzug. Weiter so👍🏻👍🏻",
    rating: 5
  },
  {
    author: "Melanie F.",
    text: "Waren zum ersten Mal und das letzte Mal hier essen. Vom Versprechen \"Der beste Döner in Brandenburg\" ist dieser Anbieter weit entfernt. Dürüm für 8€, dafür das Fleisch kalt und lappig, Gemüse qualitativ ok, Soße (Kräuter) schmeckte nicht wie hausgemacht, Location selbst wirkte einladend und sauber, schade! Hätte gerne eine bessere Bewertung abgegeben.",
    rating: 2
  },
  {
    author: "Andreas G.",
    text: "Das Essen war wirklich ausgezeichnet! Der Döner war frisch, saftig und sehr lecker – besonders die Soßen waren einfach super und haben perfekt gepasst. Auch die Mitarbeiter waren unglaublich freundlich und aufmerksam. Man fühlt sich hier wirklich willkommen. Ich komme auf jeden Fall wieder!",
    rating: 5
  },
  {
    author: "Stefan B.",
    text: "War Pfingstmontag dort. Trotz einer langen Schlange, ca. 10 Personen, ging es sehr flott. Lag aber wahrscheinlich auch daran das 3-4 Mitarbeiter sich um das Essen gekümmert haben. Mehrere Soßen zur Auswahl. Ich hatte Kräuter und scharfe Soße, die war nicht zu scharf hatte aber einen leichten Bums ;) Alles Soßen selbstgemacht und das schmeckt man auch. Salate alles frisch und wurde ständig nachgelegt.. Kartenzahlung ist nicht möglich , dafür müsste ich nen halben Stern abziehen aber das geht nicht.",
    rating: 5
  },
  {
    author: "Monika W.",
    text: "Gut schmeckendes Essen zu normalen Preisen für großzügige Portionen. Saubere Räumlichkeiten und netter Service.",
    rating: 5
  },
  {
    author: "Kevin S.",
    text: "Rezension: Mustafas Döner – enttäuschende Erfahrung 🥙 Schon beim Bestellen wurden wir gezwungen, draußen in der Kälte zu warten, obwohl innen Platz war – kein guter Start. Beim Döner selbst fiel sofort auf, dass viel zu viel Soße verwendet wurde (mehrere große Kellen). Beim ersten Bissen dann die Enttäuschung: Das Fleisch war kalt, das Brot hat nach Pappe geschmeckt und die Soße war extrem fettig und lag schwer im Magen. So schlimm, dass wir den Döner nicht aufgegessen haben. Auf unsere Beschwerde reagierte der Verkäufer nur mit „Ist doch warm. Ist doch frisch.“ – obwohl das offensichtlich nicht der Fall war. Keine Einsicht, kein Entgegenkommen. Fazit: Sehr schlechte Qualität und kein guter Service. Wir kommen definitiv nicht wieder. ❌ Empfehlung stattdessen: City Grill 2 in Templin – deutlich bessere Qualität und sogar günstiger. 🌟",
    rating: 1
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  de: {
    hero: {
      title: "Das echte Döner-Erlebnis in Schwedt",
      subtitle: "Frische Zutaten & Premium Qualität.",
      cta_visit: "Besuchen Sie uns",
      cta_menu: "Speisekarte"
    },
    nav: {
      menu: "Menü",
      location: "Standort",
      about: "Über uns"
    },
    experience: {
      title: "Das Mustafa's Erlebnis",
      fresh: { title: "Frische Zutaten", desc: "Täglich frisch geliefertes Gemüse und bestes Fleisch." },
      fast: { title: "Schneller Service", desc: "Keine langen Wartezeiten, direkt auf die Hand." },
      big: { title: "Große Portionen", desc: "Bei uns wird jeder satt. Garantiert." }
    },
    location: {
      title: "Finden Sie uns",
      address: "Rosa-Luxemburg-Straße 42, 16303 Schwedt/Oder",
      hours: "Täglich 10:00 – 20:30",
      phone: "03332 5827819",
      get_directions: "Route planen"
    },
    reviews: {
      title: "Kundenbewertungen",
      total_reviews: "1200+ Bewertungen",
      show_more: "Alle Bewertungen anzeigen",
      show_less: "Weniger anzeigen"
    },
    footer: {
      visit_today: "Besuchen Sie uns heute",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    hero: {
      title: "The Real Döner Experience in Schwedt",
      subtitle: "Fresh ingredients & premium quality.",
      cta_visit: "Visit Us Now",
      cta_menu: "View Menu"
    },
    nav: {
      menu: "Menu",
      location: "Location",
      about: "About"
    },
    experience: {
      title: "The Mustafa's Experience",
      fresh: { title: "Fresh Ingredients", desc: "Daily fresh vegetables and finest meat." },
      fast: { title: "Fast Service", desc: "No long waits, straight to your hand." },
      big: { title: "Big Portions", desc: "Everyone leaves full. Guaranteed." }
    },
    location: {
      title: "Find Us",
      address: "Rosa-Luxemburg-Straße 42, 16303 Schwedt/Oder",
      hours: "Daily 10:00 – 20:30",
      phone: "03332 5827819",
      get_directions: "Get Directions"
    },
    reviews: {
      title: "Customer Reviews",
      total_reviews: "1200+ Reviews",
      show_more: "Show all reviews",
      show_less: "Show less"
    },
    footer: {
      visit_today: "Visit Us Today",
      rights: "All rights reserved."
    }
  },
  ar: {
    hero: {
      title: "تجربة الدونر الحقيقية في شفيدت",
      subtitle: "مكونات طازجة وجودة ممتازة.",
      cta_visit: "زورونا الآن",
      cta_menu: "قائمة الطعام"
    },
    nav: {
      menu: "القائمة",
      location: "الموقع",
      about: "حول"
    },
    experience: {
      title: "تجربة مصطفى",
      fresh: { title: "مكونات طازجة", desc: "خضروات طازجة يومياً وأجود أنواع اللحوم." },
      fast: { title: "خدمة سريعة", desc: "لا انتظار طويل، مباشرة إلى يدك." },
      big: { title: "وجبات كبيرة", desc: "الجميع يخرج شبعاناً. مضمون." }
    },
    location: {
      title: "تجدنا هنا",
      address: "Rosa-Luxemburg-Straße 42, 16303 Schwedt/Oder",
      hours: "يومياً 10:00 – 20:30",
      phone: "03332 5827819",
      get_directions: "احصل على الاتجاهات"
    },
    reviews: {
      title: "تقييمات العملاء",
      total_reviews: "أكثر من ١٢٠٠ تقييم",
      show_more: "عرض جميع التقييمات",
      show_less: "عرض أقل"
    },
    footer: {
      visit_today: "زورونا اليوم",
      rights: "جميع الحقوق محفوظة."
    }
  },
  tr: {
    hero: {
      title: "Schwedt'teki Gerçek Döner Deneyimi",
      subtitle: "Taze malzemeler ve premium kalite.",
      cta_visit: "Bizi Ziyaret Edin",
      cta_menu: "Menüyü Görüntüle"
    },
    nav: {
      menu: "Menü",
      location: "Konum",
      about: "Hakkımızda"
    },
    experience: {
      title: "Mustafa'nın Deneyimi",
      fresh: { title: "Taze Malzemeler", desc: "Günlük taze sebzeler ve en iyi etler." },
      fast: { title: "Hızlı Servis", desc: "Beklemek yok, anında elinizde." },
      big: { title: "Büyük Porsiyonlar", desc: "Bizde kimse aç kalmaz. Garanti." }
    },
    location: {
      title: "Bizi Bulun",
      address: "Rosa-Luxemburg-Straße 42, 16303 Schwedt/Oder",
      hours: "Her gün 10:00 – 20:30",
      phone: "03332 5827819",
      get_directions: "Yol Tarifi Al"
    },
    reviews: {
      title: "Müşteri Değerlendirmeleri",
      total_reviews: "1200+ Değerlendirme",
      show_more: "Tüm değerlendirmeleri göster",
      show_less: "Daha az göster"
    },
    footer: {
      visit_today: "Bugün Bizi Ziyaret Edin",
      rights: "Tüm hakları saklıdır."
    }
  }
};
