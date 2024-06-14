export enum ESeries {
    NONE = "None",
    CODES = "CODES",
    DOME_KANO = "Domestic Girlfriend",
    KAGUYA_SAMA = "Kaguya-sama: Love is War",
    ONK = "Oshi no Ko",
    QUINTS = "Quintessential Quintuplets",
    CSM = "Chainsaw Man",
    MASHLE = "Mashle: Magic and Muscles",
    AKIBA_MAID_WAR = "Akiba Maid War",
    RASCAL = "Rascal Does Not Dream of ...",
    JJK = "Jujutsu Kaisen",
    RENT_A_GF = "Rent-a-Girlfriend",
    BOCCHI = "Bocchi the Rock!",
    FUUFU_IJOU = "Fuufu Ijou",
    AOT = "Attack on Titan",
    HELLS_PARADISE = "Hell's Paradise",
    REZERO = "Re:Zero",
    TOMO_CHAN = "Tomo-chan is a Girl!",
    TOMOZAKI_KUN = "Bottom-tier Character Tomozaki",
    KIMIZERO = "Kimizero",
    ANGEL_NEXT_DOOR = "The Angel Next Door Spoils Me Rotten",
    SCIENCE_FELL_IN_LOVE = "Science Fell in Love, So I Tried to Prove It",
    IN_LOVE_W_VILLAINESS = "I'm in Love with the Villainess",
    GOLDEN_TIME = "Golden Time",
    RELIFE = "ReLIFE",
    BLEND_S = "Blend S",
    GF_GF = "Girlfriend, Girlfriend",
    _100_KANO = "The 100 Girlfriends Who Really Love You",
    ZOM_100 = "Zom 100: Bucket List of the Dead",
    DRESS_UP_DARLING = "My Dress-Up Darling",
    ROMANTIC_KILLER = "Romantic Killer",
    KOMI_SAN = "Komi-san Can't Communicate",
    SPY_X_FAM = "Spy x Family",
    COTE = "Classroom of the Elite",
    UNDEAD_UNLUCK = "Undead Unluck",
    FRIEREN = "Frieren: Beyond Journey's End",
    MONOGATARI = "Monogatari",
    KONOSUBA = "KonoSuba",
    YURU_CAMP = "Yuru Camp",
    VIOLET_EVERGARDEN = "Violet Evergarden",
    KOBAYASHI_SAN = "Kobayashi-san's Dragon Maid",
    KAMIKATSU = "KamiKatsu: Working for God in a Godless World",
    MADE_IN_ABYSS = "Made in Abyss",
    COWBOY_BEBOP = "Cowboy Bebop",
    MUSHOKU_TENSEI = "Mushoku Tensei: Jobless Reincarnation",
    JUN_MOCHIZUKI = "Jun Mochizuki",
    FAIRY_TAIL = "Fairy Tail",
    WOTAKOI = "Wotakoi: Love Is Hard for Otaku",
    SOUL_EATER = "Soul Eater",
    MICHIKO_HATCHIN = "Michiko & Hatchin",
    FIRE_FORCE = "Fire Force",
    EDGERUNNERS = "Cyberpunk: Edgerunners",
    BLACK_LAGOON = "Black Lagoon",
    SAILOR_MOON = "Sailor Moon",
    KIZNAIVER = "Kiznaiver",
    DURARARA = "Durarara!!",
    EMINENCE = "The Eminence in Shadow",
    DANGERS_IN_MY_HEART = "The Dangers in My Heart",
    APOTHECARY = "The Apothecary Diaries",
    MAID_SAMA = "Maid Sama!",
    NAGI_ASU = "Nagi-Asu: A Lull in the Sea",
    DEATH_NOTE = "Death Note",
    TAKAGI_SAN = "Teasing Master Takagi-san",
    SENPAI_IS_ANNOYING = "My Senpai Is Annoying",
    ASSASSINATION_CLASSROOM = "Assassination Classroom",
    HORIMIYA = "Horimiya",
    CANT_UNDERSTAND_HUSBAND = "I Can't Understand What My Husband Is Saying",
    ART_CLUB = "This Art Club Has a Problem!",
    TSUREZURE_CHILDREN = "Tsuredure Children",
    YOUR_NAME = "Your Name.",
    HIGEHIRO = "Higehiro",
    YAKUZA_BABYSITTING = "The Yakuza's Guide to Babysitting",
    MASAMUNE_KUN = "Masamune-kun No Revenge",
    TO_EVERY_YOU_TO_ME = "To Every You I've Loved Before / To Me, the One Who Loved You",
    TONIKAWA = "TONIKAWA: Over The Moon For You",
    KONGMING = "Ya Boy Kongming!",
    YAMADA_999 = "My Love Story with Yamada-kun at Lv999",
    PROMISED_NEVERLAND = "The Promised Neverland",
    AYUMU_SHOGI = "When Will Ayumu Make His Move?",
};

