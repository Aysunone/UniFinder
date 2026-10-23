/* Bütün universitetlər və ixtisaslar bir yerdədir.
   Yeni universitet əlavə etmək üçün UNIVERSITIES siyahısına bir sətir əlavə etmək kifayətdir:
   həm slayder, həm kampus turu, həm də ətraflı səhifə avtomatik yaranır.
   Şəkillər: images/universities/<id>/korpus.png və s. (yoxdursa ümumi şəkil göstərilir). */

const UNIVERSITIES = [
    {
        id: "adnsu", short: "ADNSU", name: "Azərbaycan Dövlət Neft və Sənaye Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["I"], specialties: "40+", score: "400+", tour: true, img: "images/adnsu.png",
        desc: "Mühəndislik, texnologiya və sənaye istiqamətləri üzrə kadr hazırlayan aparıcı texniki universitetlərdən biri."
    },
    {
        id: "unec", short: "UNEC", name: "Azərbaycan Dövlət İqtisad Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["II"], specialties: "35+", score: "450+", tour: true, img: "images/unec.png",
        desc: "İqtisadiyyat, biznes və idarəetmə istiqamətləri üzrə təhsil verən universitet."
    },
    {
        id: "bdu", short: "BDU", name: "Bakı Dövlət Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["III", "IV"], specialties: "60+", score: "480+", tour: true, img: "images/bdu.png",
        desc: "Elm, humanitar və sosial istiqamətlər üzrə ölkənin ən qədim klassik universiteti."
    },
    {
        id: "aztu", short: "AzTU", name: "Azərbaycan Texniki Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["I"], specialties: "", score: "", tour: true, img: "images/aztu.png",
        desc: "Texniki və mühəndislik ixtisasları üzrə təhsil verən universitet."
    },
    {
        id: "ada", short: "ADA", name: "ADA Universiteti", country: "Azərbaycan", city: "Bakı", groups: [], specialties: "", score: "", tour: true, img: "images/ada.png",
        desc: "Diplomatiya, biznes, İT və mühəndislik üzrə ingilis dilində təhsil."
    },
    {
        id: "atu", short: "ATU", name: "Azərbaycan Tibb Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["IV"], specialties: "", score: "", tour: true, img: "images/atu.png",
        desc: "Tibb və səhiyyə sahəsi üzrə mütəxəssis hazırlayan ali məktəb."
    },
    {
        id: "gdu", short: "GDU", name: "Gəncə Dövlət Universiteti", country: "Azərbaycan", city: "Gəncə", groups: ["III", "IV"], specialties: "", score: "", img: "images/gdu.png",
        desc: "Gəncə şəhərində pedaqoji, təbiət və humanitar elmlər üzrə təhsil verir."
    },
    {
        id: "sdu", short: "SDU", name: "Sumqayıt Dövlət Universiteti", country: "Azərbaycan", city: "Sumqayıt", groups: ["I", "II"], specialties: "", score: "", img: "images/sdu.png",
        desc: "Sumqayıtda texniki və iqtisadi istiqamətlər üzrə təhsil verən universitet."
    },

    {
        id: "boun", short: "Boğaziçi", name: "Boğaziçi Universiteti", country: "Türkiyə", city: "İstanbul", groups: [], specialties: "", score: "", img: "images/boun.png",
        desc: "İstanbulda yerləşən, ingilis dilində təhsil verən nüfuzlu dövlət universiteti."
    },
    {
        id: "metu", short: "ODTÜ", name: "Orta Doğu Texniki Universiteti", country: "Türkiyə", city: "Ankara", groups: [], specialties: "", score: "", img: "images/metu.png",
        desc: "Ankarada mühəndislik və təbiət elmləri üzrə güclü beynəlxalq universitet."
    },
    {
        id: "tsu", short: "TSU", name: "Tbilisi Dövlət Universiteti", country: "Gürcüstan", city: "Tbilisi", groups: [], specialties: "", score: "", img: "images/tsu.png",
        desc: "Gürcüstanın ən böyük və ən qədim dövlət universiteti."
    },
    {
        id: "tum", short: "TUM", name: "Münhen Texniki Universiteti", country: "Almaniya", city: "Münhen", groups: [], specialties: "", score: "", img: "images/tum.png",
        desc: "Mühəndislik və təbiət elmləri üzrə Avropanın aparıcı texniki universitetlərindən biri."
    },
    {
        id: "oxford", short: "Oxford", name: "Oksford Universiteti", country: "Böyük Britaniya", city: "Oksford", groups: [], specialties: "", score: "", img: "images/oxford.png",
        desc: "Dünyanın ən qədim və nüfuzlu universitetlərindən biri."
    },
    {
        id: "mit", short: "MIT", name: "Massaçusets Texnologiya İnstitutu", country: "ABŞ", city: "Keymbric", groups: [], specialties: "", score: "", img: "images/mit.png",
        desc: "Texnologiya, mühəndislik və elm sahələrində dünya səviyyəli tədqiqat universiteti."
    }
];

