export enum ESeries {
    NONE, CODES,
    AOT, CSM, JJK,
    COTE,
    GF_GF,
    MASHLE, REZERO, RELIFE,
    BLEND_S, ZOM_100, FRIEREN, WOTAKOI,
    Q_QUINTS, KIMIZERO, KOMI_SAN, KONOSUBA, DURARARA, HORIMIYA, HIGEHIRO, TONIKAWA, KONGMING,
    DOME_KANO, RENT_A_GF, _100_KANO, SPY_X_FAM, YURU_CAMP, KAMIKATSU, NISIOISIN, KIZNAIVER, MAID_SAMA, YOUR_NAME,
    OSHI_NO_KO, FUUFU_IJOU, MONOGATARI, FAIRY_TAIL, SOUL_EATER, FIRE_FORCE, DEATH_NOTE, TAKAGI_SAN, YAMADA_999,
    KAGUYA_SAMA, GOLDEN_TIME, SAILOR_MOON,
    TOMOZAKI_KUN, COWBOY_BEBOP, BLACK_LAGOON, MASAMUNE_KUN,
    UNDEAD_UNLUCK, KOBAYASHI_SAN, MADE_IN_ABYSS, JUN_MOCHIZUKI,
    HELLS_PARADISE, TOMO_IS_A_GIRL, MUSHOKU_TENSEI, SOREDEMO_AYUMU,
    AKIBA_MAID_WARS, BOCCHI_THE_ROCK, ANGEL_NEXT_DOOR, ROMANTIC_KILLER, LULL_IN_THE_SEA,
    DRESS_UP_DARLING,
    VIOLET_EVERGARDEN,
    MICHIKO_TO_HATCHIN, EMINENCE_IN_SHADOW, APOTHECARY_DIARIES, SENPAI_IS_ANNOYING, TSUREZURE_CHILDREN, TO_EVERY_YOU_TO_ME, PROMISED_NEVERLAND,
    DANGERS_IN_MY_HEART,
    SCIENCE_FELL_IN_LOVE, IN_LOVE_W_VILLAINESS,
    RASCAL_DOES_NOT_DREAM, CYBERPUNK_EDGERUNNERS,
    ART_CLUB_HAS_A_PROBLEM,
    ASSASSINATION_CLASSROOM, CANT_UNDERSTAND_HUSBAND,
    YAKUZAS_GUIDE_TO_BABYSITTING,
};

export const ALL_SERIES: ESeries[] = [
    ESeries.DOME_KANO, ESeries.KAGUYA_SAMA, ESeries.OSHI_NO_KO, ESeries.Q_QUINTS, ESeries.CSM, ESeries.MASHLE,
    ESeries.AKIBA_MAID_WARS, ESeries.RASCAL_DOES_NOT_DREAM, ESeries.JJK, ESeries.RENT_A_GF, ESeries.BOCCHI_THE_ROCK, ESeries.FUUFU_IJOU,
    ESeries.AOT, ESeries.HELLS_PARADISE, ESeries.REZERO, ESeries.TOMO_IS_A_GIRL, ESeries.TOMOZAKI_KUN, ESeries.KIMIZERO,
    ESeries.ANGEL_NEXT_DOOR, ESeries.SCIENCE_FELL_IN_LOVE, ESeries.IN_LOVE_W_VILLAINESS, ESeries.GOLDEN_TIME, ESeries.RELIFE, ESeries.BLEND_S,
    ESeries.GF_GF, ESeries._100_KANO, ESeries.ZOM_100, ESeries.DRESS_UP_DARLING, ESeries.ROMANTIC_KILLER, ESeries.KOMI_SAN,
    ESeries.SPY_X_FAM, ESeries.COTE, ESeries.UNDEAD_UNLUCK, ESeries.FRIEREN, ESeries.MONOGATARI, ESeries.KONOSUBA,
    ESeries.YURU_CAMP, ESeries.VIOLET_EVERGARDEN, ESeries.KOBAYASHI_SAN, ESeries.KAMIKATSU, ESeries.MADE_IN_ABYSS, ESeries.COWBOY_BEBOP,
    ESeries.MUSHOKU_TENSEI, ESeries.JUN_MOCHIZUKI, ESeries.FAIRY_TAIL, ESeries.NISIOISIN, ESeries.WOTAKOI, ESeries.SOUL_EATER,
    ESeries.MICHIKO_TO_HATCHIN, ESeries.FIRE_FORCE, ESeries.CYBERPUNK_EDGERUNNERS, ESeries.BLACK_LAGOON, ESeries.SAILOR_MOON, ESeries.KIZNAIVER,
    ESeries.DURARARA, ESeries.EMINENCE_IN_SHADOW, ESeries.DANGERS_IN_MY_HEART, ESeries.APOTHECARY_DIARIES, ESeries.MAID_SAMA, ESeries.LULL_IN_THE_SEA,
    ESeries.DEATH_NOTE, ESeries.TAKAGI_SAN, ESeries.SENPAI_IS_ANNOYING, ESeries.ASSASSINATION_CLASSROOM, ESeries.HORIMIYA, ESeries.CANT_UNDERSTAND_HUSBAND,
    ESeries.ART_CLUB_HAS_A_PROBLEM, ESeries.TSUREZURE_CHILDREN, ESeries.YOUR_NAME, ESeries.HIGEHIRO, ESeries.YAKUZAS_GUIDE_TO_BABYSITTING, ESeries.MASAMUNE_KUN,
    ESeries.TO_EVERY_YOU_TO_ME, ESeries.TONIKAWA, ESeries.KONGMING, ESeries.YAMADA_999, ESeries.PROMISED_NEVERLAND, ESeries.SOREDEMO_AYUMU,
];

