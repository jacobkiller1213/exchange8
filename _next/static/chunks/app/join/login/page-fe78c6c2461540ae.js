(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [229],
  {
    28054: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 94588));
    },
    94588: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => p });
      var l = a(95155),
        t = a(12115),
        r = a(97293),
        i = a(51889),
        c = a(33767),
        n = a(5116),
        d = a(3972),
        x = a(4637),
        m = a(17572),
        u = a(24788),
        o = a(76046),
        h = a(44210),
        f = a(51747),
        j = a(36021);
      function p() {
        let e = (0, o.useRouter)(),
          { setAccountData: s } = (0, f.E)(),
          [a, p] = t.useState(""),
          [N, v] = t.useState(""),
          [y, b] = t.useState(!1),
          [g, k] = t.useState(""),
          w = async (l) => {
            l.preventDefault(), k(""), b(!0);
            try {
              let l = await j.A.login(a, N);
              s({
                email: l.data.email,
                referral: l.data.referral,
                token: l.data.token,
              }),
                e.push("/profile");
            } catch (e) {
              var t;
              (null == e
                ? void 0
                : null === (t = e.response) || void 0 === t
                ? void 0
                : t.status) === 401
                ? k("Неверный логин или пароль")
                : k("Произошла ошибка. Попробуйте позже.");
            } finally {
              b(!1);
            }
          };
        return (0, l.jsx)(h.default, {
          children: (0, l.jsx)("div", {
            className: "flex justify-center items-center min-h-[80vh]",
            children: (0, l.jsxs)(r.Z, {
              className: "w-full max-w-md",
              children: [
                (0, l.jsxs)(i.d, {
                  className: "flex flex-col gap-1 items-center",
                  children: [
                    (0, l.jsx)("h1", {
                      className: "text-2xl font-bold",
                      children: "Вход в аккаунт",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-default-500",
                      children: "Введите данные для входа",
                    }),
                  ],
                }),
                (0, l.jsx)(c.U, {
                  children: (0, l.jsxs)("form", {
                    onSubmit: w,
                    className: "space-y-6",
                    children: [
                      (0, l.jsx)(n.r, {
                        label: "Email",
                        type: "email",
                        value: a,
                        onValueChange: p,
                        placeholder: "example@mail.com",
                        startContent: (0, l.jsx)(u.In, {
                          icon: "lucide:mail",
                          className: "text-default-400",
                        }),
                        isRequired: !0,
                      }),
                      (0, l.jsx)(n.r, {
                        label: "Пароль",
                        type: "password",
                        value: N,
                        onValueChange: v,
                        placeholder: "••••••••",
                        startContent: (0, l.jsx)(u.In, {
                          icon: "lucide:lock",
                          className: "text-default-400",
                        }),
                        isRequired: !0,
                      }),
                      g &&
                        (0, l.jsx)("p", {
                          className: "text-danger text-sm",
                          children: g,
                        }),
                    
                      (0, l.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, l.jsx)(x.y, { className: "flex-1" }),
                          (0, l.jsx)("p", {
                            className: "text-default-500 text-sm",
                            children: "или",
                          }),
                          (0, l.jsx)(x.y, { className: "flex-1" }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "text-center",
                        children: (0, l.jsxs)("p", {
                          className: "text-default-500 text-sm",
                          children: [
                            "Нет аккаунта?",
                            " ",
                            (0, l.jsx)(m.h, {
                              href: "/join/register",
                              color: "primary",
                              children: "Зарегистрируйтесь",
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
    e.O(0, [574, 773, 116, 402, 441, 517, 358], () => s(28054)), (_N_E = e.O());
  },
]);
