import { standardLesson, text } from "./build.ts";

// Lessons 2–6: confident computer use before any code.
export const keyboardLesson = standardLesson({
  id: "keyboard",
  number: 2,
  title: text("Клавиатура и мышь", "Klaviatura va sichqoncha"),
  summary: text(
    "Учимся уверенно управлять компьютером: мышь и тачпад, раскладки клавиатуры и сочетания клавиш, которые экономят время каждый день.",
    "Kompyuterni ishonch bilan boshqarishni o‘rganamiz: sichqoncha va tachpad, klaviatura tillari va har kuni vaqtni tejaydigan tugmalar birikmalari.",
  ),
  goals: [
    text(
      "Пользоваться мышью и тачпадом: клик, двойной клик, правый клик, прокрутка",
      "Sichqoncha va tachpaddan foydalanish: bosish, ikki marta bosish, o‘ng tugma, aylantirish",
    ),
    text(
      "Переключать раскладку и печатать кириллицей и латиницей",
      "Klaviatura tilini almashtirish va kirill hamda lotin harflarida yozish",
    ),
    text(
      "Копировать, вставлять и отменять действия сочетаниями клавиш",
      "Tugmalar birikmalari bilan nusxa olish, qo‘yish va amalni bekor qilish",
    ),
  ],
  conceptsTitle: text("Мышь и клавиатура", "Sichqoncha va klaviatura"),
  concepts: [
    {
      label: text("МЫШЬ", "SICHQONCHA"),
      title: text("Левый и правый клик", "Chap va o‘ng tugma"),
      text: text(
        "Левый — выбрать и нажать. Правый — открыть меню с дополнительными действиями.",
        "Chap — tanlash va bosish. O‘ng — qo‘shimcha amallar menyusini ochish.",
      ),
    },
    {
      label: text("ДВОЙНОЙ КЛИК", "IKKI MARTA BOSISH"),
      title: text("Открыть файл или папку", "Fayl yoki papkani ochish"),
      text: text(
        "Два быстрых нажатия левой кнопкой открывают выбранное.",
        "Chap tugmani ikki marta tez bosish tanlanganini ochadi.",
      ),
    },
    {
      label: text("ПРОКРУТКА", "AYLANTIRISH"),
      title: text("Колёсико и тачпад", "G‘ildirakcha va tachpad"),
      text: text(
        "Колёсико мыши или движение двумя пальцами по тачпаду листает страницу.",
        "Sichqoncha g‘ildirakchasi yoki tachpadda ikki barmoq harakati sahifani varaqlaydi.",
      ),
    },
    {
      label: text("РАСКЛАДКА", "KLAVIATURA TILI"),
      title: text(
        "Alt + Shift или Win + Пробел",
        "Alt + Shift yoki Win + Probel",
      ),
      text: text(
        "Переключает язык ввода. Текущий язык виден в правом нижнем углу экрана.",
        "Kiritish tilini almashtiradi. Joriy til ekranning pastki o‘ng burchagida ko‘rinadi.",
      ),
    },
    {
      label: text("КОПИРОВАНИЕ", "NUSXA OLISH"),
      title: text("Ctrl + C и Ctrl + V", "Ctrl + C va Ctrl + V"),
      text: text(
        "Выдели текст, скопируй его и вставь в другое место.",
        "Matnni belgila, nusxa ol va boshqa joyga qo‘y.",
      ),
    },
    {
      label: text("СПАСЕНИЕ", "QUTQARUV"),
      title: text("Ctrl + Z и Ctrl + S", "Ctrl + Z va Ctrl + S"),
      text: text(
        "Ctrl + Z отменяет последнее действие, Ctrl + S сохраняет файл.",
        "Ctrl + Z oxirgi amalni bekor qiladi, Ctrl + S faylni saqlaydi.",
      ),
    },
  ],
  practice: [
    text(
      "Открой «Блокнот»: нажми кнопку «Пуск» и напечатай «Блокнот»",
      "«Bloknot»ni och: «Pusk» tugmasini bos va «Bloknot» deb yoz",
    ),
    text(
      "Напечатай своё имя кириллицей, потом переключи раскладку и напечатай латиницей",
      "Ismingni kirill harflarida yoz, keyin tilni almashtirib, lotin harflarida yoz",
    ),
    text(
      "Выдели строку мышью и вставь её три раза: Ctrl + C, затем Ctrl + V",
      "Qatorni sichqoncha bilan belgila va uch marta qo‘y: Ctrl + C, keyin Ctrl + V",
    ),
    text(
      "Удали одну строку и верни её через Ctrl + Z",
      "Bitta qatorni o‘chir va uni Ctrl + Z bilan qaytar",
    ),
    text(
      "Открой браузер и переключайся между окнами через Alt + Tab",
      "Brauzerni och va oynalar orasida Alt + Tab bilan almashtir",
    ),
  ],
  mistakes: [
    text(
      "Печатаются не те буквы — проверь язык в правом нижнем углу экрана",
      "Boshqa harflar chiqyapti — ekranning pastki o‘ng burchagidagi tilni tekshir",
    ),
    text(
      "Всё печатается заглавными — выключи Caps Lock",
      "Hammasi katta harflarda chiqyapti — Caps Lock’ni o‘chir",
    ),
    text(
      "Случайно что-то удалил — сразу нажми Ctrl + Z",
      "Tasodifan nimanidir o‘chirib yubording — darhol Ctrl + Z ni bos",
    ),
  ],
  quiz: [
    {
      question: text(
        "Какое сочетание вставляет скопированный текст?",
        "Qaysi birikma nusxa olingan matnni qo‘yadi?",
      ),
      answer: text("Ctrl + V.", "Ctrl + V."),
    },
    {
      question: text(
        "Как отменить последнее действие?",
        "Oxirgi amalni qanday bekor qilish mumkin?",
      ),
      answer: text("Ctrl + Z.", "Ctrl + Z."),
    },
    {
      question: text("Что делает правый клик?", "O‘ng tugma nima qiladi?"),
      answer: text(
        "Открывает меню с дополнительными действиями.",
        "Qo‘shimcha amallar menyusini ochadi.",
      ),
    },
  ],
  homework: [
    text(
      "15 минут перепечатывай в «Блокнот» любой абзац из учебника",
      "15 daqiqa davomida darslikdan istalgan xatboshini «Bloknot»ga ko‘chirib yoz",
    ),
    text(
      "Запиши в «Блокнот» 5 сочетаний клавиш с этого урока и попробуй каждое",
      "Shu darsdagi 5 ta tugmalar birikmasini «Bloknot»ga yozib, har birini sinab ko‘r",
    ),
  ],
  teacher: {
    start: text(
      "Посмотреть записанные проблемы с вводного урока. Сказать вслух: здесь все начинают с нуля, глупых вопросов нет.",
      "Kirish darsidan yozilgan muammolarni ko‘rib chiqing. Ovoz chiqarib ayting: bu yerda hamma noldan boshlaydi, ahmoqona savollar yo‘q.",
    ),
    practice: text(
      "Ходить по рядам и помогать с раскладкой. Тех, кто справился быстро, попросить помочь соседу.",
      "Qatorlar bo‘ylab yurib, klaviatura tilida yordam bering. Tez uddalaganlardan yonidagiga yordam berishni so‘rang.",
    ),
  },
});

