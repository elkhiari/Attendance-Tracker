const colors = {
    primary: "#638C1C",
    secondary: "#F2F2F2",
    white: "#fff",
    black: "#000",
    gray: "#7E8A9B",
    gray2: "#D1D5DB",
    red: "#F56565",
    green: "#3CB35A",
    blue: "#3B82F6",
    lightBlue: "#93C5FD",
    darkBlue: "#1E40AF",
    yellow: "#F6E05E",
    lightGray: "#F3F4F6",
    transparent: "transparent",
    bginherit	: "inherit:",
    bgcurrent	: "currentColor:",
    bgtransparent	: "transparent:",
    bgblack	: "rgb(0 0 0)",
    bgwhite	: "rgb(255 255 255)",
    bgslate50	: "rgb(248 250 252)",
    bgslate100	: "rgb(241 245 249)",
    bgslate200	: "rgb(226 232 240)",
    bgslate300	: "rgb(203 213 225)",
    bgslate400	: "rgb(148 163 184)",
    bgslate500	: "rgb(100 116 139)",
    bgslate600	: "rgb(71 85 105)",
    bgslate700	: "rgb(51 65 85)",
    bgslate800	: "rgb(30 41 59)",
    bgslate900	: "rgb(15 23 42)",
    bgslate950	: "rgb(2 6 23)",
    bggray50	: "rgb(249 250 251)",
    bggray100	: "rgb(243 244 246)",
    bggray200	: "rgb(229 231 235)",
    bggray300	: "rgb(209 213 219)",
    bggray400	: "rgb(156 163 175)",
    bggray500	: "rgb(107 114 128)",
    bggray600	: "rgb(75 85 99)",
    bggray700	: "rgb(55 65 81)",
    bggray800	: "rgb(31 41 55)",
    bggray900	: "rgb(17 24 39)",
    bggray950	: "rgb(3 7 18)",
    bgzinc50	: "rgb(250 250 250)",
    bgzinc100	: "rgb(244 244 245)",
    bgzinc200	: "rgb(228 228 231)",
    bgzinc300	: "rgb(212 212 216)",
    bgzinc400	: "rgb(161 161 170)",
    bgzinc500	: "rgb(113 113 122)",
    bgzinc600	: "rgb(82 82 91)",
    bgzinc700	: "rgb(63 63 70)",
    bgzinc800	: "rgb(39 39 42)",
    bgzinc900	: "rgb(24 24 27)",
    bgzinc950	: "rgb(9 9 11)",
    bgneutral50	: "rgb(250 250 250)",
    bgneutral100	: "rgb(245 245 245)",
    bgneutral200	: "rgb(229 229 229)",
    bgneutral300	: "rgb(212 212 212)",
    bgneutral400	: "rgb(163 163 163)",
    bgneutral500	: "rgb(115 115 115)",
    bgneutral600	: "rgb(82 82 82)",
    bgneutral700	: "rgb(64 64 64)",
    bgneutral800	: "rgb(38 38 38)",
    bgneutral900	: "rgb(23 23 23)",
    bgneutral950	: "rgb(10 10 10)",
    bgstone50	: "rgb(250 250 249)",
    bgstone100	: "rgb(245 245 244)",
    bgstone200	: "rgb(231 229 228)",
    bgstone300	: "rgb(214 211 209)",
    bgstone400	: "rgb(168 162 158)",
    bgstone500	: "rgb(120 113 108)",
    bgstone600	: "rgb(87 83 78)",
    bgstone700	: "rgb(68 64 60)",
    bgstone800	: "rgb(41 37 36)",
    bgstone900	: "rgb(28 25 23)",
    bgstone950	: "rgb(12 10 9)",
    bgred50	: "rgb(254 242 242)",
    bgred100	: "rgb(254 226 226)",
    bgred200	: "rgb(254 202 202)",
    bgred300	: "rgb(252 165 165)",
    bgred400	: "rgb(248 113 113)",
    bgred500	: "rgb(239 68 68)",
    bgred600	: "rgb(220 38 38)",
    bgred700	: "rgb(185 28 28)",
    bgred800	: "rgb(153 27 27)",
    bgred900	: "rgb(127 29 29)",
    bgred950	: "rgb(69 10 10)",
    bgorange50	: "rgb(255 247 237)",
    bgorange100	: "rgb(255 237 213)",
    bgorange200	: "rgb(254 215 170)",
    bgorange300	: "rgb(253 186 116)",
    bgorange400	: "rgb(251 146 60)",
    bgorange500	: "rgb(249 115 22)",
    bgorange600	: "rgb(234 88 12)",
    bgorange700	: "rgb(194 65 12)",
    bgorange800	: "rgb(154 52 18)",
    bgorange900	: "rgb(124 45 18)",
    bgorange950	: "rgb(67 20 7)",
    bgamber50	: "rgb(255 251 235)",
    bgamber100	: "rgb(254 243 199)",
    bgamber200	: "rgb(253 230 138)",
    bgamber300	: "rgb(252 211 77)",
    bgamber400	: "rgb(251 191 36)",
    bgamber500	: "rgb(245 158 11)",
    bgamber600	: "rgb(217 119 6)",
    bgamber700	: "rgb(180 83 9)",
    bgamber800	: "rgb(146 64 14)",
    bgamber900	: "rgb(120 53 15)",
    bgamber950	: "rgb(69 26 3)",
    bgyellow50	: "rgb(254 252 232)",
    bgyellow100	: "rgb(254 249 195)",
    bgyellow200	: "rgb(254 240 138)",
    bgyellow300	: "rgb(253 224 71)",
    bgyellow400	: "rgb(250 204 21)",
    bgyellow500	: "rgb(234 179 8)",
    bgyellow600	: "rgb(202 138 4)",
    bgyellow700	: "rgb(161 98 7)",
    bgyellow800	: "rgb(133 77 14)",
    bgyellow900	: "rgb(113 63 18)",
    bgyellow950	: "rgb(66 32 6)",
    bglime50	: "rgb(247 254 231)",
    bglime100	: "rgb(236 252 203)",
    bglime200	: "rgb(217 249 157)",
    bglime300	: "rgb(190 242 100)",
    bglime400	: "rgb(163 230 53)",
    bglime500	: "rgb(132 204 22)",
    bglime600	: "rgb(101 163 13)",
    bglime700	: "rgb(77 124 15)",
    bglime800	: "rgb(63 98 18)",
    bglime900	: "rgb(54 83 20)",
    bglime950	: "rgb(26 46 5)",
    bggreen50	: "rgb(240 253 244)",
    bggreen100	: "rgb(220 252 231)",
    bggreen200	: "rgb(187 247 208)",
    bggreen300	: "rgb(134 239 172)",
    bggreen400	: "rgb(74 222 128)",
    bggreen500	: "rgb(34 197 94)",
    bggreen600	: "rgb(22 163 74)",
    bggreen700	: "rgb(21 128 61)",
    bggreen800	: "rgb(22 101 52)",
    bggreen900	: "rgb(20 83 45)",
    bggreen950	: "rgb(5 46 22)",
    bgemerald50	: "rgb(236 253 245)",
    bgemerald100	: "rgb(209 250 229)",
    bgemerald200	: "rgb(167 243 208)",
    bgemerald300	: "rgb(110 231 183)",
    bgemerald400	: "rgb(52 211 153)",
    bgemerald500	: "rgb(16 185 129)",
    bgemerald600	: "rgb(5 150 105)",
    bgemerald700	: "rgb(4 120 87)",
    bgemerald800	: "rgb(6 95 70)",
    bgemerald900	: "rgb(6 78 59)",
    bgemerald950	: "rgb(2 44 34)",
    bgteal50	: "rgb(240 253 250)",
    bgteal100	: "rgb(204 251 241)",
    bgteal200	: "rgb(153 246 228)",
    bgteal300	: "rgb(94 234 212)",
    bgteal400	: "rgb(45 212 191)",
    bgteal500	: "rgb(20 184 166)",
    bgteal600	: "rgb(13 148 136)",
    bgteal700	: "rgb(15 118 110)",
    bgteal800	: "rgb(17 94 89)",
    bgteal900	: "rgb(19 78 74)",
    bgteal950	: "rgb(4 47 46)",
    bgcyan50	: "rgb(236 254 255)",
    bgcyan100	: "rgb(207 250 254)",
    bgcyan200	: "rgb(165 243 252)",
    bgcyan300	: "rgb(103 232 249)",
    bgcyan400	: "rgb(34 211 238)",
    bgcyan500	: "rgb(6 182 212)",
    bgcyan600	: "rgb(8 145 178)",
    bgcyan700	: "rgb(14 116 144)",
    bgcyan800	: "rgb(21 94 117)",
    bgcyan900	: "rgb(22 78 99)",
    bgcyan950	: "rgb(8 51 68)",
    bgsky50	: "rgb(240 249 255)",
    bgsky100	: "rgb(224 242 254)",
    bgsky200	: "rgb(186 230 253)",
    bgsky300	: "rgb(125 211 252)",
    bgsky400	: "rgb(56 189 248)",
    bgsky500	: "rgb(14 165 233)",
    bgsky600	: "rgb(2 132 199)",
    bgsky700	: "rgb(3 105 161)",
    bgsky800	: "rgb(7 89 133)",
    bgsky900	: "rgb(12 74 110)",
    bgsky950	: "rgb(8 47 73)",
    bgblue50	: "rgb(239 246 255)",
    bgblue100	: "rgb(219 234 254)",
    bgblue200	: "rgb(191 219 254)",
    bgblue300	: "rgb(147 197 253)",
    bgblue400	: "rgb(96 165 250)",
    bgblue500	: "rgb(59 130 246)",
    bgblue600	: "rgb(37 99 235)",
    bgblue700	: "rgb(29 78 216)",
    bgblue800	: "rgb(30 64 175)",
    bgblue900	: "rgb(30 58 138)",
    bgblue950	: "rgb(23 37 84)",
    bgindigo50	: "rgb(238 242 255)",
    bgindigo100	: "rgb(224 231 255)",
    bgindigo200	: "rgb(199 210 254)",
    bgindigo300	: "rgb(165 180 252)",
    bgindigo400	: "rgb(129 140 248)",
    bgindigo500	: "rgb(99 102 241)",
    bgindigo600	: "rgb(79 70 229)",
    bgindigo700	: "rgb(67 56 202)",
    bgindigo800	: "rgb(55 48 163)",
    bgindigo900	: "rgb(49 46 129)",
    bgindigo950	: "rgb(30 27 75)",
    bgviolet50	: "rgb(245 243 255)",
    bgviolet100	: "rgb(237 233 254)",
    bgviolet200	: "rgb(221 214 254)",
    bgviolet300	: "rgb(196 181 253)",
    bgviolet400	: "rgb(167 139 250)",
    bgviolet500	: "rgb(139 92 246)",
    bgviolet600	: "rgb(124 58 237)",
    bgviolet700	: "rgb(109 40 217)",
    bgviolet800	: "rgb(91 33 182)",
    bgviolet900	: "rgb(76 29 149)",
    bgviolet950	: "rgb(46 16 101)",
    bgpurple50	: "rgb(250 245 255)",
    bgpurple100	: "rgb(243 232 255)",
    bgpurple200	: "rgb(233 213 255)",
    bgpurple300	: "rgb(216 180 254)",
    bgpurple400	: "rgb(192 132 252)",
    bgpurple500	: "rgb(168 85 247)",
    bgpurple600	: "rgb(147 51 234)",
    bgpurple700	: "rgb(126 34 206)",
    bgpurple800	: "rgb(107 33 168)",
    bgpurple900	: "rgb(88 28 135)",
    bgpurple950	: "rgb(59 7 100)",
    bgfuchsia50	: "rgb(253 244 255)",
    bgfuchsia100	: "rgb(250 232 255)",
    bgfuchsia200	: "rgb(245 208 254)",
    bgfuchsia300	: "rgb(240 171 252)",
    bgfuchsia400	: "rgb(232 121 249)",
    bgfuchsia500	: "rgb(217 70 239)",
    bgfuchsia600	: "rgb(192 38 211)",
    bgfuchsia700	: "rgb(162 28 175)",
    bgfuchsia800	: "rgb(134 25 143)",
    bgfuchsia900	: "rgb(112 26 117)",
    bgfuchsia950	: "rgb(74 4 78)",
    bgpink50	: "rgb(253 242 248)",
    bgpink100	: "rgb(252 231 243)",
    bgpink200	: "rgb(251 207 232)",
    bgpink300	: "rgb(249 168 212)",
    bgpink400	: "rgb(244 114 182)",
    bgpink500	: "rgb(236 72 153)",
    bgpink600	: "rgb(219 39 119)",
    bgpink700	: "rgb(190 24 93)",
    bgpink800	: "rgb(157 23 77)",
    bgpink900	: "rgb(131 24 67)",
    bgpink950	: "rgb(80 7 36)",
    bgrose50	: "rgb(255 241 242)",
    bgrose100	: "rgb(255 228 230)",
    bgrose200	: "rgb(254 205 211)",
    bgrose300	: "rgb(253 164 175)",
    bgrose400	: "rgb(251 113 133)",
    bgrose500	: "rgb(244 63 94)",
    bgrose600	: "rgb(225 29 72)",
    bgrose700	: "rgb(190 18 60)",
    bgrose800	: "rgb(159 18 57)",
    bgrose900	: "rgb(136 19 55)",
    bgrose950	: "rgb(76 5 25)",
};

export default colors;