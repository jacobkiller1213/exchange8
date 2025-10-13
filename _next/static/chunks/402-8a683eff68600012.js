"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [402],
  {
    19194: (e, r, s) => {
      s.d(r, { C: () => a });
      let a = {
        name: "CryptAtom",
        description: "CryptAtom - лучший обменик в снг",
        navItems: [
          { name: "Главная", path: "/" },
          { name: "Обмен", path: "/exchange" },
          { name: "Правила", path: "/rules" },
          { name: "FAQ", path: "/faq" },
          { name: "Контакты", path: "/contacts" },
        ],
        links: {
          telegram: "https://t.me/CryptAtom_com",
          domain: "https://CryptAtom.net",
        },
      };
    },
    44210: (e, r, s) => {
      s.d(r, { default: () => P });
      var a = s(95155),
        l = s(12115),
        n = s(53600),
        t = s(36205),
        i = s(18898),
        c = s(42433),
        o = s(17572),
        d = s(43779),
        h = s(94019),
        x = s(47616),
        m = s(37892),
        u = s(69749),
        j = s(28685),
        f = s(3972),
        p = s(67828),
        g = s(30705),
        N = s(24788),
        v = s(76046),
        I = s(31988),
        y = s(7792),
        b = s(67113);
      let w = () => {
        let { theme: e, setTheme: r } = (0, b.D)(),
          s = "dark" === e;
        return (0, a.jsx)(I.I, {
          content: "Переключить на ".concat(s ? "светлую" : "темную", " тему"),
          placement: "bottom",
          children: (0, a.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, a.jsx)(N.In, {
                icon: "lucide:sun",
                className: "text-default-500 ".concat(!s && "text-primary-500"),
              }),
              (0, a.jsx)(y.Z, {
                isSelected: s,
                onValueChange: () => r("light" === e ? "dark" : "light"),
                size: "sm",
                color: "primary",
                className: "mx-1",
              }),
              (0, a.jsx)(N.In, {
                icon: "lucide:moon",
                className: "text-default-500 ".concat(s && "text-primary-500"),
              }),
            ],
          }),
        });
      };
      var k = s(19194),
        A = s(51747),
        _ = s(36021);
      let C = () => {
          let [e, r] = l.useState(!1),
            s = (0, v.usePathname)(),
            { accountData: I, setAccountData: y } = (0, A.E)(),
            b = async () => {
              try {
                await _.A.logout(),
                  (window.location.href = "/"),
                  y({ email: "", referral: "", token: "" });
              } catch (e) {
                return;
              }
            };
          return (0, a.jsxs)(n.H, {
            isBordered: !0,
            isMenuOpen: e,
            onMenuOpenChange: r,
            className: "bg-background",
            maxWidth: "xl",
            children: [
              (0, a.jsxs)(t.t, {
                children: [
                  (0, a.jsx)(i.w, {
                    "aria-label": e ? "Закрыть меню" : "Открыть меню",
                    className: "sm:hidden",
                  }),
                  (0, a.jsx)(c.$, {
                    children: (0, a.jsxs)(o.h, {
                      href: "/",
                      className:
                        "font-bold text-inherit flex items-center gap-2",
                      children: [
                        (0, a.jsx)(N.In, {
                          icon: "lucide:refresh-cw",
                          className: "text-primary text-xl",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-primary text-xl",
                          children: "CryptAtom",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(t.t, {
                className: "max-md:hidden flex gap-4",
                justify: "center",
                children: k.C.navItems.map((e) =>
                  (0, a.jsx)(
                    d.p,
                    {
                      isActive: s === e.path,
                      children: (0, a.jsx)(o.h, {
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
              (0, a.jsxs)(t.t, {
                justify: "end",
                children: [
                  (0, a.jsx)(d.p, {
                    className: "hidden sm:flex",
                    children: (0, a.jsx)(w, {}),
                  }),
                ],
              }),
              (0, a.jsxs)(p.n, {
                children: [
                  k.C.navItems.map((e) =>
                    (0, a.jsx)(
                      g.X,
                      {
                        children: (0, a.jsx)(o.h, {
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
                  (0, a.jsx)(g.X, { children: (0, a.jsx)(w, {}) }),
                ],
              }),
            ],
          });
        },
        R = () => {
          let { accountData: e, setAccountData: r } = (0, A.E)();
          return (0, a.jsx)("footer", {
            className: "bg-content1 py-8 border-t border-divider",
            children: (0, a.jsxs)("div", {
              className: "container mx-auto px-4 max-w-7xl",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2 mb-4",
                          children: [
                            (0, a.jsx)(N.In, {
                              icon: "lucide:refresh-cw",
                              className: "text-primary text-xl",
                            }),
                            (0, a.jsx)("h3", {
                              className: "text-lg font-bold text-primary",
                              children: "CryptAtom",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 mb-4",
                          children:
                            "Быстрый и безопасный обмен криптовалют по выгодному курсу",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex gap-4",
                          children: (0, a.jsxs)(o.h, {
                            href: k.C.links.telegram,
                            isExternal: !0,
                            color: "foreground",
                            "aria-label": "Telegram",
                            className: " flex items-center gap-2",
                            children: [
                              (0, a.jsx)(N.In, {
                                icon: "logos:telegram",
                                className: "text-2xl",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-sm",
                                children: "Поддержка",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Навигация",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(o.h, {
                                href: "/",
                                color: "foreground",
                                children: "Главная",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(o.h, {
                                href: "/exchange",
                                color: "foreground",
                                children: "Обмен",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(o.h, {
                                href: "/rules",
                                color: "foreground",
                                children: "Правила",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(o.h, {
                                href: "/contacts",
                                color: "foreground",
                                children: "Контакты",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Аккаунт",
                        }),
                        e.token
                          ? (0, a.jsx)("ul", {
                              className: "space-y-2",
                              children: (0, a.jsx)("li", {
                                children: (0, a.jsx)(o.h, {
                                  href: "/profile",
                                  color: "foreground",
                                  children: "Личный кабинет",
                                }),
                              }),
                            })
                          : (0, a.jsxs)("ul", {
                              className: "space-y-2 hidden",
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.h, {
                                    href: "/join/login",
                                    color: "foreground",
                                    children: "Вход",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(o.h, {
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
                (0, a.jsx)("div", {
                  className:
                    "border-t border-divider mt-8 pt-6 text-center text-default-500",
                  children: (0, a.jsx)("p", {
                    children: "\xa9 2021-2025 CryptAtom. Все права защищены.",
                  }),
                }),
              ],
            }),
          });
        },
        P = (e) => {
          let { children: r } = e,
            s = (0, v.usePathname)();
          return (0, a.jsxs)("div", {
            className: "min-h-screen flex flex-col overflow-x-hidden",
            children: [
              (0, a.jsx)(C, {}),
              (0, a.jsx)("main", {
                className: "flex-grow overflow-x-hidden ".concat(
                  "/" == s ? "" : "container mx-auto px-4 py-8 max-w-7xl"
                ),
                children: r,
              }),
              (0, a.jsx)(R, {}),
            ],
          });
        };
    },
    38157: (e, r, s) => {
      s.d(r, { i: () => c });
      var a = s(23576),
        l = s(43415),
        n = s(2818);
      let t = (0, a.w)({
        server: { API_URL: l.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: l.z.string().url() },
        runtimeEnv: {
          API_URL: n.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin,
        },
      });
      var i = s(51747);
      let c = s(82651).A.create({
        withCredentials: !0,
        baseURL: t.NEXT_PUBLIC_API_URL,
      });
      c.interceptors.request.use((e) => {
        let r = i.E.getState().accountData;
        return r && r.token && (e.headers["auth-token"] = r.token), e;
      });
    },
    36021: (e, r, s) => {
      s.d(r, { A: () => n });
      var a = s(38157);
      class l {
        async login(e, r) {
          return a.i.post("/user/auth/login", { email: e, password: r });
        }
        async register(e, r) {
          return a.i.post("/user/auth/registration", { email: e, password: r });
        }
        async orders() {
          return a.i.get("/user/orders/list");
        }
        async logout() {
          return a.i.get("/user/logout");
        }
        async check_session() {
          return a.i.get("/user/check-session");
        }
      }
      let n = new l();
    },
    51747: (e, r, s) => {
      s.d(r, { E: () => n });
      var a = s(99827),
        l = s(60709);
      let n = (0, a.v)(
        (0, l.Zr)(
          (e) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (r) => e({ accountData: r }),
          }),
          { name: "account" }
        )
      );
    },
    51889: (e, r, s) => {
      s.d(r, { d: () => o });
      var a = s(84358),
        l = s(30287),
        n = s(51315),
        t = s(26345),
        i = s(95155),
        c = (0, l.Rf)((e, r) => {
          var s;
          let { as: l, className: c, children: o, ...d } = e,
            h = (0, n.zD)(r),
            { slots: x, classNames: m } = (0, a.f)(),
            u = (0, t.$)(null == m ? void 0 : m.header, c);
          return (0, i.jsx)(l || "div", {
            ref: h,
            className:
              null == (s = x.header) ? void 0 : s.call(x, { class: u }),
            ...d,
            children: o,
          });
        });
      c.displayName = "HeroUI.CardHeader";
      var o = c;
    },
  },
]);
