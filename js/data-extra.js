/* data.js-dən dərhal SONRA yüklənir. Yeni universitetləri əlavə edir. */
[
    ["adu", "ADU", "Azərbaycan Dillər Universiteti", "Bakı", ["III"], "Dillər, tərcümə və filologiya istiqamətləri üzrə təhsil verən universitet."],
    ["asa", "ASA", "ASA", "Bakı", [], "Universitet haqqında məlumat tezliklə əlavə olunacaq."],
    ["ndu", "NDU", "Naxçıvan Dövlət Universiteti", "Naxçıvan", [], "Naxçıvanda müxtəlif istiqamətlər üzrə təhsil verən dövlət universiteti."],
    ["au", "AU", "Azərbaycan Universiteti", "Bakı", [], "Universitet haqqında məlumat tezliklə əlavə olunacaq."],
    ["adpu", "ADPU", "Azərbaycan Dövlət Pedaqoji Universiteti", "Bakı", ["III"], "Müəllim hazırlığı və pedaqoji istiqamətlər üzrə təhsil verən universitet."],
    ["qku", "QKU", "Qafqaz Universiteti", "Bakı", [], "Xüsusi universitet. Təhsil bir neçə istiqamət üzrə aparılır."]
].forEach(([id, short, name, city, groups, desc]) => {
    UNIVERSITIES.push({ id, short, name, country: "Azərbaycan", city, groups, specialties: "", score: "", tour: true, img: `images/${id}.png`, desc });
});

/* Müqayisə cədvəli üçün əlavə sahələr (məlum olmayan "—" görünür) */
Object.assign(uniById("unec"), { erasmus: true, exchange: true, reviews: 24 });
Object.assign(uniById("bdu"), { erasmus: true, exchange: true, reviews: 31 });

/* BDU üçün öz səhifəni hazırlayanda bu sətrin qabağındakı // işarəsini sil: */
// uniById("bdu").page = "bdu.html";