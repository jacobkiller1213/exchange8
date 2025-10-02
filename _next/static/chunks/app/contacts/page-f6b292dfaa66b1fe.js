(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [102],
  {
    37013: (e, s, r) => {
      Promise.resolve().then(r.bind(r, 38539));
    },
    38539: (e, s, r) => {
      "use strict";
      r.r(s), r.d(s, { default: () => h });
      var l = r(95155);
      r(12115);
      var a = r(97293),
        t = r(33767),
        n = r(3972),
        i = r(17572),
        c = r(24788),
        d = r(44210),
        o = r(19194);
      function h() {
        return (0, l.jsx)(d.default, {
          children: (0, l.jsxs)("div", {
            className: "max-w-3xl mx-auto",
            children: [
              (0, l.jsx)("h1", {
                className: "text-3xl font-bold mb-8",
                children: "Контакты",
              }),
              (0, l.jsx)(a.Z, {
                className: "mb-8",
                children: (0, l.jsx)(t.U, {
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col items-center text-center gap-6",
                    children: [
                      (0, l.jsx)("div", {
                        className: "bg-primary/10 p-6 rounded-full",
                        children: (0, l.jsx)(c.In, {
                          icon: "logos:telegram",
                          className: "text-6xl",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-2xl font-bold mb-2",
                            children: "Свяжитесь с нами в Telegram",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-default-500 mb-6",
                            children:
                              "Наша служба поддержки работает всегда готова ответить на все ваши вопросы",
                          }),
                          (0, l.jsxs)(n.T, {
                            as: i.h,
                            href: o.C.links.telegram,
                            target: "_blank",
                            color: "primary",
                            size: "lg",
                            startContent: (0, l.jsx)(c.In, {
                              icon: "logos:telegram",
                            }),
                            children: [
                              "@",
                              o.C.links.telegram.split("t.me/")[1],
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)(a.Z, {
                children: (0, l.jsxs)(t.U, {
                  children: [
                    (0, l.jsx)("h2", {
                      className: "text-xl font-bold mb-4",
                      children: "Часто задаваемые вопросы",
                    }),
                    (0, l.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("h3", {
                              className: "font-semibold mb-2",
                              children: "Как долго выполняется обмен?",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-default-500",
                              children:
                                "Обычно обмен занимает от 5 до 30 минут после получения необходимого количества подтверждений в сети. В периоды высокой загруженности время может увеличиваться.",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("h3", {
                              className: "font-semibold mb-2",
                              children: "Какие комиссии взимаются за обмен?",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-default-500",
                              children:
                                "Комиссия за обмен уже включена в курс. Дополнительно вы оплачиваете только комиссию сети (network fee) при отправке криптовалюты.",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("h3", {
                              className: "font-semibold mb-2",
                              children:
                                "Что делать, если мой обмен задерживается?",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-default-500",
                              children:
                                "Если ваш обмен занимает больше времени, чем обычно, пожалуйста, свяжитесь с нашей службой поддержки в Telegram. Мы оперативно проверим статус вашей заявки.",
                            }),
                          ],
                        }),

                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    19194: (e, s, r) => {
      "use strict";
      r.d(s, { C: () => l });
      let l = {
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
    44210: (e, s, r) => {
      "use strict";
      r.d(s, { default: () => E });
      var l = r(95155),
        a = r(12115),
        t = r(53600),
        n = r(36205),
        i = r(18898),
        c = r(42433),
        d = r(17572),
        o = r(43779),
        h = r(94019),
        x = r(47616),
        m = r(37892),
        j = r(69749),
        u = r(28685),
        f = r(3972),
        p = r(67828),
        g = r(30705),
        N = r(24788),
        b = r(76046),
        v = r(31988),
        I = r(7792),
        y = r(67113);
      let k = () => {
        let { theme: e, setTheme: s } = (0, y.D)(),
          r = "dark" === e;
        return (0, l.jsx)(v.I, {
          content: "Переключить на ".concat(r ? "светлую" : "темную", " тему"),
          placement: "bottom",
          children: (0, l.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, l.jsx)(N.In, {
                icon: "lucide:sun",
                className: "text-default-500 ".concat(!r && "text-primary-500"),
              }),
              (0, l.jsx)(I.Z, {
                isSelected: r,
                onValueChange: () => s("light" === e ? "dark" : "light"),
                size: "sm",
                color: "primary",
                className: "mx-1",
              }),
              (0, l.jsx)(N.In, {
                icon: "lucide:moon",
                className: "text-default-500 ".concat(r && "text-primary-500"),
              }),
            ],
          }),
        });
      };
      var w = r(19194),
        _ = r(51747),
        A = r(36021);
      let C = () => {
          let [e, s] = a.useState(!1),
            r = (0, b.usePathname)(),
            { accountData: v, setAccountData: I } = (0, _.E)(),
            y = async () => {
              try {
                await A.A.logout(),
                  (window.location.href = "/"),
                  I({ email: "", referral: "", token: "" });
              } catch (e) {
                return;
              }
            };
          return (0, l.jsxs)(t.H, {
            isBordered: !0,
            isMenuOpen: e,
            onMenuOpenChange: s,
            className: "bg-background",
            maxWidth: "xl",
            children: [
              (0, l.jsxs)(n.t, {
                children: [
                  (0, l.jsx)(i.w, {
                    "aria-label": e ? "Закрыть меню" : "Открыть меню",
                    className: "sm:hidden",
                  }),
                  (0, l.jsx)(c.$, {
                    children: (0, l.jsxs)(d.h, {
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
                          children: "CryptoCoinHub",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(n.t, {
                className: "max-md:hidden flex gap-4",
                justify: "center",
                children: w.C.navItems.map((e) =>
                  (0, l.jsx)(
                    o.p,
                    {
                      isActive: r === e.path,
                      children: (0, l.jsx)(d.h, {
                        href: e.path,
                        color: r === e.path ? "primary" : "foreground",
                        className: "font-medium",
                        children: e.name,
                      }),
                    },
                    e.path
                  )
                ),
              }),
              (0, l.jsxs)(n.t, {
                justify: "end",
                children: [
                  (0, l.jsx)(o.p, {
                    className: "hidden sm:flex",
                    children: (0, l.jsx)(k, {}),
                  }),

                ],
              }),
              (0, l.jsxs)(p.n, {
                children: [
                  w.C.navItems.map((e) =>
                    (0, l.jsx)(
                      g.X,
                      {
                        children: (0, l.jsx)(d.h, {
                          href: e.path,
                          color: r === e.path ? "primary" : "foreground",
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
          let { accountData: e, setAccountData: s } = (0, _.E)();
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
                              children: "CryptoCoinHub",
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
                          children: (0, l.jsxs)(d.h, {
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
                              children: (0, l.jsx)(d.h, {
                                href: "/",
                                color: "foreground",
                                children: "Главная",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(d.h, {
                                href: "/exchange",
                                color: "foreground",
                                children: "Обмен",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(d.h, {
                                href: "/rules",
                                color: "foreground",
                                children: "Правила",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(d.h, {
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
                                children: (0, l.jsx)(d.h, {
                                  href: "/profile",
                                  color: "foreground",
                                  children: "Личный кабинет",
                                }),
                              }),
                            })
                          : (0, l.jsxs)("ul", {
                              className: "space-y-2",
                              children: [
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)(d.h, {
                                    href: "/join/login",
                                    color: "foreground",
                                    children: "Вход",
                                  }),
                                }),
                                (0, l.jsx)("li", {
                                  children: (0, l.jsx)(d.h, {
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
                    children: "\xa9 2021-2025 CryptoCoinHub. Все права защищены.",
                  }),
                }),
              ],
            }),
          });
        },
        E = (e) => {
          let { children: s } = e,
            r = (0, b.usePathname)();
          return (0, l.jsxs)("div", {
            className: "min-h-screen flex flex-col overflow-x-hidden",
            children: [
              (0, l.jsx)(C, {}),
              (0, l.jsx)("main", {
                className: "flex-grow overflow-x-hidden ".concat(
                  "/" == r ? "" : "container mx-auto px-4 py-8 max-w-7xl"
                ),
                children: s,
              }),
              (0, l.jsx)(P, {}),
            ],
          });
        };
    },
    38157: (e, s, r) => {
      "use strict";
      r.d(s, { i: () => c });
      var l = r(23576),
        a = r(43415),
        t = r(2818);
      let n = (0, l.w)({
        server: { API_URL: a.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: a.z.string().url() },
        runtimeEnv: {
          API_URL: t.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin,
        },
      });
      var i = r(51747);
      let c = r(82651).A.create({
        withCredentials: !0,
        baseURL: n.NEXT_PUBLIC_API_URL,
      });
      c.interceptors.request.use((e) => {
        let s = i.E.getState().accountData;
        return s && s.token && (e.headers["auth-token"] = s.token), e;
      });
    },
    36021: (e, s, r) => {
      "use strict";
      r.d(s, { A: () => t });
      var l = r(38157);
      class a {
        async login(e, s) {
          return l.i.post("/user/auth/login", { email: e, password: s });
        }
        async register(e, s) {
          return l.i.post("/user/auth/registration", { email: e, password: s });
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
      let t = new a();
    },
    51747: (e, s, r) => {
      "use strict";
      r.d(s, { E: () => t });
      var l = r(99827),
        a = r(60709);
      let t = (0, l.v)(
        (0, a.Zr)(
          (e) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (s) => e({ accountData: s }),
          }),
          { name: "account" }
        )
      );
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [574, 773, 441, 517, 358], () => s(37013)), (_N_E = e.O());
  },
]);
