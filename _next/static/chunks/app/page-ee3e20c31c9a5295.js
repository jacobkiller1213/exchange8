(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    56309: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 88542));
    },
    88542: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => _ });
      var i = t(95155),
        r = t(12115),
        s = t(97293),
        l = t(33767),
        n = t(3972),
        o = t(17572),
        c = t(24788),
        d = t(67113);
      let x = () => {
          let { theme: e } = (0, d.D)();
          return (0, i.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [
              (0, i.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute inset-0 ".concat(
                      "dark" === e
                        ? "bg-gradient-to-r from-[#0A2E0A] to-[#0F3B10]"
                        : "bg-gradient-to-r from-[#0F3B10] to-[#164A1B]"
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0,_rgba(255,255,255,0)_50%)]",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(66,189,65,0.1)_0,_rgba(0,0,0,0)_60%)]",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(66,189,65,0.05)_0,_rgba(0,0,0,0)_60%)]",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, i.jsx)(s.Z, {
                  className: "border-none bg-transparent shadow-none",
                  children: (0, i.jsx)(l.U, {
                    className: "py-16",
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col items-center text-center gap-8",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "space-y-4 max-w-2xl",
                          children: [
                            (0, i.jsx)("h2", {
                              className:
                                "text-4xl md:text-5xl font-extrabold text-white",
                              children: "Готовы начать обмен?",
                            }),
                            (0, i.jsx)("p", {
                              className: "text-white/80 text-lg",
                              children:
                                "Присоединяйтесь к тысячам пользователей, которые уже оценили преимущества нашего сервиса. Быстрый обмен, выгодные курсы, надежная защита.",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex flex-wrap gap-4 justify-center",
                          children: [
                            (0, i.jsx)(n.T, {
                              as: o.h,
                              href: "/exchange",
                              color: "default",
                              variant: "solid",
                              size: "lg",
                              className: "font-medium text-lg px-8",
                              endContent: (0, i.jsx)(c.In, {
                                icon: "lucide:arrow-right",
                                className: "text-lg",
                              }),
                              children: "Начать обмен",
                            }),

                          ],
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8",
                          children: [
                            { icon: "lucide:shield", text: "Защита данных" },
                            {
                              icon: "lucide:clock",
                              text: "Быстрые обмены",
                            },
                            {
                              icon: "lucide:trending-up",
                              text: "Лучшие курсы",
                            },
                          ].map((e, a) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className:
                                  "flex items-center justify-center gap-2 bg-white/10 p-4 rounded-lg",
                                children: [
                                  (0, i.jsx)(c.In, {
                                    icon: e.icon,
                                    className: "text-white",
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "text-white font-medium",
                                    children: e.text,
                                  }),
                                ],
                              },
                              a
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        m = () =>
          (0, i.jsx)("div", {
            className: "container mx-auto px-4 py-4 max-w-7xl",
            children: (0, i.jsxs)("div", {
              className:
                "relative overflow-hidden -mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24",
              children: [
                (0, i.jsx)("div", {
                  className: "fixed top-0 left-0 inset-0 -z-10",
                  children: (0, i.jsx)(h, {}),
                }),
                (0, i.jsx)("div", {
                  className: "container mx-auto px-4 py-16 md:py-24",
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-col items-center text-center gap-8 max-w-3xl mx-auto",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, i.jsx)("div", {
                            className: "inline-block",
                            children: (0, i.jsxs)("div", {
                              className:
                                "flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full",
                              children: [
                                (0, i.jsx)(c.In, {
                                  icon: "lucide:zap",
                                  className: "text-primary",
                                }),
                                (0, i.jsx)("span", {
                                  className: "text-primary font-medium",
                                  children: "Мгновенный обмен криптовалют",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("h1", {
                            className:
                              "text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400",
                            children: "Быстрый и безопасный обмен криптовалют",
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "text-base sm:text-xl text-default-600 max-w-xl mx-auto",
                            children:
                              "Обменивайте криптовалюты по выгодному курсу с минимальными комиссиями. Быстро, безопасно и без лишних вопросов.",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-wrap gap-4 justify-center",
                        children: [
                          (0, i.jsx)(n.T, {
                            as: o.h,
                            href: "/exchange",
                            color: "primary",
                            size: "lg",
                            className: "font-medium text-lg px-8 py-6",
                            endContent: (0, i.jsx)(c.In, {
                              icon: "lucide:arrow-right",
                              className: "text-lg",
                            }),
                            children: "Начать обмен",
                          }),
                          (0, i.jsx)(n.T, {
                            as: o.h,
                            href: "/rules",
                            variant: "bordered",
                            size: "lg",
                            className: "font-medium text-lg px-8 py-6",
                            children: "Узнать больше",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center gap-6 pt-4 max-sm:flex-col",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex -space-x-2",
                            children: [
                              [1, 2, 3, 4].map((e) =>
                                (0, i.jsx)(
                                  "div",
                                  {
                                    className:
                                      "w-8 h-8 rounded-full border-2 border-background overflow-hidden",
                                    children: (0, i.jsx)("img", {
                                      src: "https://i.pravatar.cc/100?img=".concat(
                                        e + 10
                                      ),
                                      alt: "User avatar",
                                      className: "w-full h-full object-cover",
                                    }),
                                  },
                                  e
                                )
                              ),
                              (0, i.jsx)("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-medium border-2 border-background",
                                children: "+2K",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "text-default-600",
                            children: [
                              (0, i.jsx)("span", {
                                className: "font-semibold",
                                children: "2,000+",
                              }),
                              " довольных клиентов за последний месяц",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(p, {}),
              ],
            }),
          }),
        h = () =>
          (0, i.jsxs)("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-background",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-blob",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute bottom-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-4000",
              }),
              (0, i.jsx)("div", {
                className: "absolute inset-0 bg-grid-pattern opacity-[0.03]",
              }),
            ],
          }),
        p = () =>
          (0, i.jsx)(i.Fragment, {
            children: [
              {
                icon: "logos:bitcoin",
                top: "25%",
                left: "5%",
                size: "text-3xl",
                animation: "animate-float",
              },
              {
                icon: "logos:ethereum",
                top: "20%",
                right: "10%",
                size: "text-2xl",
                animation: "animate-float animation-delay-2000",
              },
              {
                icon: "simple-icons:tether",
                bottom: "15%",
                left: "15%",
                size: "text-xl",
                animation: "animate-float animation-delay-3000",
              },
              {
                icon: "token-branded:binance",
                top: "40%",
                right: "5%",
                size: "text-2xl",
                animation: "animate-float animation-delay-1000",
              },
              {
                icon: "logos:cardano-icon",
                bottom: "30%",
                right: "10%",
                size: "text-2xl",
                animation: "animate-float animation-delay-4000",
              },
            ].map((e, a) =>
              (0, i.jsx)(
                "div",
                {
                  className: "absolute z-0 "
                    .concat(e.animation, " ")
                    .concat(e.size),
                  style: {
                    top: e.top,
                    left: e.left,
                    right: e.right,
                    bottom: e.bottom,
                  },
                  children: (0, i.jsx)(c.In, { icon: e.icon }),
                },
                a
              )
            ),
          });
      var u = t(26424);
      let g = [
          {
            icon: "lucide:shield-check",
            title: "Безопасность",
            description:
              "Все транзакции защищены современными протоколами шифрования и проходят многоуровневую верификацию",
            color: "from-primary-500 to-primary-600",
            badge: "Гарантия",
            badgeColor: "primary",
            bgPattern:
              "radial-gradient(circle at 20% 20%, rgba(66, 153, 225, 0.15) 0%, transparent 40%)",
            learnMoreLink: "/security",
          },
          {
            icon: "lucide:zap",
            title: "Скорость",
            description:
              "Обмен происходит в течение нескольких минут после подтверждения, без длительного ожидания",
            color: "from-warning-500 to-warning-600",
            badge: "Быстро",
            badgeColor: "warning",
            bgPattern:
              "radial-gradient(circle at 80% 30%, rgba(237, 137, 54, 0.15) 0%, transparent 40%)",
            learnMoreLink: "/speed",
          },
          {
            icon: "lucide:percent",
            title: "Выгодные курсы",
            description:
              "Мы предлагаем конкурентные курсы обмена без скрытых комиссий и дополнительных платежей",
            color: "from-success-500 to-success-600",
            badge: "Выгодно",
            badgeColor: "success",
            bgPattern:
              "radial-gradient(circle at 30% 70%, rgba(72, 187, 120, 0.15) 0%, transparent 40%)",
            learnMoreLink: "/rates",
          },
          {
            icon: "lucide:headphones",
            title: "Поддержка",
            description:
              "Наша команда поддержки всегда готова помочь с любыми вопросами всегда",
            color: "from-secondary-500 to-secondary-600",
            badge: "Всегда на связи",
            badgeColor: "secondary",
            bgPattern:
              "radial-gradient(circle at 70% 80%, rgba(159, 122, 234, 0.15) 0%, transparent 40%)",
            learnMoreLink: "/support",
          },
        ],
        f = () =>
          (0, i.jsx)(u.P.div, {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-100px" },
            variants: {
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            },
            children: g.map((e, a) =>
              (0, i.jsx)(
                u.P.div,
                {
                  variants: {
                    hidden: { opacity: 0, y: 50, rotateY: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                        duration: 0.6,
                      },
                    },
                  },
                  whileHover: {
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  },
                  className: "h-full mt-10",
                  children: (0, i.jsxs)(s.Z, {
                    className:
                      "border border-divider h-full relative overflow-hidden",
                    children: [
                      (0, i.jsx)("div", {
                        className: "absolute inset-0 opacity-50",
                        style: { background: e.bgPattern },
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${feature.color} -translate-y-1/2 translate-x-1/2",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-10 bg-gradient-to-tr ${feature.color}",
                      }),
                      (0, i.jsx)(b, { color: e.badgeColor || "primary" }),
                      (0, i.jsxs)(l.U, {
                        className:
                          "flex flex-col items-center text-center gap-4 p-6 z-10 relative",
                        children: [
                          (0, i.jsx)(u.P.div, {
                            className: "bg-gradient-to-br ".concat(
                              e.color,
                              " p-4 rounded-xl shadow-lg"
                            ),
                            whileHover: {
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.1,
                            },
                            transition: { duration: 0.5 },
                            children: (0, i.jsx)(c.In, {
                              icon: e.icon,
                              className: "text-3xl text-white",
                            }),
                          }),
                          (0, i.jsx)(u.P.h3, {
                            className: "text-xl font-bold",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.3 },
                            children: e.title,
                          }),
                          (0, i.jsx)(u.P.p, {
                            className: "text-default-500",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.4 },
                            children: e.description,
                          }),
                          (0, i.jsx)(u.P.div, {
                            className:
                              "w-12 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent mt-2",
                            initial: { width: 0 },
                            animate: { width: "3rem" },
                            transition: { delay: 0.5, duration: 0.5 },
                          }),
                          (0, i.jsx)(u.P.div, {
                            className:
                              "absolute -z-10 inset-0 opacity-0 bg-gradient-to-b from-transparent to-primary-50/20 dark:to-primary-900/10",
                            whileHover: { opacity: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                a
              )
            ),
          }),
        b = (e) => {
          let { color: a = "primary" } = e,
            t = r.useMemo(
              () =>
                Array.from({ length: 5 }).map((e, a) => ({
                  id: a,
                  x: 100 * Math.random(),
                  y: 100 * Math.random(),
                  size: 4 * Math.random() + 2,
                  duration: 10 * Math.random() + 10,
                })),
              []
            );
          return (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
              (0, i.jsx)(
                u.P.div,
                {
                  className: "absolute rounded-full bg-"
                    .concat(a, "-400 dark:bg-")
                    .concat(a, "-500"),
                  style: {
                    left: "".concat(e.x, "%"),
                    top: "".concat(e.y, "%"),
                    width: "".concat(e.size, "px"),
                    height: "".concat(e.size, "px"),
                  },
                  animate: { y: [0, -20, 0], opacity: [0, 0.8, 0] },
                  transition: {
                    duration: e.duration,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2 * e.id,
                  },
                },
                e.id
              )
            ),
          });
        };
      var j = t(31988);
      let y = [
          {
            icon: "lucide:users",
            value: "10,000+",
            label: "Пользователей",
            color: "bg-primary-50 text-primary-500",
            progress: 80,
            tooltip: "Более 10,000 активных пользователей доверяют нам",
            secondaryIcon: "lucide:trending-up",
          },
          {
            icon: "lucide:refresh-cw",
            value: "50,000+",
            label: "Обменов",
            color: "bg-success-50 text-success-500",
            progress: 90,
            tooltip: "Более 50,000 успешных обменов за всё время",
            secondaryIcon: "lucide:check-circle",
          },
          {
            icon: "lucide:wallet",
            value: "₿1,200+",
            label: "Объем обменов",
            color: "bg-warning-50 text-warning-500",
            progress: 75,
            tooltip: "Общий объем обменов превышает 1,200 BTC",
            secondaryIcon: "lucide:bitcoin",
          },
          {
            icon: "lucide:star",
            value: "4.9/5",
            label: "Рейтинг",
            color: "bg-secondary-50 text-secondary-500",
            progress: 95,
            tooltip: "Средний рейтинг 4.9 из 5 на основе отзывов клиентов",
            secondaryIcon: "lucide:thumbs-up",
          },
        ],
        v = () => {
          let [e, a] = (0, r.useState)(!1);
          return (0, i.jsx)(u.P.div, {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            variants: {
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            },
            onViewportEnter: () => a(!0),
            children: y.map((a, t) =>
              (0, i.jsx)(
                u.P.div,
                {
                  variants: {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                        duration: 0.6,
                      },
                    },
                  },
                  whileHover: {
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  },
                  transition: { duration: 0.3 },
                  children: (0, i.jsx)(s.Z, {
                    className:
                      "border border-divider h-full relative overflow-hidden",
                    children: (0, i.jsxs)(l.U, {
                      className:
                        "flex flex-col items-center text-center gap-4 p-6 z-10 relative",
                      children: [
                        (0, i.jsx)(j.I, {
                          content: a.tooltip,
                          children: (0, i.jsxs)(u.P.p, {
                            className:
                              "text-3xl font-bold inline-flex items-center gap-2",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.3 + 0.1 * t },
                            children: [
                              (0, i.jsx)(c.In, {
                                icon: a.secondaryIcon,
                                className: "text-lg ".concat(
                                  a.color.split(" ")[1]
                                ),
                              }),
                              (0, i.jsx)(N, {
                                value: a.value,
                                animate: e,
                                delay: 0.5 + 0.2 * t,
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("p", {
                          className: "text-default-500",
                          children: a.label,
                        }),
                      ],
                    }),
                  }),
                },
                t
              )
            ),
          });
        },
        N = (e) => {
          let { value: a, animate: t, delay: s = 0 } = e,
            [l, n] = (0, r.useState)("0");
          return (
            (0, r.useEffect)(() => {
              if (!t) return;
              let e = a.replace(/[^0-9.]/g, ""),
                i = a.replace(e, ""),
                r = parseFloat(e),
                l = 1e3 / 60,
                o = Math.round(1500 / (1e3 / 60)),
                c = (e) => e * (2 - e),
                d = 0,
                x = setTimeout(() => {
                  let e = setInterval(() => {
                    let t = Math.round(r * c(++d / o));
                    n("".concat(t).concat(i)),
                      d === o && (clearInterval(e), n(a));
                  }, l);
                }, 1000);
              return () => clearTimeout(x);
            }, [t, a, s]),
            (0, i.jsx)("span", { children: l })
          );
        };
      var w = t(44210),
        I = t(51823),
        k = t(88629),
        P = t(84403);
      function _() {
        let {
          data: e = [],
          isLoading: a,
          isError: t,
        } = (0, k.I)({
          queryKey: ["orders_history"],
          queryFn: async () => (await I.A.orders()).data,
          placeholderData: P.rX,
        });
        return (0, i.jsx)(w.default, {
          children: (0, i.jsxs)("div", {
            className: "space-y-20",
            children: [
              (0, i.jsx)(m, {}),
              (0, i.jsx)(u.P.div, {
                className: "relative py-16 overflow-hidden",
                initial: { backgroundColor: "rgba(var(--content1), 0)" },
                whileInView: { backgroundColor: "rgba(var(--content1), 0.5)" },
                transition: { duration: 0.8 },
                children: (0, i.jsxs)("div", {
                  className: "container mx-auto px-4 relative z-10",
                  children: [
                    (0, i.jsxs)(u.P.div, {
                      className: "mb-12 text-center",
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.8 },
                      viewport: { once: !0 },
                      style: { marginBottom: "50px" },
                      children: [
                        (0, i.jsx)(u.P.span, {
                          className:
                            "inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-2 px-4 py-1 rounded-full bg-primary/10",
                          initial: { scale: 0 },
                          whileInView: { scale: 1 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            delay: 0.2,
                          },
                          viewport: { once: !0 },
                          children: "Преимущества",
                        }),
                        (0, i.jsx)(u.P.h2, {
                          className: "text-3xl md:text-4xl font-extrabold mb-4",
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          transition: { delay: 0.3 },
                          viewport: { once: !0 },
                          children: "Почему выбирают нас",
                        }),
                        (0, i.jsx)(u.P.div, {
                          className:
                            "w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full mx-auto",
                          initial: { width: 0 },
                          whileInView: { width: "6rem" },
                          transition: { delay: 0.4, duration: 0.8 },
                          viewport: { once: !0 },
                        }),
                        (0, i.jsx)(u.P.p, {
                          className: "mt-4 text-default-500 max-w-2xl mx-auto",
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          transition: { delay: 0.5 },
                          viewport: { once: !0 },
                          children:
                            "Наш сервис предлагает лучшие условия для обмена криптовалют, обеспечивая безопасность, скорость и выгодные курсы",
                        }),
                      ],
                    }),
                    (0, i.jsx)(f, {}),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: "container mx-auto px-4 py-16",
                children: [
                  (0, i.jsxs)(u.P.div, {
                    className: "mb-12 text-center",
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    viewport: { once: !0 },
                    style: { marginBottom: "50px" },
                    children: [
                      (0, i.jsx)(u.P.span, {
                        className:
                          "inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-2 px-4 py-1 rounded-full bg-primary/10",
                        initial: { scale: 0 },
                        whileInView: { scale: 1 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                          delay: 0.2,
                        },
                        viewport: { once: !0 },
                        children: "Статистика",
                      }),
                      (0, i.jsx)(u.P.h2, {
                        className: "text-3xl md:text-4xl font-extrabold mb-4",
                        initial: { opacity: 0 },
                        whileInView: { opacity: 1 },
                        transition: { delay: 0.3 },
                        viewport: { once: !0 },
                        children: "Наши достижения",
                      }),
                      (0, i.jsx)(u.P.div, {
                        className:
                          "w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full mx-auto",
                        initial: { width: 0 },
                        whileInView: { width: "6rem" },
                        transition: { delay: 0.4, duration: 0.8 },
                        viewport: { once: !0 },
                      }),
                      (0, i.jsx)(u.P.p, {
                        className: "mt-4 text-default-500 max-w-2xl mx-auto",
                        initial: { opacity: 0 },
                        whileInView: { opacity: 1 },
                        transition: { delay: 0.5 },
                        viewport: { once: !0 },
                        children:
                          "За время работы нашего сервиса мы помогли тысячам клиентов совершить обмен криптовалют на выгодных условиях",
                      }),
                    ],
                  }),
                  (0, i.jsx)(v, {}),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-16 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-24",
                children: (0, i.jsx)(x, {}),
              }),
            ],
          }),
        });
      }
    },
    19194: (e, a, t) => {
      "use strict";
      t.d(a, { C: () => i });
      let i = {
        name: "CryptoCoinHub",
        description: "CryptoCoinHub - лучший обменик в снг",
        navItems: [
          { name: "Главная", path: "/" },
          { name: "Обмен", path: "/exchange" },
          { name: "Правила", path: "/rules" },
          { name: "FAQ", path: "/faq" },
          { name: "Контакты", path: "/contacts" },
        ],
        links: {
          telegram: "https://t.me/cryptocoinhub_net",
          domain: "https://cryptocoinhub.net",
        },
      };
    },
    44210: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => A });
      var i = t(95155),
        r = t(12115),
        s = t(53600),
        l = t(36205),
        n = t(18898),
        o = t(42433),
        c = t(17572),
        d = t(43779),
        x = t(94019),
        m = t(47616),
        h = t(37892),
        p = t(69749),
        u = t(28685),
        g = t(3972),
        f = t(67828),
        b = t(30705),
        j = t(24788),
        y = t(76046),
        v = t(31988),
        N = t(7792),
        w = t(67113);
      let I = () => {
        let { theme: e, setTheme: a } = (0, w.D)(),
          t = "dark" === e;
        return (0, i.jsx)(v.I, {
          content: "Переключить на ".concat(t ? "светлую" : "темную", " тему"),
          placement: "bottom",
          children: (0, i.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, i.jsx)(j.In, {
                icon: "lucide:sun",
                className: "text-default-500 ".concat(!t && "text-primary-500"),
              }),
              (0, i.jsx)(N.Z, {
                isSelected: t,
                onValueChange: () => a("light" === e ? "dark" : "light"),
                size: "sm",
                color: "primary",
                className: "mx-1",
              }),
              (0, i.jsx)(j.In, {
                icon: "lucide:moon",
                className: "text-default-500 ".concat(t && "text-primary-500"),
              }),
            ],
          }),
        });
      };
      var k = t(19194),
        P = t(51747),
        _ = t(36021);
      let z = () => {
          let [e, a] = r.useState(!1),
            t = (0, y.usePathname)(),
            { accountData: v, setAccountData: N } = (0, P.E)(),
            w = async () => {
              try {
                await _.A.logout(),
                  (window.location.href = "/"),
                  N({ email: "", referral: "", token: "" });
              } catch (e) {
                return;
              }
            };
          return (0, i.jsxs)(s.H, {
            isBordered: !0,
            isMenuOpen: e,
            onMenuOpenChange: a,
            className: "bg-background",
            maxWidth: "xl",
            children: [
              (0, i.jsxs)(l.t, {
                children: [
                  (0, i.jsx)(n.w, {
                    "aria-label": e ? "Закрыть меню" : "Открыть меню",
                    className: "sm:hidden",
                  }),
                  (0, i.jsx)(o.$, {
                    children: (0, i.jsxs)(c.h, {
                      href: "/",
                      className:
                        "font-bold text-inherit flex items-center gap-2",
                      children: [
                        (0, i.jsx)(j.In, {
                          icon: "lucide:refresh-cw",
                          className: "text-primary text-xl",
                        }),
                        (0, i.jsx)("p", {
                          className: "text-primary text-xl",
                          children: "CryptoCoinHub",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(l.t, {
                className: "max-md:hidden flex gap-4",
                justify: "center",
                children: k.C.navItems.map((e) =>
                  (0, i.jsx)(
                    d.p,
                    {
                      isActive: t === e.path,
                      children: (0, i.jsx)(c.h, {
                        href: e.path,
                        color: t === e.path ? "primary" : "foreground",
                        className: "font-medium",
                        children: e.name,
                      }),
                    },
                    e.path
                  )
                ),
              }),
              (0, i.jsxs)(l.t, {
                justify: "end",
                children: [
                  (0, i.jsx)(d.p, {
                    className: "hidden sm:flex",
                    children: (0, i.jsx)(I, {}),
                  }),

                ],
              }),
              (0, i.jsxs)(f.n, {
                children: [
                  k.C.navItems.map((e) =>
                    (0, i.jsx)(
                      b.X,
                      {
                        children: (0, i.jsx)(c.h, {
                          href: e.path,
                          color: t === e.path ? "primary" : "foreground",
                          className: "w-full",
                          size: "lg",
                          children: e.name,
                        }),
                      },
                      e.path
                    )
                  ),
                  (0, i.jsx)(b.X, { children: (0, i.jsx)(I, {}) }),
                ],
              }),
            ],
          });
        },
        C = () => {
          let { accountData: e, setAccountData: a } = (0, P.E)();
          return (0, i.jsx)("footer", {
            className: "bg-content1 py-8 border-t border-divider",
            children: (0, i.jsxs)("div", {
              className: "container mx-auto px-4 max-w-7xl",
              children: [
                (0, i.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-2 mb-4",
                          children: [
                            (0, i.jsx)(j.In, {
                              icon: "lucide:refresh-cw",
                              className: "text-primary text-xl",
                            }),
                            (0, i.jsx)("h3", {
                              className: "text-lg font-bold text-primary",
                              children: "CryptoCoinHub",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: "text-default-500 mb-4",
                          children:
                            "Быстрый и безопасный обмен криптовалют по выгодному курсу",
                        }),
                        (0, i.jsx)("div", {
                          className: "flex gap-4",
                          children: (0, i.jsxs)(c.h, {
                            href: k.C.links.telegram,
                            isExternal: !0,
                            color: "foreground",
                            "aria-label": "Telegram",
                            className: " flex items-center gap-2",
                            children: [
                              (0, i.jsx)(j.In, {
                                icon: "logos:telegram",
                                className: "text-2xl",
                              }),
                              (0, i.jsx)("div", {
                                className: "text-sm",
                                children: "Поддержка",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Навигация",
                        }),
                        (0, i.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(c.h, {
                                href: "/",
                                color: "foreground",
                                children: "Главная",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(c.h, {
                                href: "/exchange",
                                color: "foreground",
                                children: "Обмен",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(c.h, {
                                href: "/rules",
                                color: "foreground",
                                children: "Правила",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(c.h, {
                                href: "/contacts",
                                color: "foreground",
                                children: "Контакты",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Аккаунт",
                        }),
                        e.token
                          ? (0, i.jsx)("ul", {
                              className: "space-y-2",
                              children: (0, i.jsx)("li", {
                                children: (0, i.jsx)(c.h, {
                                  href: "/profile",
                                  color: "foreground",
                                  children: "Личный кабинет",
                                }),
                              }),
                            })
                          : (0, i.jsxs)("ul", {
                              className: "space-y-2",
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(c.h, {
                                    href: "/join/login",
                                    color: "foreground",
                                    children: "Вход",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(c.h, {
                                    href: "/join/register",
                                    color: "foreground",
                                    children: "Регистрация",
                                  }),
                                }),
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "border-t border-divider mt-8 pt-6 text-center text-default-500",
                  children: (0, i.jsx)("p", {
                    children: "\xa9 2021-2025 CryptoCoinHub. Все права защищены.",
                  }),
                }),
              ],
            }),
          });
        },
        A = (e) => {
          let { children: a } = e,
            t = (0, y.usePathname)();
          return (0, i.jsxs)("div", {
            className: "min-h-screen flex flex-col overflow-x-hidden",
            children: [
              (0, i.jsx)(z, {}),
              (0, i.jsx)("main", {
                className: "flex-grow overflow-x-hidden ".concat(
                  "/" == t ? "" : "container mx-auto px-4 py-8 max-w-7xl"
                ),
                children: a,
              }),
              (0, i.jsx)(C, {}),
            ],
          });
        };
    },
    38157: (e, a, t) => {
      "use strict";
      t.d(a, { i: () => o });
      var i = t(23576),
        r = t(43415),
        s = t(2818);
      let l = (0, i.w)({
        server: { API_URL: r.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: r.z.string().url() },
        runtimeEnv: {
          API_URL: s.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin,
        },
      });
      var n = t(51747);
      let o = t(82651).A.create({
        withCredentials: !0,
        baseURL: l.NEXT_PUBLIC_API_URL,
      });
      o.interceptors.request.use((e) => {
        let a = n.E.getState().accountData;
        return a && a.token && (e.headers["auth-token"] = a.token), e;
      });
    },
    51823: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => s });
      var i = t(38157);
      class r {
        async orders() {
          return i.i.get("orders/list");
        }
        async order(e) {
          return i.i.get("order/".concat(e));
        }
        async deposit(e) {
          return i.i.get("".concat(this.link, "/deposit/").concat(e));
        }
        constructor() {
          this.link = "/order/bulk";
        }
      }
      let s = new r();
    },
    36021: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => s });
      var i = t(38157);
      class r {
        async login(e, a) {
          return i.i.post("/user/auth/login", { email: e, password: a });
        }
        async register(e, a) {
          return i.i.post("/user/auth/registration", { email: e, password: a });
        }
        async orders() {
          return i.i.get("/user/orders/list");
        }
        async logout() {
          return i.i.get("/user/logout");
        }
        async check_session() {
          return i.i.get("/user/check-session");
        }
      }
      let s = new r();
    },
    51747: (e, a, t) => {
      "use strict";
      t.d(a, { E: () => s });
      var i = t(99827),
        r = t(60709);
      let s = (0, i.v)(
        (0, r.Zr)(
          (e) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (a) => e({ accountData: a }),
          }),
          { name: "account" }
        )
      );
    },
    26424: (e, a, t) => {
      "use strict";
      t.d(a, { P: () => x });
      var i = t(90271),
        r = t(28456),
        s = t(29260),
        l = t(89806),
        n = t(72683),
        o = t(82250),
        c = t(78314);
      let d = (0, o.C)({ ...r.W, ...l.n, ...s.$, ...n.Z }, c.J),
        x = (0, i.I)(d);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [446, 574, 773, 527, 621, 629, 441, 517, 358], () => a(56309)),
      (_N_E = e.O());
  },
]);