export const filesLesson = standardLesson({
  id: "files",
  number: 3,
  title: text("Файлы и папки", "Fayllar va papkalar"),
  summary: text(
    "Разбираемся, где хранятся файлы на компьютере, и наводим порядок: папки, понятные имена, типы файлов и корзина.",
    "Kompyuterda fayllar qayerda saqlanishini bilib olamiz va tartib o‘rnatamiz: papkalar, tushunarli nomlar, fayl turlari va savat.",
  ),
  goals: [
    text(
      "Создавать, переименовывать, перемещать и удалять файлы и папки",
      "Fayl va papkalarni yaratish, nomini o‘zgartirish, ko‘chirish va o‘chirish",
    ),
    text(
      "Понимать тип файла по окончанию имени: .txt, .png, .pdf, .html",
      "Fayl turini nomining oxiridan bilish: .txt, .png, .pdf, .html",
    ),
    text(
      "Находить свои файлы: Рабочий стол, Загрузки, Документы",
      "O‘z fayllaringni topish: Ish stoli, Yuklanmalar, Hujjatlar",
    ),
  ],
  conceptsTitle: text("Как хранятся файлы", "Fayllar qanday saqlanadi"),
  concepts: [
    {
      label: text("ПРОВОДНИК", "PROVODNIK"),
      title: text("Окно с файлами", "Fayllar oynasi"),
      text: text(
        "Открывается сочетанием Win + E. Слева — Рабочий стол, Загрузки и Документы.",
        "Win + E bilan ochiladi. Chap tomonda — Ish stoli, Yuklanmalar va Hujjatlar.",
      ),
    },
    {
      label: text("ПАПКА", "PAPKA"),
      title: text("Коробка для файлов", "Fayllar uchun quti"),
      text: text(
        "Папки можно вкладывать друг в друга, как отделения в шкафу.",
        "Papkalarni bir-birining ichiga joylash mumkin, xuddi javondagi bo‘limlar kabi.",
      ),
    },
    {
      label: text("ТИП ФАЙЛА", "FAYL TURI"),
      title: text("Окончание имени", "Nomning oxiri"),
      text: text(
        "photo.png — картинка, notes.txt — текст, index.html — веб-страница.",
        "photo.png — rasm, notes.txt — matn, index.html — veb-sahifa.",
      ),
    },
    {
      label: text("ИМЕНА", "NOMLAR"),
      title: text("Понятно и без пробелов", "Tushunarli va bo‘sh joysiz"),
      text: text(
        "my-page.html лучше, чем «Новый документ (3).html».",
        "my-page.html «Yangi hujjat (3).html»dan yaxshiroq.",
      ),
    },
    {
      label: text("КОРЗИНА", "SAVAT"),
      title: text("Ничего не пропадает сразу", "Hech narsa darhol yo‘qolmaydi"),
      text: text(
        "Удалённый файл можно вернуть из корзины.",
        "O‘chirilgan faylni savatdan qaytarish mumkin.",
      ),
    },
    {
      label: text("ПУТЬ", "YO‘L"),
      title: text("Адрес файла", "Fayl manzili"),
      text: text(
        "Desktop\\LBL\\index.html — по пути видно, в какой папке лежит файл.",
        "Desktop\\LBL\\index.html — yo‘ldan fayl qaysi papkada ekani ko‘rinadi.",
      ),
    },
  ],
  practice: [
    text("Открой Проводник: Win + E", "Provodnikni och: Win + E"),
    text(
      "Включи показ типов файлов: «Вид» → «Показать» → «Расширения имён файлов»",
      "Fayl turlarini ko‘rsatishni yoq: «Ko‘rinish» → «Ko‘rsatish» → «Fayl nomlari kengaytmalari»",
    ),
    text(
      "На Рабочем столе создай папку LBL: правый клик → «Создать» → «Папку»",
      "Ish stolida LBL papkasini yarat: o‘ng tugma → «Yaratish» → «Papka»",
    ),
    text(
      "Внутри создай папки notes и images",
      "Ichida notes va images papkalarini yarat",
    ),
    text(
      "В notes создай текстовый файл about.txt и напиши о себе две строки",
      "notes ichida about.txt matn faylini yaratib, o‘zing haqingda ikki qator yoz",
    ),
    text(
      "Перемести файл в images, удали его и верни из корзины",
      "Faylni images’ga ko‘chir, o‘chir va savatdan qaytar",
    ),
  ],
  mistakes: [
    text(
      "Не видно .txt в конце имени — не включён показ расширений",
      "Nom oxirida .txt ko‘rinmayapti — kengaytmalarni ko‘rsatish yoqilmagan",
    ),
    text(
      "Файл «пропал» — проверь «Загрузки» и поиск в Проводнике",
      "Fayl «yo‘qoldi» — «Yuklanmalar» va Provodnikdagi qidiruvni tekshir",
    ),
    text(
      "Не удаётся переименовать — файл открыт в другой программе, закрой её",
      "Nomini o‘zgartirib bo‘lmayapti — fayl boshqa dasturda ochiq, uni yop",
    ),
  ],
  quiz: [
    {
      question: text(
        "Где по умолчанию лежат скачанные файлы?",
        "Yuklab olingan fayllar odatda qayerda bo‘ladi?",
      ),
      answer: text("В папке «Загрузки».", "«Yuklanmalar» papkasida."),
    },
    {
      question: text(
        "Что значит .png в конце имени файла?",
        "Fayl nomi oxiridagi .png nimani bildiradi?",
      ),
      answer: text("Что это картинка.", "Bu rasm ekanini."),
    },
    {
      question: text(
        "Как вернуть удалённый файл?",
        "O‘chirilgan faylni qanday qaytarish mumkin?",
      ),
      answer: text(
        "Открыть Корзину, правый клик по файлу → «Восстановить».",
        "Savatni ochib, faylga o‘ng tugma → «Tiklash».",
      ),
    },
  ],
  homework: [
    text(
      "Наведи порядок на Рабочем столе: разложи файлы по папкам",
      "Ish stolida tartib o‘rnat: fayllarni papkalarga joylashtir",
    ),
    text(
      "В папке LBL создай файл plan.txt: три вещи, которые хочешь научиться делать на компьютере",
      "LBL papkasida plan.txt faylini yarat: kompyuterda qilishni o‘rganmoqchi bo‘lgan uchta narsa",
    ),
  ],
  teacher: {
    start: text(
      "Попросить показать на своём ноутбуке два сочетания клавиш с прошлого урока.",
      "O‘z noutbukida o‘tgan darsdagi ikkita tugmalar birikmasini ko‘rsatishni so‘rang.",
    ),
    practice: text(
      "Названия пунктов меню в Windows 10 и 11 немного отличаются — показать оба варианта на проекторе. У кого Mac — Finder вместо Проводника.",
      "Windows 10 va 11 da menyu nomlari biroz farq qiladi — ikkala variantni proyektorda ko‘rsating. Mac’da Provodnik o‘rniga Finder.",
    ),
  },
});