const seriesNums = Object.keys(ESeries).filter(key => !isNaN(Number(key)));
if(seriesNums.length-2 !== ALL_SERIES.length) { // -2 bc ESeries has ESeries.CODES and ESeries.NONE
    throw Error(`ALL_SERIES MISSING ${seriesNums} vs ${ALL_SERIES}`);
}

export enum ECode {
    NEXT_LINE = "0"
}

export const SERIES_CHARACTERS: {[series in ESeries]: string[]} = {
    [ESeries.NONE]: [],
    [ESeries.CODES]: [ECode.NEXT_LINE],
    [ESeries.DOME_KANO]: ["Rui Tachibana", "Hina Tachibana", "Momo Kashiwabara", "Miu Ashihara", "Masaki Kobayashi", "Miyabi Serizawa",
        "Misaki Ogura", "Mao Kinashi", "Yuri Umeda", "Hibiki Mikimoto", "Kasumi Hazuki", "Hana Sakaki", "Nene Kuzuoka"], // *
    [ESeries.KAGUYA_SAMA]: ["Kaguya Shinomiya", "Ai Hayasaka", "Chika Fujiwara", "Miko Iino", "Tsubame Koyasu",
        "Maki Shijo", "Nagisa Kashiwagi", "Kobachi Osaragi", "Kei Shirogane", "Papa Shirogane"], // thru movie; *
    [ESeries.OSHI_NO_KO]: ["Ai Hoshino", "Ruby Hoshino", "Kana Arima", "Akane Kurokawa", "MEM-cho", "Miyako Saitou",
        "Frill Shiranui", "Abiko Samejima", "Yoriko Kichijouji", "Minami Kotobuki"], // thru S2; *
    [ESeries.Q_QUINTS]: ["Ichika Nakano", "Nino Nakano", "Miku Nakano", "Yotsuba Nakano", "Itsuki Nakano"],
    [ESeries.CSM]: ["Reze", "Makima", "Power", "Himeno", "Pochita", "Kobeni Higashiyama", "Quanxi", "Nayuta", "Asa Mitaka"], // *
    [ESeries.MASHLE]: ["Lemon Irvine", "Love Cute", "Anna Crown"], // thru S2
    [ESeries.AKIBA_MAID_WARS]: ["Nagomi Wahira", "Ranko Mannen", "Zoya", "Yume Hiiragi", "Shino Gotou", "Yasuko Yaegashi", "Okachimachi"], // *
    [ESeries.RASCAL_DOES_NOT_DREAM]: ["Mai Sakurajima", "Rio Futaba", "Tomoe Koga", "Nodoka Toyohama", "Kaede Azusagawa", "Shouko Makinohara"], // thru Sister Venturing Out
    [ESeries.JJK]: ["Nobara Kugisaki", "Maki Zenin", "Kasumi Miwa", "Mei Mei", "Utahime Iori", "Shouko Ieiri", "Yuki Tsukumo",
        "Riko Amanai", "Rika Orimoto", "Mai Zenin", "Momo Nishimiya"], // thru S2; *
    [ESeries.RENT_A_GF]: ["Chizuru Ichinose", "Ruka Sarashina", "Mami Nanami", "Sumi Sakurasawa", "Mini Yaemori"],
    [ESeries.BOCCHI_THE_ROCK]: ["Hitori Gotou", "Ryou Yamada", "Nijika Ijichi", "Ikuyo Kita", "Kikuri Hiroi", "Seika Ijichi", "PA-san"],
    [ESeries.FUUFU_IJOU]: ["Akari Watanabe", "Shiori Ssakurazaka"],
    [ESeries.AOT]: ["Mikasa Ackerman", "Sasha Blouse", "Annie Leonhart", "Hange Zoe", "Gabi Braun"],
    [ESeries.HELLS_PARADISE]: ["Sagiri Yamada Asaemon", "Yuzuriha"],
    [ESeries.REZERO]: ["Emilia", "Rem", "Ram", "Beatrice", "Echidna", "Felt", "Anastasia Hoshin", "Elsa Granhiert", "Felix Argyle", "Crusch Karsten", "Otto Suwen",
        "Priscilla Barielle", "Theresia van Astrea", "Petra Leyte", "Minerva", "Carmilla", "Typhon", "Sekhmet", "Pandora", "Daphne", "Frederica Baumann", "Ryuzu",
        "Fortuna"], // thru S2 pt2
    [ESeries.TOMO_IS_A_GIRL]: ["Tomo Aizawa", "Misuzu Gundou", "Carol Olston"],
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
    [ESeries.MONOGATARI]: ["Hitagi Senjougahara", "Kiss-Shot Acerola-Orion Heart-Under-Blade"], // ?
    [ESeries.KONOSUBA]: ["Aqua", "Darkness", "Megumin", "Yunyun", "Wiz", "Luna", "Eris", "Chomusuke", "Sylvia", "Soketto", "Funifura", "Arue", "Dodonko"], // thru movie; *
    [ESeries.YURU_CAMP]: ["Aoi Inuyama", "Chiaki Oogaki", "Ena Saitou", "Rin Shima", "Nadeshiko Kagamihara"], // ?
    [ESeries.VIOLET_EVERGARDEN]: ["Violet Evergarden"], // ?
    [ESeries.KOBAYASHI_SAN]: ["Kobayashi", "Ilulu", "Elma", "Tooru", "Quetzalcoatl Lucoa"], // ?
    [ESeries.KAMIKATSU]: ["Aruraru", "Atar", "Dakini", "Gaia", "Mitama", "Rishu", "Shiruriru"],
    [ESeries.MADE_IN_ABYSS]: ["Faputa"], // ? Nanachi
    [ESeries.COWBOY_BEBOP]: ["Faye Valentine"], // ?
    [ESeries.MUSHOKU_TENSEI]: ["Ghislaine Dedoldia"], // ?
    [ESeries.JUN_MOCHIZUKI]: ["Jeanne"], // ?
    [ESeries.FAIRY_TAIL]: ["Juvia", "Mirajane Strauss"], // ?
    [ESeries.NISIOISIN]: ["Kanbaru Suruga"], // ?
    [ESeries.WOTAKOI]: ["Hanako Koyanagi", "Narumi Momose"], // ?
    [ESeries.SOUL_EATER]: ["Maka Albarn"], // ?
    [ESeries.MICHIKO_TO_HATCHIN]: ["Michiko Malandro"], // ?
    [ESeries.FIRE_FORCE]: ["Princess Hibana"], // ?
    [ESeries.CYBERPUNK_EDGERUNNERS]: ["Rebecca"], // ?
    [ESeries.BLACK_LAGOON]: ["Revy"], // ?
    [ESeries.SAILOR_MOON]: ["Sailor Uranus"], // ?
    [ESeries.KIZNAIVER]: ["Noriko Sonozaki"], // ?
    [ESeries.DURARARA]: ["Celty Sturluson"], // ?
    [ESeries.EMINENCE_IN_SHADOW]: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Nu", "Kai", "Omega", "Lambda", "No.664", "No.665",
        "Claire Kagenou", "Alexia Midgar", "Iris Midgar", "Rose Oriana", "Sherry Barnett", "Annerose Nichtsehen", "Beatrix", "Olivier", "Aurora",
        "Mary", "Elisabeth", "Yukime", "Victoria", "Akane Nishino"], // thru s2
    [ESeries.DANGERS_IN_MY_HEART]: ["Anna Yamada", "Kana Ichikawa", "Chihiro Kobayashi", "Moeko Sekine", "Serina Yoshida", "Honoka Hara", "Sanae Yamada",
        "Yurine Hanzawa", "Kanna Andou"], // thru s2
    [ESeries.APOTHECARY_DIARIES]: ["Maomao", "Gyokuyou", "Rifa", "Lishu", "Ah-Duo", "Meimei", "Pairin", "Joka", "Fuyou", "Suirei", "Loulan", "Fengxian"],
    [ESeries.MAID_SAMA]: ["Misaki Ayuzawa", "Aoi Hyoudou", "Sakura Hanazono", "Suzuna Ayuzawa"], // *
    [ESeries.LULL_IN_THE_SEA]: ["Manaka Mukaido", "Chisaki Hiradaira", "Miuna Shiodome", "Sayu Hisanuma", "Akari Sakishima"],
    [ESeries.DEATH_NOTE]: ["Misa Amane", "Mary Kenwood", "Kiyomi Takada", "Naomi Misora"],
    [ESeries.TAKAGI_SAN]: ["Takagi", "Mina Hibino", "Yukari Tenkawa", "Sanae Tsukimoto", "Mano", "Houjou", "Kyunko"], // thru s3
    [ESeries.SENPAI_IS_ANNOYING]: ["Futaba Igarashi", "Touko Sakurai", "Natsumi Kurobe"],
    [ESeries.ASSASSINATION_CLASSROOM]: ["Nagisa Shiota", "Irina Jelavic", "Ritsu", "Kaede Kayano"], // thru s1
    [ESeries.HORIMIYA]: ["Kyouko Hori", "Yuki Yoshikawa", "Remi Ayasaki", "Sakura Kouno", "Honoka Sawada"], // thru s1
    [ESeries.CANT_UNDERSTAND_HUSBAND]: ["Kaoru Tsunashi", "Youta Tsunashi"], // thru s2
    [ESeries.ART_CLUB_HAS_A_PROBLEM]: [], // skipping
    [ESeries.TSUREZURE_CHILDREN]: [], // skipping
    [ESeries.YOUR_NAME]: ["Mitsuha Miyamizu"],
    [ESeries.HIGEHIRO]: ["Sayu Ogiwara", "Airi Gotou", "Yuzuha Mishima", "Asami Yuuki"],
    [ESeries.YAKUZAS_GUIDE_TO_BABYSITTING]: [], // skipping
    [ESeries.MASAMUNE_KUN]: ["Aki Adagaki", "Yoshino Koiwai", "Neko Fujinomiya", "Tae Futaba", "Kojuurou Shuri", "Sonoka Kaneko", "Muriel Besson"],
    [ESeries.TO_EVERY_YOU_TO_ME]: ["Kazune Takigawa", "Shiori Satou"], // *
    [ESeries.TONIKAWA]: ["Tsukasa Yuzaki", "Kaname Arisugawa", "Aya Arisugawa", "Chitose Kaginoji", "Aurora_1", "Charlotte", "Naoko Yanagi", "Ouka Nakiri",
        "Toast"], // thru s2; *
    [ESeries.KONGMING]: ["Eiko Tsukimi", "Nanami Kuon"],
    [ESeries.YAMADA_999]: ["Akane Kinoshita", "Runa Sasaki", "Momoko Maeda", "Yukari Tsubaki"],
    [ESeries.PROMISED_NEVERLAND]: [], // skipping
    [ESeries.SOREDEMO_AYUMU]: ["Urushi Yaotome", "Sakurako Mikage", "Maki", "Rin Kagawa"],
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
