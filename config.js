// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.demonslayermanga.in.net';

export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>Demon Slayer: Kimetsu no Yaiba</u></a> is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a boy who becomes a demon slayer after his family is killed and his sister Nezuko is turned into a demon. Tanjiro seeks revenge and a cure for Nezuko, facing many demons and challenges along the way. The series is praised for its compelling characters, stunning animation, and intense action.`;

export const MANGA_NAME = 'Demon Slayer';
export const MANGA_AUTHOR = 'Koyoharu Gotouge';
export const MANGA_RELEASE = '2016';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Koyoharu Gotouge';
export const MANGA_STUDIO = 'Ufotable';
export const MANGA_GENRE = 'Action, Adventure, Drama, Shonen, Supernatural';

export const CHAPTER_PREFIX = 'demon-slayer-chapter';
export const IMAGE_PREFIX = 'images/demon-slayer';
export const NEXT_PREVIOUS_PREFIX = 'manga/demon-slayer-chapter';
export const URL_PREFIX = 'manga/demon-slayer-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/demon-slayer-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://i.ytimg.com/vi/Nq5MPsZiyyk/maxresdefault.jpg";



// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[70px] w-[65px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Demon Slayer';
export const NavbarName = "Demon Slayer";

export const APP_DESCRIPTION = `Read ${MANGA_NAME} manga online at ${DOMAIN}. Tanjiro Kamado, a boy who becomes a demon slayer after his family is killed and his sister Nezuko is turned into a demon. Tanjiro seeks revenge and a cure for Nezuko, facing many demons and challenges along the way. The series is praised for its compelling characters, stunning animation, and intense action.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series created by Koyoharu Gotouge. The story is set in Taisho-era Japan and centers around Tanjiro Kamado, a young and kind-hearted boy who lives with his family in the mountains. His peaceful life is shattered when he returns home one day to find that his family has been brutally slaughtered by demons. The only survivor is his sister, Nezuko, who has been transformed into a demon herself."
    },
    {
        id: 2,
        content: "Determined to avenge his family and save his sister, Tanjiro sets out on a journey to find a cure for Nezuko and eradicate the demon threat. He encounters Giyu Tomioka, a skilled demon slayer who directs him to Sakonji Urokodaki, a former Water Hashira (elite demon slayer) who trains Tanjiro in the art of demon slaying. Under Urokodaki's rigorous training, Tanjiro develops his skills, learns to use the Water Breathing technique, and becomes adept with his Nichirin sword, a weapon capable of killing demons."
    },
    {
        id: 3,
        content: "Tanjiro passes the Demon Slayer Corps' final selection exam and officially becomes a demon slayer. Throughout his journey, he meets and befriends other demon slayers, including Zenitsu Agatsuma, a cowardly but talented swordsman, and Inosuke Hashibira, a fierce warrior who wears a boar's head mask. Together, they face numerous powerful demons, each with unique and deadly abilities."
    },
    {
        id: 4,
        content: "A major turning point in the story is the confrontation with the Twelve Kizuki, an elite group of demons serving under Muzan Kibutsuji, the original demon and the primary antagonist of the series. Tanjiro and his friends face increasingly difficult battles against these formidable foes. Among them is Rui, a member of the Lower Moons, whom they encounter on Mount Natagumo. This battle tests Tanjiro's resolve and showcases his determination to protect his sister and his friends."
    },
    {
        id: 5,
        content: "As the story progresses, Tanjiro learns more about his family's history and the Sun Breathing technique, a powerful and ancient form of combat used by his ancestors. This revelation adds depth to Tanjiro's quest, linking his destiny to that of Muzan Kibutsuji and the origins of demonkind."
    },
    {
        id: 6,
        content: "The series is renowned for its stunning animation, particularly by the studio Ufotable, which brings the intense action scenes and beautifully detailed environments to life. The characters are well-developed, each with their own backstory and motivations, contributing to the emotional depth of the narrative. The bond between Tanjiro and Nezuko is a central theme, highlighting themes of family, sacrifice, and the struggle between good and evil."
    },
    {
        id: 7,
        content: "Demon Slayer: Kimetsu no Yaiba has garnered widespread acclaim and a large fanbase, praised for its compelling storytelling, dynamic characters, and visually spectacular animation. The series culminates in a final battle that tests the limits of Tanjiro and his allies, bringing the epic saga to a satisfying conclusion."
    },
];




