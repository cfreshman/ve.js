// ve.js 1.0.4 @ https://freshman.dev/lib/2/ve/ve.js https://freshman.dev/copyright.js
{
  const names = 've.js ve'.split(' ')
  if (names.some(name => !window[name])) {
      
    /* script
    */
    const version = `ve.js 1.0.4`
    const log = named_log(version)
    const definition = (() => {

const V = class extends Array {
  // <V>ECTOR WITH 4 NAMED DIMENSIONS (x, y, z, w)
  // ne w
  // di mension
  // ze ro
  // on es
  // ra nge
  // ho t
  // id entity
  // as sign
  // fi t
  // d0 .. d4 dN
  // ad d
  // mu ltiply
  // sc ale
  // su m
  // ma gnitude
  // no rmalize
  // do t product
  // cr oss product
  // in vert
  // co mponent of a along b
  // ct: projeCTion of a onto b
  // tr ansform
  // pr oduct
  // bo und
  // st ring
  // ar ray
  // eq ual
  // an gle
  // 
  // c artesian
  // p olar

  get x() { return this[0]??0 }; set x(x) { return this[0] = x }
  get y() { return this[1]??0 }; set y(x) { return this[1] = x }
  get z() { return this[2]??0 }; set z(x) { return this[2] = x }
  get w() { return this[3]??0 }; set w(x) { return this[3] = x }

  static ne = (...x) => {
    if (Array.isArray(x[0])) x = x[0]
    const n = x[0] === undefined ? 0 : x.indexOf(undefined) + 1 || x.length
    const v = new V(n)
    for (let i = 0; i < n; i++) v[i] = x[i]
    return Object.assign(v, Object.fromEntries(Object.getOwnPropertyNames(V).filter(k => !'length name prototype c p ze on ra ho id'.includes(k)).map(k => [k, (...x)=>V[k](v, ...x)])))
  }
  static di = (...vs) => Math.max(...vs.map(v => V.ar(v).length))
  static re = (a, n) => V.ne(V.ra(n).map(i => a[i] ?? 0))

  static ze = (n) => V.ne(Array.from({ length: Array.isArray(n) ? n.length : n}).map(_=> 0))
  static on = (n) => V.ne(Array.from({ length: Array.isArray(n) ? n.length : n}).map(_=> 1))
  static ra = (n) => V.ne(V.ze(n).map((_,i)=> i))
  static ho = (n, i=0) => V.ne(V.ra(n).map(_i=> _i === i ? 1 : 0))
  static id = (n) => V.ho(n, 0)
  static as = (v, ...x) => V.ne(V.ra(v).map(i=> x[i] ?? x[x.length-1] ?? 0))
  static pa = (v, n) => V.ne(range(n).flatMap(() => v))
  // static fi = (a, b) => V.di(a) > V.di(b) ? a : V.as(b, ...a) not sure what this was for
  static si = (v) => V.ne(v.map(x => x > 0 ? 1 : x < 0 ? -1 : 0))

  static dN = (v, n) => {
    v = V.ne(...v)
    return V.ne(V.ra(n).map(i=> v[i] ?? 0))
  }
  static d1 = (...v) => V.dN(v, 1)
  static d2 = (...v) => V.dN(v, 2)
  static d3 = (...v) => V.dN(v, 3)
  static d4 = (...v) => V.dN(v, 4)

  static ad = (...xs) => {
    const v = V.ze(V.di(...xs))
    for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < xs.length; j++) {
        v[i] += xs[j][i]??0
      }
    }
    return v
  }
  static mu = (...xs) => {
    const v = V.on(V.di(...xs))
    for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < xs.length; j++) {
        v[i] *= xs[j][i]??0
      }
    }
    return v
  }
  static sc = (v, c) => V.mu(v, V.as(v, c))
  static po = (v, c) => V.ar(v).map(x => Math.pow(x, c))
  static su = (v) => V.ar(v).reduce((s,x)=>s+x,0)
  static ma = (v, other) => {
    if (other) return V.ad(v, V.sc(other, -1)).ma()
    let sum = 0
    for (let i = 0; i < v.length; i++) {
      sum += v[i] * v[i]
    }
    return Math.sqrt(sum)
  }
  static no = (v) => V.sc(v, 1 / (V.ma(v) || 1))

  static lN = (a, b, n) => Math.pow(V.su(V.po(V.ad(V.ne(a), V.sc(V.ne(b), -1)), n).map(Math.abs)), n ? 1/n : 1)
  static l1 = (a, b) => V.lN(a, b, 1)
  static l2 = (a, b) => V.lN(a, b, 2)

  static do = (a, b=a) => V.su(V.mu(a, b))
  static cr = (a, b) => V.ne((a.x??0)*(b.y??0), (a.y??0)*(b.z??0), (a.z??0)*(b.x??0))
  static in = (v) => V.ne(v.x?1/v.x:0, v.y?1/v.y:0, v.z?1/v.z:0, v.w?1/v.w:0)
  static co = (a, b) => V.do(a, b) / b.ma()
  static ct = (a, b) => b.no().sc(a.co(b))

  static tr = (v, M) => ({
    // 3-dimensional homogenous transform
    x: v.x*(M[0][0]??0) + v.y*(M[0][1]??0) + v.z*(M[0][2]??0) + v.w*(M[0][2]??0),
    y: v.x*(M[1][0]??0) + v.y*(M[1][1]??0) + v.z*(M[1][2]??0) + v.w*(M[1][2]??0),
    z: v.x*(M[2][0]??0) + v.y*(M[2][1]??0) + v.z*(M[2][2]??0) + v.w*(M[2][2]??0),
    w: v.x*(M[3][0]??0) + v.y*(M[3][1]??0) + v.z*(M[3][2]??0) + v.w*(M[3][2]??0),
  })
  static pr = (v, p) => M.mu(v, M.mu(p, M.tr(p)))

  static bo = (v, min, max) => {
    v = V.ne(v)
    const ma = v.ma()
    const v_no = v.no()
    return v_no.sc(ma < min ? min : ma > max ? max : ma)
  }

  static st = (v, pr=3) => {
    const round = Math.pow(10, pr)
    return `${V.di(v)}(${V.ar(v).map(x => typeof x === 'number' ? Math.round(x * round) / round : String(x)).join(' ')})`
  }
  static ar = (v) => Array.from(v)
  static eq = (a, b) => V.di(a) === V.di(b) && a.every((a_i, i) => a_i === b[i])
  static an = (v, di=undefined) => {
    // V.an(V.ne(1, 1)) returns [PI/4]
    // V.an(V.ne(1, 1, 0)) returns [PI/4, 0]
    // V.an(V.ne(1, 1, 0), 2) returns PI/4
    // V.an(V.ne(1, 1, 0), 3) returns 0
    // V.an(V.ne(1, 1, 0), 1) returns 0
    // V.an(V.ne(1, 1, 0), 0) returns undefined
    const result = range(v.length - 1).map(i => Math.atan2(v[i + 1], v[i]))
    return (di === undefined) ? result : result[di - 2] ?? (i > 0 ? 0 : undefined)
  }

  
  static c = (...x) => V.ne(...x)
  static p = (t, r=1) => V.ne(r * Math.cos(t), r * Math.sin(t))
  static ou = (v, min, max) => v[0] < min[0] || v[1] < min[1] || max[0] < v[0] || max[1] < v[1]
}