/* Nümunə məlumatlar. Real Abituriyent jurnalı məlumatları ilə əvəz olunmalıdır. */
const SPECIALTIES = [
    { uni: "ADNSU", name: "Neft-qaz mühəndisliyi", group: "I", scores: [505, 512, 518] },
    { uni: "ADNSU", name: "Kompüter mühəndisliyi", group: "I", scores: [545, 552, 560] },
    { uni: "ADNSU", name: "Elektrik mühəndisliyi", group: "I", scores: [470, 476, 482] },
    { uni: "ADNSU", name: "Mexanika mühəndisliyi", group: "I", scores: [420, 428, 430] },
    { uni: "AzTU", name: "İnformasiya texnologiyaları", group: "I", scores: [500, 507, 514] },
    { uni: "AzTU", name: "Energetika", group: "I", scores: [430, 436, 442] },
    { uni: "SDU", name: "Kimya mühəndisliyi", group: "I", scores: [430, 436, 440] },

    { uni: "UNEC", name: "İqtisadiyyat", group: "II", scores: [470, 478, 485] },
    { uni: "UNEC", name: "Maliyyə", group: "II", scores: [490, 497, 505] },
    { uni: "UNEC", name: "Menecment", group: "II", scores: [440, 446, 452] },
    { uni: "UNEC", name: "Mühasibat uçotu", group: "II", scores: [415, 420, 426] },
    { uni: "SDU", name: "İqtisadiyyat", group: "II", scores: [420, 426, 431] },

    { uni: "BDU", name: "Hüquqşünaslıq", group: "III", scores: [560, 568, 575] },
    { uni: "BDU", name: "Beynəlxalq münasibətlər", group: "III", scores: [545, 552, 558] },
    { uni: "BDU", name: "Jurnalistika", group: "III", scores: [480, 486, 490] },
    { uni: "BDU", name: "Tarix", group: "III", scores: [400, 405, 410] },
    { uni: "GDU", name: "İbtidai sinif müəllimliyi", group: "III", scores: [420, 425, 430] },

    { uni: "BDU", name: "Biologiya", group: "IV", scores: [455, 460, 466] },
    { uni: "BDU", name: "Kimya", group: "IV", scores: [430, 436, 440] },
    { uni: "BDU", name: "Ekologiya", group: "IV", scores: [380, 384, 390] },
    { uni: "ATU", name: "Müalicə işi", group: "IV", scores: [610, 617, 624] },
    { uni: "ATU", name: "Stomatologiya", group: "IV", scores: [580, 587, 595] },
    { uni: "GDU", name: "Biologiya müəllimliyi", group: "IV", scores: [400, 404, 410] }
];

/* Pullu təhsil üçün proqnoz keçid balı dövlət sifarişinin bu faizi qədər götürülür (nümunə).
   Real pullu keçid balları əlavə olunduqda SPECIALTIES-ə "paidScores" sahəsi əlavə edib dəyişmək olar. */
const PAID_RATIO = 0.72;

function expectedCutoff(s, type) {
    const base = s.scores[0] * 0.2 + s.scores[1] * 0.3 + s.scores[2] * 0.5;
    return Math.round(type === "paid" ? base * PAID_RATIO : base);
}

function uniByShort(short) { return UNIVERSITIES.find(u => u.short === short); }
function uniById(id) { return UNIVERSITIES.find(u => u.id === id); }

const TOUR_CATEGORIES = [
    { key: "korpus", label: "Korpuslar", title: "Əsas korpus" },
    { key: "auditoriya", label: "Auditoriyalar", title: "Mühazirə auditoriyası" },
    { key: "kitabxana", label: "Kitabxana", title: "Kitabxana" },
    { key: "xol", label: "Xollar", title: "Giriş xolu" },
    { key: "akt-zali", label: "Akt zalı", title: "Akt zalı" },
    { key: "kampus-heyeti", label: "İnfrastruktur", title: "Kampus həyəti" }
];