export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran Manga',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man Manga',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen Manga',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man Manga',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei Manga',
        link: 'https://www.mushokutenseimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-piece.webp`,
        title: 'One Piece Manga',
        link: 'https://www.onepiecemanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jinx.webp`,
        title: 'Jinx Manga',
        link: 'https://www.jinxmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/boruto.webp`,
        title: 'Boruto Manga',
        link: 'https://www.borutomanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/demon-slayer.webp`,
        title: 'Demon Slayer Manga',
        link: 'https://www.demonslayermanga.in.net',
    },

    /*
    {
        imageUrl: `${DOMAIN}/related/my-dress-up-darling.webp`,
        title: 'My Dress Up Darling Manga',
        link: 'https://www.mydressupdarlingmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/blue-lock.webp`,
        title: 'Blue Lock Manga',
        link: 'https://www.bluelockmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/solo-leveling.webp`,
        title: 'Solo Leveling Manga',
        link: 'https://www.sololevelingimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/my-hero-academia.webp`,
        title: 'My Hero Academia Manga',
        link: 'https://www.myheroacademiamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga Manga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover Manga',
        link: 'https://www.blackclovermanga.in.net',
    },
*/

];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 55
    },
    {
        "chapterNumber": "2",
        "numImages": 25
    },
    {
        "chapterNumber": "3",
        "numImages": 23
    },
    {
        "chapterNumber": "4",
        "numImages": 19
    },
    {
        "chapterNumber": "5",
        "numImages": 19
    },
    {
        "chapterNumber": "6",
        "numImages": 19
    },
    {
        "chapterNumber": "7",
        "numImages": 21
    },
    {
        "chapterNumber": "7a",
        "numImages": 11
    },
    {
        "chapterNumber": "8",
        "numImages": 20
    },
    {
        "chapterNumber": "9",
        "numImages": 19
    },
    {
        "chapterNumber": "10",
        "numImages": 19
    },
    {
        "chapterNumber": "11",
        "numImages": 19
    },
    {
        "chapterNumber": "12",
        "numImages": 19
    },
    {
        "chapterNumber": "13",
        "numImages": 19
    },
    {
        "chapterNumber": "14",
        "numImages": 19
    },
    {
        "chapterNumber": "15",
        "numImages": 19
    },
    {
        "chapterNumber": "16",
        "numImages": 23
    },
    {
        "chapterNumber": "16a",
        "numImages": 15
    },
    {
        "chapterNumber": "17",
        "numImages": 19
    },
    {
        "chapterNumber": "18",
        "numImages": 19
    },
    {
        "chapterNumber": "19",
        "numImages": 19
    },
    {
        "chapterNumber": "20",
        "numImages": 19
    },
    {
        "chapterNumber": "21",
        "numImages": 19
    },
    {
        "chapterNumber": "22",
        "numImages": 19
    },
    {
        "chapterNumber": "22",
        "numImages": 2
    },
    {
        "chapterNumber": "22a",
        "numImages": 2
    },
    {
        "chapterNumber": "23",
        "numImages": 19
    },
    {
        "chapterNumber": "24",
        "numImages": 19
    },
    {
        "chapterNumber": "25",
        "numImages": 19
    },
    {
        "chapterNumber": "25a",
        "numImages": 15
    },
    {
        "chapterNumber": "26",
        "numImages": 19
    },
    {
        "chapterNumber": "27",
        "numImages": 19
    },
    {
        "chapterNumber": "28",
        "numImages": 19
    },
    {
        "chapterNumber": "29",
        "numImages": 19
    },
    {
        "chapterNumber": "30",
        "numImages": 19
    },
    {
        "chapterNumber": "31",
        "numImages": 19
    },
    {
        "chapterNumber": "32",
        "numImages": 19
    },
    {
        "chapterNumber": "33",
        "numImages": 19
    },
    {
        "chapterNumber": "34",
        "numImages": 19
    },
    {
        "chapterNumber": "34a",
        "numImages": 16
    },
    {
        "chapterNumber": "35",
        "numImages": 19
    },
    {
        "chapterNumber": "36",
        "numImages": 19
    },
    {
        "chapterNumber": "37",
        "numImages": 19
    },
    {
        "chapterNumber": "38",
        "numImages": 19
    },
    {
        "chapterNumber": "39",
        "numImages": 19
    },
    {
        "chapterNumber": "40",
        "numImages": 19
    },
    {
        "chapterNumber": "41",
        "numImages": 19
    },
    {
        "chapterNumber": "42",
        "numImages": 21
    },
    {
        "chapterNumber": "43",
        "numImages": 19
    },
    {
        "chapterNumber": "43a",
        "numImages": 2
    },
    {
        "chapterNumber": "43b",
        "numImages": 15
    },
    {
        "chapterNumber": "44",
        "numImages": 22
    },
    {
        "chapterNumber": "45",
        "numImages": 22
    },
    {
        "chapterNumber": "46",
        "numImages": 19
    },
    {
        "chapterNumber": "47",
        "numImages": 19
    },
    {
        "chapterNumber": "48",
        "numImages": 19
    },
    {
        "chapterNumber": "49",
        "numImages": 20
    },
    {
        "chapterNumber": "50",
        "numImages": 21
    },
    {
        "chapterNumber": "51",
        "numImages": 19
    },
    {
        "chapterNumber": "52",
        "numImages": 19
    },
    {
        "chapterNumber": "52a",
        "numImages": 13
    },
    {
        "chapterNumber": "53",
        "numImages": 21
    },
    {
        "chapterNumber": "54",
        "numImages": 19
    },
    {
        "chapterNumber": "55",
        "numImages": 19
    },
    {
        "chapterNumber": "56",
        "numImages": 19
    },
    {
        "chapterNumber": "57",
        "numImages": 19
    },
    {
        "chapterNumber": "58",
        "numImages": 19
    },
    {
        "chapterNumber": "59",
        "numImages": 22
    },
    {
        "chapterNumber": "59a",
        "numImages": 7
    },
    {
        "chapterNumber": "60",
        "numImages": 19
    },
    {
        "chapterNumber": "61",
        "numImages": 22
    },
    {
        "chapterNumber": "61",
        "numImages": 18
    },
    {
        "chapterNumber": "61a",
        "numImages": 18
    },
    {
        "chapterNumber": "62",
        "numImages": 19
    },
    {
        "chapterNumber": "63",
        "numImages": 22
    },
    {
        "chapterNumber": "64",
        "numImages": 18
    },
    {
        "chapterNumber": "65",
        "numImages": 18
    },
    {
        "chapterNumber": "66",
        "numImages": 21
    },
    {
        "chapterNumber": "67",
        "numImages": 20
    },
    {
        "chapterNumber": "68",
        "numImages": 19
    },
    {
        "chapterNumber": "69",
        "numImages": 19
    },
    {
        "chapterNumber": "70",
        "numImages": 19
    },
    {
        "chapterNumber": "70a",
        "numImages": 18
    },
    {
        "chapterNumber": "71",
        "numImages": 21
    },
    {
        "chapterNumber": "71a",
        "numImages": 7
    },
    {
        "chapterNumber": "72",
        "numImages": 19
    },
    {
        "chapterNumber": "73",
        "numImages": 19
    },
    {
        "chapterNumber": "74",
        "numImages": 19
    },
    {
        "chapterNumber": "75",
        "numImages": 19
    },
    {
        "chapterNumber": "76",
        "numImages": 19
    },
    {
        "chapterNumber": "77",
        "numImages": 19
    },
    {
        "chapterNumber": "78",
        "numImages": 19
    },
    {
        "chapterNumber": "79",
        "numImages": 19
    },
    {
        "chapterNumber": "79a",
        "numImages": 20
    },
    {
        "chapterNumber": "80",
        "numImages": 19
    },
    {
        "chapterNumber": "81",
        "numImages": 19
    },
    {
        "chapterNumber": "82",
        "numImages": 19
    },
    {
        "chapterNumber": "83",
        "numImages": 23
    },
    {
        "chapterNumber": "84",
        "numImages": 19
    },
    {
        "chapterNumber": "85",
        "numImages": 19
    },
    {
        "chapterNumber": "86",
        "numImages": 19
    },
    {
        "chapterNumber": "87",
        "numImages": 21
    },
    {
        "chapterNumber": "88",
        "numImages": 19
    },
    {
        "chapterNumber": "88a",
        "numImages": 16
    },
    {
        "chapterNumber": "89",
        "numImages": 19
    },
    {
        "chapterNumber": "90",
        "numImages": 20
    },
    {
        "chapterNumber": "91",
        "numImages": 19
    },
    {
        "chapterNumber": "92",
        "numImages": 22
    },
    {
        "chapterNumber": "93",
        "numImages": 19
    },
    {
        "chapterNumber": "94",
        "numImages": 19
    },
    {
        "chapterNumber": "95",
        "numImages": 19
    },
    {
        "chapterNumber": "95a",
        "numImages": 8
    },
    {
        "chapterNumber": "96",
        "numImages": 19
    },
    {
        "chapterNumber": "97",
        "numImages": 19
    },
    {
        "chapterNumber": "97",
        "numImages": 18
    },
    {
        "chapterNumber": "97a",
        "numImages": 18
    },
    {
        "chapterNumber": "98",
        "numImages": 19
    },
    {
        "chapterNumber": "99",
        "numImages": 19
    },
    {
        "chapterNumber": "100",
        "numImages": 22
    },
    {
        "chapterNumber": "101",
        "numImages": 19
    },
    {
        "chapterNumber": "102",
        "numImages": 19
    },
    {
        "chapterNumber": "103",
        "numImages": 19
    },
    {
        "chapterNumber": "104",
        "numImages": 19
    },
    {
        "chapterNumber": "105",
        "numImages": 19
    },
    {
        "chapterNumber": "106",
        "numImages": 21
    },
    {
        "chapterNumber": "106a",
        "numImages": 19
    },
    {
        "chapterNumber": "107",
        "numImages": 19
    },
    {
        "chapterNumber": "108",
        "numImages": 20
    },
    {
        "chapterNumber": "109",
        "numImages": 19
    },
    {
        "chapterNumber": "110",
        "numImages": 19
    },
    {
        "chapterNumber": "111",
        "numImages": 21
    },
    {
        "chapterNumber": "112",
        "numImages": 23
    },
    {
        "chapterNumber": "112a",
        "numImages": 8
    },
    {
        "chapterNumber": "113",
        "numImages": 18
    },
    {
        "chapterNumber": "114",
        "numImages": 19
    },
    {
        "chapterNumber": "115",
        "numImages": 19
    },
    {
        "chapterNumber": "115a",
        "numImages": 18
    },
    {
        "chapterNumber": "116",
        "numImages": 19
    },
    {
        "chapterNumber": "117",
        "numImages": 19
    },
    {
        "chapterNumber": "118",
        "numImages": 19
    },
    {
        "chapterNumber": "119",
        "numImages": 18
    },
    {
        "chapterNumber": "120",
        "numImages": 19
    },
    {
        "chapterNumber": "121",
        "numImages": 21
    },
    {
        "chapterNumber": "122",
        "numImages": 21
    },
    {
        "chapterNumber": "123",
        "numImages": 19
    },
    {
        "chapterNumber": "124",
        "numImages": 19
    },
    {
        "chapterNumber": "124a",
        "numImages": 20
    },
    {
        "chapterNumber": "125",
        "numImages": 22
    },
    {
        "chapterNumber": "126",
        "numImages": 19
    },
    {
        "chapterNumber": "127",
        "numImages": 19
    },
    {
        "chapterNumber": "128",
        "numImages": 19
    },
    {
        "chapterNumber": "129",
        "numImages": 19
    },
    {
        "chapterNumber": "130",
        "numImages": 19
    },
    {
        "chapterNumber": "131",
        "numImages": 21
    },
    {
        "chapterNumber": "132",
        "numImages": 19
    },
    {
        "chapterNumber": "133",
        "numImages": 19
    },
    {
        "chapterNumber": "133a",
        "numImages": 18
    },
    {
        "chapterNumber": "134",
        "numImages": 19
    },
    {
        "chapterNumber": "135",
        "numImages": 22
    },
    {
        "chapterNumber": "136",
        "numImages": 19
    },
    {
        "chapterNumber": "137",
        "numImages": 23
    },
    {
        "chapterNumber": "138",
        "numImages": 18
    },
    {
        "chapterNumber": "139",
        "numImages": 19
    },
    {
        "chapterNumber": "140",
        "numImages": 22
    },
    {
        "chapterNumber": "141",
        "numImages": 19
    },
    {
        "chapterNumber": "142",
        "numImages": 19
    },
    {
        "chapterNumber": "142a",
        "numImages": 19
    },
    {
        "chapterNumber": "143",
        "numImages": 19
    },
    {
        "chapterNumber": "144",
        "numImages": 19
    },
    {
        "chapterNumber": "145",
        "numImages": 17
    },
    {
        "chapterNumber": "146",
        "numImages": 21
    },
    {
        "chapterNumber": "147",
        "numImages": 20
    },
    {
        "chapterNumber": "148",
        "numImages": 20
    },
    {
        "chapterNumber": "149",
        "numImages": 18
    },
    {
        "chapterNumber": "150",
        "numImages": 19
    },
    {
        "chapterNumber": "151",
        "numImages": 19
    },
    {
        "chapterNumber": "151",
        "numImages": 21
    },
    {
        "chapterNumber": "151a",
        "numImages": 21
    },
    {
        "chapterNumber": "152",
        "numImages": 19
    },
    {
        "chapterNumber": "153",
        "numImages": 20
    },
    {
        "chapterNumber": "154",
        "numImages": 19
    },
    {
        "chapterNumber": "155",
        "numImages": 21
    },
    {
        "chapterNumber": "156",
        "numImages": 21
    },
    {
        "chapterNumber": "157",
        "numImages": 20
    },
    {
        "chapterNumber": "158",
        "numImages": 19
    },
    {
        "chapterNumber": "159",
        "numImages": 20
    },
    {
        "chapterNumber": "160",
        "numImages": 19
    },
    {
        "chapterNumber": "160a",
        "numImages": 17
    },
    {
        "chapterNumber": "161",
        "numImages": 19
    },
    {
        "chapterNumber": "162",
        "numImages": 23
    },
    {
        "chapterNumber": "163",
        "numImages": 19
    },
    {
        "chapterNumber": "164",
        "numImages": 19
    },
    {
        "chapterNumber": "165",
        "numImages": 18
    },
    {
        "chapterNumber": "166",
        "numImages": 19
    },
    {
        "chapterNumber": "167",
        "numImages": 19
    },
    {
        "chapterNumber": "168",
        "numImages": 21
    },
    {
        "chapterNumber": "169",
        "numImages": 19
    },
    {
        "chapterNumber": "169a",
        "numImages": 1
    },
    {
        "chapterNumber": "170",
        "numImages": 20
    },
    {
        "chapterNumber": "171",
        "numImages": 18
    },
    {
        "chapterNumber": "172",
        "numImages": 21
    },
    {
        "chapterNumber": "173",
        "numImages": 21
    },
    {
        "chapterNumber": "174",
        "numImages": 19
    },
    {
        "chapterNumber": "175",
        "numImages": 24
    },
    {
        "chapterNumber": "176",
        "numImages": 21
    },
    {
        "chapterNumber": "177",
        "numImages": 21
    },
    {
        "chapterNumber": "178",
        "numImages": 19
    },
    {
        "chapterNumber": "179",
        "numImages": 21
    },
    {
        "chapterNumber": "180",
        "numImages": 19
    },
    {
        "chapterNumber": "181",
        "numImages": 18
    },
    {
        "chapterNumber": "182",
        "numImages": 22
    },
    {
        "chapterNumber": "183",
        "numImages": 19
    },
    {
        "chapterNumber": "184",
        "numImages": 18
    },
    {
        "chapterNumber": "185",
        "numImages": 19
    },
    {
        "chapterNumber": "186",
        "numImages": 19
    },
    {
        "chapterNumber": "187",
        "numImages": 19
    },
    {
        "chapterNumber": "188",
        "numImages": 19
    },
    {
        "chapterNumber": "189a",
        "numImages": 1
    },
    {
        "chapterNumber": "190",
        "numImages": 19
    },
    {
        "chapterNumber": "191",
        "numImages": 21
    },
    {
        "chapterNumber": "192",
        "numImages": 19
    },
    {
        "chapterNumber": "193",
        "numImages": 27
    },
    {
        "chapterNumber": "194",
        "numImages": 19
    },
    {
        "chapterNumber": "195",
        "numImages": 19
    },
    {
        "chapterNumber": "196",
        "numImages": 19
    },
    {
        "chapterNumber": "197",
        "numImages": 18
    },
    {
        "chapterNumber": "198",
        "numImages": 20
    },
    {
        "chapterNumber": "199",
        "numImages": 19
    },
    {
        "chapterNumber": "200",
        "numImages": 23
    },
    {
        "chapterNumber": "201",
        "numImages": 19
    },
    {
        "chapterNumber": "202",
        "numImages": 19
    },
    {
        "chapterNumber": "203",
        "numImages": 20
    },
    {
        "chapterNumber": "204",
        "numImages": 29
    },
    {
        "chapterNumber": "205",
        "numImages": 23
    },
    {
        "chapterNumber": "205a",
        "numImages": 19
    },
    {
        "chapterNumber": "205b",
        "numImages": 9
    }
];