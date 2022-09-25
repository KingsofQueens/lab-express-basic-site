const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.static("view"));

app.get("/", (request, response) => {
  response.render("home", aboutData);
});

app.get("/home", (request, response) => {
  response.render("home", aboutData);
});

app.get("/about", (request, response) => {
  response.render("about", aboutData);
});

app.get("/works", (request, response) => {
  response.render("works", aboutData);
});

app.get("/gallery", (request, response) => {
  response.render("gallery", aboutData);
});

const aboutData = {
  summary: `Mamoru Fujisawa (藤澤 守, Fujisawa Mamoru, born December 6, 1950), known
  professionally as Joe Hisaishi (久石 譲, Hisaishi Jō), is a Japanese
  composer and musical director known for over 100 film scores and solo
  albums dating back to 1981.`,
  earlyLife: `Hisaishi was born in Nakano, Nagano, Japan, as Mamoru Fujisawa (藤澤 守,
    Fujisawa Mamoru). He started learning violin at the Violin School Suzuki
    Shinichi at the age of four, and began watching hundreds of movies each
    year with his father.[5] He attended the Kunitachi College of Music in
    1969, where he majored in music composition, and collaborated with
    minimalist artists as a music engraver. In 1974 Hisaishi wrote music for
    the anime series Gyatoruzu, and composed some of his other early works,
    under his given name. He also composed for Sasuga no Sarutobi (Academy of
    Ninja) and Futari Daka (A Full Throttle). In the 1970s, Hisaishi's
    compositions were influenced by Japanese popular music, electronic music
    and New Age music, and by the Japanese electronic band Yellow Magic
    Orchestra. He developed his music from minimalist ideas and expanded
    toward orchestral work. Around 1975, he presented his first public
    performance. His first album, MKWAJU, was released in 1981; his second,
    the electropop-minimalist Information, was released a year later. His
    first major anime scores were for Hajime Ningen Gyatoruz (1974) and
    Robokko Beeton (1976). As he became better-known, Hisaishi formulated an
    alias inspired by American musician and composer Quincy Jones: "Quincy",
    pronounced "Kuinshī” in Japanese, can be written using the same kanji in
    "Hisaishi"; and "Joe" came from "Jones".`,
  animeMusic: `In 1983,Hisaishi was recommended by Tokuma, who had published Information,
    to create an image album for Hayao Miyazaki's animated film Nausicaä of
    the Valley of the Wind. It was the first of many of Miyazaki's films
    Hisaishi would score. (Their collaboration has been compared to that of
    director Steven Spielberg and composer John Williams.) In 1985, Hisaishi
    founded his own recording studio, Wonder Station.[8] In 1986, he scored
    Laputa: Castle in the Sky for Miyazaki's newly established Studio Ghibli;
    then in the 1990s, scored the Ghibli films Porco Rosso and Princess
    Mononoke. Hisaishi's compositions (including eight theatrical films and
    one OVA) become well-known as a style associated with early anime. He also
    composed for such TV and movie hits as Sasuga no Sarutobi, Two Down Full
    Base, Tonde Mon Pe and the anime Tekuno porisu 21C (all 1982), Oz no
    mahôtsukai (1982), Sasuraiger (1983), Futari Taka (1984), and Honō no
    Alpen Rose (1985). He also scored the sci-fi adventure series Mospeada
    (1983). Other films he scored included Mobile Suit Gundam Movie II:
    Soldiers of Sorrow (1981), Mobile Suit Gundam Movie III: Encounters in
    Space, (1982), Birth (Bâsu) (1984), Arion (1986), Robot Carnival (1987),
    Totoro (1988), Crest of the Royal Family and Maison Ikkoku – Apartment
    Fantasy (both 1988), Venus Wars (1989), Kiki's Delivery Service (1989),
    Porco Rosso (1992) and Ocean Heaven (2010). He also did theme-song
    arrangements and composed other anime opening, closing, and insert title
    theme songs such as Mahō Shōjo Lalabel (1980), Hello! Sandybell (1981),
    Meiken Jolie (1981), Voltron (1981), Ai Shite Knight (1983), Creamy Mami,
    the Magic Angel: Curtain Call (1986), and Kimagure Orange Road: The Movie
    (1988).[9] Hisaishi also developed a solo career, began to produce music.
    In 1989 he released his first solo album Pretender, on his new Wonder Land
    Inc. label.`,
  anime: [
    {
      name: `Nausicaä of the Valley of the Wind`,
      year: `1984`,
      image: "Nausicaa_Of_The_Valley_of_The_Wind.jpg",
    },
    {
      name: `Laputa: Castle in the Sky`,
      year: `1986`,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png",
    },
    {
      name: `My Neighbor Totoro`,
      year: `1988`,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
    },
    {
      name: `Kiki's Delivery Service`,
      year: `1989`,
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg",
    },
    { name: `Porco Rosso`, year: `1992`, image: "Ironhack" },
    { name: `Sonatine`, year: `1993`, image: "Ironhack" },
    { name: `Kids Return`, year: `1996`, image: "Ironhack" },
    { name: `Princess Mononoke`, year: `1997`, image: "Ironhack" },
    { name: `Hana-bi`, year: `1997`, image: "Ironhack" },
    { name: `Kikujiro`, year: `1999`, image: "Ironhack" },
    { name: `Brother`, year: `2000`, image: "Ironhack" },
    { name: `Spirited Away`, year: `2001`, image: "Ironhack" },
    { name: `Howl's Moving Castle`, year: `2004`, image: "Ironhack" },
    { name: `Ponyo (2008)`, image: "Ironhack" },
    { name: `Departures`, year: `2008`, image: "Ironhack" },
    { name: `The Wind Rises`, year: `2013`, image: "Ironhack" },
    {
      name: `The Tale of the Princess Kaguya`,
      year: `2013`,
      image: "Ironhack",
    },
    {
      name: `Ni no Kuni: Wrath of the White Witch`,
      year: `2013`,
      image: "Ironhack",
    },
    {
      name: `Ni no Kuni II: Revenant Kingdom`,
      year: `2018`,
      image: "Ironhack",
    },
    { name: `Children of the Sea`, year: `2019`, image: "Ironhack" },
  ],
};

app.listen(3000);