const M = class extends Array {
  // <M>ATRIX IMPLEMENTATION (2-dimensional array, no named components)
  // ne w : from list of vectors
  // di mension
  // m height
  // n width
  // ze ro
  // on es
  // id entity
  // el ement
  // => a synonym
  // ro w vector
  // co lumn vector
  // tr anspose
  // sc ale
  // ad d
  // mu ltiply
  // st ring
  // ar ray
  // eq ual

  get m() { return this.length }
  get n() { return this[0].length }
  static ne = (Mv) => {
    const m = M.from(Array.isArray(Mv[0]) ? Mv : Mv.map(x=>[x]))
    return Object.assign(m, Object.fromEntries(Object.getOwnPropertyNames(M).filter(k => !'length name prototype r ze on id'.includes(k)).map(k => [k, (...x)=>M[k](m, ...x)])))
  }
  static di = (...As) => {
    As = As.map(M.ne)
    return V.ne(Math.min(...As.map(A => A.length)), Math.min(...As.map(A => A[0].length)))
  }

  static ze = (m, n) => {
    return M.ne(range(m).map(() => range(n).map(() => 0)))
  }
  static on = (m, n) => {
    return M.ne(range(m).map(() => range(n).map(() => 1)))
  }
  static id = (m, n) => {
    return M.ne(range(m).map(r => range(n).map(c => r === c ? 1 : 0)))
  }

  static el = (A, i, j) => M.ne(A)[i][j]
  static a = (...x) => M.el(...x)
  static ro = (A, i=undefined) => {
    A = M.ne(A)
    return i === undefined ? A : V.ne(A[i])
  }
  static co = (A, i) => {
    const n = M.di(A).x
    const v = V.ze(n)
    for (let j = 0; j < n; j++) v[j] = A[j][i]
    return v
  }
  static tr = (A) => {
    A = M.ne(A)
    return M.ne(A[0].map((_,c)=>A.map((_,r)=>A[r][c])))
  }
  static sc = (aMN, c) => {
    aMN = M.ne(aMN)
    const di = M.di(aMN)
    return M.ne(range(di[0]).map(r_i => range(di[1]).map(c_i => aMN[r_i][c_i] * c)))
  }
  static ad = (aMN, bMN) => {
    aMN = M.ne(aMN)
    bMN = M.ne(bMN)
    const di = M.di(aMN, bMN)
    const cMN = M.ze(di.x, di.y)
    for (let r = 0; r < cMN.m; r++) {
      for (let c = 0; c < cMN.n; c++) {
        cMN[r][c] = aMN[r][c] + bMN[r][c]
      }
    }
    return cMN
  }
  static mu = (aMN, bNP) => {
    aMN = M.ne(aMN)
    bNP = M.ne(bNP)
    const di_aMN = M.di(aMN)
    const m = di_aMN.x
    const p = di_aMN.y
    const n = M.di(bNP).y
    const cMP = M.ze(m, n)
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        for (let i = 0; i < p; i++) {
          cMP[r][c] += aMN[r][i] * bNP[i][c]
        }
      }
    }
    return cMP
  }

  static st = (A, pr=3) => {
    A = M.ne(A)
    const round = Math.pow(10, pr)
    const lines = A.map(rv => rv.map(x => typeof x === 'number' ? String(Math.round(x * round) / round) : String(x)))
    const value_len = Math.max(...lines.flatMap(x=>x).map(x=>x.length))
    return `${M.di(A)}\n(${lines.map(rv=>rv.map(s=>s.padStart(value_len)).join(' ')).join(')\n(')})`
  }
  static ar = (A, d=2) => {
    A = M.ne(A)
    while (d--) A = A.flatMap(x=>x)
    return A
  }
  static eq = (A, B) => V.eq(M.di(A), M.di(B)) && A.every((A_i, i) => V.eq(A_i, B[i]))

  static r = (a) => {
    return M.ne([
      [Math.cos(a), -Math.sin(a)],
      [Math.sin(a), Math.cos(a)],
    ])
  }
}

