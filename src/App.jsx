import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  Star,
  Sparkles,
  Eye,
  Heart,
  ChevronDown,
  User,
  Mail,
  Lock,
  Send,
} from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1400&q=85",
  lashes:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  brows:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  beauty:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
  work1:
    "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=800&q=85",
  work2:
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85",
  work3:
    "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=85",
};

const translations = {
  ru: {
    home: "Главная",
    services: "Услуги",
    about: "О нас",
    gallery: "Наши работы",
    reviews: "Отзывы",
    contact: "Контакты",
    login: "Вход",
    register: "Регистрация",
    badge: "BEAUTY • ELEGANCE • CONFIDENCE",
    hero1: "Твоя красота.",
    hero2: "Наше искусство.",
    heroText:
      "Подчеркнём твою естественную красоту с помощью профессионального наращивания ресниц и перманентного макияжа бровей.",
    booking: "Записаться",
    discover: "Открыть мир красоты",
    experience: "Красота в каждой детали",
    experienceText:
      "Мы создаём гармоничный образ, в котором каждая деталь подчёркивает твою индивидуальность.",
    servicesTitle: "Наши услуги",
    servicesText: "Искусство подчёркивать твою естественную красоту.",
    lashTitle: "Наращивание ресниц",
    lashText:
      "Выразительный взгляд, идеальный изгиб и естественный объём. Подберём эффект именно для тебя.",
    browTitle: "Перманент бровей",
    browText:
      "Естественная форма, мягкий оттенок и гармония с чертами твоего лица.",
    correction: "Коррекция и уход",
    correctionText: "Поддерживаем идеальную форму и красоту твоего образа.",
    details: "Подробнее",
    aboutTitle: "Красота начинается с уверенности",
    aboutText:
      "MOHINUR — пространство эстетики, профессионализма и заботы о каждой клиентке. Наша цель — не изменить тебя, а подчеркнуть твою природную красоту.",
    quality: "Качественные материалы",
    qualityText: "Профессиональная косметика и проверенные материалы.",
    approach: "Индивидуальный подход",
    approachText: "Подбираем форму и эффект с учётом твоих пожеланий.",
    comfort: "Комфорт и забота",
    comfortText: "Уютная атмосфера и внимание к каждой детали.",
    galleryTitle: "Наши работы",
    galleryText: "Каждая работа — маленькое произведение искусства.",
    reviewsTitle: "Что говорят наши клиентки",
    reviewsText: "Ваша красота и доверие — наша главная мотивация.",
    ctaTitle: "Готова к своему новому образу?",
    ctaText: "Запишись на консультацию, и мы подберём идеальную процедуру.",
    bookNow: "Записаться сейчас",
    contacts: "Будем рады тебя видеть",
    address: "Фергана, Узбекистан",
    schedule: "Пн – Сб: 09:00 – 19:00",
    rights: "Все права защищены.",
    bookingTitle: "Запись на процедуру",
    name: "Ваше имя",
    phone: "Номер телефона",
    service: "Выберите услугу",
    date: "Желаемая дата",
    send: "Отправить заявку",
    close: "Закрыть",
    loginTitle: "С возвращением!",
    registerTitle: "Создать аккаунт",
    email: "Электронная почта",
    password: "Пароль",
    noAccount: "Нет аккаунта?",
    haveAccount: "Уже есть аккаунт?",
    create: "Зарегистрироваться",
    enter: "Войти",
    lashOption: "Наращивание ресниц",
    browOption: "Перманент бровей",
    correctionOption: "Коррекция и уход",
    sent: "Заявка подготовлена! Свяжитесь с нами для подтверждения записи.",
    social: "Следите за нами",
  },
  uz: {
    home: "Bosh sahifa",
    services: "Xizmatlar",
    about: "Biz haqimizda",
    gallery: "Ishlarimiz",
    reviews: "Fikrlar",
    contact: "Aloqa",
    login: "Kirish",
    register: "Ro‘yxatdan o‘tish",
    badge: "GO‘ZALLIK • NAZOKAT • ISHONCH",
    hero1: "Sizning go‘zalligingiz.",
    hero2: "Bizning san’atimiz.",
    heroText:
      "Kiprik uzaytirish va qosh permanent makiyaji orqali tabiiy go‘zalligingizni ta’kidlaymiz.",
    booking: "Yozilish",
    discover: "Go‘zallik olamini kashf eting",
    experience: "Har bir detalda go‘zallik",
    experienceText:
      "Har bir detal sizning o‘ziga xosligingizni ta’kidlaydigan uyg‘un obraz yaratamiz.",
    servicesTitle: "Bizning xizmatlar",
    servicesText: "Tabiiy go‘zalligingizni ta’kidlash san’ati.",
    lashTitle: "Kiprik uzaytirish",
    lashText:
      "Jozibali nigoh, mukammal bukilish va tabiiy hajm. Sizga mos effektni tanlaymiz.",
    browTitle: "Qosh permanent makiyaji",
    browText: "Tabiiy shakl, mayin rang va yuzingizga mos uyg‘unlik.",
    correction: "Korreksiya va parvarish",
    correctionText: "Obrazingizning go‘zalligi va mukammal shaklini saqlaymiz.",
    details: "Batafsil",
    aboutTitle: "Go‘zallik ishonchdan boshlanadi",
    aboutText:
      "MOHINUR — estetika, professionallik va e’tibor maskani. Maqsadimiz sizni o‘zgartirish emas, balki tabiiy go‘zalligingizni ta’kidlash.",
    quality: "Sifatli materiallar",
    qualityText: "Professional kosmetika va sinovdan o‘tgan materiallar.",
    approach: "Individual yondashuv",
    approachText: "Sizning istaklaringizga mos shakl va effekt tanlaymiz.",
    comfort: "Qulaylik va e’tibor",
    comfortText: "Shinam muhit va har bir detalga e’tibor.",
    galleryTitle: "Bizning ishlarimiz",
    galleryText: "Har bir ish — kichik san’at asari.",
    reviewsTitle: "Mijozlarimiz fikrlari",
    reviewsText: "Sizning go‘zalligingiz va ishonchingiz biz uchun muhim.",
    ctaTitle: "Yangi obrazingizga tayyormisiz?",
    ctaText: "Maslahat uchun yoziling, sizga mos xizmatni tanlaymiz.",
    bookNow: "Hozir yozilish",
    contacts: "Sizni kutib qolamiz",
    address: "Farg‘ona, O‘zbekiston",
    schedule: "Du – Sha: 09:00 – 19:00",
    rights: "Barcha huquqlar himoyalangan.",
    bookingTitle: "Xizmatga yozilish",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    service: "Xizmatni tanlang",
    date: "Istalgan sana",
    send: "So‘rov yuborish",
    close: "Yopish",
    loginTitle: "Xush kelibsiz!",
    registerTitle: "Hisob yaratish",
    email: "Elektron pochta",
    password: "Parol",
    noAccount: "Hisobingiz yo‘qmi?",
    haveAccount: "Hisobingiz bormi?",
    create: "Ro‘yxatdan o‘tish",
    enter: "Kirish",
    lashOption: "Kiprik uzaytirish",
    browOption: "Qosh permanenti",
    correctionOption: "Korreksiya va parvarish",
    sent: "So‘rovingiz tayyorlandi! Yozilishni tasdiqlash uchun biz bilan bog‘laning.",
    social: "Bizni kuzatib boring",
  },
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    gallery: "Our Work",
    reviews: "Reviews",
    contact: "Contact",
    login: "Login",
    register: "Sign up",
    badge: "BEAUTY • ELEGANCE • CONFIDENCE",
    hero1: "Your beauty.",
    hero2: "Our art.",
    heroText:
      "Enhance your natural beauty with professional eyelash extensions and permanent eyebrow makeup.",
    booking: "Book an appointment",
    discover: "Discover beauty",
    experience: "Beauty in every detail",
    experienceText:
      "We create a harmonious look where every detail highlights your individuality.",
    servicesTitle: "Our Services",
    servicesText: "The art of enhancing your natural beauty.",
    lashTitle: "Eyelash Extensions",
    lashText:
      "An expressive look, perfect curl and natural volume. We find the perfect style for you.",
    browTitle: "Permanent Brows",
    browText:
      "Natural shape, soft color and harmony with your facial features.",
    correction: "Correction & Care",
    correctionText: "We maintain the perfect shape and beauty of your look.",
    details: "Learn more",
    aboutTitle: "Beauty begins with confidence",
    aboutText:
      "MOHINUR is a space for aesthetics, professionalism and personal care. Our goal is not to change you, but to highlight your natural beauty.",
    quality: "Quality materials",
    qualityText: "Professional cosmetics and carefully selected materials.",
    approach: "Personal approach",
    approachText: "We choose the shape and style according to your wishes.",
    comfort: "Comfort & care",
    comfortText: "A cozy atmosphere and attention to every detail.",
    galleryTitle: "Our Work",
    galleryText: "Every look is a little work of art.",
    reviewsTitle: "What our clients say",
    reviewsText: "Your beauty and trust are our greatest motivation.",
    ctaTitle: "Ready for your new look?",
    ctaText:
      "Book a consultation and we'll find the perfect treatment for you.",
    bookNow: "Book now",
    contacts: "We'd love to see you",
    address: "Fergana, Uzbekistan",
    schedule: "Mon – Sat: 09:00 – 19:00",
    rights: "All rights reserved.",
    bookingTitle: "Book a treatment",
    name: "Your name",
    phone: "Phone number",
    service: "Choose a service",
    date: "Preferred date",
    send: "Send request",
    close: "Close",
    loginTitle: "Welcome back!",
    registerTitle: "Create an account",
    email: "Email address",
    password: "Password",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    create: "Create account",
    enter: "Login",
    lashOption: "Eyelash extensions",
    browOption: "Permanent brows",
    correctionOption: "Correction & care",
    sent: "Your request is ready! Contact us to confirm your appointment.",
    social: "Follow us",
  },
};

