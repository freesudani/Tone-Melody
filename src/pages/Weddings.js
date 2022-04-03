import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import homebg from "../images/blob-haikei.png";
import weddingImage1 from "../images/andy-lee-FuDKEwFLsQU-unsplash.jpg";
import weddingImage2 from "../images/mitchell-orr---LyFIjXoFY-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  weddings: {
    position: "relative",
    background: `url(${homebg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(22),
  },

  weddingimg: {
    height: "100%",
    width: "100%",
    maxWidth: "25rem",
    maxHeight: "13rem",
    marginLeft: theme.spacing(14),
  },
}));

const Weddings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.weddings}>
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <img
            src={weddingImage1}
            alt="wedding1"
            className={classes.weddingimg}
          />
          <img
            src={weddingImage2}
            alt="wedding2"
            className={classes.weddingimg}
          />
        </Grid>
        <Grid item xs={6}>
          <Box style={{ float: "left" }}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="135.000000pt"
              height="75.000000pt"
              viewBox="0 0 1280.000000 809.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,809.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M11113 7657 l-43 -21 0 -668 0 -667 -32 -5 c-328 -53 -439 -73 -578
-102 -367 -78 -700 -170 -1100 -304 -146 -48 -273 -91 -282 -95 -17 -7 -18 24
-20 526 -3 513 -4 534 -22 537 -10 2 -36 -4 -57 -14 l-39 -17 0 -542 0 -543
-62 -22 c-114 -42 -484 -198 -685 -288 -407 -184 -834 -399 -1268 -640 -142
-79 -182 -97 -188 -86 -4 8 -13 85 -19 172 -6 86 -15 160 -21 163 -5 4 -24 1
-41 -6 l-31 -13 -3 -200 -2 -200 -423 -240 c-540 -306 -841 -472 -855 -472 -7
0 -12 8 -12 18 0 9 -14 177 -31 372 -34 382 -36 388 -89 375 -76 -18 -996
-288 -1003 -294 -6 -6 54 -727 78 -938 l6 -51 -203 -80 c-226 -89 -490 -180
-706 -242 l-143 -41 -44 31 c-111 76 -268 129 -391 130 l-40 0 -27 211 -27
211 107 112 c225 235 339 446 389 722 25 136 25 450 1 584 -28 152 -54 238
-107 345 -68 141 -165 245 -228 245 -85 0 -268 -253 -336 -465 -55 -172 -61
-227 -60 -535 1 -243 5 -311 26 -459 l24 -173 -110 -101 c-61 -55 -179 -163
-262 -238 -349 -320 -480 -515 -524 -786 l-12 -73 -198 0 -198 0 5 43 c5 39 2
46 -27 70 -45 38 -76 44 -108 20 -23 -17 -27 -28 -27 -72 0 -45 -2 -51 -21
-51 -19 0 -22 7 -27 69 -10 124 -70 212 -183 267 -81 40 -193 45 -277 14 -111
-42 -187 -120 -209 -218 l-13 -54 -55 7 c-30 4 -100 16 -155 26 -125 24 -125
24 -125 -4 0 -21 9 -24 153 -50 83 -15 160 -27 169 -27 17 0 34 -17 26 -26 -4
-4 -287 49 -330 62 -14 4 -18 -1 -18 -19 0 -28 -14 -24 249 -78 125 -25 180
-43 168 -55 -2 -2 -93 17 -203 41 -109 25 -202 45 -206 45 -5 0 -8 -10 -8 -22
0 -21 11 -26 138 -56 158 -37 424 -92 564 -117 69 -12 98 -22 98 -31 0 -8 -9
-14 -20 -14 -33 0 -389 77 -593 129 l-187 47 0 -22 c0 -19 9 -26 53 -39 85
-26 483 -122 605 -147 87 -18 112 -26 110 -38 -2 -10 -12 -14 -28 -12 -75 10
-648 159 -722 187 -14 6 -18 2 -18 -18 0 -22 8 -27 83 -51 113 -35 464 -130
566 -153 44 -10 81 -22 81 -26 0 -14 -54 -87 -139 -187 -82 -97 -96 -132 -53
-138 16 -2 60 35 174 148 l153 151 230 -46 c127 -25 307 -56 400 -70 94 -14
184 -28 200 -31 24 -4 39 -18 75 -76 100 -158 272 -303 437 -366 129 -50 234
-65 408 -59 83 3 161 9 175 12 l25 6 35 -275 c31 -252 33 -281 22 -356 -22
-151 -97 -262 -216 -320 -136 -66 -310 -58 -379 18 -17 19 -17 19 29 26 231
31 332 293 179 464 -98 109 -232 136 -361 72 -101 -49 -151 -130 -161 -255
-11 -134 34 -252 132 -350 208 -208 555 -207 764 2 78 79 116 150 137 260 21
112 17 232 -19 503 l-33 245 77 36 c167 79 313 209 378 337 l19 38 220 22
c635 65 1164 173 1987 408 182 52 339 97 350 101 19 5 19 5 4 -13 -62 -71 -94
-211 -70 -300 23 -84 122 -164 223 -179 130 -20 308 48 430 163 127 120 147
173 149 393 l1 148 32 10 c74 24 348 92 352 88 3 -2 0 -16 -6 -31 -17 -46 -13
-86 9 -86 24 0 48 30 80 97 l23 51 147 32 c726 158 1474 199 2186 119 1072
-120 2133 -513 3115 -1153 69 -45 131 -85 138 -90 9 -6 12 26 12 146 l0 154
-177 106 c-550 330 -1052 561 -1608 741 -656 213 -1306 317 -1993 321 l-263 1
38 29 c63 49 170 163 199 211 14 25 34 72 44 103 l18 57 133 8 c159 10 618 2
809 -13 900 -72 1737 -306 2580 -723 113 -56 208 -103 213 -105 4 -2 7 64 7
146 l0 149 -132 63 c-553 264 -1221 484 -1746 576 -56 9 -102 20 -102 23 0 3
21 17 48 31 26 14 90 68 143 120 105 105 149 176 169 274 l12 58 61 -6 c327
-37 995 -212 1416 -372 64 -24 119 -44 124 -44 4 0 6 66 5 146 l-3 146 -80 30
c-176 65 -559 175 -806 232 l-27 6 41 77 c79 152 121 278 163 490 3 18 9 22
32 18 145 -26 415 -82 530 -110 79 -19 145 -35 148 -35 2 0 3 66 2 147 l-3
147 -80 17 c-122 27 -387 76 -511 95 l-110 16 -13 61 c-7 34 -19 74 -27 90
-14 26 -13 37 7 120 17 70 22 124 23 226 l1 133 120 -6 c115 -7 447 -38 548
-52 l47 -7 0 147 c0 80 -1 146 -2 146 -2 0 -70 7 -153 15 -82 8 -259 18 -393
22 l-243 6 -46 91 c-86 171 -153 255 -418 526 -323 331 -354 381 -355 577 0
122 -9 133 -77 100z m278 -903 c117 -72 194 -130 277 -209 68 -63 159 -172
151 -179 -2 -2 -93 -9 -202 -16 -188 -11 -199 -11 -213 7 -136 172 -214 340
-214 461 l0 53 58 -32 c31 -18 96 -56 143 -85z m547 -667 c14 -16 31 -196 25
-254 l-5 -42 -48 57 c-26 31 -89 97 -139 147 -75 73 -88 91 -74 97 34 13 230
9 241 -5z m-541 -138 c205 -132 300 -204 371 -285 53 -59 118 -161 109 -171
-4 -3 -75 -1 -159 5 -84 7 -237 15 -340 18 l-188 7 0 273 c0 172 4 274 10 274
5 0 94 -54 197 -121z m-327 -164 l0 -263 -72 -6 c-40 -3 -158 -10 -263 -16
-449 -27 -978 -111 -1472 -235 -99 -25 -185 -45 -192 -45 -8 0 -11 50 -9 188
l3 187 170 57 c409 137 914 263 1355 339 161 27 463 67 473 62 4 -2 7 -123 7
-268z m-2130 -419 l0 -185 -117 -36 c-565 -174 -1114 -388 -1705 -666 l-192
-90 -23 28 c-62 72 -113 147 -106 154 11 10 231 127 473 252 342 176 788 382
1135 525 170 69 515 201 528 202 4 0 7 -83 7 -184z m2130 -347 c0 -235 -1
-251 -17 -244 -117 47 -127 49 -268 49 -126 0 -148 -3 -225 -28 -72 -24 -111
-29 -250 -37 -599 -31 -761 -47 -1235 -122 -6 -1 -11 69 -13 190 l-2 192 40
11 c317 85 886 181 1275 215 239 20 258 21 493 23 l202 2 0 -251z m380 241
c152 -11 411 -36 469 -47 l34 -6 -6 -91 c-8 -109 -33 -219 -88 -381 l-40 -121
-174 32 c-96 17 -238 40 -315 50 l-140 18 0 278 0 278 58 0 c31 0 122 -5 202
-10z m-8472 -90 c43 -26 70 -88 90 -204 44 -262 -83 -553 -362 -825 -53 -52
-55 -53 -60 -30 -16 77 -28 224 -27 364 0 233 24 376 87 513 48 106 100 162
173 188 49 18 61 17 99 -6z m5962 -369 l0 -189 -77 -17 c-513 -110 -995 -252
-1467 -430 -199 -75 -199 -75 -214 -53 -8 11 -46 56 -84 98 l-68 78 193 85
c416 184 763 319 1134 442 175 58 554 173 576 174 4 1 7 -84 7 -188z m1190
-303 c-85 -128 -106 -261 -64 -413 5 -20 0 -20 -363 -20 -202 0 -430 -4 -505
-8 l-138 -8 0 194 c0 194 0 195 23 200 45 12 336 46 512 62 226 19 260 21 423
23 l134 2 -22 -32z m-3512 -145 l-3 -118 -624 -313 c-343 -172 -625 -312 -627
-309 -2 2 -6 41 -10 88 l-6 84 193 102 c107 56 390 210 629 342 239 132 439
240 443 241 4 0 6 -53 5 -117z m-1403 75 c2 -13 14 -131 25 -263 11 -132 23
-252 26 -267 5 -23 0 -31 -28 -48 -51 -32 -618 -312 -755 -373 l-123 -55 -4
32 c-10 61 -69 736 -65 739 2 2 87 27 189 56 102 28 300 85 440 126 140 41
263 74 272 75 10 0 20 -10 23 -22z m3725 -133 l0 -125 -40 20 c-129 66 -309
67 -468 4 -139 -56 -308 -181 -362 -268 -18 -31 -28 -35 -118 -56 -124 -28
-290 -71 -464 -121 -75 -21 -138 -39 -141 -39 -2 0 -7 22 -11 50 -4 27 -18 84
-32 126 -20 58 -23 78 -14 84 24 15 557 190 715 235 280 80 838 210 918 214
15 1 17 -11 17 -124z m-2069 -130 c63 -31 127 -76 158 -109 23 -24 23 -26 5
-32 -10 -4 -86 -36 -167 -70 -103 -43 -150 -59 -153 -50 -3 7 -3 61 -2 122 l3
109 50 27 c28 15 52 28 54 28 1 0 25 -11 52 -25z m-253 -196 l-3 -121 -350
-155 c-192 -85 -468 -205 -612 -268 l-262 -113 -5 52 c-4 28 -7 68 -9 89 l-2
37 205 98 c113 53 390 188 615 299 226 110 414 202 418 202 4 1 6 -54 5 -120z
m557 -110 c25 -55 61 -176 54 -183 -6 -7 -498 -176 -509 -176 -7 0 -10 44 -8
122 l3 123 205 82 c113 45 211 83 218 83 7 0 24 -23 37 -51z m-1891 -171 c14
-123 37 -101 -236 -225 -275 -125 -654 -280 -663 -271 -4 3 -7 34 -8 68 l-2
62 175 76 c96 42 294 136 440 208 146 73 270 133 276 133 6 1 14 -23 18 -51z
m2695 -43 c0 -81 27 -144 84 -202 22 -24 37 -43 32 -43 -61 0 -521 -83 -704
-126 -57 -13 -106 -23 -108 -21 -2 2 8 45 21 96 14 50 28 116 31 146 l7 55 52
15 c56 17 538 137 578 144 3 0 6 -28 7 -64z m-1361 -66 l-3 -121 -525 -197
c-695 -261 -703 -263 -696 -245 3 9 6 54 6 100 0 46 4 84 9 84 11 0 459 186
901 374 162 69 299 126 303 126 4 0 6 -54 5 -121z m602 -174 c-6 -33 -20 -88
-31 -123 -17 -51 -25 -63 -47 -68 -15 -4 -114 -31 -220 -60 -107 -30 -198 -54
-203 -54 -15 0 -11 236 4 248 6 5 122 46 257 89 l245 80 3 -26 c2 -14 -1 -52
-8 -86z m-4630 98 c0 -3 9 -80 21 -170 11 -91 19 -166 17 -167 -1 -1 -33 -15
-70 -30 -127 -53 -230 -139 -292 -245 -36 -63 -41 -65 -188 -76 -66 -5 -88 -4
-88 5 0 25 87 178 142 250 80 106 163 192 313 325 120 107 145 125 145 108z
m2724 -140 c5 -64 3 -83 -6 -85 -7 0 -44 -2 -83 -3 -83 -2 -137 -26 -205 -89
-49 -46 -136 -83 -459 -191 l-159 -53 -7 65 c-4 36 -3 69 2 73 4 4 78 33 163
65 160 60 500 202 650 272 47 22 88 37 91 34 4 -3 9 -43 13 -88z m1304 -175
l-3 -121 -250 -77 c-137 -43 -398 -123 -580 -179 -611 -189 -962 -284 -1338
-360 -317 -65 -677 -122 -928 -147 l-67 -6 14 52 c8 29 16 55 18 58 3 2 74 15
158 28 84 13 200 33 257 44 84 16 111 17 145 8 59 -16 124 -3 192 38 44 27
103 46 253 84 108 27 279 73 381 103 102 30 214 57 249 60 47 4 76 13 114 37
29 18 189 80 362 141 170 60 465 165 655 233 190 69 351 125 358 125 10 1 12
-27 10 -121z m-2313 43 c4 -33 4 -64 1 -70 -15 -23 -853 -281 -916 -281 -9 0
-31 18 -49 40 l-31 39 57 16 c256 72 580 180 793 264 69 27 128 49 132 50 3 1
9 -26 13 -58z m-3605 -159 c19 -10 49 -39 66 -64 31 -45 73 -172 61 -184 -3
-4 -42 -3 -87 1 -79 7 -81 8 -94 40 -31 73 -119 106 -185 68 -37 -22 -46 -14
-32 30 32 96 182 156 271 109z m3624 -53 c11 -57 10 -58 -31 -43 -51 18 -89
17 -154 -2 -45 -13 -67 -29 -128 -91 -61 -63 -83 -78 -125 -89 -80 -21 -403
-94 -418 -94 -7 0 -18 15 -24 33 -6 17 -14 39 -18 47 -5 12 26 23 166 58 169
43 538 151 648 191 74 26 77 26 84 -10z m611 -151 c5 -14 0 -20 -21 -29 -45
-17 -507 -149 -523 -149 -8 0 -11 6 -6 18 4 9 12 42 17 73 l11 56 251 84 251
84 6 -60 c4 -33 10 -68 14 -77z m-2010 -44 c33 -8 64 -19 68 -23 4 -4 -33 -15
-83 -23 -49 -8 -90 -11 -90 -8 0 4 -3 22 -6 39 -6 29 -5 31 23 31 16 0 56 -7
88 -16z m-245 -33 c0 -11 3 -26 6 -34 4 -11 -8 -16 -53 -21 -32 -4 -71 -9 -88
-12 l-30 -5 29 23 c37 30 107 68 123 68 7 0 13 -9 13 -19z m-1887 -27 c22 -4
37 -11 37 -20 0 -17 -3 -17 -107 -2 -61 8 -83 15 -83 26 0 14 34 14 153 -4z
m1410 -36 c-3 -18 -7 -35 -9 -36 -1 -2 -57 -6 -123 -9 l-120 -6 8 29 c7 29 8
29 122 40 63 6 117 12 121 13 4 0 5 -14 1 -31z m-775 -4 l192 -7 0 -25 0 -24
-132 6 c-330 17 -478 30 -478 45 0 20 22 23 120 17 58 -3 192 -9 298 -12z
m1712 -34 c18 -23 31 -42 29 -44 -7 -6 -320 -48 -325 -44 -2 3 -5 22 -7 44
l-2 38 125 22 c69 12 130 22 137 23 6 0 26 -17 43 -39z m-2416 -2 c56 -7 90
-17 93 -25 3 -8 3 -16 1 -18 -4 -5 -130 15 -238 37 -44 9 -51 12 -35 19 11 5
36 6 55 4 19 -3 75 -10 124 -17z m3199 -45 c2 -32 3 -60 2 -61 -4 -5 -361 -70
-405 -74 l-35 -3 -3 52 c-3 48 -1 53 20 58 13 2 100 21 193 41 94 20 172 38
174 40 2 2 14 4 26 4 20 0 23 -6 28 -57z m-1220 -15 c3 -18 2 -36 -2 -40 -5
-5 -228 -28 -277 -28 -12 0 -11 7 5 39 l20 39 83 10 c46 5 102 10 124 11 40 1
42 -1 47 -31z m-1533 8 c85 -8 221 -18 302 -22 146 -7 146 -7 151 -32 l5 -25
-127 7 c-121 6 -502 45 -510 52 -6 5 8 34 16 34 4 0 78 -7 163 -14z m1020 -51
l0 -35 -125 0 c-112 0 -125 2 -125 18 0 35 15 41 110 45 52 1 105 4 118 5 19
2 22 -3 22 -33z m1040 -66 c6 -23 9 -43 6 -46 -5 -5 -154 -24 -302 -37 l-71
-7 -6 43 c-3 23 -5 43 -4 45 1 1 79 11 172 23 94 12 172 24 174 26 9 9 21 -10
31 -47z m-2105 21 c124 -16 466 -50 503 -50 5 0 12 -12 15 -26 l5 -27 -82 7
c-149 12 -560 67 -603 81 -12 4 -7 35 6 35 3 0 74 -9 156 -20z m1599 -81 l6
-36 -106 -6 c-59 -4 -133 -7 -166 -7 l-58 0 0 40 0 40 78 1 c42 1 111 4 152 8
41 3 78 4 81 1 4 -3 9 -21 13 -41z m-505 -10 c6 -18 11 -34 11 -35 0 -2 -59
-4 -130 -4 l-130 0 -10 26 c-6 14 -10 30 -10 35 0 5 56 9 129 9 l129 0 11 -31z
m-1124 -4 c136 -22 527 -75 559 -75 12 0 41 -49 33 -56 -12 -12 -768 113 -784
130 -9 9 8 26 26 26 9 0 84 -11 166 -25z m2149 -107 c-4 -24 -10 -47 -14 -51
-7 -8 -215 -25 -311 -27 -36 0 -37 1 -41 43 -3 23 -4 43 -2 45 2 4 272 29 332
31 l42 1 -6 -42z m-1093 2 l116 0 27 -40 27 -41 -93 6 c-195 12 -218 16 -228
35 -18 33 -13 53 13 46 12 -3 74 -6 138 -6z m589 -9 c0 -5 3 -23 6 -40 l7 -31
-145 0 -144 0 -17 35 c-9 20 -17 38 -17 40 0 3 70 5 155 5 85 0 155 -4 155 -9z
m-490 -136 l135 -7 92 -45 c91 -46 171 -62 180 -37 2 6 -22 24 -54 40 l-58 29
104 3 c57 1 105 1 107 -1 9 -8 37 -257 31 -264 -17 -16 -225 -15 -303 2 -160
34 -320 134 -403 250 l-34 48 34 -6 c19 -3 95 -9 169 -12z m940 -13 c0 -14
-54 -84 -91 -119 -37 -34 -147 -103 -165 -103 -7 0 -16 37 -23 88 -17 138 -20
130 47 135 120 7 232 7 232 -1z"
                />
                <path
                  d="M1003 3174 c-22 -22 -24 -31 -19 -67 9 -56 40 -87 86 -87 62 0 106
62 81 116 -13 29 -67 64 -99 64 -13 0 -34 -12 -49 -26z"
                />
              </g>
            </svg>
          </Box>
          <Typography variant="body2" color="textPrimary">
            Note & Melody Band has performed over 3,500 weddings in the past 25
            years all over the city. From First Dance to the unique sendoff, we
            know how to celebrate the most important day of your life! We
            entertain your guests from dinner music to high energy dance music
            later in the night.
          </Typography>
          <Typography variant="body2" color="textPrimary">
            find it very easy working with our talented support staff as each
            detail of the wedding reception is worked through. From song
            requests to the timing of each phase of the reception, Note & Melody
            Band has the experience and talent to make it happen.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Weddings;