export const ALL_SERIES: ESeries[] = [
    ESeries.AOT, ESeries.CSM, ESeries.JJK, ESeries.ONK,
    ESeries.COTE,
    ESeries.GF_GF,
    ESeries.MASHLE, ESeries.REZERO, ESeries.RELIFE, ESeries.QUINTS, ESeries.RASCAL, ESeries.BOCCHI,
    ESeries.BLEND_S, ESeries.ZOM_100, ESeries.FRIEREN, ESeries.WOTAKOI,
    ESeries.KIMIZERO, ESeries.KOMI_SAN, ESeries.KONOSUBA, ESeries.DURARARA, ESeries.HORIMIYA, ESeries.HIGEHIRO,
    ESeries.TONIKAWA, ESeries.KONGMING, ESeries.NAGI_ASU, ESeries.EMINENCE, ESeries.ART_CLUB,
    ESeries.DOME_KANO, ESeries.RENT_A_GF, ESeries._100_KANO, ESeries.SPY_X_FAM, ESeries.YURU_CAMP,
    ESeries.KAMIKATSU, ESeries.KIZNAIVER, ESeries.MAID_SAMA, ESeries.YOUR_NAME,
    ESeries.FUUFU_IJOU, ESeries.MONOGATARI, ESeries.FAIRY_TAIL, ESeries.SOUL_EATER, ESeries.FIRE_FORCE,
    ESeries.DEATH_NOTE, ESeries.TAKAGI_SAN, ESeries.YAMADA_999, ESeries.APOTHECARY,
    ESeries.KAGUYA_SAMA, ESeries.GOLDEN_TIME, ESeries.SAILOR_MOON, ESeries.AYUMU_SHOGI, ESeries.EDGERUNNERS,
    ESeries.TOMOZAKI_KUN, ESeries.COWBOY_BEBOP, ESeries.BLACK_LAGOON, ESeries.MASAMUNE_KUN,
    ESeries.UNDEAD_UNLUCK, ESeries.KOBAYASHI_SAN, ESeries.MADE_IN_ABYSS, ESeries.JUN_MOCHIZUKI,
    ESeries.HELLS_PARADISE, ESeries.TOMO_CHAN, ESeries.MUSHOKU_TENSEI, ESeries.AKIBA_MAID_WAR,
    ESeries.ANGEL_NEXT_DOOR, ESeries.ROMANTIC_KILLER, ESeries.MICHIKO_HATCHIN,
    ESeries.DRESS_UP_DARLING,
    ESeries.VIOLET_EVERGARDEN,
    ESeries.SENPAI_IS_ANNOYING, ESeries.TSUREZURE_CHILDREN, ESeries.TO_EVERY_YOU_TO_ME,
    ESeries.PROMISED_NEVERLAND, ESeries.YAKUZA_BABYSITTING,
    ESeries.DANGERS_IN_MY_HEART,
    ESeries.SCIENCE_FELL_IN_LOVE, ESeries.IN_LOVE_W_VILLAINESS, 
    ESeries.ASSASSINATION_CLASSROOM, ESeries.CANT_UNDERSTAND_HUSBAND,
];

