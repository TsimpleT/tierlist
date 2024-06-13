export enum ESeries {
    CODES,
    AOT, CSM, JJK,
    COTE,
    GF_GF,
    MASHLE, REZERO, RELIFE,
    BLEND_S, ZOM_100, FRIEREN,
    Q_QUINTS, KIMIZERO, KOMI_SAN,
    DOME_KANO, RENT_A_GF, _100_KANO, SPY_X_FAM,
    OSHI_NO_KO, FUUFU_IJOU,
    KAGUYA_SAMA, GOLDEN_TIME,
    TOMOZAKI_KUN,
    UNDEAD_UNLUCK,
    HELLS_PARADISE, TOMO_IS_A_GIRL,
    AKIBA_MAID_WARS, BOCCHI_THE_ROCK, ANGEL_NEXT_DOOR, ROMANTIC_KILLER,
    DRESS_UP_DARLING,
    SCIENCE_FELL_IN_LOVE, IN_LOVE_W_VILLAINESS,
    RASCAL_DOES_NOT_DREAM,
};

export const ALL_SERIES: ESeries[] = [
    ESeries.DOME_KANO, ESeries.KAGUYA_SAMA, ESeries.OSHI_NO_KO, ESeries.Q_QUINTS, ESeries.CSM, ESeries.MASHLE,
    ESeries.AKIBA_MAID_WARS, ESeries.RASCAL_DOES_NOT_DREAM, ESeries.JJK, ESeries.RENT_A_GF, ESeries.BOCCHI_THE_ROCK, ESeries.FUUFU_IJOU,
    ESeries.AOT, ESeries.HELLS_PARADISE, ESeries.REZERO, ESeries.TOMO_IS_A_GIRL, ESeries.TOMOZAKI_KUN, ESeries.KIMIZERO,
    ESeries.ANGEL_NEXT_DOOR, ESeries.SCIENCE_FELL_IN_LOVE, ESeries.IN_LOVE_W_VILLAINESS, ESeries.GOLDEN_TIME, ESeries.RELIFE, ESeries.BLEND_S,
    ESeries.GF_GF, ESeries._100_KANO, ESeries.ZOM_100, ESeries.DRESS_UP_DARLING, ESeries.ROMANTIC_KILLER, ESeries.KOMI_SAN,
    ESeries.SPY_X_FAM, ESeries.COTE, ESeries.UNDEAD_UNLUCK, ESeries.FRIEREN,
];

const seriesNums = Object.keys(ESeries).filter(key => !isNaN(Number(key)));
if(seriesNums.length-1 !== ALL_SERIES.length) { // -1 bc ESeries has ESeires.CODES
    throw Error(`ALL_SERIES MISSING ${seriesNums} vs ${ALL_SERIES}`);
}

export enum ECode {
    NEXT_LINE = "0"
}

