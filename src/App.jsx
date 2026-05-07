import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Scissors,
  Star,
  ShieldCheck,
  Send,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    title: "Чоловіча стрижка",
    price: "від 400 грн",
    time: "45 хв",
    description: "Охайна форма, чисті переходи та укладка під твій стиль.",
  },
  {
    title: "Борода",
    price: "від 250 грн",
    time: "25 хв",
    description: "Контур, форма, догляд і фінальна укладка бороди.",
  },
  {
    title: "Стрижка + борода",
    price: "від 600 грн",
    time: "70 хв",
    description: "Повний образ: стрижка, борода, деталізація та стайлінг.",
  },
  {
    title: "Дитяча стрижка",
    price: "від 300 грн",
    time: "35 хв",
    description: "Спокійно, акуратно та без зайвого стресу для дитини.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Чистота та стерильність",
    text: "Інструменти обробляються після кожного клієнта.",
  },
  {
    icon: Clock,
    title: "Запис без черг",
    text: "Клієнт приходить у свій час і не чекає в салоні.",
  },
  {
    icon: Star,
    title: "Індивідуальний підхід",
    text: "Підбір форми стрижки під обличчя, стиль і звички.",
  },
];

const availableTimes = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "18:00", "19:00"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Стрижка + борода",
    date: "",
    time: "",
    comment: "",
  });
  const [status, setStatus] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.time) {
      setStatus("Заповни, будь ласка, ім’я, телефон, дату та час.");
      return;
    }

    // Тут пізніше можна підключити Telegram Bot API, email-сервіс або Google Sheets.
    console.log("Нова заявка:", form);
    setStatus("Дякуємо! Заявка створена. Барбер зв’яжеться з клієнтом для підтвердження.");
    setForm({
      name: "",
      phone: "",
      service: "Стрижка + борода",
      date: "",
      time: "",
      comment: "",
    });
  };

  const navItems = [
    { label: "Послуги", href: "#services" },
    { label: "Роботи", href: "#gallery" },
    { label: "Запис", href: "#booking" },
    { label: "Контакти", href: "#contacts" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20">
              <Scissors size={21} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Barber</p>
              <p className="font-semibold leading-none">Home Studio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-amber-400">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 md:inline-flex"
          >
            Записатися
          </a>

          <button
            type="button"
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Відкрити меню"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-neutral-950 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-neutral-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-amber-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
                <Star size={16} />
                Приватний барбер у домашній студії
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">
                
                А ви шо бандіти? таксуєте? чи ще у глобусі?
                Підараси, закази блять по 100 крон возять за 2 км з подачею
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Акуратні чоловічі стрижки, борода та повний догляд в атмосфері приватної студії. Без черг, поспіху та зайвого шуму.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-neutral-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300"
                >
                  Записатися онлайн
                  <Calendar size={19} />
                </a>
                <a
                  href="tel:+380991234567"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  <Phone size={19} />
                  +38 099 123 45 67
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-black text-white">5+</p>
                  <p className="text-sm text-neutral-400">років досвіду</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">700+</p>
                  <p className="text-sm text-neutral-400">стрижок</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">4.9</p>
                  <p className="text-sm text-neutral-400">оцінка клієнтів</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80"
                  alt="Барбер робить чоловічу стрижку"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-neutral-950/75 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-300">сьогодні</p>
                  <p className="mt-1 text-2xl font-bold">Є вільні місця</p>
                  <p className="mt-2 text-sm text-neutral-300">Обери послугу, дату і зручний час у формі нижче.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-3xl border border-white/10 bg-neutral-900/70 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Послуги</p>
                <h2 className="mt-3 text-4xl font-black md:text-5xl">Що можна замовити</h2>
              </div>
              <p className="max-w-xl text-neutral-400">
                Ціни можна швидко змінити під реальний прайс барбера. Усі блоки зроблені так, щоб сайт легко редагувався.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-amber-400/40"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-amber-300">
                    <Scissors size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="font-bold text-amber-300">{service.price}</span>
                    <span className="text-sm text-neutral-400">{service.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-neutral-900/70 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Галерея</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Атмосфера та роботи</h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
                Замініть ці фото на реальні роботи барбера — це сильно підвищить довіру клієнтів.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {gallery.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Приклад роботи барбера ${index + 1}`}
                    className={`w-full object-cover transition duration-500 hover:scale-105 ${
                      index === 0 ? "h-[520px]" : "h-[250px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-neutral-950 shadow-2xl shadow-amber-500/10">
              <p className="text-sm font-bold uppercase tracking-[0.3em]">Онлайн-запис</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Обери зручний час</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-900/80">
                Клієнт залишає заявку, а барбер підтверджує запис у телефоні або месенджері. Для домашньої студії це безпечніше, ніж миттєво публікувати точну адресу.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 rounded-2xl bg-neutral-950/10 p-4">
                  <MapPin size={22} />
                  <span className="font-semibold">Район: центр міста / за домовленістю</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-neutral-950/10 p-4">
                  <Clock size={22} />
                  <span className="font-semibold">Пн–Сб: 10:00–20:00</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Ім’я</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Наприклад, Андрій"
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Телефон або Telegram</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+380... або @username"
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Послуга</span>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                  >
                    {services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Дата</span>
                  <input
                    type="date"
                    name="date"
                    min={minDate}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Час</span>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, time }))}
                        className={`rounded-2xl border px-4 py-3 font-semibold transition ${
                          form.time === time
                            ? "border-amber-400 bg-amber-400 text-neutral-950"
                            : "border-white/10 bg-neutral-950 text-neutral-300 hover:border-amber-400/60"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-neutral-300">Коментар</span>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Наприклад: хочу коротше з боків, верх залишити"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  />
                </label>
              </div>

              {status && (
                <p className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-black text-neutral-950 transition hover:bg-amber-300"
              >
                Надіслати заявку
                <Send size={19} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contacts" className="border-t border-white/10 bg-neutral-950 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-black">Barber Home Studio</p>
            <p className="mt-2 text-neutral-400">Приватний запис на стрижку та догляд за бородою.</p>
          </div>

          <div className="flex flex-col gap-3 text-neutral-300 sm:flex-row sm:items-center sm:gap-5">
            <a href="tel:+380991234567" className="inline-flex items-center gap-2 transition hover:text-amber-300">
              <Phone size={18} />
              +38 099 123 45 67
            </a>
            <a href="https://instagram.com" className="inline-flex items-center gap-2 transition hover:text-amber-300">
           <Phone size={18} />
            </a>
            <a href="#booking" className="inline-flex items-center gap-2 transition hover:text-amber-300">
              <Calendar size={18} />
              Запис
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
