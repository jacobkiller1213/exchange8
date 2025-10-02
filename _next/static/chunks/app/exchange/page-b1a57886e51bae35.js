(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    67165: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 61834));
    },
    61834: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => Z });
      var r = t(95155),
        a = t(12115),
        l = t(24788),
        n = t(76046),
        i = t(4637),
        c = t(5116),
        d = t(53204),
        o = t(31988),
        m = t(3972),
        x = t(50791);
      let u = (e) => {
        let { value: s, onValueChange: t, onValidChange: n } = e,
          [i, d] = a.useState(!1),
          [o, m] = a.useState(null),
          [u, h] = a.useState("RU"),
          p = (e) => {
            let s = (0, x.l)(e, u);
            return s
              ? (!u && s.country && h(s.country), s.formatInternational())
              : e;
          },
          j = (e) => {
            let t = (e || "").replace(/\D/g, "");
            if (t.length < 10) return m("Некорректный номер"), !1;
            let a = ["1","39","38","49","44","65","81","82","972","971"];
            for (let n of a) if (t.startsWith(n)) return m("Некорректный номер"), !1;
            return m(null), !0;
          };
        return (0, r.jsx)(c.r, {
          label: "Номер телефона",
          placeholder: "Введите номер телефона",
          value: s,
          onValueChange: (e) => {
            let s = p(e);
            t(s);
            let r = j(s);
            d(r), n(r);
          },
          variant: "bordered",
          radius: "sm",
          startContent: (0, r.jsx)(l.In, {
            icon: "lucide:phone",
            className: "text-default-400",
          }),
          description: "Введите номер в международном формате",
          isInvalid: s.length > 0 && !i,
          errorMessage: o,
          color: s.length > 0 ? (i ? "success" : "danger") : "default",
        });
      };
      var h = t(97293),
        p = t(33767),
        j = t(29588),
        g = t(80795),
        f = t(99827),
        N = t(60709);
      let v = (0, f.v)(
          (0, N.Zr)(
            (e) => ({
              cryptoList: [],
              setCryptoList: (s) => e({ cryptoList: s }),
            }),
            { name: "crypto" }
          )
        ),
        b = (e) => {
          let {
            amount: s,
            setAmount: t,
            cryptoSelect: a,
            setEditingFieldAmount: l,
            amountError: n,
            setAmountError: i,
          } = e;
          return (0, r.jsx)(c.r, {
            type: "number",
            label: "Сумма",
            value: s,
            description: "Минимальная сумма: "
              .concat(a.min_receive, " ")
              .concat(a.currency),
            onValueChange: (e) => {
              if ((t(e), l("give"), "" === e)) {
                i("");
                return;
              }
              let s = parseFloat(e);
              isNaN(s)
                ? i("Пожалуйста, введите числовое значение")
                : s < a.min_receive
                ? i(
                    "Минимальная сумма: "
                      .concat(a.min_receive, " ")
                      .concat(a.currency)
                  )
                : i("");
            },
            variant: "bordered",
            radius: "sm",
            errorMessage: n,
            isInvalid: !!n,
            endContent: (0, r.jsx)("div", {
              className: "flex items-center",
              children: (0, r.jsx)("span", {
                className: "text-default-400 text-small",
                children: a.currency,
              }),
            }),
          });
        },
        y = (e) => {
          let {
              wallet: s,
              setWallet: t,
              cryptoSelect: n,
              walletError: i,
              setWalletError: d,
            } = e,
            o = a.useRef(null),
            m = (e) => {
              if ("" === e) {
                d("");
                return;
              }
              new RegExp(n.regex).test(e)
                ? d("")
                : d("Неверный формат адреса кошелька");
            };
          return (
            a.useEffect(
              () => () => {
                o.current && clearTimeout(o.current);
              },
              []
            ),
            (0, r.jsx)(c.r, {
              label: "Ваш кошелек получения",
              placeholder: "Введите ваш адрес получения",
              value: s,
              onValueChange: (e) => {
                t(e),
                  o.current && clearTimeout(o.current),
                  (o.current = setTimeout(() => {
                    m(e);
                  }, 750));
              },
              description: "Обязательно поле*",
              variant: "bordered",
              radius: "sm",
              errorMessage: i,
              isInvalid: !!i,
              startContent: (0, r.jsx)(l.In, {
                icon: "lucide:wallet",
                className: i ? "text-danger" : "text-default-400",
              }),
            })
          );
        },
        w = (e) => {
          let {
              type: s,
              title: t,
              cryptoSelect: a,
              setCryptoSelect: n,
              amount: i,
              setAmount: d,
              wallet: o,
              setWallet: m,
              memo: x,
              setMemo: u,
              setEditingFieldAmount: f,
              amountError: N,
              setAmountError: w,
              walletError: _,
              setWalletError: I,
            } = e,
            { cryptoList: C } = v();
          return (0, r.jsx)(h.Z, {
            className: "border border-divider shadow-md",
            children: (0, r.jsxs)(p.U, {
              className: "gap-4",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, r.jsxs)("h3", {
                      className: "text-lg font-medium flex items-center gap-2",
                      children: [
                        (0, r.jsx)(l.In, {
                          icon:
                            "from" === s
                              ? "lucide:arrow-up-right"
                              : "lucide:arrow-down-left",
                          className:
                            "from" === s ? "text-danger" : "text-success",
                        }),
                        t,
                      ],
                    }),
                    "from" === s &&
                      (0, r.jsx)("div", {
                        className:
                          "bg-danger/10 text-danger text-xs px-2 py-1 rounded-full",
                        children: "Отправляете",
                      }),
                    "to" === s &&
                      (0, r.jsx)("div", {
                        className:
                          "bg-success/10 text-success text-xs px-2 py-1 rounded-full",
                        children: "Получаете",
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, r.jsx)(j.d, {
                      label: "Валюта",
                      selectedKeys: [a.id.toString()],
                      onSelectionChange: (e) => {
                        let s = Array.from(e)[0];
                        console.log(s);
                        let t = C.find((e) => e.id === Number(s));
                        t && n(t);
                      },
                      renderValue: (e) =>
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, r.jsx)("img", {
                              src: "/crypto/icons/".concat(a.image),
                              className: "w-5 h-5 object-contain",
                              alt: a.name,
                            }),
                            (0, r.jsxs)("span", {
                              children: [a.name, " (", a.currency, ")"],
                            }),
                          ],
                        }),
                      variant: "bordered",
                      radius: "sm",
                      classNames: { trigger: "h-12" },
                      children: C.filter((e) =>
                        "to" === s ? e.status_take : e.status_give
                      ).map((e) =>
                        (0, r.jsxs)(
                          g.y,
                          {
                            value: e.id.toString(),
                            startContent: (0, r.jsx)("img", {
                              src: "/crypto/icons/".concat(e.image),
                              className: "w-5 h-5 max-w-5 max-h-5",
                            }),
                            children: [e.name, " (", e.currency, ")"],
                          },
                          e.id.toString()
                        )
                      ),
                    }),
                    "from" == s && w
                      ? (0, r.jsx)(b, {
                          amount: i,
                          setAmount: d,
                          cryptoSelect: a,
                          amountError: N,
                          setAmountError: w,
                          setEditingFieldAmount: f,
                        })
                      : (0, r.jsx)(c.r, {
                          type: "number",
                          label: "Сумма",
                          value: i,
                          onChange: (e) => {
                            f("get"), d(e.target.value);
                          },
                          variant: "bordered",
                          radius: "sm",
                          endContent: (0, r.jsx)("div", {
                            className: "flex items-center",
                            children: (0, r.jsx)("span", {
                              className: "text-default-400 text-small",
                              children: a.currency,
                            }),
                          }),
                        }),
                    "to" == s &&
                      m &&
                      I &&
                      (0, r.jsx)(y, {
                        wallet: o,
                        setWallet: m,
                        cryptoSelect: a,
                        walletError: _,
                        setWalletError: I,
                      }),
                    "to" === s &&
                      ["TON", "USDTTON", "XRP", "NOT", "EOS", "XLM"].includes(
                        a.currency
                      ) &&
                      (0, r.jsx)(c.r, {
                        label: "MEMO ",
                        placeholder: "Введите MEMO",
                        value: x,
                        onValueChange: u,
                        variant: "bordered",
                        radius: "sm",
                        startContent: (0, r.jsx)(l.In, {
                          icon: "lucide:tag",
                          className: "text-default-400",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        _ = (e) => {
          let {
            saleCryptoSelect: s,
            purchaseCryptoSelect: t,
            rate: a,
            saleAmount: n,
            purchaseAmount: i,
          } = e;
          return (0, r.jsx)(h.Z, {
            className: "border border-divider shadow-md",
            children: (0, r.jsxs)(p.U, {
              className: "gap-4",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, r.jsxs)("h3", {
                      className: "text-lg font-medium flex items-center gap-2",
                      children: [
                        (0, r.jsx)(l.In, {
                          icon: "lucide:bar-chart-2",
                          className: "text-primary",
                        }),
                        "Курс обмена",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "bg-success/10 text-success text-xs px-2 py-1 rounded-full flex items-center gap-1",
                      children: [
                        (0, r.jsx)(l.In, { icon: "lucide:check" }),
                        (0, r.jsx)("span", { children: "Выгодный курс" }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex justify-between md:items-center bg-content2 p-4 rounded-lg flex-col gap-4 md:flex-row",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        (0, r.jsx)("div", {
                          className: "bg-background p-2 rounded-full",
                          children: (0, r.jsx)("img", {
                            src: "/crypto/icons/".concat(s.image),
                            className: "w-7 h-7 object-contain",
                            alt: s.name,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-sm text-default-500",
                              children: "Отправляете",
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "font-bold",
                                  children: n,
                                }),
                                (0, r.jsx)("span", { children: s.currency }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex md:flex-col md:items-center",
                      children: [
                        (0, r.jsx)(l.In, {
                          icon: "lucide:arrow-right",
                          className: "text-default-500 mx-4 md:block hidden",
                        }),
                        (0, r.jsx)(l.In, {
                          icon: "lucide:arrow-down",
                          className: "text-default-500 mx-4 md:hidden block",
                        }),
                        (0, r.jsxs)("span", {
                          className: "text-xs text-default-400",
                          children: ["Курс: 1 : ", a],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        (0, r.jsx)("div", {
                          className: "bg-background p-2 rounded-full",
                          children: (0, r.jsx)("img", {
                            src: "/crypto/icons/".concat(t.image),
                            className: "w-7 h-7 object-contain",
                            alt: t.name,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-sm text-default-500",
                              children: "Получаете",
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "font-bold",
                                  children: i,
                                }),
                                (0, r.jsx)("span", { children: t.currency }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "bg-primary/5 p-4 rounded-lg",
                  children: (0, r.jsxs)("div", {
                    className: "flex justify-between items-center mt-2",
                    children: [
                      (0, r.jsx)("span", {
                        className: "text-default-600",
                        children: "Время обработки:",
                      }),
                      (0, r.jsx)("span", {
                        className: "font-medium",
                        children: "~5-15 минут",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var I = t(38157);
      class C {
        async list() {
          return I.i.get("/currency/list");
        }
        async course(e, s) {
          return I.i.get("/currency/course/exchange-rate", {
            params: { crypto_sale_id: e, crypto_purchase_id: s },
          });
        }
      }
      let E = new C();
      var S = t(24259);
      let A = async () => {
          let e = await S.Ay.load();
          return (await e.get()).visitorId;
        },
        k = async () => {
          let e = await fetch("https://ipinfo.io/json?token=6eb7e1e1120e59");
          return await e.json();
        },
        R = () => {
          let e = document.createElement("canvas"),
            s = e.getContext("webgl") || e.getContext("experimental-webgl");
          if (!s || !(s instanceof WebGLRenderingContext)) return "Unknown";
          let t = s.getExtension("WEBGL_debug_renderer_info");
          return t ? s.getParameter(t.UNMASKED_RENDERER_WEBGL) : "Unknown";
        },
        L = () => {
          let e = navigator.userAgent.toLowerCase();
          return /mobile|android|iphone|ipad/.test(e) ? "mobile" : "desktop";
        },
        U = async () => {
          let e = await k();
          return {
            ip_address: e.ip,
            city: e.city,
            region: e.region,
            country: e.country,
            fingerprint: await A(),
            gpu: R(),
            user_agent: navigator.userAgent,
            device_type: L(),
          };
        };
      class P {
        async create_order_step_first(e, s) {
          return I.i.post("/order/bulk/steps/create-order/step-1", {
            order: e,
            device: s,
          });
        }
        async create_order_step_second(e, s) {
          return I.i.post("/order/bulk/steps/create-order/step-2", {
            order: e,
            device: s,
          });
        }
        async create_order(e, s) {
          return I.i.post("/order/bulk/create-order", { order: e, device: s });
        }
      }
      let T = new P(),
        M = () => {
          let e = (0, n.useRouter)(),
            { cryptoList: s } = v(),
            [t, x] = (0, a.useState)(s[0]),
            [h, p] = (0, a.useState)(s[1]),
            [j, g] = (0, a.useState)(""),
            [f, N] = (0, a.useState)(""),
            [b, y] = (0, a.useState)(null),
            [I, C] = (0, a.useState)(0),
            [S, A] = (0, a.useState)(""),
            [k, R] = (0, a.useState)(""),
            [L, P] = a.useState(""),
            [M, W] = a.useState(""),
            [D, V] = a.useState(""),
            [F, O] = a.useState(!1),
            [z, Z] = a.useState(!1),
            [B, X] = (0, a.useState)(""),
            [H, q] = (0, a.useState)(""),
            [G, K] = (0, a.useState)(!1),
            Q = (e) => e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
            Y = a.useMemo(() => "" !== D && !Q(D), [D]);
          a.useEffect(() => {
            (async () => {
              t && h && C((await E.course(t.id, h.id)).data);
            })();
          }, [t, h]),
            a.useEffect(() => {
              I &&
                ("give" === b && j
                  ? N((parseFloat(j) * I).toFixed(6))
                  : "get" === b && f && g((parseFloat(f) / I).toFixed(6)));
            }, [j, f, I, b]);
          let $ = async (s) => {
            s.preventDefault();
            let r = {
                crypto_sale_id: t.id,
                crypto_purchase_id: h.id,
                email: D,
                phone: M,
                wallet: S,
                memo: k,
                amount_sale: Number(j),
                amount_purchase: Number(f),
                exchange_rate: I,
              },
              a = await U();
            K(!0);
            try {
              let s = (await T.create_order(r, a)).data;
              e.push("/exchange/" + s.result);
              return;
            } catch (e) {
            } finally {
              K(!1);
            }
          };
          return (0, r.jsx)("form", {
            onSubmit: $,
            className: "mt-3",
            children: (0, r.jsxs)("div", {
              className: "space-y-8",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("h3", {
                      className:
                        "text-xl font-semibold mb-4 flex items-center gap-2",
                      children: [
                        (0, r.jsx)(l.In, {
                          icon: "lucide:repeat",
                          className: "text-primary",
                        }),
                        "Детали обмена",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                      children: [
                        (0, r.jsx)(w, {
                          type: "from",
                          title: "Продажа",
                          cryptoSelect: t,
                          setCryptoSelect: x,
                          amount: j,
                          setAmount: g,
                          amountError: B,
                          setAmountError: X,
                          setEditingFieldAmount: y,
                        }),
                        (0, r.jsx)(w, {
                          type: "to",
                          title: "Получение",
                          cryptoSelect: h,
                          setCryptoSelect: p,
                          amount: f,
                          setAmount: N,
                          wallet: S,
                          setWallet: A,
                          memo: k,
                          setMemo: R,
                          walletError: H,
                          setWalletError: q,
                          setEditingFieldAmount: y,
                        }),
                      ],
                    }),
                    (0, r.jsx)(_, {
                      saleCryptoSelect: t,
                      purchaseCryptoSelect: h,
                      rate: I,
                      saleAmount: Number(j),
                      purchaseAmount: Number(f),
                    }),
                  ],
                }),
                (0, r.jsx)(i.y, { className: "my-6" }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("h3", {
                      className:
                        "text-xl font-semibold mb-4 flex items-center gap-2",
                      children: [
                        (0, r.jsx)(l.In, {
                          icon: "lucide:user",
                          className: "text-primary",
                        }),
                        "Персональные данные",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        (0, r.jsx)(c.r, {
                          label: "Email",
                          placeholder: "Введите ваш email",
                          value: D,
                          onValueChange: V,
                          description: "Обязательно поле*",
                          errorMessage: "Введите корректный email",
                          isInvalid: Y,
                          variant: "bordered",
                          radius: "sm",
                          startContent: (0, r.jsx)(l.In, {
                            icon: "lucide:mail",
                            className: "text-default-400",
                          }),
                        }),
                        (0, r.jsx)(u, {
                          value: M,
                          onValueChange: W,
                          onValidChange: O,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-4 flex items-center gap-1.5",
                      children: [
                        (0, r.jsx)(d.A, {
                          isSelected: z,
                          onValueChange: Z,
                          color: "primary",
                        }),
                        (0, r.jsxs)("div", {
                          className: "",
                          children: [
                            "Я согласен с",
                            " ",
                            (0, r.jsx)("a", {
                              href: "/rules",
                              className: "text-primary font-medium",
                              children: "правилами сервиса",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)(o.I, {
                    content:
                      !z ||
                      Y ||
                      !F ||
                      0 == D.length ||
                      0 == S.length ||
                      0 == Number(j) ||
                      0 == Number(f) ||
                      B.length > 0 ||
                      H.length > 0
                        ? "Заполните все поля формы"
                        : "Нажмите для подтверждения обмена",
                    placement: "top",
                    children: (0, r.jsx)("div", {
                      children: (0, r.jsx)(m.T, {
                        type: "submit",
                        color: "primary",
                        size: "lg",
                        className: "px-8",
                        endContent:
                          !G &&
                          (0, r.jsx)(l.In, { icon: "lucide:arrow-right" }),
                        isLoading: G,
                        isDisabled:
                          !z ||
                          !F ||
                          0 == D.length ||
                          Y ||
                          0 == S.length ||
                          0 == Number(j) ||
                          0 == Number(f) ||
                          B.length > 0 ||
                          H.length > 0,
                        children: "Подтвердить обмен",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      var W = t(19194),
        D = t(44210),
        V = t(51503),
        F = t(17572),
        O = t(88629),
        z = t(84403);
      function Z() {
        let { setCryptoList: e } = v(),
          {
            data: s = [],
            isLoading: t,
            isError: a,
            refetch: n,
          } = (0, O.I)({
            queryKey: ["crypto-list"],
            queryFn: async () => (
              e(
                (await E.list()).data.sort((e, s) =>
                  "crypto" === e.type && "crypto" !== s.type
                    ? -1
                    : "crypto" !== e.type && "crypto" === s.type
                    ? 1
                    : e.name.localeCompare(s.min_receive.toString())
                )
              ),
              []
            ),
            placeholderData: z.rX,
          });
        return t
          ? (0, r.jsx)(D.default, {
              children: (0, r.jsx)("div", {
                className:
                  "min-h-screen min-w-full flex items-center justify-center",
                children: (0, r.jsx)(V.o, { size: "lg", color: "primary" }),
              }),
            })
          : a || !s
          ? (0, r.jsx)(D.default, {
              children: (0, r.jsx)("div", {
                className:
                  "min-h-screen min-w-full flex items-center justify-center text-xl text-primary",
                children: "Произошла ошибка при получение данных!",
              }),
            })
          : (0, r.jsx)(D.default, {
              children: (0, r.jsxs)("div", {
                className: "max-w-[1100px] mx-auto",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-10 text-center",
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4",
                        children: "Обмен криптовалют",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-default-600 max-w-2xl mx-auto",
                        children:
                          "Заполните форму ниже для быстрого и безопасного обмена криптовалют по выгодному курсу",
                      }),
                    ],
                  }),
                  (0, r.jsx)(h.Z, {
                    className: "border border-divider shadow-xl",
                    children: (0, r.jsx)(p.U, {
                      className: "p-0",
                      children: (0, r.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "col-span-1 bg-gradient-to-br from-[#1B5E20] to-[#388E3C] p-8 lg:rounded-l-lg relative overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0,_rgba(255,255,255,0)_50%)]",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#81C784] to-transparent",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#81C784] to-transparent",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "h-full flex flex-col justify-between relative z-10 ",
                                children: [
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h2", {
                                        className:
                                          "text-white text-xl font-bold mb-6",
                                        children: "Преимущества обмена",
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "space-y-6",
                                        children: [
                                          {
                                            icon: "lucide:shield-check",
                                            title: "Безопасность",
                                            desc: "Все транзакции защищены",
                                          },
                                          {
                                            icon: "lucide:zap",
                                            title: "Скорость",
                                            desc: "Обмен за несколько минут",
                                          },
                                          {
                                            icon: "lucide:percent",
                                            title: "Выгодный курс",
                                            desc: "Без скрытых комиссий",
                                          },
                                        ].map((e, s) =>
                                          (0, r.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-start gap-3",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "bg-white/20 p-2 rounded-full",
                                                  children: (0, r.jsx)(l.In, {
                                                    icon: e.icon,
                                                    className: "text-white",
                                                  }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                  children: [
                                                    (0, r.jsx)("h3", {
                                                      className:
                                                        "text-white font-medium text-sm",
                                                      children: e.title,
                                                    }),
                                                    (0, r.jsx)("p", {
                                                      className:
                                                        "text-white/80 text-xs",
                                                      children: e.desc,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "mt-8",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "bg-white/10 p-4 rounded-lg backdrop-blur-sm",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "flex items-center gap-2 mb-2",
                                          children: [
                                            (0, r.jsx)(l.In, {
                                              icon: "lucide:info",
                                              className: "text-white",
                                            }),
                                            (0, r.jsx)("h3", {
                                              className:
                                                "text-white font-medium",
                                              children: "Нужна помощь?",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-white/80 text-sm mb-4",
                                          children:
                                            "Наша служба поддержки доступна всегда. Свяжитесь с нами, если у вас возникли вопросы.",
                                        }),
                                        (0, r.jsx)(m.T, {
                                          color: "default",
                                          as: F.h,
                                          href: W.C.links.telegram,
                                          variant: "flat",
                                          className: "w-full",
                                          startContent: (0, r.jsx)(l.In, {
                                            icon: "logos:telegram",
                                          }),
                                          children: "Написать в Telegram",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "col-span-3 p-6",
                            children: (0, r.jsx)(M, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "mt-8 bg-content2 p-6 rounded-lg shadow-md border border-divider",
                    children: (0, r.jsxs)("div", {
                      className: "flex items-start gap-4",
                      children: [
                        (0, r.jsx)("div", {
                          className: "bg-primary/10 p-3 rounded-full mt-1",
                          children: (0, r.jsx)(l.In, {
                            icon: "lucide:shield",
                            className: "text-primary text-xl",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("h3", {
                              className: "font-medium text-lg mb-1",
                              children: "Безопасность превыше всего",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-default-500",
                              children:
                                "Все данные передаются по защищенному соединению. Мы не храним данные ваших кошельков и не имеем доступа к вашим средствам. Наш сервис использует современные технологии шифрования для обеспечения максимальной безопасности каждой транзакции.",
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
    19194: (e, s, t) => {
      "use strict";
      t.d(s, { C: () => r });
      let r = {
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
    44210: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => k });
      var r = t(95155),
        a = t(12115),
        l = t(53600),
        n = t(36205),
        i = t(18898),
        c = t(42433),
        d = t(17572),
        o = t(43779),
        m = t(94019),
        x = t(47616),
        u = t(37892),
        h = t(69749),
        p = t(28685),
        j = t(3972),
        g = t(67828),
        f = t(30705),
        N = t(24788),
        v = t(76046),
        b = t(31988),
        y = t(7792),
        w = t(67113);
      let _ = () => {
        let { theme: e, setTheme: s } = (0, w.D)(),
          t = "dark" === e;
        return (0, r.jsx)(b.I, {
          content: "Переключить на ".concat(t ? "светлую" : "темную", " тему"),
          placement: "bottom",
          children: (0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, r.jsx)(N.In, {
                icon: "lucide:sun",
                className: "text-default-500 ".concat(!t && "text-primary-500"),
              }),
              (0, r.jsx)(y.Z, {
                isSelected: t,
                onValueChange: () => s("light" === e ? "dark" : "light"),
                size: "sm",
                color: "primary",
                className: "mx-1",
              }),
              (0, r.jsx)(N.In, {
                icon: "lucide:moon",
                className: "text-default-500 ".concat(t && "text-primary-500"),
              }),
            ],
          }),
        });
      };
      var I = t(19194),
        C = t(51747),
        E = t(36021);
      let S = () => {
          let [e, s] = a.useState(!1),
            t = (0, v.usePathname)(),
            { accountData: b, setAccountData: y } = (0, C.E)(),
            w = async () => {
              try {
                await E.A.logout(),
                  (window.location.href = "/"),
                  y({ email: "", referral: "", token: "" });
              } catch (e) {
                return;
              }
            };
          return (0, r.jsxs)(l.H, {
            isBordered: !0,
            isMenuOpen: e,
            onMenuOpenChange: s,
            className: "bg-background",
            maxWidth: "xl",
            children: [
              (0, r.jsxs)(n.t, {
                children: [
                  (0, r.jsx)(i.w, {
                    "aria-label": e ? "Закрыть меню" : "Открыть меню",
                    className: "sm:hidden",
                  }),
                  (0, r.jsx)(c.$, {
                    children: (0, r.jsxs)(d.h, {
                      href: "/",
                      className:
                        "font-bold text-inherit flex items-center gap-2",
                      children: [
                        (0, r.jsx)(N.In, {
                          icon: "lucide:refresh-cw",
                          className: "text-primary text-xl",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-primary text-xl",
                          children: "CryptoCoinHub",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(n.t, {
                className: "max-md:hidden flex gap-4",
                justify: "center",
                children: I.C.navItems.map((e) =>
                  (0, r.jsx)(
                    o.p,
                    {
                      isActive: t === e.path,
                      children: (0, r.jsx)(d.h, {
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
              (0, r.jsxs)(n.t, {
                justify: "end",
                children: [
                  (0, r.jsx)(o.p, {
                    className: "hidden sm:flex",
                    children: (0, r.jsx)(_, {}),
                  }),

                ],
              }),
              (0, r.jsxs)(g.n, {
                children: [
                  I.C.navItems.map((e) =>
                    (0, r.jsx)(
                      f.X,
                      {
                        children: (0, r.jsx)(d.h, {
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
                  (0, r.jsx)(f.X, { children: (0, r.jsx)(_, {}) }),
                ],
              }),
            ],
          });
        },
        A = () => {
          let { accountData: e, setAccountData: s } = (0, C.E)();
          return (0, r.jsx)("footer", {
            className: "bg-content1 py-8 border-t border-divider",
            children: (0, r.jsxs)("div", {
              className: "container mx-auto px-4 max-w-7xl",
              children: [
                (0, r.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-2 mb-4",
                          children: [
                            (0, r.jsx)(N.In, {
                              icon: "lucide:refresh-cw",
                              className: "text-primary text-xl",
                            }),
                            (0, r.jsx)("h3", {
                              className: "text-lg font-bold text-primary",
                              children: "CryptoCoinHub",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "text-default-500 mb-4",
                          children:
                            "Быстрый и безопасный обмен криптовалют по выгодному курсу",
                        }),
                        (0, r.jsx)("div", {
                          className: "flex gap-4",
                          children: (0, r.jsxs)(d.h, {
                            href: I.C.links.telegram,
                            isExternal: !0,
                            color: "foreground",
                            "aria-label": "Telegram",
                            className: " flex items-center gap-2",
                            children: [
                              (0, r.jsx)(N.In, {
                                icon: "logos:telegram",
                                className: "text-2xl",
                              }),
                              (0, r.jsx)("div", {
                                className: "text-sm",
                                children: "Поддержка",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Навигация",
                        }),
                        (0, r.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(d.h, {
                                href: "/",
                                color: "foreground",
                                children: "Главная",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(d.h, {
                                href: "/exchange",
                                color: "foreground",
                                children: "Обмен",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(d.h, {
                                href: "/rules",
                                color: "foreground",
                                children: "Правила",
                              }),
                            }),
                            (0, r.jsx)("li", {
                              children: (0, r.jsx)(d.h, {
                                href: "/contacts",
                                color: "foreground",
                                children: "Контакты",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h4", {
                          className: "font-semibold mb-4",
                          children: "Аккаунт",
                        }),
                        e.token
                          ? (0, r.jsx)("ul", {
                              className: "space-y-2",
                              children: (0, r.jsx)("li", {
                                children: (0, r.jsx)(d.h, {
                                  href: "/profile",
                                  color: "foreground",
                                  children: "Личный кабинет",
                                }),
                              }),
                            })
                          : (0, r.jsxs)("ul", {
                              className: "space-y-2",
                              children: [
                                (0, r.jsx)("li", {
                                  children: (0, r.jsx)(d.h, {
                                    href: "/join/login",
                                    color: "foreground",
                                    children: "Вход",
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  children: (0, r.jsx)(d.h, {
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
                (0, r.jsx)("div", {
                  className:
                    "border-t border-divider mt-8 pt-6 text-center text-default-500",
                  children: (0, r.jsx)("p", {
                    children: "\xa9 2021-2025 CryptoCoinHub. Все права защищены.",
                  }),
                }),
              ],
            }),
          });
        },
        k = (e) => {
          let { children: s } = e,
            t = (0, v.usePathname)();
          return (0, r.jsxs)("div", {
            className: "min-h-screen flex flex-col overflow-x-hidden",
            children: [
              (0, r.jsx)(S, {}),
              (0, r.jsx)("main", {
                className: "flex-grow overflow-x-hidden ".concat(
                  "/" == t ? "" : "container mx-auto px-4 py-8 max-w-7xl"
                ),
                children: s,
              }),
              (0, r.jsx)(A, {}),
            ],
          });
        };
    },
    38157: (e, s, t) => {
      "use strict";
      t.d(s, { i: () => c });
      var r = t(23576),
        a = t(43415),
        l = t(2818);
      let n = (0, r.w)({
        server: { API_URL: a.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: a.z.string().url() },
        runtimeEnv: {
          API_URL: l.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin,
        },
      });
      var i = t(51747);
      let c = t(82651).A.create({
        withCredentials: !0,
        baseURL: n.NEXT_PUBLIC_API_URL,
      });
      c.interceptors.request.use((e) => {
        let s = i.E.getState().accountData;
        return s && s.token && (e.headers["auth-token"] = s.token), e;
      });
    },
    36021: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      var r = t(38157);
      class a {
        async login(e, s) {
          return r.i.post("/user/auth/login", { email: e, password: s });
        }
        async register(e, s) {
          return r.i.post("/user/auth/registration", { email: e, password: s });
        }
        async orders() {
          return r.i.get("/user/orders/list");
        }
        async logout() {
          return r.i.get("/user/logout");
        }
        async check_session() {
          return r.i.get("/user/check-session");
        }
      }
      let l = new a();
    },
    51747: (e, s, t) => {
      "use strict";
      t.d(s, { E: () => l });
      var r = t(99827),
        a = t(60709);
      let l = (0, r.v)(
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
    e.O(0, [574, 773, 116, 527, 629, 204, 754, 441, 517, 358], () => s(67165)),
      (_N_E = e.O());
  },
]);