export const browserLesson = standardLesson({
  id: "browser",
  number: 4,
  title: text("Браузер и интернет", "Brauzer va internet"),
  summary: text(
    "Как работает интернет простыми словами, чем браузер отличается от сайта и как безопасно искать информацию.",
    "Internet oddiy so‘zlar bilan qanday ishlaydi, brauzer saytdan nimasi bilan farq qiladi va ma’lumotni qanday xavfsiz qidirish mumkin.",
  ),
  goals: [
    text(
      "Понимать, что такое браузер, сайт и адрес сайта",
      "Brauzer, sayt va sayt manzili nima ekanini tushunish",
    ),
    text(
      "Пользоваться вкладками, поиском и закладками",
      "Yorliqlar, qidiruv va xatcho‘plardan foydalanish",
    ),
    text(
      "Отличать официальный сайт от подделки",
      "Rasmiy saytni soxtasidan ajratish",
    ),
  ],
  conceptsTitle: text("Как устроен интернет", "Internet qanday tuzilgan"),
  concepts: [
    {
      label: text("БРАУЗЕР", "BRAUZER"),
      title: text("Программа для сайтов", "Saytlar uchun dastur"),
      text: text(
        "Chrome, Edge, Firefox — через них мы открываем сайты.",
        "Chrome, Edge, Firefox — ular orqali saytlarni ochamiz.",
      ),
    },
    {
      label: text("АДРЕС", "MANZIL"),
      title: text("Улица и дом в интернете", "Internetdagi ko‘cha va uy"),
      text: text(
        "https://… — адрес сайта. Замок рядом с адресом значит, что соединение защищено.",
        "https://… — sayt manzili. Manzil yonidagi qulf ulanish himoyalanganini bildiradi.",
      ),
    },
    {
      label: text("СЕРВЕР", "SERVER"),
      title: text("Компьютер, где живёт сайт", "Sayt joylashgan kompyuter"),
      text: text(
        "Браузер просит страницу, сервер её отправляет.",
        "Brauzer sahifani so‘raydi, server uni yuboradi.",
      ),
    },
    {
      label: text("ВКЛАДКИ", "YORLIQLAR"),
      title: text("Много сайтов в одном окне", "Bitta oynada ko‘p sayt"),
      text: text(
        "Ctrl + T — новая вкладка, Ctrl + W — закрыть вкладку.",
        "Ctrl + T — yangi yorliq, Ctrl + W — yorliqni yopish.",
      ),
    },
    {
      label: text("ПОИСК", "QIDIRUV"),
      title: text("Короткий и точный запрос", "Qisqa va aniq so‘rov"),
      text: text(
        "Например: «плечевой сустав анатомия схема».",
        "Masalan: «yelka bo‘g‘imi anatomiyasi sxema».",
      ),
    },
    {
      label: text("БЕЗОПАСНОСТЬ", "XAVFSIZLIK"),
      title: text("Проверяй адрес", "Manzilni tekshir"),
      text: text(
        "Не вводи пароль на сайте, который открылся по странной ссылке.",
        "G‘alati havola orqali ochilgan saytga parol kiritma.",
      ),
    },
  ],
  practice: [
    text(
      "Открой браузер и новую вкладку: Ctrl + T",
      "Brauzerni va yangi yorliqni och: Ctrl + T",
    ),
    text(
      "Найди официальный сайт своего университета",
      "O‘z universitetingning rasmiy saytini top",
    ),
    text(
      "Добавь его в закладки: Ctrl + D",
      "Uni xatcho‘plarga qo‘sh: Ctrl + D",
    ),
    text(
      "Найди два полезных для учёбы медицинских сайта и тоже сохрани их",
      "O‘qish uchun foydali ikkita tibbiy saytni topib, ularni ham saqla",
    ),
    text(
      "Открой три вкладки и переключайся между ними: Ctrl + Tab",
      "Uchta yorliq ochib, ular orasida almashtir: Ctrl + Tab",
    ),
  ],
  mistakes: [
    text(
      "Адрес напечатан в поиске, а не в адресной строке — ничего страшного, поисковик всё равно найдёт сайт",
      "Manzil manzil satriga emas, qidiruvga yozildi — qo‘rqinchli emas, qidiruv tizimi baribir saytni topadi",
    ),
    text(
      "Слишком много вкладок — закрывай ненужные через Ctrl + W",
      "Yorliqlar juda ko‘p — keraksizlarini Ctrl + W bilan yop",
    ),
    text(
      "Сайт просит срочно установить «обновление» — закрой его, это частая ловушка",
      "Sayt zudlik bilan «yangilanish» o‘rnatishni so‘rayapti — uni yop, bu ko‘p uchraydigan tuzoq",
    ),
  ],
  quiz: [
    {
      question: text(
        "Чем браузер отличается от сайта?",
        "Brauzer saytdan nimasi bilan farq qiladi?",
      ),
      answer: text(
        "Браузер — программа на компьютере, сайт — страница, которую он открывает.",
        "Brauzer — kompyuterdagi dastur, sayt — u ochadigan sahifa.",
      ),
    },
    {
      question: text(
        "Что значит замок рядом с адресом?",
        "Manzil yonidagi qulf nimani bildiradi?",
      ),
      answer: text(
        "Соединение с сайтом защищено.",
        "Sayt bilan ulanish himoyalangan.",
      ),
    },
    {
      question: text(
        "Как открыть новую вкладку?",
        "Yangi yorliq qanday ochiladi?",
      ),
      answer: text("Ctrl + T.", "Ctrl + T."),
    },
  ],
  homework: [
    text(
      "Собери в закладках папку «Учёба» с пятью полезными сайтами",
      "Xatcho‘plarda beshta foydali saytdan iborat «O‘qish» papkasini yig‘",
    ),
    text(
      "Открой три любимых сайта и запиши: что в них удобно, а что раздражает",
      "Uchta sevimli saytingni ochib yoz: ularda nima qulay, nima esa g‘ashga tegadi",
    ),
  ],
  teacher: {
    start: text(
      "Спросить, у кого получилось навести порядок в папках, и показать одну аккуратную папку на проекторе.",
      "Papkalarda kim tartib o‘rnata olganini so‘rang va bitta tartibli papkani proyektorda ko‘rsating.",
    ),
    practice: text(
      "Заранее проверить интернет в аудитории. Показать на проекторе пример поддельного адреса с лишней буквой.",
      "Auditoriyada internetni oldindan tekshiring. Proyektorda ortiqcha harfli soxta manzil namunasini ko‘rsating.",
    ),
  },
});