export const SERIES_CHARACTERS: {[series in ESeries]: string[]} = {
    [ESeries.CODES]: [ECode.NEXT_LINE],
    [ESeries.DOME_KANO]: ["Rui Tachibana", "Hina Tachibana"],
    [ESeries.KAGUYA_SAMA]: ["Kaguya Shinomiya", "Ai Hayasaka"],
    [ESeries.OSHI_NO_KO]: ["Ai Hoshino", "Ruby Hoshino", "Kana Arima", "Akane Kurokawa", "MEM-cho"],
    [ESeries.Q_QUINTS]: ["Ichika Nakano", "Nino Nakano", "Miku Nakano", "Yotsuba Nakano", "Itsuki Nakano"],
    [ESeries.CSM]: ["Reze", "Makima", "Power", "Himeno", "Pochita"],
    [ESeries.MASHLE]: ["Lemon Irvine", "Love Cute"],
    [ESeries.AKIBA_MAID_WARS]: ["Ranko Mannen", "Zoya"],
    [ESeries.RASCAL_DOES_NOT_DREAM]: ["Mai Sakurajima", "Rio Futaba"],
    [ESeries.JJK]: ["Nobara Kugisaki", "Maki Zenin", "Kasumi Miwa", "Mei Mei", "Utahime Iori", "Shouko Ieiri", "Yuki Tsukumo", "Riko Amanai", "Rika Orimoto"],
    [ESeries.RENT_A_GF]: ["Chizuru Ichinose", "Ruka Sarashina", "Mami Nanami", "Sumi Sakurasawa", "Mini Yaemori"],
    [ESeries.BOCCHI_THE_ROCK]: ["Hitori Gotou", "Ryou Yamada", "Nijika Ijichi", "Ikuyo Kita", "Kikuri Hiroi", "Seika Ijichi", "PA-san"],
    [ESeries.FUUFU_IJOU]: ["Akari Watanabe", "Shiori Ssakurazaka"],
    [ESeries.AOT]: ["Mikasa Ackerman", "Sasha Blouse", "Annie Leonhart"],
    [ESeries.HELLS_PARADISE]: ["Sagiri Yamada Asaemon", "Yuzuriha"],
    [ESeries.REZERO]: ["Emilia", "Rem", "Ram", "Beatrice", "Echidna"],
    [ESeries.TOMO_IS_A_GIRL]: ["Tomo Aizawa", "Misuzu Gundou", "Carol Olston"],
    [ESeries.TOMOZAKI_KUN]: ["Aoi Hinami", "Minami Nanami", "Fuuka Kikuchi"],
    [ESeries.KIMIZERO]: ["Luna Shirakawa", "Maria Kurose", "Nicole Yamana"],
    [ESeries.ANGEL_NEXT_DOOR]: ["Mahiru Shiina", "Chitose Shirakawa"],
    [ESeries.SCIENCE_FELL_IN_LOVE]: ["Ayame Himuro", "Hotonoha Kanade", "Ena Ibarada", "Arika Yamamoto", "Suiu Fujiwara"],
    [ESeries.IN_LOVE_W_VILLAINESS]: ["Rae Taylor", "Claire Francois", "Lene Aurousseau", "Manaria Sousse", "Misha Jur", "Ralaire"],
    [ESeries.GOLDEN_TIME]: ["Kouko Kaga", "Nana Hayashida", "Chinami Oka"],
    [ESeries.RELIFE]: ["Chizuru Hishiro", "Rena Kariu", "An Onoya"],
    [ESeries.BLEND_S]: ["Maika Sakuranomiya", "Mafuyu Hoshikawa", "Kaho Hinata", "Hideri Kanzaki", "Miu Amano"],
    [ESeries.GF_GF]: ["Saki Saki", "Nagisa Minase", "Rika Hoshizaki", "Shino Kiryuu"],
    [ESeries._100_KANO]: ["Hakari Hanazono", "Karane Inda", "Shizuka Yoshimoto", "Nano Eiai", "Kusuri Yakuzen", "Hahari Hanazono"],
    [ESeries.ZOM_100]: ["Shizuka Mikazuki", "Beatrix Amerhauser",],
    [ESeries.DRESS_UP_DARLING]: ["Marin Kitagawa"],
    [ESeries.ROMANTIC_KILLER]: ["Anzu Hoshino",],
    [ESeries.KOMI_SAN]: ["Shouko Komi"],
    [ESeries.SPY_X_FAM]: ["Yor Forger", "Fiona Frost"],
    [ESeries.COTE]: ["Suzune Horikita", "Kei Karuizawa", "Kikyou Kushida"],
    [ESeries.UNDEAD_UNLUCK]: ["Fuuko Izumo", "Gina Chamber", "Juiz", "Latla Mirah"],
    [ESeries.FRIEREN]: ["Frieren", "Fern"],
}

