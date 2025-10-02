(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [950],
  {
    32981: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 14270)),
        Promise.resolve().then(t.bind(t, 44210));
    },
    14270: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => E });
      var a = t(95155),
        l = t(12115),
        i = t(93331),
        n = t(26424),
        c = t(51503),
        r = t(77093),
        d = t(86374),
        o = t(3387),
        m = t(3972),
        x = t(17572),
        u = t(24788),
        h = t(97293),
        j = t(33767),
        p = t(46626),
        f = t(31988);
      let g = (e) => {
        console.log(e);
          let { address: s, memo: t, currency: i, amount: c, timeLeft: r } = e,
            [d, o] = l.useState(!1),
            [x, g] = l.useState(!1),
            v = (r / 3600) * 100,
            y = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
              .concat(i, ":")
              .concat(s, "?amount=")
              .concat(c);
          return (0, a.jsx)(h.Z, {
            className: "w-full max-w-md border border-divider shadow-lg",
            children: (0, a.jsxs)(j.U, {
              className: "flex flex-col items-center gap-4 pt-8",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex sm:items-center flex-col sm:flex-row justify-between sm:w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)(u.In, {
                          icon: "logos:".concat(i.toLowerCase()),
                          className: "text-3xl",
                        }),
                        (0, a.jsxs)("h3", {
                          className: "text-xl font-bold",
                          children: [i, " QR-код"],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(n.P.div, {
                      animate: { opacity: [1, 0.5, 1] },
                      transition: { duration: 2, repeat: 1 / 0 },
                      className:
                        "flex items-center gap-2 bg-warning/10 text-warning px-3 py-1 rounded-full text-xs",
                      children: [
                        (0, a.jsx)(u.In, { icon: "lucide:clock" }),
                        (0, a.jsxs)("span", {
                          children: [
                            "Истекает через: ",
                            ((e) => {
                              let s = Math.floor(e / 60),
                                t = e % 60;
                              return ""
                                .concat(s, ":")
                                .concat(t < 10 ? "0" : "")
                                .concat(t);
                            })(r),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(p.o, {
                  value: v,
                  color: v > 50 ? "success" : v > 20 ? "warning" : "danger",
                  className: "w-full",
                  size: "sm",
                }),
                (0, a.jsx)("div", {
                  className:
                    "bg-gradient-to-br from-content1 to-content2 p-6 rounded-xl w-full flex justify-center",
                  children: (0, a.jsx)(n.P.div, {
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.5 },
                    className: "bg-white p-4 rounded-lg shadow-md",
                    children: (0, a.jsx)("img", {
                      src: y,
                      alt: "".concat(i, " QR Code"),
                      className: "w-56 h-56",
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, a.jsxs)("p", {
                      className:
                        "text-default-500 text-sm mb-2 flex items-center gap-2",
                      children: [
                        (0, a.jsx)(u.In, {
                          icon: "lucide:wallet",
                          className: "text-primary",
                        }),
                        "Адрес кошелька:",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "bg-content2 p-3 rounded-lg flex-grow font-mono text-sm overflow-hidden overflow-ellipsis",
                          children: s,
                        }),
                        (0, a.jsx)(f.I, {
                          content: d ? "Скопировано!" : "Копировать адрес",
                          children: (0, a.jsx)(m.T, {
                            isIconOnly: !0,
                            variant: "flat",
                            color: "primary",
                            onPress: () => {
                              console.log(s);
                              navigator.clipboard.writeText(s),
                                o(!0),
                                setTimeout(() => o(!1), 2e3);
                            },
                            children: (0, a.jsx)(u.In, {
                              icon: d ? "lucide:check" : "lucide:copy",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t &&
                  (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, a.jsxs)("p", {
                        className:
                          "text-default-500 text-sm mb-2 flex items-center gap-2",
                        children: [
                          (0, a.jsx)(u.In, {
                            icon: "lucide:wallet",
                            className: "text-primary",
                          }),
                          "ТЕГ(MEMO):",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "bg-content2 p-3 rounded-lg flex-grow font-mono text-sm overflow-hidden overflow-ellipsis",
                            children: t,
                          }),
                          (0, a.jsx)(f.I, {
                            content: x ? "Скопировано!" : "Копировать адрес",
                            children: (0, a.jsx)(m.T, {
                              isIconOnly: !0,
                              variant: "flat",
                              color: "primary",
                              onPress: () => {
                                navigator.clipboard.writeText(t),
                                  g(!0),
                                  setTimeout(() => g(!1), 2e3);
                              },
                              children: (0, a.jsx)(u.In, {
                                icon: x ? "lucide:check" : "lucide:copy",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, a.jsx)("div", {
                  className: "bg-primary/5 p-4 rounded-lg w-full",
                  children: (0, a.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-default-600",
                        children: "Сумма к оплате:",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)(u.In, {
                            icon: "logos:".concat(i.toLowerCase()),
                            className: "text-lg",
                          }),
                          (0, a.jsxs)("span", {
                            className: "font-bold",
                            children: [c, " ", i],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        v = (e) => {
          let s = Math.floor(e / 60),
            t = e % 60;
          return ""
            .concat(s, ":")
            .concat(t < 10 ? "0" : "")
            .concat(t);
        },
        y = function (e) {
          let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t = new Date(e);
          return (
            t.setMinutes(t.getMinutes() + s),
            new Intl.DateTimeFormat("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(t)
          );
        };
      var N = t(19194);
      let b = (e) => {
          let { order_status: s, timeLeft: t } = e,
            l = (t / 3600) * 100,
            c = i.b[s],
            r =
              "warning" == c.color
                ? "border-l-warning"
                : "danger" == c.color
                ? "border-l-danger"
                : "primary" == c.color
                ? "border-l-primary"
                : "border-success";
          return (0, a.jsx)(h.Z, {
            className: "mb-6 border-l-4 overflow-hidden ".concat(r),
            children: (0, a.jsxs)(j.U, {
              className: "flex flex-col sm:flex-row gap-3",
              children: [
                (0, a.jsx)("div", {
                  className: "text-2xl text-default-400 self-start",
                  children: (0, a.jsx)(u.In, {
                    icon: c.icon,
                    className: "text-".concat(c.color),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, a.jsx)(n.P.p, {
                      className: "font-medium",
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2 },
                      children: c.description,
                    }),
                    "waiting" == s &&
                      (0, a.jsxs)(n.P.div, {
                        className: "mt-3",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4 },
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between text-sm mb-1",
                            children: [
                              (0, a.jsx)("span", {
                                children: "Время до истечения заявки:",
                              }),
                              (0, a.jsx)(n.P.span, {
                                className: "font-medium ".concat(
                                  t < 600 ? "text-danger" : "text-default-600"
                                ),
                                animate: {
                                  color:
                                    t < 600
                                      ? ["#f31260", "#000", "#f31260"]
                                      : void 0,
                                },
                                transition: {
                                  duration: 1.5,
                                  repeat: t < 600 ? 1 / 0 : 0,
                                  repeatType: "reverse",
                                },
                                children: v(t),
                              }),
                            ],
                          }),
                          (0, a.jsx)(p.o, {
                            value: l,
                            color:
                              l > 50
                                ? "success"
                                : l > 20
                                ? "warning"
                                : "danger",
                            size: "sm",
                            className: "max-w-full",
                          }),
                        ],
                      }),
                    "stoped" === s &&
                      (0, a.jsx)(n.P.div, {
                        className: "mt-3",
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.4 },
                        children: (0, a.jsx)(m.T, {
                          color: "primary",
                          startContent: (0, a.jsx)(u.In, {
                            icon: "logos:telegram",
                          }),
                          className: "mt-2",
                          as: "a",
                          href: N.C.links.telegram,
                          target: "_blank",
                          children: "Связаться с поддержкой в Telegram",
                        }),
                      }),
                    "rejected_time" === s &&
                      (0, a.jsx)(n.P.div, {
                        className: "mt-3",
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.4 },
                        children: (0, a.jsx)(m.T, {
                          color: "primary",
                          startContent: (0, a.jsx)(u.In, {
                            icon: "lucide:plus-circle",
                          }),
                          className: "mt-2",
                          onPress: () => (window.location.href = "/exchange"),
                          children: "Создать новую заявку",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        w = (e) => {
          let { order_status: s } = e,
            t = l.useMemo(
              () =>
                "rejected_time" === s
                  ? [{ key: "rejected_time", step: 1 }]
                  : "stoped" === s
                  ? [
                      { key: "waiting", step: 1 },
                      { key: "processing", step: 2 },
                      { key: "paid", step: 3 },
                      { key: "stoped", step: 4 },
                    ]
                  : i.g,
              [s]
            ),
            c = l.useMemo(() => {
              var e;
              return "rejected_time" === s
                ? 1
                : "stoped" === s
                ? 4
                : (null === (e = i.g.find((e) => e.key === s)) || void 0 === e
                    ? void 0
                    : e.step) || 1;
            }, [s]);
          return (0, a.jsx)(h.Z, {
            className: "mb-6 overflow-hidden",
            children: (0, a.jsx)(j.U, {
              children: (0, a.jsx)("div", {
                className:
                  "flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0",
                children: t.map((e, r) => {
                  let d = e.key,
                    o = i.b[d],
                    m = c >= e.step;
                  return (0, a.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-row sm:flex-col items-center gap-2 sm:gap-1",
                          children: [
                            (0, a.jsx)(n.P.div, {
                              className:
                                "w-10 h-10 rounded-full flex items-center justify-center ".concat(
                                  m
                                    ? "bg-".concat(o.color, " text-white")
                                    : "bg-default-100 text-default-400"
                                ),
                              whileHover: { scale: 1.1 },
                              children: (0, a.jsx)(u.In, { icon: o.icon }),
                            }),
                            (0, a.jsx)("span", {
                              className: "text-xs ".concat(
                                m ? "text-default-700" : "text-default-400"
                              ),
                              children: o.label,
                            }),
                          ],
                        }),
                        r < t.length - 1 &&
                          (0, a.jsx)("div", {
                            className:
                              "hidden sm:block flex-1 h-1 relative bg-default-100",
                            children: (0, a.jsx)(n.P.div, {
                              className: "absolute top-0 left-0 h-full ".concat(
                                "rejected_time" === s
                                  ? "bg-danger/50"
                                  : m
                                  ? "bg-".concat(o.color)
                                  : "bg-transparent"
                              ),
                              style: { width: m ? "100%" : "0%" },
                              initial: { width: "0%" },
                              animate: { width: m ? "100%" : "0%" },
                              transition: { duration: 0.5 },
                            }),
                          }),
                      ],
                    },
                    e.key
                  );
                }),
              }),
            }),
          });
        };
      var _ = t(4637);
      let I = (e) => {
        let { exchangeDetails: s } = e;
        return (0, a.jsx)(n.P.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: (0, a.jsx)(h.Z, {
            className: "mb-6",
            children: (0, a.jsx)(j.U, {
              children: (0, a.jsxs)("div", {
                className: "space-y-6",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-lg font-medium mb-4",
                        children: "Детали обмена",
                      }),
                      (0, a.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "bg-content2/50 p-4 rounded-lg",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-default-500 mb-2",
                                children: "Отправляете",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "bg-content3 p-2 rounded-full",
                                    children: (0, a.jsx)("img", {
                                      src: "/crypto/icons/".concat(
                                        s.crypto_sale.image
                                      ),
                                      className: "w-5 h-5 max-w-5 max-h-5",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsxs)("p", {
                                        className: "font-semibold text-xl",
                                        children: [
                                          s.amount_sale,
                                          " ",
                                          s.crypto_sale.currency,
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-default-500 text-sm",
                                        children: s.crypto_sale.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "bg-content2/50 p-4 rounded-lg",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-default-500 mb-2",
                                children: "Получаете",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "bg-content3 p-2 rounded-full",
                                    children: (0, a.jsx)("img", {
                                      src: "/crypto/icons/".concat(
                                        s.crypto_purchase.image
                                      ),
                                      className: "w-5 h-5 max-w-5 max-h-5",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsxs)("p", {
                                        className: "font-semibold text-xl",
                                        children: [
                                          s.amount_purchase,
                                          " ",
                                          s.crypto_purchase.currency,
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-default-500 text-sm",
                                        children: s.crypto_purchase.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(_.y, {}),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-lg font-medium mb-4",
                        children: "Данные оплаты",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center mb-1",
                                children: [
                                  (0, a.jsxs)("p", {
                                    className: "text-default-500 text-sm",
                                    children: [
                                      "Адрес для оплаты (",
                                      s.crypto_sale.currency,
                                      ")",
                                    ],
                                  }),
                                  (0, a.jsx)(f.I, {
                                    content: "Копировать адрес",
                                    children: (0, a.jsx)(m.T, {
                                      isIconOnly: !0,
                                      size: "sm",
                                      variant: "light",
                                      onPress: () =>
                                        navigator.clipboard.writeText(
                                          s.wallet_payment
                                        ),
                                      children: (0, a.jsx)(u.In, {
                                        icon: "lucide:copy",
                                        className: "text-default-500",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-content2 p-3 rounded-lg font-mono text-sm overflow-x-auto border border-divider",
                                children: s.wallet_payment,
                              }),
                            ],
                          }),
                          s.memo &&
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-default-500 mb-1 text-sm",
                                children: "MEMO",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-content2 p-3 rounded-lg font-mono text-sm overflow-x-auto border border-divider",
                                children: s.memo,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center mb-1",
                                children: [
                                  (0, a.jsxs)("p", {
                                    className: "text-default-500 text-sm",
                                    children: [
                                      "Адрес получения (",
                                      s.crypto_purchase.currency,
                                      ")",
                                    ],
                                  }),
                                  (0, a.jsx)(f.I, {
                                    content: "Копировать адрес",
                                    children: (0, a.jsx)(m.T, {
                                      isIconOnly: !0,
                                      size: "sm",
                                      variant: "light",
                                      onPress: () =>
                                        navigator.clipboard.writeText(s.wallet),
                                      children: (0, a.jsx)(u.In, {
                                        icon: "lucide:copy",
                                        className: "text-default-500",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-content2 p-3 rounded-lg font-mono text-sm overflow-x-auto border border-divider",
                                children: s.wallet,
                              }),
                            ],
                          }),
                          s.memo_payment &&
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center mb-1",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-default-500 text-sm",
                                    children: "Ваш ТЕГ(МЕМО)",
                                  }),
                                  (0, a.jsx)(f.I, {
                                    content: "Копировать адрес",
                                    children: (0, a.jsx)(m.T, {
                                      isIconOnly: !0,
                                      size: "sm",
                                      variant: "light",
                                      onPress: () => {
                                        s.memo_payment &&
                                          navigator.clipboard.writeText(
                                            s.memo_payment
                                          );
                                      },
                                      children: (0, a.jsx)(u.In, {
                                        icon: "lucide:copy",
                                        className: "text-default-500",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-content2 p-3 rounded-lg font-mono text-sm overflow-x-auto border border-divider",
                                children: s.memo_payment,
                              }),
                            ],
                          }),
                 
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(_.y, {}),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-lg font-medium mb-4",
                        children: "Временная информация",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "bg-content2/50 p-3 rounded-lg",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-default-500 mb-1 text-sm",
                                children: "Создано",
                              }),
                              (0, a.jsx)("p", {
                                className: "font-medium text-sm sm:text-base",
                                children: y(s.created_at),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "bg-content2/50 p-3 rounded-lg",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-default-500 mb-1 text-sm",
                                children: "Обновлено",
                              }),
                              (0, a.jsx)("p", {
                                className: "font-medium text-sm sm:text-base",
                                children: y(s.updated_at),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "bg-content2/50 p-3 rounded-lg ".concat(
                              "rejected_time" === s.status
                                ? "border border-danger/50"
                                : ""
                            ),
                            children: [
                              (0, a.jsx)("p", {
                                className: "mb-1 text-sm ".concat(
                                  "rejected_time" === s.status
                                    ? "text-danger"
                                    : "text-default-500"
                                ),
                                children:
                                  "rejected_time" === s.status
                                    ? "Истекла"
                                    : "Истекает",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "font-medium text-sm sm:text-base ".concat(
                                    "rejected_time" === s.status
                                      ? "text-danger"
                                      : ""
                                  ),
                                children: y(s.created_at, 60),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var k = t(88629),
        P = t(84403),
        T = t(51823),
        M = t(19931),
        C = t(71805);
      let O = (e) => {
          let { slug: s } = e,
            [t, h] = l.useState(!1),
            {
              data: j,
              isLoading: p,
              isError: f,
            } = (0, k.I)({
              queryKey: ["orderData", s],
              queryFn: async () => {
                let e = (await T.A.order(s)).data;
                return h(!["step-1", "success"].includes(e.status)), e;
              },
              placeholderData: P.rX,
              refetchInterval: t && 15e3,
            }),
            [v, _] = l.useState("details"),
            [O, E] = l.useState(3600);
          if (
            (l.useEffect(() => {
              if (!j) return;
              let e = (0, M.L_)(
                j.created_at,
                Intl.DateTimeFormat().resolvedOptions().timeZone
              );
              E(
                Math.max(
                  Math.floor(((0, C.L)(e, 1).getTime() - Date.now()) / 1e3),
                  0
                )
              );
            }, [j]),
            l.useEffect(() => {
              if (0 == O) return;
              let e = setInterval(() => {
                E((e) => Math.max(e - 1, 0));
              }, 1e3);
              return () => clearInterval(e);
            }, [O]),
            p)
          )
            return (0, a.jsx)("div", {
              className:
                "min-h-screen min-w-full flex items-center justify-center",
              children: (0, a.jsx)(c.o, { size: "lg", color: "primary" }),
            });
          if (f || !j)
            return (0, a.jsx)("div", {
              className:
                "min-h-screen min-w-full flex items-center justify-center text-xl text-primary",
              children: "Произошла ошибка при получение данных!",
            });
          let z = i.b[j.status];
          return (0, a.jsx)("div", {
            className: "w-full px-4 sm:px-6 md:px-8",
            children: (0, a.jsxs)("div", {
              className: "max-w-4xl mx-auto",
              children: [
                (0, a.jsxs)(n.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "mb-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("h1", {
                              className: "text-2xl sm:text-3xl font-bold",
                              children: ["Заявка #", j.number_slug || j.slug],
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-default-500 text-sm sm:text-base",
                              children: ["Создана: ", y(j.created_at)],
                            }),
                          ],
                        }),
                        (0, a.jsx)(r.R, {
                          color: z.color,
                          variant: "flat",
                          size: "md",
                          startContent: (0, a.jsx)(u.In, {
                            icon: z.icon,
                            className: "text-lg",
                          }),
                          className: "h-10",
                          children: z.label,
                        }),
                      ],
                    }),
                    (0, a.jsx)(b, { order_status: j.status, timeLeft: O }),
                    (0, a.jsx)(w, { order_status: j.status }),
                  ],
                }),
                (0, a.jsxs)(d.r, {
                  "aria-label": "Exchange details tabs",
                  selectedKey: v,
                  onSelectionChange: _,
                  color: "primary",
                  variant: "underlined",
                  classNames: {
                    tabList: "gap-2 sm:gap-6 overflow-x-auto",
                    cursor: "w-full",
                    tab: "max-w-fit px-0 h-12",
                  },
                  children: [
                    (0, a.jsx)(
                      o.i,
                      {
                        title: (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(u.In, { icon: "lucide:info" }),
                            (0, a.jsx)("span", {
                              className: "hidden sm:inline",
                              children: "Детали обмена",
                            }),
                            (0, a.jsx)("span", {
                              className: "sm:hidden",
                              children: "Детали",
                            }),
                          ],
                        }),
                        children: (0, a.jsx)(I, { exchangeDetails: j }),
                      },
                      "details"
                    ),
                    "waiting" == j.status &&
                      (0, a.jsx)(
                        o.i,
                        {
                          title: (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(u.In, { icon: "lucide:qr-code" }),
                              (0, a.jsx)("span", {
                                className: "hidden sm:inline",
                                children: "QR-код для оплаты",
                              }),
                              (0, a.jsx)("span", {
                                className: "sm:hidden",
                                children: "QR-код",
                              }),
                            ],
                          }),
                          children: (0, a.jsx)(n.P.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 0.3 },
                            className: "flex justify-center",
                            children: (0, a.jsx)(g, {
                              address: j.wallet_payment,
                              currency: j.crypto_sale.currency,
                              amount: j.amount_sale,
                              memo: j.memo,
                              timeLeft: O,
                            }),
                          }),
                        },
                        "payment"
                      ),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex flex-wrap gap-4 justify-center sm:justify-end mt-6",
                  children:
                    "stoped" === j.status &&
                    (0, a.jsx)(m.T, {
                      color: "primary",
                      variant: "flat",
                      as: x.h,
                      target: "_blank",
                      href: N.C.links.telegram,
                      startContent: (0, a.jsx)(u.In, {
                        icon: "lucide:message-circle",
                      }),
                      fullWidth: window.innerWidth < 640,
                      className: "sm:w-auto",
                      children: "Связаться с поддержкой",
                    }),
                }),
              ],
            }),
          });
        },
        E = (e) => {
          let { slug: s } = e;
          return (0, a.jsx)(l.Suspense, {
            children: (0, a.jsx)(O, { slug: s }),
          });
        };
    },
    51823: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var a = t(38157);
      class l {
        async orders() {
          return a.i.get("orders/list");
        }
        async order(e) {
          return a.i.get("order/".concat(e));
        }
        async deposit(e) {
          return a.i.get("".concat(this.link, "/deposit/").concat(e));
        }
        constructor() {
          this.link = "/order/bulk";
        }
      }
      let i = new l();
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [446, 574, 773, 527, 621, 629, 936, 540, 248, 441, 517, 358], () =>
      s(32981)
    ),
      (_N_E = e.O());
  },
]);