export const installLesson = standardLesson({
  id: "install",
  number: 5,
  title: text(
    "Скачиваем и устанавливаем программы",
    "Dasturlarni yuklab olamiz va o‘rnatamiz",
  ),
  summary: text(
    "Учимся безопасно скачивать файлы и устанавливать программы — и вместе ставим VS Code, главный инструмент курса.",
    "Fayllarni xavfsiz yuklab olish va dasturlarni o‘rnatishni o‘rganamiz — va birga kursning asosiy vositasi VS Code’ni o‘rnatamiz.",
  ),
  goals: [
    text(
      "Скачивать файлы и находить их в «Загрузках»",
      "Fayllarni yuklab olish va ularni «Yuklanmalar»dan topish",
    ),
    text(
      "Устанавливать программы только с официальных сайтов",
      "Dasturlarni faqat rasmiy saytlardan o‘rnatish",
    ),
    text("Установить VS Code", "VS Code’ni o‘rnatish"),
  ],
  conceptsTitle: text(
    "Как устанавливают программы",
    "Dasturlar qanday o‘rnatiladi",
  ),
  concepts: [
    {
      label: text("ЗАГРУЗКИ", "YUKLANMALAR"),
      title: text(
        "Куда попадает скачанное",
        "Yuklab olingan narsa qayerga tushadi",
      ),
      text: text(
        "Браузер сохраняет файлы в папку «Загрузки». Ctrl + J показывает список загрузок.",
        "Brauzer fayllarni «Yuklanmalar» papkasiga saqlaydi. Ctrl + J yuklanmalar ro‘yxatini ko‘rsatadi.",
      ),
    },
    {
      label: text("УСТАНОВЩИК", "O‘RNATUVCHI"),
      title: text("Файл .exe", ".exe fayli"),
      text: text(
        "Запускает установку программы. Скачивай его только с сайта разработчика.",
        "Dasturni o‘rnatishni boshlaydi. Uni faqat ishlab chiquvchining saytidan yuklab ol.",
      ),
    },
    {
      label: "VS CODE",
      title: text("Редактор кода", "Kod muharriri"),
      text: text(
        "Бесплатная программа от Microsoft, в которой мы будем создавать сайты.",
        "Microsoft’ning bepul dasturi, unda saytlar yaratamiz.",
      ),
    },
  ],
  practice: [
    text(
      "Открой сайт code.visualstudio.com и проверь адрес",
      "code.visualstudio.com saytini och va manzilni tekshir",
    ),
    text("Нажми «Download for Windows»", "«Download for Windows»ni bos"),
    text(
      "Открой загрузки (Ctrl + J) и запусти скачанный установщик",
      "Yuklanmalarni och (Ctrl + J) va yuklangan o‘rnatuvchini ishga tushir",
    ),
    text(
      "Прими соглашение, отметь «Create a desktop icon» и «Add to PATH»",
      "Kelishuvni qabul qil, «Create a desktop icon» va «Add to PATH»ni belgila",
    ),
    text(
      "Нажми «Install», а затем «Finish» — VS Code откроется",
      "«Install»ni, keyin «Finish»ni bos — VS Code ochiladi",
    ),
  ],
  mistakes: [
    text(
      "Скачал не с того сайта — удали файл и скачай заново с code.visualstudio.com",
      "Boshqa saytdan yuklab olding — faylni o‘chirib, code.visualstudio.com’dan qayta yuklab ol",
    ),
    text(
      "Не можешь найти установщик — Ctrl + J в браузере покажет все загрузки",
      "O‘rnatuvchini topa olmayapsan — brauzerda Ctrl + J barcha yuklanmalarni ko‘rsatadi",
    ),
    text(
      "Windows спрашивает «Разрешить изменения?» — для VS Code с официального сайта нажми «Да»",
      "Windows «O‘zgarishlarga ruxsat berilsinmi?» deb so‘rayapti — rasmiy saytdan olingan VS Code uchun «Ha»ni bos",
    ),
    text(
      "На Mac: скачай версию для macOS и перетащи VS Code в папку «Программы»",
      "Mac’da: macOS versiyasini yuklab ol va VS Code’ni «Dasturlar» papkasiga sudrab o‘tkaz",
    ),
  ],
  quiz: [
    {
      question: text(
        "Почему программы нужно скачивать с официального сайта?",
        "Nega dasturlarni rasmiy saytdan yuklab olish kerak?",
      ),
      answer: text(
        "На чужих сайтах установщик может содержать вирус.",
        "Begona saytlarda o‘rnatuvchi ichida virus bo‘lishi mumkin.",
      ),
    },
    {
      question: text(
        "Как быстро открыть список загрузок в браузере?",
        "Brauzerda yuklanmalar ro‘yxatini qanday tez ochish mumkin?",
      ),
      answer: text("Ctrl + J.", "Ctrl + J."),
    },
    {
      question: text(
        "Для чего нам VS Code?",
        "VS Code bizga nima uchun kerak?",
      ),
      answer: text("Чтобы создавать сайты.", "Saytlar yaratish uchun."),
    },
  ],
  homework: [
    text(
      "Если VS Code не установился на уроке — установи дома по шагам из конспекта",
      "Agar VS Code darsda o‘rnatilmagan bo‘lsa — uyda konspektdagi qadamlar bo‘yicha o‘rnat",
    ),
    text(
      "Открой VS Code и выбери тему оформления: шестерёнка внизу слева → Themes → Color Theme",
      "VS Code’ni ochib, bezak mavzusini tanla: pastki chapdagi tishli g‘ildirak → Themes → Color Theme",
    ),
  ],
  teacher: {
    start: text(
      "Спросить, что неудобного нашли на любимых сайтах, — это первые идеи для будущих проектов.",
      "Sevimli saytlarda nimani noqulay deb topishganini so‘rang — bu kelajakdagi loyihalar uchun ilk g‘oyalar.",
    ),
    practice: text(
      "Скачать установщик заранее на флешку на случай слабого интернета. Отдельно помочь тем, у кого Mac.",
      "Internet sust bo‘lsa, o‘rnatuvchini oldindan fleshkaga yuklab qo‘ying. Mac’i borlarga alohida yordam bering.",
    ),
  },
});

