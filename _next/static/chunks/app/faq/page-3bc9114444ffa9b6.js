(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [505],
  {
    16798: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 36886));
    },
    36886: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => g });
      var l = s(95155),
        r = s(12115),
        i = s(97293),
        t = s(33767),
        n = s(5116),
        c = s(3972),
        d = s(51889),
        o = s(21586),
        x = s(3843),
        m = s(24788),
        u = s(26424),
        h = s(44210),
        p = s(19194);
      function g() {
        let [e, a] = r.useState(""),
          [s, g] = r.useState("all"),
          j = [
            {
              id: "1",
              question: "Как начать обмен криптовалюты?",
              answer:
                "Для начала обмена перейдите на страницу \xabОбмен\xbb, выберите валютную пару, укажите сумму и адрес кошелька для получения средств. После заполнения всех полей нажмите кнопку \xabПодтвердить обмен\xbb.",
              category: "exchange",
            },
            {
              id: "2",
              question: "Какие комиссии взимаются за обмен?",
              answer:
                "Комиссия за обмен уже включена в курс и отдельно не взимается. Дополнительно вы оплачиваете только комиссию сети (network fee) при отправке криптовалюты.",
              category: "fees",
            },
            {
              id: "3",
              question: "Сколько времени занимает обмен?",
              answer:
                "Обычно обмен занимает от 5 до 30 минут после получения необходимого количества подтверждений в сети. В периоды высокой загруженности время может увеличиваться.",
              category: "exchange",
            },
            {
              id: "4",
              question: "Как узнать статус моего обмена?",
              answer:
                "После создания заявки вы будете перенаправлены на страницу подтверждения, где сможете отслеживать статус обмена в реальном времени.",
              category: "exchange",
            },
            {
              id: "5",
              question: "Что делать, если мой обмен задерживается?",
              answer:
                "Если ваш обмен занимает больше времени, чем обычно, пожалуйста, свяжитесь с нашей службой поддержки в Telegram. Мы оперативно проверим статус вашей заявки.",
              category: "support",
            },
            {
              id: "6",
              question: "Какие валюты доступны для обмена?",
              answer:
                "Мы поддерживаем обмен основных криптовалют: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), Binance Coin (BNB), Ripple (XRP), Cardano (ADA), Solana (SOL) и другие. Полный список доступен на странице обмена.",
              category: "currencies",
            },
            {
              id: "9",
              question: "Как обеспечивается безопасность обменов?",
              answer:
                "Мы используем современные технологии шифрования для защиты ваших данных. Все транзакции проводятся через защищенное соединение. Мы не храним данные ваших кошельков и не имеем доступа к вашим средствам.",
              category: "security",
            },
            {
              id: "10",
              question: "Что делать, если я отправил неверную сумму?",
              answer:
                "Если вы отправили сумму, отличающуюся от указанной в заявке, пожалуйста, немедленно свяжитесь с нашей службой поддержки. Мы поможем решить проблему и завершить обмен.",
              category: "exchange",
            },
            {
              id: "11",
              question: "Как связаться с поддержкой?",
              answer:
                "Вы можете связаться с нашей службой поддержки через Telegram @".concat(
                  p.C.links.telegram.split("t.me/")[1],
                  ". Мы работаем всегда и готовы ответить на все ваши вопросы."
                ),
              category: "support",
            },
          ],
          y = [
            { key: "all", label: "Все вопросы", icon: "lucide:list" },
            { key: "exchange", label: "Обмен", icon: "lucide:repeat" },
            { key: "fees", label: "Комиссии", icon: "lucide:percent" },
            { key: "currencies", label: "Валюты", icon: "lucide:bitcoin" },
      
            { key: "security", label: "Безопасность", icon: "lucide:shield" },
            { key: "support", label: "Поддержка", icon: "lucide:help-circle" },
          ],
          f = j.filter((a) => {
            let l =
                "" === e ||
                a.question.toLowerCase().includes(e.toLowerCase()) ||
                a.answer.toLowerCase().includes(e.toLowerCase()),
              r = "all" === s || a.category === s;
            return l && r;
          });
        return (0, l.jsx)(h.default, {
          children: (0, l.jsxs)("div", {
            className: "max-w-4xl mx-auto",
            children: [
              (0, l.jsxs)("div", {
                className: "mb-10 text-center",
                children: [
                  (0, l.jsx)("h1", {
                    className:
                      "text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4",
                    children: "Часто задаваемые вопросы",
                  }),
                  (0, l.jsx)("p", {
                    className: "text-default-600 max-w-2xl mx-auto",
                    children:
                      "Найдите ответы на самые распространенные вопросы о нашем сервисе обмена криптовалют",
                  }),
                ],
              }),
              (0, l.jsx)(i.Z, {
                className: "mb-8",
                children: (0, l.jsx)(t.U, {
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col md:flex-row gap-4",
                    children: [
                      (0, l.jsx)(n.r, {
                        placeholder: "Поиск по вопросам...",
                        value: e,
                        onValueChange: a,
                        startContent: (0, l.jsx)(m.In, {
                          icon: "lucide:search",
                          className: "text-default-400",
                        }),
                        isClearable: !0,
                        className: "flex-1",
                      }),
                      (0, l.jsx)(c.T, {
                        color: "primary",
                        variant: "flat",
                        as: "a",
                        href: "/contacts",
                        startContent: (0, l.jsx)(m.In, {
                          icon: "lucide:message-circle",
                        }),
                        children: "Задать вопрос",
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [
                  (0, l.jsx)("div", {
                    className: "md:col-span-1",
                    children: (0, l.jsxs)(i.Z, {
                      children: [
                        (0, l.jsx)(d.d, {
                          children: (0, l.jsx)("h2", {
                            className: "text-lg font-bold",
                            children: "Категории",
                          }),
                        }),
                        (0, l.jsx)(t.U, {
                          className: "p-0",
                          children: (0, l.jsx)("div", {
                            className: "flex flex-col",
                            children: y.map((e) =>
                              (0, l.jsx)(
                                c.T,
                                {
                                  variant: "light",
                                  color: s === e.key ? "primary" : "default",
                                  className:
                                    "justify-start rounded-none h-12 px-4 ".concat(
                                      s === e.key ? "bg-primary/10" : ""
                                    ),
                                  startContent: (0, l.jsx)(m.In, {
                                    icon: e.icon,
                                  }),
                                  onPress: () => g(e.key),
                                  children: e.label,
                                },
                                e.key
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "md:col-span-3",
                    children: [
                      (0, l.jsx)(u.P.div, {
                        variants: {
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                          },
                        },
                        initial: "hidden",
                        animate: "visible",
                        className: "mb-8",
                        children:
                          f.length > 0
                            ? (0, l.jsx)(o.D, {
                                variant: "bordered",
                                children: f.map((e) => {
                                  var a;
                                  return (0, l.jsx)(
                                    x.R,
                                    {
                                      "aria-label": e.question,
                                      title: e.question,
                                      startContent: (0, l.jsx)("div", {
                                        className:
                                          "bg-primary/10 p-2 rounded-full",
                                        children: (0, l.jsx)(m.In, {
                                          icon:
                                            (null ===
                                              (a = y.find(
                                                (a) => a.key === e.category
                                              )) || void 0 === a
                                              ? void 0
                                              : a.icon) || "lucide:help-circle",
                                          className: "text-primary",
                                        }),
                                      }),
                                      className: "animate-fade-in",
                                      children: (0, l.jsx)("p", {
                                        className: "text-default-700",
                                        children: e.answer,
                                      }),
                                    },
                                    e.id
                                  );
                                }),
                              })
                            : (0, l.jsxs)("div", {
                                className: "p-8 text-center border rounded-lg",
                                children: [
                                  (0, l.jsx)(m.In, {
                                    icon: "lucide:search-x",
                                    className:
                                      "text-4xl text-default-300 mx-auto mb-4",
                                  }),
                                  (0, l.jsx)("h3", {
                                    className: "text-lg font-medium mb-2",
                                    children: "Ничего не найдено",
                                  }),
                                  (0, l.jsxs)("p", {
                                    className: "text-default-500",
                                    children: [
                                      'По вашему запросу "',
                                      e,
                                      '" ничего не найдено. Попробуйте изменить запрос или выбрать другую категорию.',
                                    ],
                                  }),
                                ],
                              }),
                      }),
                      (0, l.jsx)(i.Z, {
                        className: "bg-primary-50 border-none",
                        children: (0, l.jsxs)(t.U, {
                          className:
                            "flex flex-col md:flex-row items-center gap-4",
                          children: [
                            (0, l.jsx)("div", {
                              className: "bg-primary/10 p-4 rounded-full",
                              children: (0, l.jsx)(m.In, {
                                icon: "lucide:message-circle-question",
                                className: "text-3xl text-primary",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, l.jsx)("h3", {
                                  className: "text-lg font-medium mb-1",
                                  children: "Не нашли ответ на свой вопрос?",
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-default-600 mb-4",
                                  children:
                                    "Свяжитесь с нашей службой поддержки, и мы поможем вам решить любую проблему",
                                }),
                                (0, l.jsx)(c.T, {
                                  color: "primary",
                                  as: "a",
                                  href: "/contacts",
                                  endContent: (0, l.jsx)(m.In, {
                                    icon: "lucide:arrow-right",
                                  }),
                                  children: "Связаться с поддержкой",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    26424: (e, a, s) => {
      "use strict";
      s.d(a, { P: () => x });
      var l = s(90271),
        r = s(28456),
        i = s(29260),
        t = s(89806),
        n = s(72683),
        c = s(82250),
        d = s(78314);
      let o = (0, c.C)({ ...r.W, ...t.n, ...i.$, ...n.Z }, d.J),
        x = (0, l.I)(o);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [446, 574, 773, 116, 621, 932, 402, 441, 517, 358], () => a(16798)),
      (_N_E = e.O());
  },
]);
