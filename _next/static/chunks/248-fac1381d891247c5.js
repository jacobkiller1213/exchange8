"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [248],
  {
    93331: (e, r, s) => {
      s.d(r, { b: () => l, g: () => a });
      let l = {
          waiting: {
            label: "Заявка создана",
            color: "warning",
            icon: "lucide:file-plus",
            description:
              "Ваша заявка успешно создана и ожидает оплаты. Пожалуйста, отправьте указанную сумму на адрес кошелька в течение 60 минут.",
          },
          processing: {
            label: "Деньги поступили",
            color: "primary",
            icon: "lucide:check-circle",
            description:
              "Мы получили ваш платеж. Средства находятся в обработке и скоро будут отправлены на указанный кошелек.",
          },
          paid: {
            label: "Оператор обрабатывает заявку",
            color: "primary",
            icon: "lucide:loader",
            description:
              "Наш оператор проверяет детали транзакции. Обычно это занимает от 5 до 15 минут в зависимости от загруженности сети.",
          },
          stoped: {
            label: "Заявка удержана",
            color: "danger",
            icon: "lucide:alert-triangle",
            description:
              "Возникли проблемы с обработкой вашей заявки. Пожалуйста, свяжитесь с нашей службой поддержки для разрешения ситуации.",
          },
          success: {
            label: "Заявка выполнена",
            color: "success",
            icon: "lucide:check-circle-2",
            description:
              "Обмен успешно завершен! Средства отправлены на указанный кошелек. Благодарим за использование нашего сервиса.",
          },
          rejected_time: {
            label: "Заявка закрыта",
            color: "danger",
            icon: "tabler:clock-off",
            description:
              "Время для оплаты заявки истекло. Заявка была автоматически закрыта. Вы можете создать новую заявку на обмен.",
          },
        },
        a = [
          { key: "waiting", step: 1 },
          { key: "processing", step: 2 },
          { key: "paid", step: 3 },
          { key: "success", step: 4 },
        ];
    },
    19194: (e, r, s) => {
      s.d(r, { C: () => l });
      let l = {
        name: "Bix-Bite",
        description: "Bix-Bite - лучший обменик в снг",
        navItems: [
          { name: "Главная", path: "/" },
          { name: "Обмен", path: "/exchange" },
          { name: "Правила", path: "/rules" },
          { name: "FAQ", path: "/faq" },
          { name: "Контакты", path: "/contacts" },
        ],
        links: {
          telegram: "https://t.me/bixbite_ex",
          domain: "https://bix-bite.com",
        },
      };
    },
    44210: (e, r, s) => {
      s.d(r, { default: () => R });
      var l = s(95155),
        a = s(12115),
        n = s(53600),
        c = s(36205),
        i = s(18898),
        t = s(42433),
        o = s(17572),
        d = s(43779),
        h = s(94019),
        x = s(47616),
        m = s(37892),
        u = s(69749),
        p = s(28685),
        j = s(3972),
        f = s(67828),
        g = s(30705),
        N = s(24788),
        b = s(76046),
        y = s(31988),
        v = s(7792),
        I = s(67113);
      let k = () => {
        let { theme: e, setTheme: r } = (0, I.D)(),
          s = "dark" === e;
        return (0, l.jsx)(y.I, {
          content: "Переключить на ".concat(s ? "светлую" : "темную", " тему"),
          placement: "bottom",
          children: (0, l.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, l.jsx)(N.In, {
                icon: "lucide:sun",
                className: "text-default-500 ".concat(!s && "text-primary-500"),
              }),
              (0, l.jsx)(v.Z, {
                isSelected: s,
                onValueChange: () => r("light" === e ? "dark" : "light"),
                size: "sm",
                color: "primary",
                className: "mx-1",
              }),
              (0, l.jsx)(N.In, {
                icon: "lucide:moon",
                className: "text-default-500 ".concat(s && "text-primary-500"),
              }),
            ],
          }),
        });
      };
      var w = s(19194),
        _ = s(51747),
        A = s(36021);
      let C = () => {
          let [e, r] = a.useState(!1),
            s = (0, b.usePathname)(),
            { accountData: y, setAccountData: v } = (0, _.E)(),
            I = async () => {
              try {
                await A.A.logout(),
                  (window.location.href = "/"),
                  v({ email: "", referral: "", token: "" });
              } catch (e) {
                return;
              }
            };
          return (0, l.jsxs)(n.H, {
            isBordered: !0,
            isMenuOpen: e,
            onMenuOpenChange: r,
            className: "bg-background",
            maxWidth: "xl",
            children: [
              (0, l.jsxs)(c.t, {
                children: [
                  (0, l.jsx)(i.w, {
                    "aria-label": e ? "Закрыть меню" : "Открыть меню",
                    className: "sm:hidden",
                  }),
                  (0, l.jsx)(t.$, {
                    children: (0, l.jsxs)(o.h, {
                      href: "/",
                      className:
                        "font-bold text-inherit flex items-center gap-2",
                      children: [
                        (0, l.jsx)(N.In, {
                          icon: "lucide:refresh-cw",
                          className: "text-primary text-xl",
                        }),
                        (0, l.jsx)("p", {
                          className: "text-primary text-xl",
                          children: "Bix-Bite",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(c.t, {
                className: "max-md:hidden flex gap-4",
                justify: "center",
                children: w.C.navItems.map((e) =>
                  (0, l.jsx)(
                    d.p,
                    {
                      isActive: s === e.path,
                      children: (0, l.jsx)(o.h, {
                        href: e.path,
                        color: s === e.path ? "primary" : "foreground",
                        className: "font-medium",
                        children: e.name,
                      }),
                    },
                    e.path
                  )
                ),
              }),
              (0, l.jsxs)(c.t, {
                justify: "end",
                children: [
                  (0, l.jsx)(d.p, {
                    className: "hidden sm:flex",
                    children: (0, l.jsx)(k, {}),
                  })
                ],
              }),
              (0, l.jsxs)(f.n, {
                children: [
                  w.C.navItems.map((e) =>
                    (0, l.jsx)(
                      g.X,
                      {
                        children: (0, l.jsx)(o.h, {
                          href: e.path,
                          color: s === e.path ? "primary" : "foreground",
                          className: "w-full",
                          size: "lg",
                          children: e.name,
                        }),
                      },
                      e.path
                    )
                  ),
                  (0, l.jsx)(g.X, { children: (0, l.jsx)(k, {}) }),
                ],
              }),
            ],
          });
        },
        P = () => {
          let { accountData: e, setAccountData: r } = (0, _.E)();
          return (0, l.jsx)("footer", {
            className: "bg-content1 py-8 border-t border-divider",
            children: (0, l.jsxs)("div", {
              className: "container mx-auto px-4 max-w-7xl",
              children: [
                (0, l.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2 mb-4",
                          children: [
                            (0, l.jsx)(N.In, {
                              icon: "lucide:refresh-cw",
                              className: "text-primary text-xl",
                            }),
                            (0, l.jsx)("h3", {
                              className: "text-lg font-bold text-primary",
                              children: "Bix-Bite",
                            }),
                          ],
                        }),
                        (0, l.jsx)("p", {
                          className: "text-default-500 mb-4",
                          children:
                            "Быстрый и безопасный обмен криптовалют по выгодному курсу",
                        }),
                        (0, l.jsx)("div", {
                          className: "flex gap-4",
                          children: (0, l.jsxs)(o.h, {
                            href: w.C.links.telegram,
                            isExternal: !0,
                            color: "foreground",
                            "aria-label": "Telegram",
                            className: " flex items-center gap-2",
                            children: [
                              (0, l.jsx)(N.In, {
                                icon: "logos:telegram",
                                className: "text-2xl",
                              }),
                              (0, l.jsx)("div", {
                                className: "text-sm",
                                children: "Поддержка",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Навигация",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(o.h, {
                                href: "/",
                                color: "foreground",
                                children: "Главная",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(o.h, {
                                href: "/exchange",
                                color: "foreground",
                                children: "Обмен",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(o.h, {
                                href: "/rules",
                                color: "foreground",
                                children: "Правила",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(o.h, {
                                href: "/contacts",
                                color: "foreground",
                                children: "Контакты",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Аккаунт",
                        }),
                        e.token
                          ? (0, l.jsx)("ul", {
                              className: "space-y-2",
                              children: (0, l.jsx)("li", {
                                children: (0, l.jsx)(o.h, {
                                  href: "/profile",
                                  color: "foreground",
                                  children: "Личный кабинет",
                                }),
                              }),
                            })
                          : (0, l.jsxs)("ul", {
                              className: "space-y-2 hidden",
                              children: [
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)(o.h, {
                                    href: "/join/login",
                                    color: "foreground",
                                    children: "Вход",
                                  }),
                                }),
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)(o.h, {
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
                (0, l.jsx)("div", {
                  className:
                    "border-t border-divider mt-8 pt-6 text-center text-default-500",
                  children: (0, l.jsx)("p", {
                    children: "\xa9 2021-2025 Bix-Bite. Все права защищены.",
                  }),
                }),
              ],
            }),
          });
        },
        R = (e) => {
          let { children: r } = e,
            s = (0, b.usePathname)();
          return (0, l.jsxs)("div", {
            className: "min-h-screen flex flex-col overflow-x-hidden",
            children: [
              (0, l.jsx)(C, {}),
              (0, l.jsx)("main", {
                className: "flex-grow overflow-x-hidden ".concat(
                  "/" == s ? "" : "container mx-auto px-4 py-8 max-w-7xl"
                ),
                children: r,
              }),
              (0, l.jsx)(P, {}),
            ],
          });
        };
    },
    38157: (e, r, s) => {
      s.d(r, { i: () => t });
      var l = s(23576),
        a = s(43415),
        n = s(2818);
      let c = (0, l.w)({
        server: { API_URL: a.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: a.z.string().url() },
        runtimeEnv: {
          API_URL: n.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin + "/exchange",
        },
      });
      var i = s(51747);
      let t = s(82651).A.create({
        withCredentials: !0,
        baseURL: c.NEXT_PUBLIC_API_URL,
      });
      t.interceptors.request.use((e) => {
        let r = i.E.getState().accountData;
        return r && r.token && (e.headers["auth-token"] = r.token), e;
      });
    },
    36021: (e, r, s) => {
      s.d(r, { A: () => n });
      var l = s(38157);
      class a {
        async login(e, r) {
          return l.i.post("/user/auth/login", { email: e, password: r });
        }
        async register(e, r) {
          return l.i.post("/user/auth/registration", { email: e, password: r });
        }
        async orders() {
          return l.i.get("/user/orders/list");
        }
        async logout() {
          return l.i.get("/user/logout");
        }
        async check_session() {
          return l.i.get("/user/check-session");
        }
      }
      let n = new a();
    },
    51747: (e, r, s) => {
      s.d(r, { E: () => n });
      var l = s(99827),
        a = s(60709);
      let n = (0, l.v)(
        (0, a.Zr)(
          (e) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (r) => e({ accountData: r }),
          }),
          { name: "account" }
        )
      );
    },
  },
]);