export enum ECode {
    NEXT_LINE = "0"
}

const eSeriesNames = Object.keys(ESeries);
if(eSeriesNames.length-2 !== ALL_SERIES.length) { // -2 bc ESeries has ESeries.CODES and ESeries.NONE
    throw Error(`ALL_SERIES MISSING ${eSeriesNames} vs ${ALL_SERIES}`);
}

export const SERIES_CHARACTERS: {[series in ESeries]: string[]} = {
    [ESeries.NONE]: [],
    [ESeries.CODES]: [ECode.NEXT_LINE],
    [ESeries.DOME_KANO]: ["Rui Tachibana", "Hina Tachibana", "Momo Kashiwabara", "Miu Ashihara", "Masaki Kobayashi", "Miyabi Serizawa",
        "Misaki Ogura", "Mao Kinashi", "Yuri Umeda", "Hibiki Mikimoto", "Kasumi Hazuki", "Hana Sakaki", "Nene Kuzuoka"], // *
    [ESeries.KAGUYA_SAMA]: ["Kaguya Shinomiya", "Ai Hayasaka", "Chika Fujiwara", "Miko Iino", "Tsubame Koyasu",
        "Maki Shijo", "Nagisa Kashiwagi", "Kobachi Osaragi", "Kei Shirogane", "Papa Shirogane"], // thru movie; *
    [ESeries.ONK]: ["Ai Hoshino", "Ruby Hoshino", "Kana Arima", "Akane Kurokawa", "MEM-cho", "Miyako Saitou",
        "Frill Shiranui", "Abiko Samejima", "Yoriko Kichijouji", "Minami Kotobuki"], // thru S2; *
    [ESeries.QUINTS]: ["Ichika Nakano", "Nino Nakano", "Miku Nakano", "Yotsuba Nakano", "Itsuki Nakano"],
    [ESeries.CSM]: ["Reze", "Makima", "Power", "Himeno", "Pochita", "Kobeni Higashiyama", "Quanxi", "Nayuta", "Asa Mitaka"], // *
    [ESeries.MASHLE]: ["Lemon Irvine", "Love Cute", "Anna Crown"], // thru S2
    [ESeries.AKIBA_MAID_WAR]: ["Nagomi Wahira", "Ranko Mannen", "Zoya", "Yume Hiiragi", "Shino Gotou", "Yasuko Yaegashi", "Okachimachi"], // *
    [ESeries.RASCAL]: ["Mai Sakurajima", "Rio Futaba", "Tomoe Koga", "Nodoka Toyohama", "Kaede Azusagawa", "Shouko Makinohara"], // thru Sister Venturing Out
    [ESeries.JJK]: ["Nobara Kugisaki", "Maki Zenin", "Kasumi Miwa", "Mei Mei", "Utahime Iori", "Shouko Ieiri", "Yuki Tsukumo",
        "Riko Amanai", "Rika Orimoto", "Mai Zenin", "Momo Nishimiya"], // thru S2; *
    [ESeries.RENT_A_GF]: ["Chizuru Ichinose", "Ruka Sarashina", "Mami Nanami", "Sumi Sakurasawa", "Mini Yaemori"],
    [ESeries.BOCCHI]: ["Hitori Gotou", "Ryou Yamada", "Nijika Ijichi", "Ikuyo Kita", "Kikuri Hiroi", "Seika Ijichi", "PA-san"],
    [ESeries.FUUFU_IJOU]: ["Akari Watanabe", "Shiori Ssakurazaka"],
    [ESeries.AOT]: ["Mikasa Ackerman", "Sasha Blouse", "Annie Leonhart", "Hange Zoe", "Gabi Braun"],
    [ESeries.HELLS_PARADISE]: ["Sagiri Yamada Asaemon", "Yuzuriha"],
    [ESeries.REZERO]: ["Emilia", "Rem", "Ram", "Beatrice", "Echidna", "Felt", "Anastasia Hoshin", "Elsa Granhiert", "Felix Argyle", "Crusch Karsten", "Otto Suwen",
        "Priscilla Barielle", "Theresia van Astrea", "Petra Leyte", "Minerva", "Carmilla", "Typhon", "Sekhmet", "Pandora", "Daphne", "Frederica Baumann", "Ryuzu",
        "Fortuna"], // thru S2 pt2
    [ESeries.TOMO_CHAN]: ["Tomo Aizawa", "Misuzu Gundou", "Carol Olston"],
    [ESeries.TOMOZAKI_KUN]: ["Aoi Hinami", "Minami Nanami", "Fuuka Kikuchi", "Yuzu Izumi", "Hanabi Natsubayashi", "Tsugumi Narita", "Erika Konno", "Rena"],
    [ESeries.KIMIZERO]: ["Luna Shirakawa", "Maria Kurose", "Nicole Yamana"],
    [ESeries.ANGEL_NEXT_DOOR]: ["Mahiru Shiina", "Chitose Shirakawa"],
    [ESeries.SCIENCE_FELL_IN_LOVE]: ["Ayame Himuro", "Hotonoha Kanade", "Ena Ibarada", "Arika Yamamoto", "Suiu Fujiwara"],
    [ESeries.IN_LOVE_W_VILLAINESS]: ["Rae Taylor", "Claire Francois", "Lene Aurousseau", "Manaria Sousse", "Misha Jur", "Ralaire"],
    [ESeries.GOLDEN_TIME]: ["Kouko Kaga", "Nana Hayashida", "Chinami Oka"],
    [ESeries.RELIFE]: ["Chizuru Hishiro", "Rena Kariu", "An Onoya"],
    [ESeries.BLEND_S]: ["Maika Sakuranomiya", "Mafuyu Hoshikawa", "Kaho Hinata", "Hideri Kanzaki", "Miu Amano"],
    [ESeries.GF_GF]: ["Saki Saki", "Nagisa Minase", "Rika Hoshizaki", "Shino Kiryuu"],
    [ESeries._100_KANO]: ["Hakari Hanazono", "Karane Inda", "Shizuka Yoshimoto", "Nano Eiai", "Kusuri Yakuzen", "Hahari Hanazono", "Anzu Baba"],
    [ESeries.ZOM_100]: ["Shizuka Mikazuki", "Beatrix Amerhauser"],
    [ESeries.DRESS_UP_DARLING]: ["Marin Kitagawa", "Sajuna Inui", "Shinju Inui"],
    [ESeries.ROMANTIC_KILLER]: ["Anzu Hoshino"],
    [ESeries.KOMI_SAN]: ["Shouko Komi", "Najimi Osana", "Omoharu Nakanaka", "Himiko Agari", "Ren Yamai", "Makeru Yadano", "Nene Onemine"], // thru s2; *
    [ESeries.SPY_X_FAM]: ["Yor Forger", "Fiona Frost", "Sylvia Sherwood"], // thru s2
    [ESeries.COTE]: ["Suzune Horikita", "Kei Karuizawa", "Kikyo Kushida", "Honami Ichinose", "Arisu Sakayanagi", "Mio Ibuki", "Airi Sakura", "Maya Satou",
        "Haruka Hasebe", "Kayano Onodera", "Satsuki Shinohara", "Masumi Kamuro", "Chiaki Matsushita", "Mei-Yu Wang", "Hiyori Shiina", "Akane Tachibana",
        "Sae Chabashira", "Chie Hoshinomiya", "Nazuna Asahina", "Miki Yamamura", "Ichika Amasawa", "Tsubasa Nanase", "Sakurako Tsubaki", "Fuuka Kiryuuin",
        "Ai Morishita", "Yuki Himeno", "Takeko Nishino"], // thru yr2 vol11
    [ESeries.UNDEAD_UNLUCK]: ["Fuuko Izumo", "Gina Chamber", "Juiz", "Latla Mirah"], // thru s1
    [ESeries.FRIEREN]: ["Frieren", "Fern", "Flamme", "Aura", "Serie", "Laufen", "Ubel", "Lawine", "Kanne", "Sense", "Methode"], // *
    [ESeries.MONOGATARI]: ["Hitagi Senjougahara", "Kiss-Shot Acerola-Orion Heart-Under-Blade", "Kanbaru Suruga"], // ?
    [ESeries.KONOSUBA]: ["Aqua", "Darkness", "Megumin", "Yunyun", "Wiz", "Luna", "Eris", "Chomusuke", "Sylvia", "Soketto", "Funifura", "Arue", "Dodonko"], // thru movie; *
    [ESeries.YURU_CAMP]: ["Aoi Inuyama", "Chiaki Oogaki", "Ena Saitou", "Rin Shima", "Nadeshiko Kagamihara"], // ?
    [ESeries.VIOLET_EVERGARDEN]: ["Violet Evergarden"], // ?
    [ESeries.KOBAYASHI_SAN]: ["Kobayashi", "Ilulu", "Elma", "Tooru", "Quetzalcoatl Lucoa"], // ?
    [ESeries.KAMIKATSU]: ["Aruraru", "Atar", "Dakini", "Gaia", "Mitama", "Rishu", "Shiruriru"],
    [ESeries.MADE_IN_ABYSS]: ["Faputa", "Nanachi"], // ?
    [ESeries.COWBOY_BEBOP]: ["Faye Valentine"], // ?
    [ESeries.MUSHOKU_TENSEI]: ["Ghislaine Dedoldia"], // ?
    [ESeries.JUN_MOCHIZUKI]: ["Jeanne"], // ?
    [ESeries.FAIRY_TAIL]: ["Juvia", "Mirajane Strauss"], // ?
    [ESeries.WOTAKOI]: ["Hanako Koyanagi", "Narumi Momose"], // ?
    [ESeries.SOUL_EATER]: ["Maka Albarn"], // ?
    [ESeries.MICHIKO_HATCHIN]: ["Michiko Malandro"], // ?
    [ESeries.FIRE_FORCE]: ["Princess Hibana"], // ?
    [ESeries.EDGERUNNERS]: ["Rebecca"], // ?
    [ESeries.BLACK_LAGOON]: ["Revy"], // ?
    [ESeries.SAILOR_MOON]: ["Sailor Uranus"], // ?
    [ESeries.KIZNAIVER]: ["Noriko Sonozaki"], // ?
    [ESeries.DURARARA]: ["Celty Sturluson"], // ?
    [ESeries.EMINENCE]: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Nu", "Kai", "Omega", "Lambda", "No.664", "No.665",
        "Claire Kagenou", "Alexia Midgar", "Iris Midgar", "Rose Oriana", "Sherry Barnett", "Annerose Nichtsehen", "Beatrix", "Olivier", "Aurora",
        "Mary", "Elisabeth", "Yukime", "Victoria", "Akane Nishino"], // thru s2
    [ESeries.DANGERS_IN_MY_HEART]: ["Anna Yamada", "Kana Ichikawa", "Chihiro Kobayashi", "Moeko Sekine", "Serina Yoshida", "Honoka Hara", "Sanae Yamada",
        "Yurine Hanzawa", "Kanna Andou"], // thru s2
    [ESeries.APOTHECARY]: ["Maomao", "Gyokuyou", "Rifa", "Lishu", "Ah-Duo", "Meimei", "Pairin", "Joka", "Fuyou", "Suirei", "Loulan", "Fengxian"],
    [ESeries.MAID_SAMA]: ["Misaki Ayuzawa", "Aoi Hyoudou", "Sakura Hanazono", "Suzuna Ayuzawa"], // *
    [ESeries.NAGI_ASU]: ["Manaka Mukaido", "Chisaki Hiradaira", "Miuna Shiodome", "Sayu Hisanuma", "Akari Sakishima"],
    [ESeries.DEATH_NOTE]: ["Misa Amane", "Mary Kenwood", "Kiyomi Takada", "Naomi Misora"],
    [ESeries.TAKAGI_SAN]: ["Takagi", "Mina Hibino", "Yukari Tenkawa", "Sanae Tsukimoto", "Mano", "Houjou", "Kyunko"], // thru s3
    [ESeries.SENPAI_IS_ANNOYING]: ["Futaba Igarashi", "Touko Sakurai", "Natsumi Kurobe"],
    [ESeries.ASSASSINATION_CLASSROOM]: ["Nagisa Shiota", "Irina Jelavic", "Ritsu", "Kaede Kayano"], // thru s1
    [ESeries.HORIMIYA]: ["Kyouko Hori", "Yuki Yoshikawa", "Remi Ayasaki", "Sakura Kouno", "Honoka Sawada"], // thru s1
    [ESeries.CANT_UNDERSTAND_HUSBAND]: ["Kaoru Tsunashi", "Youta Tsunashi"], // thru s2
    [ESeries.ART_CLUB]: [], // skipping
    [ESeries.TSUREZURE_CHILDREN]: [], // skipping
    [ESeries.YOUR_NAME]: ["Mitsuha Miyamizu"],
    [ESeries.HIGEHIRO]: ["Sayu Ogiwara", "Airi Gotou", "Yuzuha Mishima", "Asami Yuuki"],
    [ESeries.YAKUZA_BABYSITTING]: [], // skipping
    [ESeries.MASAMUNE_KUN]: ["Aki Adagaki", "Yoshino Koiwai", "Neko Fujinomiya", "Tae Futaba", "Kojuurou Shuri", "Sonoka Kaneko", "Muriel Besson"],
    [ESeries.TO_EVERY_YOU_TO_ME]: ["Kazune Takigawa", "Shiori Satou"], // *
    [ESeries.TONIKAWA]: ["Tsukasa Yuzaki", "Kaname Arisugawa", "Aya Arisugawa", "Chitose Kaginoji", "Aurora_1", "Charlotte", "Naoko Yanagi", "Ouka Nakiri",
        "Toast"], // thru s2; *
    [ESeries.KONGMING]: ["Eiko Tsukimi", "Nanami Kuon"],
    [ESeries.YAMADA_999]: ["Akane Kinoshita", "Runa Sasaki", "Momoko Maeda", "Yukari Tsubaki"],
    [ESeries.PROMISED_NEVERLAND]: [], // skipping
    [ESeries.AYUMU_SHOGI]: ["Urushi Yaotome", "Sakurako Mikage", "Maki", "Rin Kagawa"],
}

