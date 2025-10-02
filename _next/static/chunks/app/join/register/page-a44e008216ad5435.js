(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [793],
  {
    23552: (e, s, l) => {
      Promise.resolve().then(l.bind(l, 54882));
    },
    54882: (e, s, l) => {
      "use strict";
      l.r(s), l.d(s, { default: () => N });
      var a = l(95155),
        t = l(12115),
        r = l(97293),
        c = l(51889),
        i = l(33767),
        n = l(5116),
        d = l(53204),
        x = l(17572),
        m = l(3972),
        u = l(4637),
        h = l(24788),
        o = l(76046),
        j = l(44210),
        f = l(36021),
        p = l(51747);
      function N() {
        let e = (0, o.useRouter)(),
          { setAccountData: s } = (0, p.E)(),
          [l, N] = t.useState(""),
          [v, g] = t.useState(""),
          [y, b] = t.useState(""),
          [C, k] = t.useState(!1),
          [w, S] = t.useState(!1),
          [_, E] = t.useState(""),
          R = C && l && v && y && v === y && v.length >= 8,
          V = async (a) => {
            a.preventDefault(), E(""), S(!0);
            try {
              let a = await f.A.register(l, v);
              s({
                email: a.data.email,
                referral: a.data.referral,
                token: a.data.token,
              }),
                e.push("/profile");
            } catch (e) {
              var t;
              (null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                ? void 0
                : t.status) === 409
                ? E("Пользователь с такой почтой уже существует")
                : E("Произошла ошибка при регистрации. Попробуйте позже.");
            } finally {
              S(!1);
            }
          };
        return (0, a.jsx)(j.default, {
          children: (0, a.jsx)("div", {
            className: "flex justify-center items-center min-h-[80vh]",
            children: (0, a.jsxs)(r.Z, {
              className: "w-full max-w-md",
              children: [
                (0, a.jsxs)(c.d, {
                  className: "flex flex-col gap-1 items-center",
                  children: [
                    (0, a.jsx)("h1", {
                      className: "text-2xl font-bold",
                      children: "Регистрация",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-default-500",
                      children: "Создайте аккаунт для доступа ко всем функциям",
                    }),
                  ],
                }),
                (0, a.jsx)(i.U, {
                  children: (0, a.jsxs)("form", {
                    onSubmit: V,
                    className: "space-y-6",
                    children: [
                      (0, a.jsx)(n.r, {
                        label: "Email",
                        type: "email",
                        value: l,
                        onValueChange: N,
                        placeholder: "example@mail.com",
                        startContent: (0, a.jsx)(h.In, {
                          icon: "lucide:mail",
                          className: "text-default-400",
                        }),
                        isRequired: !0,
                      }),
                      (0, a.jsx)(n.r, {
                        label: "Пароль",
                        type: "password",
                        value: v,
                        onValueChange: g,
                        placeholder: "Не менее 8 символов",
                        startContent: (0, a.jsx)(h.In, {
                          icon: "lucide:lock",
                          className: "text-default-400",
                        }),
                        isRequired: !0,
                      }),
                      (0, a.jsx)(n.r, {
                        label: "Подтверждение пароля",
                        type: "password",
                        value: y,
                        onValueChange: b,
                        placeholder: "Повторите пароль",
                        startContent: (0, a.jsx)(h.In, {
                          icon: "lucide:lock",
                          className: "text-default-400",
                        }),
                        isRequired: !0,
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, a.jsx)(d.A, { isSelected: C, onValueChange: k }),
                          (0, a.jsxs)("div", {
                            className: "text-sm",
                            children: [
                              "Я согласен с ",
                              (0, a.jsx)(x.h, {
                                href: "/rules",
                                children: "правилами сервиса",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "text-danger",
                        children: [
                          _ &&
                            (0, a.jsx)("p", {
                              className: "text-red-500 text-sm",
                              children: _,
                            }),
                          !_ &&
                            v &&
                            v.length < 8 &&
                            (0, a.jsx)("p", {
                              className: "text-red-500 text-sm",
                              children:
                                "Пароль должен содержать не менее 8 символов",
                            }),
                          !_ &&
                            v &&
                            y &&
                            v !== y &&
                            (0, a.jsx)("p", {
                              className: "text-red-500 text-sm",
                              children: "Пароли не совпадают",
                            }),
                        ],
                      }),
                      (0, a.jsx)(m.T, {
                        type: "submit",
                        color: "primary",
                        className: "w-full",
                        isLoading: w,
                        isDisabled: !R || w,
                        children: "Зарегистрироваться",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, a.jsx)(u.y, { className: "flex-1" }),
                          (0, a.jsx)("p", {
                            className: "text-default-500 text-sm",
                            children: "или",
                          }),
                          (0, a.jsx)(u.y, { className: "flex-1" }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "text-center",
                        children: (0, a.jsxs)("p", {
                          className: "text-default-500 text-sm",
                          children: [
                            "Уже есть аккаунт?",
                            " ",
                            (0, a.jsx)(x.h, {
                              href: "/join/login",
                              color: "primary",
                              children: "Войти",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [574, 773, 116, 204, 402, 441, 517, 358], () => s(23552)),
      (_N_E = e.O());
  },
]);