const A = class extends Number {
  // <A>NGLE IMPLEMENTATION (number modulo TAU)
  // no rmalize to [0 TAU)
  // ad d angles
  // ac ute difference between two angles in [-PI PI]
  // ua unsigned acute difference between angles
  // ob tuse difference between two angles
  // uo unsigned obtuse difference between angles
  // si gn in {-1 0 1}
  // de cimal

  static PI = Math.PI
  static P = Math.PI
  static TAU = 2 * Math.PI
  static T = 2 * Math.PI

  static no = (x) => (x%A.T + A.T)%A.T
  static ad = (a, b) => A.no(a + b)
  static ac = (a, b=undefined) => {
    const x = b === undefined ? a : b - a
    const full = x % A.T
    return full < -A.P ? full + A.T : A.P < full ? full - A.T : full
  }
  static ua = (a, b) => Math.abs(A.ac(a, b))
  static ob = (a, b) => {
    const acute = A.ac(a, b)
    return acute + (acute < 0 ? A.T : -A.T)
  }
  static si = (x) => {
    const split = A.sp(x)
    return Math.round(split / Math.abs(split))
  }
  static de = (radians) => 360 * radians / A.T
  static ra = (degrees) => A.T * degrees / 360
}

      return { V, M, A }
    })()
    names.map(name => window[name] = Object.assign({}, definition, {
        version, [name]:version, t:Date.now()
    }))
    Object.assign(window, definition)

  }
}