const CHARACTER_SERIES_DICT: {[key: string]: ESeries} = {};
for(let series of ALL_SERIES) {
    for(let char of SERIES_CHARACTERS[series]) {
        CHARACTER_SERIES_DICT[char] = series;
    }
}

export function GET_SERIES_FOR_CHARACTER(char: string): ESeries {
    if(char in CHARACTER_SERIES_DICT) {
        return CHARACTER_SERIES_DICT[char];
    }
    return ESeries.NONE;
}

const MINOR_CHARACTERS: string[] = [
    "*Yura Katayose", // Oshi no Ko
    "*Raiha Uesugi", // Quintessential Quintuplets
    "*Uzuki Hirokawa", // Bunny Girl Senpai
    "*Sachi Takamiya", "*Natsumi Oohashi", "*Mei Hamano", // Fuufu Ijou
    "*Ymir", // AoT
    "*Akari Tanikita", // Kimizero
    "*Rikekuma", // Science Fell in Love
    "*Risa Hoshizaki", // Girlfriend, Girlfriend
    "*Kami-sama", // 100 Girlfriends
    "*Anya Forger", "*Becky Blackbell", "*Camilla", "*Millie", "*Sharon", // SPY x FAMILY
    "Kaguya Gekkou", "Yaiba Shirogane", "Haru Miyako", "..." // TONIKAWA
];

export const NICKNAMES: {[nickname: string]: string} = {
    "bocchi": "Hitori Gotou",
    "beako": "Beatrice",
    "mimimi": "Minami Nanami",
    "tama": "Hanabi Natsubayashi",
    "No.559": "Victoria",
};
