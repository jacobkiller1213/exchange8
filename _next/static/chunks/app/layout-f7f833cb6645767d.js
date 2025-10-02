(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    29514: (t, e, s) => {
      Promise.resolve().then(s.bind(s, 58909)),
        Promise.resolve().then(s.t.bind(s, 44509, 23));
    },
    58909: (t, e, s) => {
      "use strict";
      s.d(e, { default: () => F });
      var i = s(95155),
        a = s(12115),
        r = s(84403),
        n = s(47702),
        u = s(15586),
        o = s(99323),
        h = class extends o.Q {
          constructor(t = {}) {
            super(), (this.config = t), (this.#t = new Map());
          }
          #t;
          build(t, e, s) {
            let i = e.queryKey,
              a = e.queryHash ?? (0, r.F$)(i, e),
              u = this.get(a);
            return (
              u ||
                ((u = new n.X({
                  client: t,
                  queryKey: i,
                  queryHash: a,
                  options: t.defaultQueryOptions(e),
                  state: s,
                  defaultOptions: t.getQueryDefaults(i),
                })),
                this.add(u)),
              u
            );
          }
          add(t) {
            this.#t.has(t.queryHash) ||
              (this.#t.set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            let e = this.#t.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#t.delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            u.j.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#t.get(t);
          }
          getAll() {
            return [...this.#t.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r.MK)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0
              ? e.filter((e) => (0, r.MK)(t, e))
              : e;
          }
          notify(t) {
            u.j.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            u.j.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            u.j.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        l = s(2955),
        c = s(14267),
        d = class extends l.k {
          #e;
          #s;
          #i;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#s = t.mutationCache),
              (this.#e = []),
              (this.state = t.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#e.includes(t) ||
              (this.#e.push(t),
              this.clearGcTimeout(),
              this.#s.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#e = this.#e.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#s.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#e.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#s.remove(this));
          }
          continue() {
            return this.#i?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#i = (0, c.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#a({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#a({ type: "pause" });
              },
              onContinue: () => {
                this.#a({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#s.canRun(this),
            });
            let e = "pending" === this.state.status,
              s = !this.#i.canStart();
            try {
              if (!e) {
                this.#a({ type: "pending", variables: t, isPaused: s }),
                  await this.#s.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#a({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: s,
                  });
              }
              let i = await this.#i.start();
              return (
                await this.#s.config.onSuccess?.(
                  i,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(i, t, this.state.context),
                await this.#s.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, t, this.state.context),
                this.#a({ type: "success", data: i }),
                i
              );
            } catch (e) {
              try {
                throw (
                  (await this.#s.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#s.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#a({ type: "error", error: e });
              }
            } finally {
              this.#s.runNext(this);
            }
          }
          #a(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              u.j.batch(() => {
                this.#e.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#s.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        },
        f = class extends o.Q {
          constructor(t = {}) {
            super(),
              (this.config = t),
              (this.#r = new Set()),
              (this.#n = new Map()),
              (this.#u = 0);
          }
          #r;
          #n;
          #u;
          build(t, e, s) {
            let i = new d({
              mutationCache: this,
              mutationId: ++this.#u,
              options: t.defaultMutationOptions(e),
              state: s,
            });
            return this.add(i), i;
          }
          add(t) {
            this.#r.add(t);
            let e = p(t);
            if ("string" == typeof e) {
              let s = this.#n.get(e);
              s ? s.push(t) : this.#n.set(e, [t]);
            }
            this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            if (this.#r.delete(t)) {
              let e = p(t);
              if ("string" == typeof e) {
                let s = this.#n.get(e);
                if (s) {
                  if (s.length > 1) {
                    let e = s.indexOf(t);
                    -1 !== e && s.splice(e, 1);
                  } else s[0] === t && this.#n.delete(e);
                }
              }
            }
            this.notify({ type: "removed", mutation: t });
          }
          canRun(t) {
            let e = p(t);
            if ("string" != typeof e) return !0;
            {
              let s = this.#n.get(e),
                i = s?.find((t) => "pending" === t.state.status);
              return !i || i === t;
            }
          }
          runNext(t) {
            let e = p(t);
            if ("string" != typeof e) return Promise.resolve();
            {
              let s = this.#n.get(e)?.find((e) => e !== t && e.state.isPaused);
              return s?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            u.j.batch(() => {
              this.#r.forEach((t) => {
                this.notify({ type: "removed", mutation: t });
              }),
                this.#r.clear(),
                this.#n.clear();
            });
          }
          getAll() {
            return Array.from(this.#r);
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r.nJ)(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => (0, r.nJ)(t, e));
          }
          notify(t) {
            u.j.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return u.j.batch(() =>
              Promise.all(t.map((t) => t.continue().catch(r.lQ)))
            );
          }
        };
      function p(t) {
        return t.options.scope?.id;
      }
      var y = s(34017),
        m = s(38248);
      function g(t) {
        return {
          onFetch: (e, s) => {
            let i = e.options,
              a = e.fetchOptions?.meta?.fetchMore?.direction,
              n = e.state.data?.pages || [],
              u = e.state.data?.pageParams || [],
              o = { pages: [], pageParams: [] },
              h = 0,
              l = async () => {
                let s = !1,
                  l = (t) => {
                    Object.defineProperty(t, "signal", {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (s = !0)
                          : e.signal.addEventListener("abort", () => {
                              s = !0;
                            }),
                        e.signal
                      ),
                    });
                  },
                  c = (0, r.ZM)(e.options, e.fetchOptions),
                  d = async (t, i, a) => {
                    if (s) return Promise.reject();
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let n = {
                      client: e.client,
                      queryKey: e.queryKey,
                      pageParam: i,
                      direction: a ? "backward" : "forward",
                      meta: e.options.meta,
                    };
                    l(n);
                    let u = await c(n),
                      { maxPages: o } = e.options,
                      h = a ? r.ZZ : r.y9;
                    return {
                      pages: h(t.pages, u, o),
                      pageParams: h(t.pageParams, i, o),
                    };
                  };
                if (a && n.length) {
                  let t = "backward" === a,
                    e = { pages: n, pageParams: u },
                    s = (
                      t
                        ? function (t, { pages: e, pageParams: s }) {
                            return e.length > 0
                              ? t.getPreviousPageParam?.(e[0], e, s[0], s)
                              : void 0;
                          }
                        : v
                    )(i, e);
                  o = await d(e, s, t);
                } else {
                  let e = t ?? n.length;
                  do {
                    let t = 0 === h ? u[0] ?? i.initialPageParam : v(i, o);
                    if (h > 0 && null == t) break;
                    (o = await d(o, t)), h++;
                  } while (h < e);
                }
                return o;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    l,
                    {
                      client: e.client,
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    s
                  ))
              : (e.fetchFn = l);
          },
        };
      }
      function v(t, { pages: e, pageParams: s }) {
        let i = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[i], e, s[i], s) : void 0;
      }
      var b = class {
          #o;
          #s;
          #h;
          #l;
          #c;
          #d;
          #f;
          #p;
          constructor(t = {}) {
            (this.#o = t.queryCache || new h()),
              (this.#s = t.mutationCache || new f()),
              (this.#h = t.defaultOptions || {}),
              (this.#l = new Map()),
              (this.#c = new Map()),
              (this.#d = 0);
          }
          mount() {
            this.#d++,
              1 === this.#d &&
                ((this.#f = y.m.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#o.onFocus());
                })),
                (this.#p = m.t.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#o.onOnline());
                })));
          }
          unmount() {
            this.#d--,
              0 === this.#d &&
                (this.#f?.(),
                (this.#f = void 0),
                this.#p?.(),
                (this.#p = void 0));
          }
          isFetching(t) {
            return this.#o.findAll({ ...t, fetchStatus: "fetching" }).length;
          }
          isMutating(t) {
            return this.#s.findAll({ ...t, status: "pending" }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#o.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.defaultQueryOptions(t),
              s = this.#o.build(this, e),
              i = s.state.data;
            return void 0 === i
              ? this.fetchQuery(t)
              : (t.revalidateIfStale &&
                  s.isStaleByTime((0, r.d2)(e.staleTime, s)) &&
                  this.prefetchQuery(e),
                Promise.resolve(i));
          }
          getQueriesData(t) {
            return this.#o
              .findAll(t)
              .map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, s) {
            let i = this.defaultQueryOptions({ queryKey: t }),
              a = this.#o.get(i.queryHash),
              n = a?.state.data,
              u = (0, r.Zw)(e, n);
            if (void 0 !== u)
              return this.#o.build(this, i).setData(u, { ...s, manual: !0 });
          }
          setQueriesData(t, e, s) {
            return u.j.batch(() =>
              this.#o
                .findAll(t)
                .map(({ queryKey: t }) => [t, this.setQueryData(t, e, s)])
            );
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#o.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#o;
            u.j.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let s = this.#o,
              i = { type: "active", ...t };
            return u.j.batch(
              () => (
                s.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries(i, e)
              )
            );
          }
          cancelQueries(t, e = {}) {
            let s = { revert: !0, ...e };
            return Promise.all(
              u.j.batch(() => this.#o.findAll(t).map((t) => t.cancel(s)))
            )
              .then(r.lQ)
              .catch(r.lQ);
          }
          invalidateQueries(t, e = {}) {
            return u.j.batch(() => {
              if (
                (this.#o.findAll(t).forEach((t) => {
                  t.invalidate();
                }),
                t?.refetchType === "none")
              )
                return Promise.resolve();
              let s = { ...t, type: t?.refetchType ?? t?.type ?? "active" };
              return this.refetchQueries(s, e);
            });
          }
          refetchQueries(t, e = {}) {
            let s = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
            return Promise.all(
              u.j.batch(() =>
                this.#o
                  .findAll(t)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    let e = t.fetch(void 0, s);
                    return (
                      s.throwOnError || (e = e.catch(r.lQ)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  })
              )
            ).then(r.lQ);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let s = this.#o.build(this, e);
            return s.isStaleByTime((0, r.d2)(e.staleTime, s))
              ? s.fetch(e)
              : Promise.resolve(s.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(r.lQ).catch(r.lQ);
          }
          fetchInfiniteQuery(t) {
            return (t.behavior = g(t.pages)), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(r.lQ).catch(r.lQ);
          }
          ensureInfiniteQueryData(t) {
            return (t.behavior = g(t.pages)), this.ensureQueryData(t);
          }
          resumePausedMutations() {
            return m.t.isOnline()
              ? this.#s.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#o;
          }
          getMutationCache() {
            return this.#s;
          }
          getDefaultOptions() {
            return this.#h;
          }
          setDefaultOptions(t) {
            this.#h = t;
          }
          setQueryDefaults(t, e) {
            this.#l.set((0, r.EN)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#l.values()],
              s = {};
            return (
              e.forEach((e) => {
                (0, r.Cp)(t, e.queryKey) && Object.assign(s, e.defaultOptions);
              }),
              s
            );
          }
          setMutationDefaults(t, e) {
            this.#c.set((0, r.EN)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#c.values()],
              s = {};
            return (
              e.forEach((e) => {
                (0, r.Cp)(t, e.mutationKey) &&
                  (s = { ...s, ...e.defaultOptions });
              }),
              s
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = {
              ...this.#h.queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, r.F$)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
              e.queryFn === r.hT && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#h.mutations,
                  ...(t?.mutationKey &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#o.clear(), this.#s.clear();
          }
        },
        C = s(35906),
        P = s(47298),
        q = s(76437),
        w = s(90872),
        O = s(52980),
        Q = s(93903),
        x = s(27249),
        D = s(39970),
        A = s(99234);
      function j(t) {
        let { children: e, isValidProp: s, ...r } = t;
        s && (0, D.D)(s),
          ((r = { ...(0, a.useContext)(x.Q), ...r }).isStatic = (0, A.M)(
            () => r.isStatic
          ));
        let n = (0, a.useMemo)(
          () => r,
          [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion]
        );
        return (0, i.jsx)(x.Q.Provider, { value: n, children: e });
      }
      var E = (t) => {
          let {
              children: e,
              navigate: s,
              disableAnimation: r,
              useHref: n,
              disableRipple: u = !1,
              skipFramerMotionAnimations: o = r,
              reducedMotion: h = "never",
              validationBehavior: l,
              locale: c = "en-US",
              defaultDates: d,
              createCalendar: f,
              ...p
            } = t,
            y = e;
          s && (y = (0, i.jsx)(w.pg, { navigate: s, useHref: n, children: y }));
          let m = (0, a.useMemo)(
            () => (
              r && o && (Q.W.skipAnimations = !0),
              {
                createCalendar: f,
                defaultDates: d,
                disableAnimation: r,
                disableRipple: u,
                validationBehavior: l,
              }
            ),
            [
              f,
              null == d ? void 0 : d.maxDate,
              null == d ? void 0 : d.minDate,
              r,
              u,
              l,
            ]
          );
          return (0, i.jsx)(P.n, {
            value: m,
            children: (0, i.jsx)(q.C, {
              locale: c,
              children: (0, i.jsx)(j, {
                reducedMotion: h,
                children: (0, i.jsx)(O.so, { ...p, children: y }),
              }),
            }),
          });
        },
        M = s(76046),
        k = s(51503),
        _ = s(51747),
        I = s(36021);
      let R = (t) => {
        let { children: e } = t,
          s = (0, M.usePathname)(),
          r = (0, M.useRouter)(),
          [n, u] = (0, a.useState)(!1),
          { accountData: o, setAccountData: h } = (0, _.E)();
        return ((0, a.useEffect)(() => {
          (async () => {
            u(!0);
            try {
              let t = await I.A.check_session();
              h({
                email: t.data.email,
                referral: t.data.referral,
                token: t.data.token,
              });
            } catch (t) {
              s.includes("/account/") && r.push("/"),
                h({ email: "", referral: "", token: "" });
            } finally {
              u(!1);
            }
          })();
        }, [r]),
        n)
          ? (0, i.jsx)("div", {
              className:
                "min-h-screen min-w-full flex items-center justify-center",
              children: (0, i.jsx)(k.o, { size: "lg", color: "primary" }),
            })
          : e;
      };
      var S = s(67113);
      let F = (t) => {
        let { children: e } = t,
          [s] = (0, a.useState)(
            () =>
              new b({
                defaultOptions: {
                  queries: { refetchOnWindowFocus: !1, staleTime: 6e4 },
                },
              })
          );
        return (0, i.jsx)(C.Ht, {
          client: s,
          children: (0, i.jsx)(E, {
            children: (0, i.jsx)(S.N, {
              attribute: "class",
              defaultTheme: "system",
              enableSystem: !0,
              disableTransitionOnChange: !0,
              children: (0, i.jsx)(R, { children: e }),
            }),
          }),
        });
      };
    },
    38157: (t, e, s) => {
      "use strict";
      s.d(e, { i: () => o });
      var i = s(23576),
        a = s(43415),
        r = s(2818);
      let n = (0, i.w)({
        server: { API_URL: a.z.string().url() },
        client: { NEXT_PUBLIC_API_URL: a.z.string().url() },
        runtimeEnv: {
          API_URL: r.env.API_URL,
          NEXT_PUBLIC_API_URL: window.location.origin,
        },
      });
      var u = s(51747);
      let o = s(82651).A.create({
        withCredentials: !0,
        baseURL: n.NEXT_PUBLIC_API_URL,
      });
      o.interceptors.request.use((t) => {
        let e = u.E.getState().accountData;
        return e && e.token && (t.headers["auth-token"] = e.token), t;
      });
    },
    36021: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => r });
      var i = s(38157);
      class a {
        async login(t, e) {
          return i.i.post("/user/auth/login", { email: t, password: e });
        }
        async register(t, e) {
          return i.i.post("/user/auth/registration", { email: t, password: e });
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
      let r = new a();
    },
    51747: (t, e, s) => {
      "use strict";
      s.d(e, { E: () => r });
      var i = s(99827),
        a = s(60709);
      let r = (0, i.v)(
        (0, a.Zr)(
          (t) => ({
            accountData: { email: "", referral: "", token: "" },
            setAccountData: (e) => t({ accountData: e }),
          }),
          { name: "account" }
        )
      );
    },
    44509: () => {},
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [412, 574, 527, 441, 517, 358], () => e(29514)), (_N_E = t.O());
  },
]);