function App() {
  const [lang, setLang] = useState("ru");
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(null);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "lash",
    date: "",
  });

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("mohinur-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("mohinur-theme");
    if (saved) setDark(saved === "dark");
  }, []);

  const openBooking = () => {
    setMessage("");
    setModal("booking");
  };

  const navItems = [
    ["home", "#home"],
    ["services", "#services"],
    ["about", "#about"],
    ["gallery", "#gallery"],
    ["reviews", "#reviews"],
    ["contact", "#contact"],
  ];

  const submitBooking = (e) => {
    e.preventDefault();
    setMessage(t.sent);
  };

  const serviceCards = [
    {
      title: t.lashTitle,
      text: t.lashText,
      image: images.lashes,
      number: "01",
      icon: <Eye size={20} />,
    },
    {
      title: t.browTitle,
      text: t.browText,
      image: images.brows,
      number: "02",
      icon: <Sparkles size={20} />,
    },
    {
      title: t.correction,
      text: t.correctionText,
      image: images.beauty,
      number: "03",
      icon: <Heart size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf8] text-[#302526] transition-colors duration-300 dark:bg-[#171517] dark:text-[#f7eeee]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#eadbd8]/70 bg-[#fffaf8]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#171517]/90">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 lg:px-12">
          <a href="#home" className="group shrink-0">
            <span className="block font-serif text-2xl font-bold tracking-[0.16em] text-[#a66c70]">
              MOHINUR<span className="text-[#d7a7a3]">.</span>
            </span>
            <span className="block text-[9px] tracking-[0.42em] text-[#927e7d]">
              BEAUTY STUDIO
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="text-[12px] font-medium tracking-wide text-[#78696a] transition hover:text-[#b47b80] dark:text-gray-300 dark:hover:text-[#e8b9b7]"
              >
                {t[key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* LANGUAGE */}
            <div className="relative hidden sm:block">
              <Globe
                size={17}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#a66c70]"
              />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="cursor-pointer appearance-none rounded-full border border-[#eadbd8] bg-transparent py-2 pl-8 pr-7 text-xs outline-none transition hover:border-[#b47b80] dark:border-white/20"
              >
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
              </select>
              <ChevronDown
                size={12}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* THEME */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadbd8] transition hover:bg-[#f3e5e3] dark:border-white/20 dark:hover:bg-white/10"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* AUTH */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => setModal("login")}
                className="rounded-full px-4 py-2 text-xs font-semibold transition hover:text-[#b47b80]"
              >
                {t.login}
              </button>
              <button
                onClick={() => setModal("register")}
                className="rounded-full bg-[#a66c70] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#a66c70]/20 transition hover:-translate-y-0.5 hover:bg-[#905a60]"
              >
                {t.register}
              </button>
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadbd8] md:hidden dark:border-white/20"
            >
              {mobileMenu ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="border-t border-[#eadbd8] bg-[#fffaf8] px-6 py-5 dark:border-white/10 dark:bg-[#201c20] xl:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="text-sm text-[#78696a] dark:text-gray-200"
                >
                  {t[key]}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-wrap gap-2">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="rounded-full border border-[#eadbd8] bg-transparent px-3 py-2 text-sm dark:border-white/20"
              >
                <option value="ru">Русский</option>
                <option value="uz">O‘zbek</option>
                <option value="en">English</option>
              </select>
              <button
                onClick={() => setModal("login")}
                className="rounded-full border border-[#a66c70] px-4 py-2 text-sm"
              >
                {t.login}
              </button>
              <button
                onClick={() => setModal("register")}
                className="rounded-full bg-[#a66c70] px-4 py-2 text-sm text-white"
              >
                {t.register}
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-28">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e8d3d0] px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#a66c70] dark:border-white/20">
                <Sparkles size={13} />
                {t.badge}
              </div>

              <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
                {t.hero1}
                <span className="mt-2 block italic text-[#b47b80]">
                  {t.hero2}
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#897a79] dark:text-gray-400 sm:text-base">
                {t.heroText}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={openBooking}
                  className="group flex items-center gap-4 rounded-full bg-[#a66c70] py-4 pl-7 pr-4 text-sm font-semibold text-white shadow-xl shadow-[#a66c70]/20 transition hover:-translate-y-1 hover:bg-[#905a60]"
                >
                  {t.booking}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </button>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-sm font-medium text-[#8d7777] transition hover:text-[#a66c70]"
                >
                  {t.discover} <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-14 flex items-center gap-8 border-t border-[#eadbd8] pt-7 dark:border-white/10">
                <div>
                  <div className="font-serif text-3xl text-[#a66c70]">100%</div>
                  <div className="mt-1 text-[10px] tracking-wider text-[#968888]">
                    INDIVIDUAL CARE
                  </div>
                </div>
                <div className="h-10 w-px bg-[#eadbd8] dark:bg-white/10" />
                <div>
                  <div className="font-serif text-3xl text-[#a66c70]">01</div>
                  <div className="mt-1 text-[10px] tracking-wider text-[#968888]">
                    YOUR BEAUTY STUDIO
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-[#f0d8d5] blur-3xl dark:bg-[#a66c70]/20" />
              <div className="relative overflow-hidden rounded-t-[48%] rounded-b-[12px]">
                <img
                  src={images.hero}
                  alt="Beauty studio MOHINUR"
                  className="h-[440px] w-full object-cover sm:h-[570px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-[#292328]/95 sm:-left-12">
                <div className="flex items-center gap-2 text-[#a66c70]">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-bold tracking-[0.2em]">
                    MOHINUR BEAUTY
                  </span>
                </div>
                <p className="mt-2 font-serif text-xl italic text-[#493536] dark:text-white">
                  Beauty is an art.
                </p>
              </div>

              <div className="absolute -right-3 top-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white bg-[#f3e5e3] text-center text-[#a66c70] shadow-lg dark:border-white/10 dark:bg-[#35272d]">
                <Sparkles size={20} />
                <span className="mt-1 text-[8px] font-bold tracking-widest">
                  BEAUTY
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE STRIP */}
        <section className="border-y border-[#eadbd8] bg-[#f8efed] py-12 dark:border-white/10 dark:bg-[#211c20]">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <span className="text-xs tracking-[0.3em] text-[#b47b80]">
              ✦ MOHINUR ✦
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              {t.experience}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#8c7a7a] dark:text-gray-400">
              {t.experienceText}
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"
        >
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#b47b80]">
                WHAT WE DO
              </span>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                {t.servicesTitle}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#928181] dark:text-gray-400">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-[#eadbd8] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#a66c70]/10 dark:border-white/10 dark:bg-[#211e21]"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#a66c70] backdrop-blur">
                    {service.number}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#a66c70] shadow-lg">
                    {service.icon}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#958585] dark:text-gray-400">
                    {service.text}
                  </p>
                  <button
                    onClick={openBooking}
                    className="mt-5 flex items-center gap-3 text-xs font-bold tracking-wider text-[#a66c70] transition group-hover:gap-5"
                  >
                    {t.details} <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="overflow-hidden bg-[#f8efed] dark:bg-[#211c20]"
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
            <div className="relative">
              <div className="grid grid-cols-[1fr_0.75fr] items-center gap-4">
                <img
                  src={images.beauty}
                  alt="Beauty"
                  className="h-[420px] w-full rounded-t-full object-cover"
                />
                <img
                  src={images.brows}
                  alt="Eyebrow beauty"
                  className="mt-20 h-[300px] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-5 rounded-full border border-white bg-white px-5 py-4 shadow-xl dark:border-white/10 dark:bg-[#30272d]">
                <span className="font-serif text-lg italic text-[#a66c70]">
                  Your beauty matters
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#b47b80]">
                OUR PHILOSOPHY
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                {t.aboutTitle}
              </h2>
              <p className="mt-6 text-sm leading-8 text-[#8c7a7a] dark:text-gray-400">
                {t.aboutText}
              </p>

              <div className="mt-9 space-y-6">
                {[
                  [Sparkles, t.quality, t.qualityText],
                  [Heart, t.approach, t.approachText],
                  [Star, t.comfort, t.comfortText],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#a66c70] dark:bg-[#342b30]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#958585] dark:text-gray-400">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32"
        >
          <div className="mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#b47b80]">
              PORTFOLIO
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              {t.galleryTitle}
            </h2>
            <p className="mt-4 text-sm text-[#928181] dark:text-gray-400">
              {t.galleryText}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {[images.work1, images.work2, images.work3, images.hero].map(
              (image, i) => (
                <div
                  key={image}
                  className={`group relative overflow-hidden rounded-2xl ${
                    i === 1 ? "md:mt-12" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`MOHINUR portfolio ${i + 1}`}
                    className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[330px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 text-xs font-medium tracking-widest text-white opacity-0 transition group-hover:opacity-100">
                    MOHINUR BEAUTY
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-[#f8efed] py-24 dark:bg-[#211c20]">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#b47b80]">
              TESTIMONIALS
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              {t.reviewsTitle}
            </h2>
            <p className="mt-4 text-sm text-[#928181] dark:text-gray-400">
              {t.reviewsText}
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                {
                  name: "Madina",
                  text: "Очень довольна результатом! Ресницы выглядят естественно и красиво. Обязательно приду снова.",
                },
                {
                  name: "Sevara",
                  text: "Очень уютная атмосфера, внимательный мастер и прекрасный результат. Спасибо MOHINUR!",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl border border-[#eadbd8] bg-white p-8 text-left dark:border-white/10 dark:bg-[#292328]"
                >
                  <div className="flex gap-1 text-[#c59a6b]">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 font-serif text-xl leading-8 italic text-[#675455] dark:text-gray-200">
                    “{review.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e5e3] font-serif text-[#a66c70] dark:bg-[#44333b]">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-[10px] tracking-widest text-[#a66c70]">
                        CLIENT
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-12 lg:py-32">
          <div className="relative overflow-hidden rounded-[30px] bg-[#a66c70] px-6 py-16 text-center text-white sm:px-12 sm:py-24">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-36 -right-20 h-96 w-96 rounded-full border border-white/10" />
            <Sparkles className="mx-auto mb-5 text-[#f1d6d3]" size={28} />
            <h2 className="relative mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
              {t.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-sm leading-7 text-white/75">
              {t.ctaText}
            </p>
            <button
              onClick={openBooking}
              className="relative mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#a66c70] transition hover:-translate-y-1 hover:shadow-xl"
            >
              {t.bookNow} <ArrowUpRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-[#eadbd8] bg-[#f8efed] dark:border-white/10 dark:bg-[#211c20]"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-3 lg:px-12">
          <div>
            <a
              href="#home"
              className="font-serif text-3xl font-bold tracking-[0.15em] text-[#a66c70]"
            >
              MOHINUR.
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#928181] dark:text-gray-400">
              {t.experienceText}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4cfcc] text-[#a66c70] transition hover:bg-[#a66c70] hover:text-white dark:border-white/20"
              >
                <Sparkles size={18} />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4cfcc] text-[#a66c70] transition hover:bg-[#a66c70] hover:text-white dark:border-white/20"
              >
                <Send size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl">{t.contacts}</h3>
            <div className="mt-6 space-y-4 text-sm text-[#928181] dark:text-gray-400">
              <p className="flex items-center gap-3">
                <MapPin size={17} className="text-[#a66c70]" />
                {t.address}
              </p>
              <p className="flex items-center gap-3">
                <Clock size={17} className="text-[#a66c70]" />
                {t.schedule}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={17} className="text-[#a66c70]" /> +998 90 000 00 00
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl">{t.social}</h3>
            <p className="mt-5 text-sm leading-7 text-[#928181] dark:text-gray-400">
              {t.heroText}
            </p>
            <button
              onClick={openBooking}
              className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#a66c70]"
            >
              {t.booking} <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="border-t border-[#eadbd8] px-5 py-6 text-center text-xs text-[#9a8989] dark:border-white/10">
          © {new Date().getFullYear()} MOHINUR BEAUTY STUDIO. {t.rights}
        </div>
      </footer>

      {/* MODALS */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-md rounded-3xl border border-[#eadbd8] bg-[#fffaf8] p-7 shadow-2xl dark:border-white/10 dark:bg-[#211c20] sm:p-9"
          >
            <button
              onClick={() => {
                setModal(null);
                setMessage("");
              }}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f3e5e3] text-[#a66c70] dark:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="mb-7">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#b47b80]">
                MOHINUR BEAUTY
              </span>
              <h2 className="mt-3 font-serif text-3xl">
                {modal === "booking"
                  ? t.bookingTitle
                  : modal === "login"
                  ? t.loginTitle
                  : t.registerTitle}
              </h2>
            </div>

            {modal === "booking" ? (
              <form onSubmit={submitBooking} className="space-y-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.name}
                  className="w-full rounded-xl border border-[#eadbd8] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#a66c70] dark:border-white/10 dark:bg-[#302930]"
                />
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={t.phone}
                  className="w-full rounded-xl border border-[#eadbd8] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#a66c70] dark:border-white/10 dark:bg-[#302930]"
                />
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full rounded-xl border border-[#eadbd8] bg-white px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-[#302930]"
                >
                  <option value="lash">{t.lashOption}</option>
                  <option value="brow">{t.browOption}</option>
                  <option value="correction">{t.correctionOption}</option>
                </select>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-[#eadbd8] bg-white px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-[#302930]"
                />
                {message && (
                  <p className="rounded-xl bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-300">
                    {message}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#a66c70] py-4 text-sm font-bold text-white transition hover:bg-[#905a60]"
                >
                  {t.send}
                </button>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage(
                    "Демо-форма: подключите Firebase Authentication для настоящей авторизации."
                  );
                }}
                className="space-y-4"
              >
                {modal === "register" && (
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66c70]"
                      size={17}
                    />
                    <input
                      required
                      placeholder={t.name}
                      className="w-full rounded-xl border border-[#eadbd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#a66c70] dark:border-white/10 dark:bg-[#302930]"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66c70]"
                    size={17}
                  />
                  <input
                    required
                    type="email"
                    placeholder={t.email}
                    className="w-full rounded-xl border border-[#eadbd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#a66c70] dark:border-white/10 dark:bg-[#302930]"
                  />
                </div>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a66c70]"
                    size={17}
                  />
                  <input
                    required
                    type="password"
                    minLength={6}
                    placeholder={t.password}
                    className="w-full rounded-xl border border-[#eadbd8] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#a66c70] dark:border-white/10 dark:bg-[#302930]"
                  />
                </div>
                {message && (
                  <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
                    {message}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#a66c70] py-4 text-sm font-bold text-white transition hover:bg-[#905a60]"
                >
                  {modal === "login" ? t.enter : t.create}
                </button>
                <p className="text-center text-xs text-[#928181]">
                  {modal === "login" ? t.noAccount : t.haveAccount}
                  <button
                    type="button"
                    onClick={() => {
                      setModal(modal === "login" ? "register" : "login");
                      setMessage("");
                    }}
                    className="ml-1 font-bold text-[#a66c70]"
                  >
                    {modal === "login" ? t.register : t.login}
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