export const vscodeLesson = standardLesson({
  id: "vscode",
  number: 6,
  title: text("VS Code: первая страница", "VS Code: birinchi sahifa"),
  summary: text(
    "Открываем папку проекта в VS Code, создаём файл index.html и впервые открываем свою страницу в браузере.",
    "VS Code’da loyiha papkasini ochamiz, index.html faylini yaratamiz va o‘z sahifamizni ilk bor brauzerda ochamiz.",
  ),
  goals: [
    text(
      "Открывать папку проекта в VS Code",
      "VS Code’da loyiha papkasini ochish",
    ),
    text("Создавать и сохранять файлы", "Fayllarni yaratish va saqlash"),
    text(
      "Открывать свою страницу в браузере",
      "O‘z sahifangni brauzerda ochish",
    ),
  ],
  conceptsTitle: text(
    "Как работать в VS Code",
    "VS Code’da qanday ishlash kerak",
  ),
  concepts: [
    {
      label: text("ПАПКА ПРОЕКТА", "LOYIHA PAPKASI"),
      title: text("File → Open Folder", "File → Open Folder"),
      text: text(
        "VS Code работает с папкой: все файлы сайта лежат внутри неё.",
        "VS Code papka bilan ishlaydi: saytning barcha fayllari uning ichida.",
      ),
    },
    {
      label: text("СПИСОК ФАЙЛОВ", "FAYLLAR RO‘YXATI"),
      title: text("Панель слева", "Chapdagi panel"),
      text: text(
        "Кнопка «New File» создаёт файл прямо в папке проекта.",
        "«New File» tugmasi loyiha papkasida fayl yaratadi.",
      ),
    },
    {
      label: text("СОХРАНЕНИЕ", "SAQLASH"),
      title: text("Ctrl + S", "Ctrl + S"),
      text: text(
        "Белая точка на вкладке файла значит, что изменения не сохранены.",
        "Fayl yorlig‘idagi oq nuqta o‘zgarishlar saqlanmaganini bildiradi.",
      ),
    },
  ],
  example: {
    title: text("Первая страница", "Birinchi sahifa"),
    text: text(
      "Одно предложение в файле index.html — и браузер уже показывает страницу.",
      "index.html faylidagi bitta gap — va brauzer sahifani allaqachon ko‘rsatadi.",
    ),
    points: [
      text(
        "Это обычный текст в файле index.html",
        "Bu index.html faylidagi oddiy matn",
      ),
      text(
        "Браузер открывает его как страницу",
        "Brauzer uni sahifa sifatida ochadi",
      ),
    ],
    example: {
      show: ["html"],
      build: (lang) => ({
        html:
          lang === "uz"
            ? "Salom! Men bo‘lajak shifokorman va saytlar yaratishni o‘rganyapman."
            : "Привет! Я будущий врач и учусь создавать сайты.",
        css: "body { font-family: Arial, sans-serif; padding: 24px; font-size: 20px; }",
        js: "",
      }),
    },
  },
  practice: [
    text(
      "Открой VS Code → File → Open Folder → выбери папку LBL на Рабочем столе",
      "VS Code’ni och → File → Open Folder → Ish stolidagi LBL papkasini tanla",
    ),
    text(
      "Если появится вопрос «Do you trust the authors?» — нажми «Yes»",
      "«Do you trust the authors?» degan savol chiqsa — «Yes»ni bos",
    ),
    text(
      "Создай файл index.html кнопкой «New File»",
      "«New File» tugmasi bilan index.html faylini yarat",
    ),
    text(
      "Напиши одно предложение о себе и сохрани: Ctrl + S",
      "O‘zing haqingda bitta gap yoz va saqla: Ctrl + S",
    ),
    text(
      "Открой папку LBL в Проводнике и дважды кликни по index.html — страница откроется в браузере",
      "LBL papkasini Provodnikda ochib, index.html’ni ikki marta bos — sahifa brauzerda ochiladi",
    ),
  ],
  mistakes: [
    text(
      "Файл назвался index.html.txt — включи показ расширений и переименуй его",
      "Fayl index.html.txt deb nomlandi — kengaytmalarni ko‘rsatishni yoqib, nomini o‘zgartir",
    ),
    text(
      "Изменения не видны в браузере — сохрани файл (Ctrl + S) и обнови страницу (F5)",
      "O‘zgarishlar brauzerda ko‘rinmayapti — faylni saqla (Ctrl + S) va sahifani yangila (F5)",
    ),
    text(
      "Шрифт мелкий — Ctrl + = увеличивает, Ctrl + - уменьшает",
      "Shrift mayda — Ctrl + = kattalashtiradi, Ctrl + - kichraytiradi",
    ),
  ],
  quiz: [
    {
      question: text(
        "Что значит белая точка на вкладке файла?",
        "Fayl yorlig‘idagi oq nuqta nimani bildiradi?",
      ),
      answer: text("Файл не сохранён.", "Fayl saqlanmagan."),
    },
    {
      question: text(
        "Что сделать, чтобы увидеть изменения в браузере?",
        "O‘zgarishlarni brauzerda ko‘rish uchun nima qilish kerak?",
      ),
      answer: text(
        "Сохранить файл (Ctrl + S) и обновить страницу (F5).",
        "Faylni saqlash (Ctrl + S) va sahifani yangilash (F5).",
      ),
    },
    {
      question: text(
        "Почему главный файл называется index.html?",
        "Nega asosiy fayl index.html deb ataladi?",
      ),
      answer: text(
        ".html значит, что это веб-страница, а index — главная страница сайта.",
        ".html bu veb-sahifa ekanini, index esa saytning bosh sahifasi ekanini bildiradi.",
      ),
    },
  ],
  homework: [
    text(
      "Создай второй файл about.html с двумя предложениями о себе и открой его в браузере",
      "O‘zing haqingda ikki gapli about.html faylini yaratib, brauzerda och",
    ),
  ],
  teacher: {
    start: text(
      "Проверить, у всех ли установлен VS Code. У кого нет — установить в первые 10 минут, пока остальные выбирают тему оформления.",
      "Hammada VS Code o‘rnatilganini tekshiring. Kimda yo‘q bo‘lsa — boshqalar mavzu tanlayotgan birinchi 10 daqiqada o‘rnating.",
    ),
    practice: text(
      "Главный момент урока — первая своя страница в браузере. Дать каждому его увидеть и отметить это вслух.",
      "Darsning asosiy lahzasi — brauzerdagi birinchi o‘z sahifasi. Har kim buni ko‘rsin va buni ovoz chiqarib nishonlang.",
    ),
  },
});