const MINOR_CHARACTERS: string[] = [
    // Domestic Girlfriend
    "*Momo Kashiwabara", "*Miu Ashihara", "*Masaki Kobayashi", "*Miyabi Serizawa", "*Misaki Ogura", "*Mao Kinashi", "*Yuri Umeda", "*Fumino Kabasawa", "*Hibiki Mikimoto", "*Kasumi Hazuki", "*Kasumi Hazuki", "*Yūka Kusanagi", "*Hana Sakaki", "*Nene Kuzuoka",
    // Kaguya Sama
    "*Chika Fujiwara", "*Miko Iino", "*Tsubame Koyasu", "*Maki Shijo", "*Nagisa Kashiwagi", "*Kobachi Osaragi", "*Kei Shirogane", "*Papa Shirogane",
    // Oshi no Ko
    "*Miyako Saitou", "*Frill Shiranui", "*Abiko Samejima", "*Yoriko Kichijouji", "*Minami Kotobuki", "*Yura Katayose",
    // Quintessential Quintuplets
    "*Raiha Uesugi",
    // CSM S1 + Reze
    // Mashle S1
    // Akiba Maid War S1
    "*Yume Hiiragi", "*Shino Gotou", "*Yasuko Yaegashi", "*Okachimachi",
    // Bunny Girl Senpai (thru Dreaming Girl)
    "*Tomoe Koga", "*Nodoka Toyohama", "*Kaede Azusagawa", "*Shouko Makinohara",
    // JJK
    "*Mai Zenin", "*Momo Nishimiya",
    // Rent a Girlfriend
    // Bocchi the Rock
    // Fuufu Ijou
    "*Sachi Takamiya", "*Natsumi Oohashi", "*Mei Hamano",
    // AoT
    "*Hange Zoe", "*Ymir", "*Gabi Braun",
    // Hell's Paradise
    // Re:Zero (thru S2p2)
    "*Felt", "*Puck", "*Otto Suwen", "*Felix Argyle", "*Petra Leyte", "*Crusch Karsten", "*Anastasia Hoshin", "*Priscilla Barielle", "*Elsa Granhiert", "*Frederica Baumann", "*Ryuuzu Birma", "*Minerva", "*Pandora", "*Mother Fortuna",
    // Tomo-chan
    // Tomozaki-kun (thru S1)
    "*Yuuzu Izumi", "*Hanabi Natsubayashi",
    // Kimizero
    "*Akari Tanikita",
    // Angel Next Door
    // Science Fell in Love
    "*Rikekuma", 
    // I'm in Love with the Villainess
    // Golden Time
    // ReLIFE
    // BLEND-S
    // Girlfriend, Girlfriend
    "*Risa Hoshizaki",
    // 100 Girlfriends
    "*Kami-sama", "*Anzu Baba",
    // Zom 100
    // Dress Up Darling
    "*Sajuna Inui", "*Shinju Inui",
    // Romantic Killer
    // Komi-san
    "*Najimi Osana", "*Omoharu Nakanaka", "*Himiko Agari", "*Ren Yamai", "*Makeru Yadano", "*Nene Onemine",
    // SPY x FAMILY
    "*Anya Forger", "*Becky Blackbell", "*Sylvia Sherwood", "*Camilla", "*Millie", "*Sharon", 
    // AIRING: Classroom of the Elite
    "*Masumi Kamuro", "*Akane Tachibana", "*Chiaki Matsushita", "*Mio Ibuki", "*Maya Satou", "*Haruka Hasebe", "*Airi Sakura", "*Honami Ichinose", "*Sae Chabashira", "*Arisu Sakayanagi", "*Yume Kobashi", "*Satsuki Shinohara", "*Kayano Onodera", "", "*Mei-Yu Wang",
    // AIRING: Undead Unluck
    "*Tatiana",
    // AIRING: Frieren
];

export const NICKNAMES: {[nickname: string]: string} = {
    "bocchi": "Hitori Gotou",
    "beako": "Beatrice",
    "mimimi": "Minami Nanami",
    "tama": "Hanabi Natsubayashi",
};
