import{u as _}from"./DN7QYjuG.js";import{r as g,u as C,F as c,v as i,B as t,af as j,A as e,ag as s,y as a,R as o,ah as F,T as M,x as S,L as z,ai as E,ab as Z,a2 as N,aj as V,ak as L,S as f,K as T,al as q,z as R,am as D,D as I,E as B}from"./BN4ta8Vf.js";import{_ as p}from"./aiNvVnrP.js";import{_ as H}from"./DlAUqK2U.js";import"./Bov0vCts.js";const l=[{title:"汽车",html:`
<div class="title"><span data-char="C" style="--index: 0">C</span><span data-char="Y" style="--index: 1">Y</span><span data-char="B" style="--index: 2">B</span><span data-char="R" style="--index: 3">R</span><span data-char="T" style="--index: 4">T</span><span data-char="R" style="--index: 5">R</span><span data-char="K" style="--index: 6">K</span>
</div>
<div class="backdrop">
  <div class="mountain" style="--lightness: 3; --height: 25; --width: 29; --speed: 35; --distance: 183; --delay: 20"></div>
  <div class="mountain" style="--lightness: 9; --height: 29; --width: 38; --speed: 42; --distance: 162; --delay: 28"></div>
  <div class="mountain" style="--lightness: 3; --height: 39; --width: 35; --speed: 50; --distance: 195; --delay: 24"></div>
  <div class="mountain" style="--lightness: 4; --height: 11; --width: 19; --speed: 45; --distance: 174; --delay: 37"></div>
  <div class="mountain" style="--lightness: 10; --height: 42; --width: 11; --speed: 33; --distance: 151; --delay: 45"></div>
  <div class="mountain" style="--lightness: 2; --height: 21; --width: 16; --speed: 50; --distance: 168; --delay: 15"></div>
  <div class="mountain" style="--lightness: 2; --height: 16; --width: 34; --speed: 22; --distance: 177; --delay: 26"></div>
  <div class="mountain" style="--lightness: 7; --height: 13; --width: 31; --speed: 47; --distance: 182; --delay: 13"></div>
  <div class="mountain" style="--lightness: 5; --height: 40; --width: 19; --speed: 43; --distance: 163; --delay: 10"></div>
  <div class="mountain" style="--lightness: 7; --height: 10; --width: 39; --speed: 43; --distance: 181; --delay: 37"></div>
</div>
<div class="truck">
  <div class="truck__body">
    <div class="truck__body truck__body--top">
      <div class="truck__window">
        <div class="truck__window-glass"></div>
      </div>
    </div>
    <div class="truck__body truck__body--mid">
      <div class="truck__mid-body"></div>
    </div>
    <div class="truck__body truck__body--bottom">
      <div class="truck__underpanel"></div>
      <div class="truck__rear-bumper"></div>
      <div class="truck__side-skirt"></div>
    </div>
  </div>
  <div class="truck__wheel truck__wheel--front">
    <div class="truck__wheel-arch"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
    <div class="truck-wheel">
      <div class="truck-wheel__rim">
        <div class="truck-wheel__spoke" style="--index: 0;"></div>
        <div class="truck-wheel__spoke" style="--index: 1;"></div>
        <div class="truck-wheel__spoke" style="--index: 2;"></div>
        <div class="truck-wheel__spoke" style="--index: 3;"></div>
        <div class="truck-wheel__spoke" style="--index: 4;"></div>
        <div class="truck-wheel__spoke" style="--index: 5;"></div>
        <div class="truck-wheel__spoke" style="--index: 6;"></div>
      </div>
    </div>
  </div>
  <div class="truck__wheel truck__wheel--rear">
    <div class="truck__wheel-arch"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
    <div class="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
    <div class="truck-wheel">
      <div class="truck-wheel__rim">
        <div class="truck-wheel__spoke" style="--index: 0;"></div>
        <div class="truck-wheel__spoke" style="--index: 1;"></div>
        <div class="truck-wheel__spoke" style="--index: 2;"></div>
        <div class="truck-wheel__spoke" style="--index: 3;"></div>
        <div class="truck-wheel__spoke" style="--index: 4;"></div>
        <div class="truck-wheel__spoke" style="--index: 5;"></div>
        <div class="truck-wheel__spoke" style="--index: 6;"></div>
      </div>
    </div>
  </div>
  <div class="truck__headlight"></div>
  <div class="truck__taillight"></div>
  <div class="truck__indicator"></div>
  <div class="truck__foglight"></div>
</div>`,css:`* {
  box-sizing: border-box;
}
.truck * {
  transition: all 0.25s ease;
}
body {
  align-items: center;
  background: linear-gradient(180deg, #1a1c23, #111317 50%, #1a1a1a 50%), #1a1a1a;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  width: 100vw;
}
:root {
  --width: 300;
}
@media (min-width: 768px) {
  :root {
    --width: 600;
  }
}
.title {
  display: none;
  --color: #b3b3b3;
  --speed: 0.1;
  text-transform: uppercase;
  color: var(--color);
  text-shadow: 0 0 20px var(--color);
  font-size: 25vh;
  font-family: 'Wallpoet', cursive;
  position: absolute;
  bottom: 42%;
  left: 50%;
  transform: translate(-50%, 0);
}
.title span {
  -webkit-animation: flicker calc(var(--speed, 4) * 1s) calc(var(--delay, 0) * 1s) infinite steps(1);
          animation: flicker calc(var(--speed, 4) * 1s) calc(var(--delay, 0) * 1s) infinite steps(1);
  opacity: var(--opacity, 1);
  --speed: calc(var(--index) + 1);
  --delay: var(--index);
}
@-webkit-keyframes flicker {
  0%, 20% {
    --opacity: 0.25;
  }
  10%, 30%, 40%, 70%, 80%, 90%, 100% {
    --opacity: 1;
  }
}
@keyframes flicker {
  0%, 20% {
    --opacity: 0.25;
  }
  10%, 30%, 40%, 70%, 80%, 90%, 100% {
    --opacity: 1;
  }
}
.mountain {
  height: calc(var(--height) * 1vh);
  width: calc(var(--width) * 1vw);
  position: absolute;
  bottom: 50%;
  background: hsl(35, 0%, calc(var(--lightness) * 1%));
  left: 50%;
  -webkit-animation: backdrop calc(var(--speed) * 1s) calc(var(--delay) * -1s) infinite linear both;
          animation: backdrop calc(var(--speed) * 1s) calc(var(--delay) * -1s) infinite linear both;
}
.truck {
  position: relative;
  width: calc(var(--width) * 1px);
  height: calc(var(--width) * 0.33px);
}
.truck:after {
  content: '';
  height: 5%;
  width: 100%;
  background: #000;
  position: absolute;
  left: 0;
  bottom: 5%;
  border-radius: 100%;
  filter: blur(10px);
}
.truck__indicator {
  height: 2%;
  width: 3%;
  position: absolute;
  right: 1.5%;
  background: #915d08;
  top: 64%;
  opacity: 0.45;
  z-index: 10;
}
.truck__foglight {
  height: 2%;
  width: 1%;
  position: absolute;
  left: 2%;
  background: #911308;
  top: 58%;
  opacity: 0.45;
  z-index: 10;
}
.truck__taillight {
  height: 2%;
  width: 1%;
  background: radial-gradient(circle at center, #ffebeb, #f00), #f00;
  box-shadow: 0 0 30px 5px #f33;
  position: absolute;
  top: 25%;
  z-index: 10;
  left: 0;
}
.truck__taillight:after {
  content: '';
  height: 100%;
  width: 800%;
  background: #ff4d4d;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 25%;
  filter: blur(8px);
  box-shadow: 0 0 60px 5px #ff8080;
}
.truck__headlight {
  height: 5%;
  width: 4%;
  position: absolute;
  right: 0;
  border-radius: 25%;
  top: 42%;
  z-index: 10;
  transform: rotate(4deg);
  background: #fff;
  box-shadow: 0 0 40px 5px #9bf, 0 0 2px 2px #b3ccff inset;
}
.truck__headlight:after {
  content: '';
  position: absolute;
  top: 20%;
  left: 0;
  height: 60%;
  width: 100vw;
  background: linear-gradient(0deg, #9bf, #cfdefc, #9bf), #cdf;
  filter: blur(6px);
  box-shadow: 0 0 20px 5px #9bf, 0 0 80px 2px #9bf;
}
.truck__wheel {
  position: absolute;
}
.truck__wheel--front {
  height: 57%;
  width: 21%;
  bottom: 0;
  left: 75%;
  z-index: 4;
  transform: rotate(2deg);
}
.truck__wheel--rear {
  height: 57%;
  width: 21%;
  bottom: 2%;
  left: 10%;
  z-index: 4;
  transform: rotate(2deg);
}
.truck-wheel {
  border-radius: 100%;
  height: calc(var(--width) * 0.15px);
  width: calc(var(--width) * 0.15px);
  background: #242424;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  left: 52%;
  transform: translate(-50%, 0);
}
.truck-wheel__rim {
  height: 60%;
  width: 60%;
  background: radial-gradient(circle at center, transparent, #666), #0d0d0d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  -webkit-animation: spin 0.35s infinite linear;
          animation: spin 0.35s infinite linear;
}
.truck-wheel__rim:after {
  content: '';
  height: 35%;
  width: 35%;
  background: radial-gradient(circle at center, #0d0d0d, #0d0d0d 40%, transparent 40%), radial-gradient(circle at center, #262626, #262626 40%, transparent), #8c8c8c;
  border: 1px solid #1a1a1a;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  z-index: 2;
}
@-webkit-keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.truck-wheel__spoke {
  position: absolute;
  height: 60%;
  width: 20%;
  background: linear-gradient(0deg, transparent, #1a1a1a 50%), #808080;
  border-left: 1px solid #4d4d4d;
  border-right: 1px solid #333;
  border-radius: 0 0 25% 25%;
  top: 50%;
  left: 50%;
  transform-origin: top center;
  transform: translate(-50%, 0) rotate(calc(360 / 7 * var(--index) * 1deg));
}
.truck__wheel-arch {
  background: #080808;
  position: absolute;
  top: 0;
  left: 0;
  right: 1%;
  height: 54%;
  -webkit-clip-path: polygon(0 100%, 23% 0, 81% 0%, 95% 60%, 95% 100%);
  clip-path: polygon(0 100%, 23% 0, 81% 0%, 95% 60%, 95% 100%);
}
.truck__wheel-arch-trim {
  position: absolute;
}
.truck__wheel-arch-trim--top {
  top: 0;
  left: 25%;
  background: #8c8c8c;
  height: 5%;
  width: 53%;
  z-index: 2;
}
.truck__wheel-arch-trim--left {
  top: 0;
  left: -20%;
  background: linear-gradient(160deg, transparent, #666), #333;
  height: 5%;
  width: 44%;
  transform-origin: top right;
  transform: rotate(-60deg);
}
.truck__wheel-arch-trim--right {
  top: 0;
  left: 79%;
  background: linear-gradient(-158deg, transparent, #666), #333;
  height: 5%;
  width: 35%;
  transform-origin: top left;
  transform: rotate(58deg);
}
.truck__body {
  position: absolute;
  height: 100%;
  width: 100%;
}
.truck__body--top {
  background: linear-gradient(90deg, #f4f1f1, #bfbfbf 50%), #e8e3e3;
  height: 33%;
  width: 100%;
  top: 0;
  transform: rotate(3deg);
  -webkit-clip-path: polygon(0 100%, 58% 0, 98% 100%);
  clip-path: polygon(0 100%, 58% 0, 98% 100%);
}
.truck__body--top:before {
  --groove: #999;
  content: '';
  background: linear-gradient(95deg, transparent, transparent 2%, var(--groove) 2%, var(--groove) 3%, transparent 3%), linear-gradient(75deg, transparent, transparent 47%, var(--groove) 47%, var(--groove) 48%, transparent 48%), linear-gradient(78deg, transparent, transparent 95%, var(--groove) 95%, var(--groove) 96%, transparent 96%);
  position: absolute;
  height: 55%;
  width: 40%;
  left: 36%;
  bottom: 0;
  -webkit-clip-path: polygon(0 100%, 0 0, 100% 58%, 100% 100%);
  clip-path: polygon(0 100%, 0 0, 100% 58%, 100% 100%);
}
.truck__body--mid {
  position: absolute;
  width: 100%;
  height: 36%;
  top: 25%;
  transform: rotate(3deg);
  transform-origin: top left;
  z-index: 2;
}
.truck__body--mid:after {
  content: '';
  position: absolute;
  background: #1f1f1f;
  height: 20%;
  width: 5%;
  bottom: 20%;
  right: -0.25%;
  opacity: 1;
  border-left: 1px solid #1a1a1a;
}
.truck__body--mid:before {
  content: '';
  position: absolute;
  background: #0f0f0f;
  height: 20%;
  width: 5%;
  bottom: 5%;
  right: 0%;
  border-radius: 0 0 50% 25%;
  border-left: 1px solid #141414;
}
.truck__body--bottom {
  top: 50%;
  height: 32%;
}
.truck__rear-bumper {
  position: absolute;
  height: 1px;
  width: 9%;
  background: #808080;
  top: 38%;
  left: 2.5%;
  transform-origin: top left;
  transform: rotate(3deg);
}
.truck__side-skirt {
  height: 1px;
  width: 43%;
  position: absolute;
  bottom: 19%;
  left: 32%;
  transform-origin: top left;
  transform: rotate(1deg);
  background: #808080;
}
.truck__underpanel {
  background: #080808;
  height: 65%;
  width: 100%;
  position: absolute;
  bottom: 0;
  -webkit-clip-path: polygon(2% 0, 14% 100%, 88% 100%, 99% 60%, 99% 40%);
  clip-path: polygon(2% 0, 14% 100%, 88% 100%, 99% 60%, 99% 40%);
}
.truck__mid-body {
  --groove: #262626;
  height: 100%;
  width: 100%;
  background: linear-gradient(84deg, transparent, transparent 36.75%, var(--groove) 36.75%, var(--groove) 37.25%, transparent 37.25%), linear-gradient(83deg, transparent, transparent 55.75%, var(--groove) 55.75%, var(--groove) 56.25%, transparent 56.25%), linear-gradient(88deg, transparent, transparent 75%, var(--groove) 75%, var(--groove) 75.5%, transparent 75.5%), linear-gradient(90deg, transparent, transparent 96%, #1f1f1f 96%), linear-gradient(90deg, transparent, #262626), #333;
  -webkit-clip-path: polygon(0 0, 3% 100%, 80% 84%, 99.5% 78%, 100% 10%, 98% 0);
  clip-path: polygon(0 0, 3% 100%, 80% 84%, 99.5% 78%, 100% 10%, 98% 0);
}
.truck__mid-body:after,
.truck__mid-body:before {
  content: '';
  position: absolute;
  width: 4%;
  height: 4%;
  left: 38%;
  top: 6%;
  border: 1px solid #4d4d4d;
  border-radius: 25%;
}
.truck__mid-body:before {
  left: 58%;
}
.truck__window {
  --window-black: rgba(0,0,0,0.85);
  --window-white: rgba(255,255,255,0.3);
  position: absolute;
  height: 80%;
  width: 60%;
  background: #000;
  left: 37%;
  transform: skew(-5deg);
  -webkit-clip-path: polygon(0 100%, 0 55%, 34.5% 11%, 85% 108%);
  clip-path: polygon(0 100%, 0 55%, 34.5% 11%, 85% 108%);
}
.truck__window-glass {
  background: linear-gradient(0deg, var(--window-black) 0, var(--window-black) 15%, transparent 15%), linear-gradient(90deg, transparent, var(--window-black) 90%), linear-gradient(90deg, var(--window-white), transparent 80%), linear-gradient(68deg, transparent, transparent 30%, var(--window-black) 30%, var(--window-black) 31%, transparent 31%, transparent 55%, var(--window-black) 55%, var(--window-black) 56%, transparent 56%), var(--window-white);
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 88%;
  width: 98%;
  -webkit-clip-path: polygon(0 100%, 0 55%, 34.5% 11%, 85% 105%);
  clip-path: polygon(0 100%, 0 55%, 34.5% 11%, 85% 105%);
}
.truck__window:before {
  content: '';
  background: #000;
  position: absolute;
  height: 10%;
  width: 100%;
  bottom: 0;
  transform: rotate(2deg);
  z-index: -1;
  -webkit-clip-path: polygon(40% 100%, 100% -100%, 100% 100%);
  clip-path: polygon(40% 100%, 100% -100%, 100% 100%);
}
@-webkit-keyframes backdrop {
  from {
    transform: translate(calc(var(--distance) * 1vw), 0);
  }
  to {
    transform: translate(calc(var(--distance) * -1vw), 0);
  }
}
@keyframes backdrop {
  from {
    transform: translate(calc(var(--distance) * 1vw), 0);
  }
  to {
    transform: translate(calc(var(--distance) * -1vw), 0);
  }
}
`,js:""},{title:"罗盘时钟",html:`<div id="app">
 <div class="clock-box df wao hao">
 <div class="clock-area">
 <div class="clock-year df wao hao"></div>
 <div class="clock-month"></div>
 <div class="clock-day"></div>
 <div class="clock-hour"></div>
 <div class="clock-minute"></div>
 <div class="clock-second"></div>
 <div class="clock-result df hao"><i>年</i><i>月</i><i>日</i><i>时</i><i>分</i><i>秒</i></div>
 </div>
 </div>
 </div><script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.3/vue.min.js"><\/script>`,css:`body{padding:0;margin:0;}[v-cloak]{display:none!important;}.clock-box{background:#05070a;}.flex,.flex-o{flex:1;-webkit-flex:1;box-flex:1;-webkit-box-flex:1;display:inline;}.flex-o{overflow:hidden;}.df{display:-webkit-box;display:box;display:-webkit-flex;display:flex;}.wao{-webkit-box-pack:center;box-pack:center;-webkit-justify-content:center;justify-content:center;}.wal{-webkit-box-pack:start;box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;}.war{-webkit-box-pack:end;box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;}.hao{-webkit-box-align:center;box-align:center;-webkit-align-items:center;align-items:center;}.hal{-webkit-box-align:start;box-align:start;-webkit-align-items:flex-start;align-items:flex-start;}.har{-webkit-box-align:end;box-align:end;-webkit-align-items:flex-end;align-items:flex-end;}.bob{box-sizing:border-box;}.cf{-webkit-box-orient:vertical;box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}.jcb{-webkit-box-pack:justify;-webkit-justify-content:space-between;box-pack:justify;justify-content:space-between;}.clock-box{overflow:hidden;position:fixed;left:0;top:0;bottom:0;right:0;color:#fff;font-family:'微软雅黑';}.clock-area{width:800px;height:800px;position:relative;}.clock-year{width:100px;height:30px;position:absolute;font-size:14px;line-height:16px;left:50%;top:50%;margin-left:-50px;margin-top:-15px;}.clock-month{width:160px;height:160px;position:absolute;left:50%;top:50%;margin-left:-80px;margin-top:-80px;}.clock-month-li{font-size:14px;line-height:16px;position:absolute;left:0;top:50%;margin-top:-10px;width:100%;height:20px;transform-origin:center;}.clock-month-li span{min-width:20px;text-align:center;}.clock-day{width:280px;height:280px;position:absolute;left:50%;top:50%;margin-left:-140px;margin-top:-140px;}.clock-day-li{font-size:14px;line-height:16px;position:absolute;left:0;top:50%;margin-top:-10px;width:100%;height:20px;transform-origin:center;}.clock-day-li span{min-width:20px;text-align:center;}.clock-hour{width:400px;height:400px;position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-200px;}.clock-hour-li{font-size:14px;line-height:16px;position:absolute;left:0;top:50%;margin-top:-10px;width:100%;height:20px;transform-origin:center;}.clock-hour-li span{min-width:20px;text-align:center;}.clock-minute{width:520px;height:520px;position:absolute;left:50%;top:50%;margin-left:-260px;margin-top:-260px;}.clock-minute-li{font-size:14px;line-height:16px;position:absolute;left:0;top:50%;margin-top:-10px;width:100%;height:20px;transform-origin:center;}.clock-minute-li span{min-width:20px;text-align:center;}.clock-second{width:640px;height:640px;position:absolute;left:50%;top:50%;margin-left:-320px;margin-top:-320px;}.clock-second-li{font-size:14px;line-height:16px;position:absolute;left:0;top:50%;margin-top:-10px;width:100%;height:20px;transform-origin:center;}.clock-second-li span{min-width:20px;text-align:center;}.clock-month,.clock-day,.clock-hour,.clock-minute,.clock-second{-webkit-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;transform:rotate(0deg);}.clock-result{position:fixed;left:50%;top:50%;right:0;height:20px;height:30px;margin-top:-15px;margin-left:-30px;box-shadow:0 0 1000px 1000px rgba(0,0,0,0.7);}.clock-result i{font-size:12px;color:#ccc;line-height:14px;font-style:normal;text-align:center;}.clock-result i:nth-child(1){width:42px;margin-left:50px;}.clock-result i:nth-child(2){width:40px;margin-left:16px;}.clock-result i:nth-child(3){width:40px;margin-left:22px;}.clock-result i:nth-child(4){width:40px;margin-left:20px;}.clock-result i:nth-child(5){width:40px;margin-left:20px;}.clock-result i:nth-child(6){width:40px;margin-left:20px;}.clock-month-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-month-li:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg);}.clock-month-li:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg);}.clock-month-li:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg);}.clock-month-li:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg);}.clock-month-li:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg);}.clock-month-li:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg);}.clock-month-li:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg);}.clock-month-li:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg);}.clock-month-li:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg);}.clock-month-li:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg);}.clock-month-li:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg);}.clock-day.day28 .clock-day-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-day.day28 .clock-day-li:nth-child(2){-webkit-transform:rotate(12.857deg);transform:rotate(12.857deg);}.clock-day.day28 .clock-day-li:nth-child(3){-webkit-transform:rotate(25.714deg);transform:rotate(25.714deg);}.clock-day.day28 .clock-day-li:nth-child(4){-webkit-transform:rotate(38.571deg);transform:rotate(38.571deg);}.clock-day.day28 .clock-day-li:nth-child(5){-webkit-transform:rotate(51.428deg);transform:rotate(51.428deg);}.clock-day.day28 .clock-day-li:nth-child(6){-webkit-transform:rotate(64.285deg);transform:rotate(64.285deg);}.clock-day.day28 .clock-day-li:nth-child(7){-webkit-transform:rotate(77.142deg);transform:rotate(77.142deg);}.clock-day.day28 .clock-day-li:nth-child(8){-webkit-transform:rotate(89.999deg);transform:rotate(89.999deg);}.clock-day.day28 .clock-day-li:nth-child(9){-webkit-transform:rotate(102.856deg);transform:rotate(102.856deg);}.clock-day.day28 .clock-day-li:nth-child(10){-webkit-transform:rotate(115.713deg);transform:rotate(115.713deg);}.clock-day.day28 .clock-day-li:nth-child(11){-webkit-transform:rotate(128.57deg);transform:rotate(128.57deg);}.clock-day.day28 .clock-day-li:nth-child(12){-webkit-transform:rotate(141.427deg);transform:rotate(141.427deg);}.clock-day.day28 .clock-day-li:nth-child(13){-webkit-transform:rotate(154.284deg);transform:rotate(154.284deg);}.clock-day.day28 .clock-day-li:nth-child(14){-webkit-transform:rotate(167.141deg);transform:rotate(167.141deg);}.clock-day.day28 .clock-day-li:nth-child(15){-webkit-transform:rotate(179.998deg);transform:rotate(179.998deg);}.clock-day.day28 .clock-day-li:nth-child(16){-webkit-transform:rotate(192.855deg);transform:rotate(192.855deg);}.clock-day.day28 .clock-day-li:nth-child(17){-webkit-transform:rotate(205.712deg);transform:rotate(205.712deg);}.clock-day.day28 .clock-day-li:nth-child(18){-webkit-transform:rotate(218.569deg);transform:rotate(218.569deg);}.clock-day.day28 .clock-day-li:nth-child(19){-webkit-transform:rotate(231.426deg);transform:rotate(231.426deg);}.clock-day.day28 .clock-day-li:nth-child(20){-webkit-transform:rotate(244.283deg);transform:rotate(244.283deg);}.clock-day.day28 .clock-day-li:nth-child(21){-webkit-transform:rotate(257.14deg);transform:rotate(257.14deg);}.clock-day.day28 .clock-day-li:nth-child(22){-webkit-transform:rotate(269.997deg);transform:rotate(269.997deg);}.clock-day.day28 .clock-day-li:nth-child(23){-webkit-transform:rotate(282.854deg);transform:rotate(282.854deg);}.clock-day.day28 .clock-day-li:nth-child(24){-webkit-transform:rotate(295.711deg);transform:rotate(295.711deg);}.clock-day.day28 .clock-day-li:nth-child(25){-webkit-transform:rotate(308.568deg);transform:rotate(308.568deg);}.clock-day.day28 .clock-day-li:nth-child(26){-webkit-transform:rotate(321.425deg);transform:rotate(321.425deg);}.clock-day.day28 .clock-day-li:nth-child(27){-webkit-transform:rotate(334.282deg);transform:rotate(334.282deg);}.clock-day.day28 .clock-day-li:nth-child(28){-webkit-transform:rotate(347.139deg);transform:rotate(347.139deg);}.clock-day.day29 .clock-day-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-day.day29 .clock-day-li:nth-child(2){-webkit-transform:rotate(12.413deg);transform:rotate(12.413deg);}.clock-day.day29 .clock-day-li:nth-child(3){-webkit-transform:rotate(24.826deg);transform:rotate(24.826deg);}.clock-day.day29 .clock-day-li:nth-child(4){-webkit-transform:rotate(37.239deg);transform:rotate(37.239deg);}.clock-day.day29 .clock-day-li:nth-child(5){-webkit-transform:rotate(49.652deg);transform:rotate(49.652deg);}.clock-day.day29 .clock-day-li:nth-child(6){-webkit-transform:rotate(62.065deg);transform:rotate(62.065deg);}.clock-day.day29 .clock-day-li:nth-child(7){-webkit-transform:rotate(74.478deg);transform:rotate(74.478deg);}.clock-day.day29 .clock-day-li:nth-child(8){-webkit-transform:rotate(86.891deg);transform:rotate(86.891deg);}.clock-day.day29 .clock-day-li:nth-child(9){-webkit-transform:rotate(99.304deg);transform:rotate(99.304deg);}.clock-day.day29 .clock-day-li:nth-child(10){-webkit-transform:rotate(111.717deg);transform:rotate(111.717deg);}.clock-day.day29 .clock-day-li:nth-child(11){-webkit-transform:rotate(124.13deg);transform:rotate(124.13deg);}.clock-day.day29 .clock-day-li:nth-child(12){-webkit-transform:rotate(136.543deg);transform:rotate(136.543deg);}.clock-day.day29 .clock-day-li:nth-child(13){-webkit-transform:rotate(148.956deg);transform:rotate(148.956deg);}.clock-day.day29 .clock-day-li:nth-child(14){-webkit-transform:rotate(161.369deg);transform:rotate(161.369deg);}.clock-day.day29 .clock-day-li:nth-child(15){-webkit-transform:rotate(173.782deg);transform:rotate(173.782deg);}.clock-day.day29 .clock-day-li:nth-child(16){-webkit-transform:rotate(186.195deg);transform:rotate(186.195deg);}.clock-day.day29 .clock-day-li:nth-child(17){-webkit-transform:rotate(198.608deg);transform:rotate(198.608deg);}.clock-day.day29 .clock-day-li:nth-child(18){-webkit-transform:rotate(211.021deg);transform:rotate(211.021deg);}.clock-day.day29 .clock-day-li:nth-child(19){-webkit-transform:rotate(223.434deg);transform:rotate(223.434deg);}.clock-day.day29 .clock-day-li:nth-child(20){-webkit-transform:rotate(235.847deg);transform:rotate(235.847deg);}.clock-day.day29 .clock-day-li:nth-child(21){-webkit-transform:rotate(248.26deg);transform:rotate(248.26deg);}.clock-day.day29 .clock-day-li:nth-child(22){-webkit-transform:rotate(260.673deg);transform:rotate(260.673deg);}.clock-day.day29 .clock-day-li:nth-child(23){-webkit-transform:rotate(273.086deg);transform:rotate(273.086deg);}.clock-day.day29 .clock-day-li:nth-child(24){-webkit-transform:rotate(285.499deg);transform:rotate(285.499deg);}.clock-day.day29 .clock-day-li:nth-child(25){-webkit-transform:rotate(297.912deg);transform:rotate(297.912deg);}.clock-day.day29 .clock-day-li:nth-child(26){-webkit-transform:rotate(310.325deg);transform:rotate(310.325deg);}.clock-day.day29 .clock-day-li:nth-child(27){-webkit-transform:rotate(322.738deg);transform:rotate(322.738deg);}.clock-day.day29 .clock-day-li:nth-child(28){-webkit-transform:rotate(335.151deg);transform:rotate(335.151deg);}.clock-day.day29 .clock-day-li:nth-child(29){-webkit-transform:rotate(347.564deg);transform:rotate(347.564deg);}.clock-day.day30 .clock-day-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-day.day30 .clock-day-li:nth-child(2){-webkit-transform:rotate(12deg);transform:rotate(12deg);}.clock-day.day30 .clock-day-li:nth-child(3){-webkit-transform:rotate(24deg);transform:rotate(24deg);}.clock-day.day30 .clock-day-li:nth-child(4){-webkit-transform:rotate(36deg);transform:rotate(36deg);}.clock-day.day30 .clock-day-li:nth-child(5){-webkit-transform:rotate(48deg);transform:rotate(48deg);}.clock-day.day30 .clock-day-li:nth-child(6){-webkit-transform:rotate(60deg);transform:rotate(60deg);}.clock-day.day30 .clock-day-li:nth-child(7){-webkit-transform:rotate(72deg);transform:rotate(72deg);}.clock-day.day30 .clock-day-li:nth-child(8){-webkit-transform:rotate(84deg);transform:rotate(84deg);}.clock-day.day30 .clock-day-li:nth-child(9){-webkit-transform:rotate(96deg);transform:rotate(96deg);}.clock-day.day30 .clock-day-li:nth-child(10){-webkit-transform:rotate(108deg);transform:rotate(108deg);}.clock-day.day30 .clock-day-li:nth-child(11){-webkit-transform:rotate(120deg);transform:rotate(120deg);}.clock-day.day30 .clock-day-li:nth-child(12){-webkit-transform:rotate(132deg);transform:rotate(132deg);}.clock-day.day30 .clock-day-li:nth-child(13){-webkit-transform:rotate(144deg);transform:rotate(144deg);}.clock-day.day30 .clock-day-li:nth-child(14){-webkit-transform:rotate(156deg);transform:rotate(156deg);}.clock-day.day30 .clock-day-li:nth-child(15){-webkit-transform:rotate(168deg);transform:rotate(168deg);}.clock-day.day30 .clock-day-li:nth-child(16){-webkit-transform:rotate(180deg);transform:rotate(180deg);}.clock-day.day30 .clock-day-li:nth-child(17){-webkit-transform:rotate(192deg);transform:rotate(192deg);}.clock-day.day30 .clock-day-li:nth-child(18){-webkit-transform:rotate(204deg);transform:rotate(204deg);}.clock-day.day30 .clock-day-li:nth-child(19){-webkit-transform:rotate(216deg);transform:rotate(216deg);}.clock-day.day30 .clock-day-li:nth-child(20){-webkit-transform:rotate(228deg);transform:rotate(228deg);}.clock-day.day30 .clock-day-li:nth-child(21){-webkit-transform:rotate(240deg);transform:rotate(240deg);}.clock-day.day30 .clock-day-li:nth-child(22){-webkit-transform:rotate(252deg);transform:rotate(252deg);}.clock-day.day30 .clock-day-li:nth-child(23){-webkit-transform:rotate(264deg);transform:rotate(264deg);}.clock-day.day30 .clock-day-li:nth-child(24){-webkit-transform:rotate(276deg);transform:rotate(276deg);}.clock-day.day30 .clock-day-li:nth-child(25){-webkit-transform:rotate(288deg);transform:rotate(288deg);}.clock-day.day30 .clock-day-li:nth-child(26){-webkit-transform:rotate(300deg);transform:rotate(300deg);}.clock-day.day30 .clock-day-li:nth-child(27){-webkit-transform:rotate(312deg);transform:rotate(312deg);}.clock-day.day30 .clock-day-li:nth-child(28){-webkit-transform:rotate(324deg);transform:rotate(324deg);}.clock-day.day30 .clock-day-li:nth-child(29){-webkit-transform:rotate(336deg);transform:rotate(336deg);}.clock-day.day30 .clock-day-li:nth-child(30){-webkit-transform:rotate(348deg);transform:rotate(348deg);}.clock-day.day31 .clock-day-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-day.day31 .clock-day-li:nth-child(2){-webkit-transform:rotate(11.612deg);transform:rotate(11.612deg);}.clock-day.day31 .clock-day-li:nth-child(3){-webkit-transform:rotate(23.224deg);transform:rotate(23.224deg);}.clock-day.day31 .clock-day-li:nth-child(4){-webkit-transform:rotate(34.836deg);transform:rotate(34.836deg);}.clock-day.day31 .clock-day-li:nth-child(5){-webkit-transform:rotate(46.448deg);transform:rotate(46.448deg);}.clock-day.day31 .clock-day-li:nth-child(6){-webkit-transform:rotate(58.06deg);transform:rotate(58.06deg);}.clock-day.day31 .clock-day-li:nth-child(7){-webkit-transform:rotate(69.672deg);transform:rotate(69.672deg);}.clock-day.day31 .clock-day-li:nth-child(8){-webkit-transform:rotate(81.284deg);transform:rotate(81.284deg);}.clock-day.day31 .clock-day-li:nth-child(9){-webkit-transform:rotate(92.896deg);transform:rotate(92.896deg);}.clock-day.day31 .clock-day-li:nth-child(10){-webkit-transform:rotate(104.508deg);transform:rotate(104.508deg);}.clock-day.day31 .clock-day-li:nth-child(11){-webkit-transform:rotate(116.12deg);transform:rotate(116.12deg);}.clock-day.day31 .clock-day-li:nth-child(12){-webkit-transform:rotate(127.732deg);transform:rotate(127.732deg);}.clock-day.day31 .clock-day-li:nth-child(13){-webkit-transform:rotate(139.344deg);transform:rotate(139.344deg);}.clock-day.day31 .clock-day-li:nth-child(14){-webkit-transform:rotate(150.956deg);transform:rotate(150.956deg);}.clock-day.day31 .clock-day-li:nth-child(15){-webkit-transform:rotate(162.568deg);transform:rotate(162.568deg);}.clock-day.day31 .clock-day-li:nth-child(16){-webkit-transform:rotate(174.18deg);transform:rotate(174.18deg);}.clock-day.day31 .clock-day-li:nth-child(17){-webkit-transform:rotate(185.792deg);transform:rotate(185.792deg);}.clock-day.day31 .clock-day-li:nth-child(18){-webkit-transform:rotate(197.404deg);transform:rotate(197.404deg);}.clock-day.day31 .clock-day-li:nth-child(19){-webkit-transform:rotate(209.016deg);transform:rotate(209.016deg);}.clock-day.day31 .clock-day-li:nth-child(20){-webkit-transform:rotate(220.628deg);transform:rotate(220.628deg);}.clock-day.day31 .clock-day-li:nth-child(21){-webkit-transform:rotate(232.24deg);transform:rotate(232.24deg);}.clock-day.day31 .clock-day-li:nth-child(22){-webkit-transform:rotate(243.852deg);transform:rotate(243.852deg);}.clock-day.day31 .clock-day-li:nth-child(23){-webkit-transform:rotate(255.464deg);transform:rotate(255.464deg);}.clock-day.day31 .clock-day-li:nth-child(24){-webkit-transform:rotate(267.076deg);transform:rotate(267.076deg);}.clock-day.day31 .clock-day-li:nth-child(25){-webkit-transform:rotate(278.688deg);transform:rotate(278.688deg);}.clock-day.day31 .clock-day-li:nth-child(26){-webkit-transform:rotate(290.3deg);transform:rotate(290.3deg);}.clock-day.day31 .clock-day-li:nth-child(27){-webkit-transform:rotate(301.912deg);transform:rotate(301.912deg);}.clock-day.day31 .clock-day-li:nth-child(28){-webkit-transform:rotate(313.524deg);transform:rotate(313.524deg);}.clock-day.day31 .clock-day-li:nth-child(29){-webkit-transform:rotate(325.136deg);transform:rotate(325.136deg);}.clock-day.day31 .clock-day-li:nth-child(30){-webkit-transform:rotate(336.748deg);transform:rotate(336.748deg);}.clock-day.day31 .clock-day-li:nth-child(31){-webkit-transform:rotate(348.36deg);transform:rotate(348.36deg);}.clock-hour-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-hour-li:nth-child(2){-webkit-transform:rotate(15deg);transform:rotate(15deg);}.clock-hour-li:nth-child(3){-webkit-transform:rotate(30deg);transform:rotate(30deg);}.clock-hour-li:nth-child(4){-webkit-transform:rotate(45deg);transform:rotate(45deg);}.clock-hour-li:nth-child(5){-webkit-transform:rotate(60deg);transform:rotate(60deg);}.clock-hour-li:nth-child(6){-webkit-transform:rotate(75deg);transform:rotate(75deg);}.clock-hour-li:nth-child(7){-webkit-transform:rotate(90deg);transform:rotate(90deg);}.clock-hour-li:nth-child(8){-webkit-transform:rotate(105deg);transform:rotate(105deg);}.clock-hour-li:nth-child(9){-webkit-transform:rotate(120deg);transform:rotate(120deg);}.clock-hour-li:nth-child(10){-webkit-transform:rotate(135deg);transform:rotate(135deg);}.clock-hour-li:nth-child(11){-webkit-transform:rotate(150deg);transform:rotate(150deg);}.clock-hour-li:nth-child(12){-webkit-transform:rotate(165deg);transform:rotate(165deg);}.clock-hour-li:nth-child(13){-webkit-transform:rotate(180deg);transform:rotate(180deg);}.clock-hour-li:nth-child(14){-webkit-transform:rotate(195deg);transform:rotate(195deg);}.clock-hour-li:nth-child(15){-webkit-transform:rotate(210deg);transform:rotate(210deg);}.clock-hour-li:nth-child(16){-webkit-transform:rotate(225deg);transform:rotate(225deg);}.clock-hour-li:nth-child(17){-webkit-transform:rotate(240deg);transform:rotate(240deg);}.clock-hour-li:nth-child(18){-webkit-transform:rotate(255deg);transform:rotate(255deg);}.clock-hour-li:nth-child(19){-webkit-transform:rotate(270deg);transform:rotate(270deg);}.clock-hour-li:nth-child(20){-webkit-transform:rotate(285deg);transform:rotate(285deg);}.clock-hour-li:nth-child(21){-webkit-transform:rotate(300deg);transform:rotate(300deg);}.clock-hour-li:nth-child(22){-webkit-transform:rotate(315deg);transform:rotate(315deg);}.clock-hour-li:nth-child(23){-webkit-transform:rotate(330deg);transform:rotate(330deg);}.clock-hour-li:nth-child(24){-webkit-transform:rotate(345deg);transform:rotate(345deg);}.clock-minute-li:nth-child(1),.clock-second-li:nth-child(1){-webkit-transform:rotate(0deg);transform:rotate(0deg);}.clock-minute-li:nth-child(2),.clock-second-li:nth-child(2){-webkit-transform:rotate(6deg);transform:rotate(6deg);}.clock-minute-li:nth-child(3),.clock-second-li:nth-child(3){-webkit-transform:rotate(12deg);transform:rotate(12deg);}.clock-minute-li:nth-child(4),.clock-second-li:nth-child(4){-webkit-transform:rotate(18deg);transform:rotate(18deg);}.clock-minute-li:nth-child(5),.clock-second-li:nth-child(5){-webkit-transform:rotate(24deg);transform:rotate(24deg);}.clock-minute-li:nth-child(6),.clock-second-li:nth-child(6){-webkit-transform:rotate(30deg);transform:rotate(30deg);}.clock-minute-li:nth-child(7),.clock-second-li:nth-child(7){-webkit-transform:rotate(36deg);transform:rotate(36deg);}.clock-minute-li:nth-child(8),.clock-second-li:nth-child(8){-webkit-transform:rotate(42deg);transform:rotate(42deg);}.clock-minute-li:nth-child(9),.clock-second-li:nth-child(9){-webkit-transform:rotate(48deg);transform:rotate(48deg);}.clock-minute-li:nth-child(10),.clock-second-li:nth-child(10){-webkit-transform:rotate(54deg);transform:rotate(54deg);}.clock-minute-li:nth-child(11),.clock-second-li:nth-child(11){-webkit-transform:rotate(60deg);transform:rotate(60deg);}.clock-minute-li:nth-child(12),.clock-second-li:nth-child(12){-webkit-transform:rotate(66deg);transform:rotate(66deg);}.clock-minute-li:nth-child(13),.clock-second-li:nth-child(13){-webkit-transform:rotate(72deg);transform:rotate(72deg);}.clock-minute-li:nth-child(14),.clock-second-li:nth-child(14){-webkit-transform:rotate(78deg);transform:rotate(78deg);}.clock-minute-li:nth-child(15),.clock-second-li:nth-child(15){-webkit-transform:rotate(84deg);transform:rotate(84deg);}.clock-minute-li:nth-child(16),.clock-second-li:nth-child(16){-webkit-transform:rotate(90deg);transform:rotate(90deg);}.clock-minute-li:nth-child(17),.clock-second-li:nth-child(17){-webkit-transform:rotate(96deg);transform:rotate(96deg);}.clock-minute-li:nth-child(18),.clock-second-li:nth-child(18){-webkit-transform:rotate(102deg);transform:rotate(102deg);}.clock-minute-li:nth-child(19),.clock-second-li:nth-child(19){-webkit-transform:rotate(108deg);transform:rotate(108deg);}.clock-minute-li:nth-child(20),.clock-second-li:nth-child(20){-webkit-transform:rotate(114deg);transform:rotate(114deg);}.clock-minute-li:nth-child(21),.clock-second-li:nth-child(21){-webkit-transform:rotate(120deg);transform:rotate(120deg);}.clock-minute-li:nth-child(22),.clock-second-li:nth-child(22){-webkit-transform:rotate(126deg);transform:rotate(126deg);}.clock-minute-li:nth-child(23),.clock-second-li:nth-child(23){-webkit-transform:rotate(132deg);transform:rotate(132deg);}.clock-minute-li:nth-child(24),.clock-second-li:nth-child(24){-webkit-transform:rotate(138deg);transform:rotate(138deg);}.clock-minute-li:nth-child(25),.clock-second-li:nth-child(25){-webkit-transform:rotate(144deg);transform:rotate(144deg);}.clock-minute-li:nth-child(26),.clock-second-li:nth-child(26){-webkit-transform:rotate(150deg);transform:rotate(150deg);}.clock-minute-li:nth-child(27),.clock-second-li:nth-child(27){-webkit-transform:rotate(156deg);transform:rotate(156deg);}.clock-minute-li:nth-child(28),.clock-second-li:nth-child(28){-webkit-transform:rotate(162deg);transform:rotate(162deg);}.clock-minute-li:nth-child(29),.clock-second-li:nth-child(29){-webkit-transform:rotate(168deg);transform:rotate(168deg);}.clock-minute-li:nth-child(30),.clock-second-li:nth-child(30){-webkit-transform:rotate(174deg);transform:rotate(174deg);}.clock-minute-li:nth-child(31),.clock-second-li:nth-child(31){-webkit-transform:rotate(180deg);transform:rotate(180deg);}.clock-minute-li:nth-child(32),.clock-second-li:nth-child(32){-webkit-transform:rotate(186deg);transform:rotate(186deg);}.clock-minute-li:nth-child(33),.clock-second-li:nth-child(33){-webkit-transform:rotate(192deg);transform:rotate(192deg);}.clock-minute-li:nth-child(34),.clock-second-li:nth-child(34){-webkit-transform:rotate(198deg);transform:rotate(198deg);}.clock-minute-li:nth-child(35),.clock-second-li:nth-child(35){-webkit-transform:rotate(204deg);transform:rotate(204deg);}.clock-minute-li:nth-child(36),.clock-second-li:nth-child(36){-webkit-transform:rotate(210deg);transform:rotate(210deg);}.clock-minute-li:nth-child(37),.clock-second-li:nth-child(37){-webkit-transform:rotate(216deg);transform:rotate(216deg);}.clock-minute-li:nth-child(38),.clock-second-li:nth-child(38){-webkit-transform:rotate(222deg);transform:rotate(222deg);}.clock-minute-li:nth-child(39),.clock-second-li:nth-child(39){-webkit-transform:rotate(228deg);transform:rotate(228deg);}.clock-minute-li:nth-child(40),.clock-second-li:nth-child(40){-webkit-transform:rotate(234deg);transform:rotate(234deg);}.clock-minute-li:nth-child(41),.clock-second-li:nth-child(41){-webkit-transform:rotate(240deg);transform:rotate(240deg);}.clock-minute-li:nth-child(42),.clock-second-li:nth-child(42){-webkit-transform:rotate(246deg);transform:rotate(246deg);}.clock-minute-li:nth-child(43),.clock-second-li:nth-child(43){-webkit-transform:rotate(252deg);transform:rotate(252deg);}.clock-minute-li:nth-child(44),.clock-second-li:nth-child(44){-webkit-transform:rotate(258deg);transform:rotate(258deg);}.clock-minute-li:nth-child(45),.clock-second-li:nth-child(45){-webkit-transform:rotate(264deg);transform:rotate(264deg);}.clock-minute-li:nth-child(46),.clock-second-li:nth-child(46){-webkit-transform:rotate(270deg);transform:rotate(270deg);}.clock-minute-li:nth-child(47),.clock-second-li:nth-child(47){-webkit-transform:rotate(276deg);transform:rotate(276deg);}.clock-minute-li:nth-child(48),.clock-second-li:nth-child(48){-webkit-transform:rotate(282deg);transform:rotate(282deg);}.clock-minute-li:nth-child(49),.clock-second-li:nth-child(49){-webkit-transform:rotate(288deg);transform:rotate(288deg);}.clock-minute-li:nth-child(50),.clock-second-li:nth-child(50){-webkit-transform:rotate(294deg);transform:rotate(294deg);}.clock-minute-li:nth-child(51),.clock-second-li:nth-child(51){-webkit-transform:rotate(300deg);transform:rotate(300deg);}.clock-minute-li:nth-child(52),.clock-second-li:nth-child(52){-webkit-transform:rotate(306deg);transform:rotate(306deg);}.clock-minute-li:nth-child(53),.clock-second-li:nth-child(53){-webkit-transform:rotate(312deg);transform:rotate(312deg);}.clock-minute-li:nth-child(54),.clock-second-li:nth-child(54){-webkit-transform:rotate(318deg);transform:rotate(318deg);}.clock-minute-li:nth-child(55),.clock-second-li:nth-child(55){-webkit-transform:rotate(324deg);transform:rotate(324deg);}.clock-minute-li:nth-child(56),.clock-second-li:nth-child(56){-webkit-transform:rotate(330deg);transform:rotate(330deg);}.clock-minute-li:nth-child(57),.clock-second-li:nth-child(57){-webkit-transform:rotate(336deg);transform:rotate(336deg);}.clock-minute-li:nth-child(58),.clock-second-li:nth-child(58){-webkit-transform:rotate(342deg);transform:rotate(342deg);}.clock-minute-li:nth-child(59),.clock-second-li:nth-child(59){-webkit-transform:rotate(348deg);transform:rotate(348deg);}.clock-minute-li:nth-child(60),.clock-second-li:nth-child(60){-webkit-transform:rotate(354deg);transform:rotate(354deg);}
`,js:`
		var Num={a:function(t,r){var n,e,a;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{e=r.toString().split(".")[1].length}catch(t){e=0}return(t*(a=Math.pow(10,Math.max(n,e)))+r*a)/a},s:function(t,r){var n,e,a;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{e=r.toString().split(".")[1].length}catch(t){e=0}return(t*(a=Math.pow(10,Math.max(n,e)))-r*a)/a},c:function(arg1,arg2){var t1=0,t2=0,r1,r2;try{t1=arg1.toString().split(".")[1].length}catch(t){}try{t2=arg2.toString().split(".")[1].length}catch(t){}with(Math)return r1=Number(arg1.toString().replace(".","")),r2=Number(arg2.toString().replace(".","")),r1/r2*pow(10,t2-t1)},m:function(t,r){var n=0,e=t.toString(),a=r.toString();try{n+=e.split(".")[1].length}catch(t){}try{n+=a.split(".")[1].length}catch(t){}return Number(e.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,n)}};Number.prototype.c=function(t){return Num.c(this,t)},Number.prototype.s=function(t){return Num.s(this,t)},Number.prototype.m=function(t){return Num.m(t,this)},Number.prototype.a=function(t){return Num.a(t,this)};
 var appVue = new Vue({
 el: '#app',
 data: {
 now: {
 year: '',
 month: '',
 day: '',
 hour: '',
 minute: '',
 second: '',
 },
 month_group: [],
 day_group: [],
 hour_group: [],
 minute_group: [],
 second_group: [],
 month_angle: (360).c(12),
 day_angle: 0,
 hour_angle: (360).c(24),
 minute_angle: (360).c(60),
 second_angle: (360).c(60),
 month_rotate: 0,
 day_rotate: 0,
 hour_rotate: 0,
 minute_rotate: 0,
 second_rotate: 0,
 },
 methods: {
 getDateTime: function() {
 var date = new Date();
 var year = date.getFullYear();
 var month = date.getMonth() + 1;
 var day = date.getDate();
 var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();
 this.now = {
 year: year,
 month: month,
 day: day,
 hour: hour,
 minute: minute,
 second: second,
 };
 document.querySelector('.clock-year').innerHTML = year
 var dayNum = new Date(year, month, 0).getDate();
 var day_group = [];
 for (var i = 1; i <= dayNum; i++) {
 day_group.push(i);
 document.querySelector('.clock-day').innerHTML += '<div class="clock-day-li df hao war"><span>' + (i < 10 ? '0' + i : i) + '</span></div>'
 document.querySelector('.clock-day').classList.add('day' + dayNum)
 }
 for (var i = 1; i <= 12; i++) {
 document.querySelector('.clock-month').innerHTML += '<div class="clock-month-li df hao war"><span>' + (i < 10 ? '0' + i : i) + '</span></div>'
 }
 for (var i = 0; i <= 23; i++) {
 document.querySelector('.clock-hour').innerHTML += '<div class="clock-hour-li df hao war"><span>' + (i < 10 ? '0' + i : i) + '</span></div>'
 }
 for (var i = 0; i <= 59; i++) {
 document.querySelector('.clock-minute').innerHTML += '<div class="clock-minute-li df hao war"><span>' + (i < 10 ? '0' + i : i) + '</span></div>'
 document.querySelector('.clock-second').innerHTML += '<div class="clock-second-li df hao war"><span>' + (i < 10 ? '0' + i : i) + '</span></div>'
 }
 this.day_angle = (360).c(day_group.length);
 this.month_rotate = -this.month_angle.m(month - 1);
 this.day_rotate = -this.day_angle.m(day - 1);
 this.hour_rotate = -this.hour_angle.m(hour);
 this.minute_rotate = -this.minute_angle.m(minute);
 this.second_rotate = -this.second_angle.m(second);
 setInterval(this.clockMove, 1000);
 },
 clockMove: function() {
 var year = this.now.year;
 var month = this.now.month;
 var day = this.now.day;
 var hour = this.now.hour;
 var minute = this.now.minute;
 var second = this.now.second;
 second++;
 this.second_rotate -= this.second_angle;
 if (second > 59) {
 second = 0;
 minute++;
 this.minute_rotate -= this.minute_angle;
 if (minute > 59) {
 minute = 0;
 hour++;
 this.hour_rotate -= this.hour_angle;
 if (hour > 23) {
 hour = 0;
 day++;
 this.day_rotate -= this.day_angle;
 if (day > this.day_group.length) {
 day = 1;
 month++;
 this.month_rotate -= this.month_angle;
 if (month > 12) {
 month = 1;
 year++;
 }
 var dayNum = new Date(year, month, 0).getDate();
 var day_group = [];
 for (var i = 1; i <= dayNum; i++) {
 day_group.push(i);
 }
 this.day_group = day_group;
 this.day_angle = (360).c(day_group.length);
 }
 }
 }
 }
 this.now.year = year;
 this.now.month = month;
 this.now.day = day;
 this.now.hour = hour;
 this.now.minute = minute;
 this.now.second = second;
 document.querySelector('.clock-month').style.transform = 'rotate(' + this.month_rotate + 'deg)'
 document.querySelector('.clock-day').style.transform = 'rotate(' + this.day_rotate + 'deg)'
 document.querySelector('.clock-hour').style.transform = 'rotate(' + this.hour_rotate + 'deg)'
 document.querySelector('.clock-minute').style.transform = 'rotate(' + this.minute_rotate + 'deg)'
 document.querySelector('.clock-second').style.transform = 'rotate(' + this.second_rotate + 'deg)'
 },
 },
 })
 setTimeout(appVue.getDateTime, 100);`},{title:"多彩进度条",html:`<div class="container">
		<div class="box">
			<span class="title">HTML</span>
			<div class="bar"><span class="per html"><span class="tooltip">70%</span></span></div>
		</div>
		<div class="box">
			<span class="title">CSS</span>
			<div class="bar"><span class="per css"><span class="tooltip">100%</span></span></div>
		</div>
		<div class="box">
			<span class="title">JavaScript</span>
			<div class="bar"><span class="per javascript"><span class="tooltip">30%</span></span></div>
		</div>
	</div>`,css:`body {display: flex;justify-content: center;align-items: center; height: 100vh; overflow: hidden;background-color: #212121;} 
 .container{position:relative;max-width:600px;width:100%;margin:0 15px;padding:10px 20px;border-radius:7px;}.container .box{width:100%;margin:25px 0;}.box .title{display:block;font-size:14px;font-weight:600;color:#fff;}.box .bar{height:8px;width:100%;border-radius:6px;margin-top:6px;background:rgba(0,0,0,0.1);}.bar .per{position:relative;display:block;height:100%;width:90%;border-radius:6px;background:#3070f3;background-size:30px 30px;background-image:linear-gradient(135deg,#50bffc 25%,transparent 25%,transparent 50%,#50bffc 50%,#50bffc 75%,transparent 75%,transparent 100%);animation:progress 1s ease-in-out forwards,amin 750ms linear infinite;opacity:0;}.per.html{width:60%;animation-delay:0.3s;}.per.css{width:100%;animation-delay:0.5s;}.per.javascript{width:30%;animation-delay:0.1s;}@keyframes progress{0%{width:0;opacity:1;}100%{opacity:1;}}@keyframes amin{0%{background-position:0 0;}100%{background-position:30px 0;}}.per .tooltip{position:absolute;right:-14px;top:-28px;font-size:9px;font-weight:500;color:#fff;padding:2px 6px;border-radius:3px;background:#3070f3;z-index:1;}.tooltip::before{content:'';position:absolute;left:50%;bottom:-2px;height:10px;width:10px;z-index:-1;background-color:#3070f3;transform:translateX(-50%) rotate(45deg);}
 `,js:""},{title:"指纹识别",html:`<div class="card">
  <svg
    width="100"
    height="200"
    viewBox="0 0 90 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.6937 1.8999C47.463 -0.352255 40.9068 -0.674076 34.5272 1.32166C34.0341 1.4759 33.7207 2.18011 33.8272 2.89456C33.9336 3.609 34.4196 4.06315 34.9126 3.90891C41.0222 1.99765 47.3157 2.31279 53.302 4.48699C67.6179 9.68648 79.5341 25.284 84.0727 45.6586C85.8279 53.538 86.5735 61.9282 86.7228 70.7212C86.7352 71.4519 87.1541 72.0296 87.6583 72.0117C88.1625 71.9937 88.5612 71.3868 88.5488 70.6561C88.3975 61.7424 87.6431 53.1364 85.8446 44.9969C81.1312 23.6662 68.6768 7.31577 53.6937 1.8999Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M29.8925 5.90399C30.3787 5.70962 30.6642 4.98086 30.53 4.27628C30.3959 3.57169 29.893 3.15808 29.4068 3.35245C22.735 6.01959 13.3498 15.2355 7.54967 27.5472C7.54742 27.552 7.54518 27.5568 7.54297 27.5616C2.45006 38.6835 -0.742467 52.6602 0.148878 66.2225C0.149727 66.2354 0.150707 66.2483 0.151817 66.2612C0.365435 68.7376 0.724051 71.2094 1.08309 73.6842C1.83929 78.8964 2.59735 84.1216 2.00648 89.4297C1.92616 90.1512 2.26471 90.8306 2.76266 90.9469C3.26061 91.0633 3.72939 90.5727 3.80972 89.8512C4.42737 84.3025 3.66044 78.8903 2.89335 73.477C2.5386 70.9735 2.18381 68.4697 1.96593 65.9522C1.1276 53.1368 4.1472 39.7675 9.0616 29.0324C14.6411 17.1932 23.6761 8.38911 29.8925 5.90399Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M41.877 8.86083C53.3431 7.84619 64.8069 14.6272 72.5058 27.6184C72.8344 28.1729 72.7906 29.0085 72.4079 29.4846C72.0253 29.9608 71.4487 29.8973 71.1201 29.3428C63.7987 16.9887 52.8899 10.5356 41.9828 11.5032C41.9789 11.5036 41.975 11.5039 41.9711 11.5042C28.1777 12.4713 15.2601 26.031 10.5087 45.0313C10.3369 45.7185 9.81317 46.0737 9.33895 45.8247C8.86474 45.5757 8.61962 44.8167 8.79146 44.1295C13.7968 24.1134 27.3611 9.88221 41.877 8.86083Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M75.2881 33.4001C75.0069 32.7933 74.4395 32.6318 74.0208 33.0393C73.602 33.4468 73.4905 34.269 73.7718 34.8758C78.0398 44.085 79.8045 54.1063 80.5021 65.9987C80.5448 66.727 80.9869 67.2672 81.4895 67.2053C81.9921 67.1433 82.3648 66.5028 82.3221 65.7745C81.6092 53.6222 79.7893 43.1126 75.2881 33.4001Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M81.7115 71.3933C82.2149 71.3477 82.6485 71.9021 82.68 72.6316C83.0242 80.6118 83.0274 89.6407 82.4182 96.313C82.352 97.0376 81.893 97.5473 81.393 97.4514C80.893 97.3555 80.5413 96.6904 80.6074 95.9658C81.1946 89.5349 81.1978 80.6975 80.857 72.7967C80.8256 72.0672 81.2081 71.4389 81.7115 71.3933Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M9.1296 51.4413C9.24798 50.7309 8.94648 50.0158 8.45618 49.8443C7.96588 49.6727 7.47245 50.1096 7.35407 50.8201C6.68375 54.8432 6.33577 58.9762 6.32198 63.1129C6.30777 67.3766 6.85639 71.5385 7.40523 75.702C7.8542 79.1079 8.30331 82.5149 8.44458 85.9795C8.63015 90.5307 7.96954 95.0885 6.82798 99.4264C6.64827 100.109 6.88462 100.874 7.35591 101.135C7.82719 101.395 8.35493 101.052 8.53465 100.37C9.74129 95.7842 10.4727 90.8451 10.2679 85.8234C10.1276 82.3825 9.67857 78.9953 9.22967 75.6095C8.68192 71.478 8.13443 67.3485 8.1485 63.1257C8.16161 59.1949 8.49231 55.2662 9.1296 51.4413Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M33.0936 22.032C33.2815 22.7103 33.0545 23.4809 32.5864 23.7533C23.1183 29.2632 16.0083 41.697 14.5579 56.3591C13.9519 62.4848 14.6066 68.5525 15.2611 74.6187C15.6297 78.0349 15.9982 81.4506 16.1415 84.8757C16.4522 92.3028 15.8684 100.461 12.5328 107.883C12.2576 108.496 11.6918 108.669 11.2692 108.27C10.8465 107.871 10.727 107.052 11.0022 106.439C14.0413 99.6763 14.6165 92.1647 14.3183 85.0359C14.1729 81.5605 13.8067 78.1053 13.4407 74.6523C12.784 68.4569 12.1281 62.2685 12.7498 55.9835C14.2985 40.3282 21.8707 27.1369 31.9057 21.2971C32.3738 21.0247 32.9056 21.3538 33.0936 22.032Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M65.1548 29.5667C57.6854 19.4288 46.8594 15.8905 37.0204 19.0178C36.5278 19.1744 36.216 19.8801 36.324 20.594C36.4321 21.308 36.9191 21.7598 37.4118 21.6032C46.7286 18.6419 56.9225 22.0199 63.9062 31.4986C69.7925 39.4878 73.2107 51.1126 74.1054 63.7958C74.1567 64.523 74.6051 65.0521 75.1068 64.9778C75.6086 64.9035 75.9738 64.2538 75.9225 63.5267C74.9934 50.3568 71.431 38.085 65.1548 29.5667Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M75.7314 69.8294C76.2331 69.7547 76.6817 70.2836 76.7332 71.0107C77.6005 83.2483 77.2267 96.4661 75.9173 109.253C75.8433 109.976 75.3788 110.475 74.8799 110.368C74.381 110.26 74.0365 109.587 74.1106 108.864C75.4017 96.2554 75.7654 83.2621 74.9162 71.2811C74.8647 70.554 75.2297 69.9041 75.7314 69.8294Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M43.8912 26.8962C29.8964 26.8962 18.5255 43.0755 18.5255 63.0789C18.5255 65.2157 18.6564 67.3093 18.9058 69.3451C18.994 70.0648 19.4681 70.5446 19.9647 70.4168C20.4613 70.289 20.7924 69.602 20.7042 68.8824C20.4733 66.9976 20.3521 65.0587 20.3521 63.0789C20.3521 44.578 30.8769 29.543 43.8912 29.543C49.7724 29.543 55.1459 32.6147 59.2702 37.6903C59.6547 38.1634 60.231 38.0954 60.5575 37.5382C60.884 36.9811 60.837 36.1459 60.4525 35.6728C56.0081 30.2033 50.2186 26.8962 43.8912 26.8962Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M62.4988 40.6072C62.8628 40.1013 63.441 40.1188 63.7901 40.6464C67.8205 46.7369 69.1107 56.3093 69.9643 64.3426C70.9259 73.3915 71.0727 82.2193 71.0727 86.3123C71.0727 87.0432 70.6638 87.6357 70.1594 87.6357C69.6551 87.6357 69.2462 87.0432 69.2462 86.3123C69.2462 82.2855 69.1007 73.6071 68.1591 64.7455C67.3665 57.2875 66.2241 48.1486 62.4717 42.4784C62.1226 41.9508 62.1347 41.1131 62.4988 40.6072Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M70.8408 93.8916C70.8809 93.1629 70.5058 92.5252 70.003 92.4671C69.5002 92.409 69.0601 92.9526 69.0201 93.6812C68.5716 101.833 67.9855 109.976 66.7963 117.498C66.6837 118.211 66.9909 118.921 67.4826 119.084C67.9742 119.247 68.4641 118.802 68.5767 118.089C69.7972 110.369 70.3911 102.065 70.8408 93.8916Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M20.3758 74.216C20.8707 74.0748 21.3509 74.5417 21.4484 75.2588C23.3794 89.4686 22.0454 102.377 16.9318 113.685C16.6553 114.296 16.0892 114.467 15.6673 114.066C15.2454 113.665 15.1276 112.845 15.404 112.234C20.2154 101.595 21.5103 89.4138 19.6562 75.7702C19.5588 75.0531 19.881 74.3572 20.3758 74.216Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M43.8912 35.507C34.8067 35.507 25.8947 45.6973 24.9851 58.5043C24.5869 64.1112 25.1463 69.6341 25.7059 75.1592C26.1946 79.9836 26.6835 84.8098 26.535 89.695C26.1954 100.876 23.9316 110.105 20.0418 117.706C19.7413 118.293 19.8262 119.122 20.2314 119.557C20.6365 119.993 21.2085 119.87 21.509 119.283C25.6345 111.22 28.0056 101.472 28.3598 89.8114C28.5076 84.9483 28.0172 80.1375 27.5272 75.3298C26.9669 69.8321 26.4069 64.3385 26.802 58.7753C27.6011 47.5245 35.5925 38.1539 43.8912 38.1539C47.7618 38.1539 57.7763 41.191 60.9619 56.2288C62.9582 65.6525 63.5027 78.406 63.0192 90.7961C62.5357 103.185 61.0317 115.034 59.0093 122.632C58.8278 123.314 59.0621 124.08 59.5327 124.343C60.0033 124.606 60.532 124.266 60.7135 123.584C62.8293 115.635 64.3534 103.486 64.8428 90.9455C65.3321 78.4067 64.7943 65.3002 62.708 55.4521C59.1719 38.7595 48.0871 35.507 43.8912 35.507Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M29.8367 113.687C30.2591 114.086 30.3782 114.906 30.1027 115.518C29.5364 116.776 29.0382 118.093 28.54 119.409C28.0417 120.726 27.5434 122.043 26.977 123.301C26.7015 123.913 26.1356 124.086 25.7131 123.687C25.2907 123.287 25.1716 122.467 25.4471 121.855C26.0135 120.597 26.5116 119.28 27.0099 117.964C27.5081 116.647 28.0064 115.331 28.5728 114.072C28.8484 113.46 29.4142 113.287 29.8367 113.687Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M37.6567 49.2448C38.076 48.8384 38.1885 48.0165 37.9081 47.409C37.6277 46.8014 37.0605 46.6383 36.6412 47.0447C33.0248 50.5499 30.8061 55.37 30.8061 62.4311C30.8061 66.6357 31.3201 70.0725 31.8473 73.5975C32.6362 78.8723 33.1713 84.1358 33.0751 89.5538C32.9584 96.1329 32.0701 102.145 30.3625 107.872C30.1624 108.543 30.3756 109.322 30.8386 109.612C31.3016 109.902 31.8391 109.593 32.0392 108.922C33.8447 102.866 34.7787 96.519 34.9011 89.6218C35.001 83.9918 34.4511 78.52 33.6328 73.0378C33.1044 69.4974 32.6326 66.3365 32.6326 62.4311C32.6326 56.3811 34.4693 52.3342 37.6567 49.2448Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M41.2213 44.5949C45.011 43.4753 49.0892 44.8587 52.0909 48.3794C57.4527 54.6682 58.1657 66.1368 58.7436 75.4302L58.773 75.9036C59.5197 87.8832 58.665 99.519 56.9432 111.204C56.8379 111.919 56.3526 112.375 55.8594 112.222C55.3661 112.07 55.0516 111.366 55.1569 110.652C56.8529 99.1415 57.6795 87.7826 56.9539 76.1418C56.9299 75.7563 56.906 75.3655 56.8818 74.9699L56.8815 74.9642C56.3682 66.5659 55.7253 56.0474 50.9418 50.4368C48.3754 47.4268 44.8557 46.2225 41.5861 47.1884C41.0919 47.3344 40.6096 46.8721 40.5088 46.156C40.4081 45.4398 40.727 44.7409 41.2213 44.5949Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M55.6524 117.79C55.7769 117.081 55.4815 116.361 54.9927 116.181C54.5039 116 54.0068 116.428 53.8823 117.137C53.3302 120.279 52.4795 123.116 51.4008 125.727C51.1417 126.355 51.2826 127.167 51.7154 127.543C52.1482 127.918 52.709 127.714 52.968 127.087C54.1305 124.272 55.0534 121.199 55.6524 117.79Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M51.1864 98.5844C51.6873 98.6702 52.0453 99.3283 51.9861 100.054C51.1235 110.616 49.1763 120.037 46.0517 128.207C45.8072 128.846 45.2514 129.077 44.8102 128.723C44.369 128.369 44.2096 127.563 44.4541 126.924C47.4443 119.105 49.3324 110.027 50.1722 99.7431C50.2314 99.0172 50.6856 98.4985 51.1864 98.5844Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M50.9982 61.737C50.3651 56.8346 47.4614 53.0844 43.9364 53.0844C39.1631 53.0844 35.814 60.0567 36.9942 66.5435C38.9911 77.9939 39.3189 89.0296 37.9671 99.6584L37.9661 99.6662C36.793 109.209 34.5403 117.794 31.4674 125.069C31.204 125.692 31.3393 126.507 31.7695 126.889C32.1997 127.27 32.7619 127.074 33.0252 126.451C36.2238 118.879 38.5532 109.98 39.7639 100.134C41.1675 89.0953 40.8197 77.6727 38.7639 65.8881L38.7614 65.8742C37.8762 61.0219 40.3436 55.7313 43.9364 55.7313C46.5292 55.7313 48.7183 58.4952 49.2017 62.215C50.531 73.3886 51.2234 83.7501 50.7304 92.6713C50.6902 93.3999 51.0651 94.0378 51.5679 94.0961C52.0707 94.1545 52.5109 93.6111 52.5511 92.8826C53.0621 83.6357 52.3409 73.019 51.0006 61.7556C50.9998 61.7494 50.999 61.7432 50.9982 61.737Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M41.2113 119.056C41.6599 119.39 41.8367 120.187 41.6061 120.838L39.1862 127.662C38.9557 128.312 38.4051 128.568 37.9565 128.234C37.5079 127.9 37.3311 127.102 37.5616 126.452L39.9815 119.628C40.2121 118.978 40.7626 118.722 41.2113 119.056Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M44.6157 63.0132C44.5003 62.3016 44.0088 61.8603 43.5177 62.0275C43.0267 62.1946 42.7222 62.9069 42.8375 63.6185C45.9173 82.6163 45.4943 99.2983 41.743 113.509C41.5628 114.192 41.7986 114.957 42.2697 115.218C42.7408 115.479 43.2687 115.137 43.449 114.455C47.3604 99.6374 47.758 82.3966 44.6157 63.0132Z"
      stroke="#00E0FF"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</div>
`,css:`body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.card {
  width: 190px;
  height: 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s;
}
.card::after {
  content: "scanning";
  height: fit-content;
  width: 100%;
  color: lightskyblue;
  position: absolute;
  z-index: 2;
  bottom: 15%;
  text-align: center;
  animation: 2s dots infinite;
}
.card::before {
  content: "";
  height: 0.1em;
  width: 80%;
  border-radius: 10px;
  background-color: rgb(00, 200, 255);
  position: absolute;
  z-index: 2;
  bottom: 10%;
  animation: 4s grow infinite;
  align-self: flex-start;
  margin-left: 10%;
  filter: drop-shadow(0px 0px 10px #3fefef) drop-shadow(0px 0px 10px #3fefef);
}
.card svg {
  filter: drop-shadow(0px 0px 10px #3fefef) drop-shadow(0px 0px 50px #3fefef);
}
path {
  stroke-dasharray: 90;
  animation: loop 4s infinite;
}
@keyframes loop {
  0% {
    stroke-dashoffset: 50;
    stroke-dasharray: 90;
  }
  50% {
    stroke-dashoffset: 100;
    stroke-dasharray: 50;
  }
  100% {
    stroke-dashoffset: 50;
    stroke-dasharray: 90;
  }
}
@keyframes dots {
  0% {
    content: "指纹识别中.";
  }
  25% {
    content: "指纹识别中..";
  }
  50% {
    content: "指纹识别中...";
  }
  75% {
    content: "指纹识别中";
  }
  100% {
    content: "指纹识别中.";
  }
}
@keyframes grow {
  0% {
    width: 0%;
  }
  50% {
    width: 80%;
  }
  100% {
    width: 0%;
  }
}
`,js:""}],K=d=>(I("data-v-cc41b5cf"),d=d(),B(),d),Y={class:"h-[100%]"},A={class:"btn"},G=K(()=>a("div",{class:"dot"},null,-1)),P={class:"d-flex fill-height align-center justify-center position-absolute w-full top-0"},J={class:"text-white pb-6 d-flex fill-height align-center justify-center"},O={__name:"index",setup(d){const h=_(),k=g(h.preSettings);let r=g(0);const y=C(),u=()=>{y.push({path:"/editor"}),h.setRunIframeOptions(l[r.value])};return(U,m)=>(i(),c(j,{"no-gutters":""},{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(s,{class:"pa-0 h-full"},{default:t(()=>[a("div",Y,[e(p,{ref:"runIframeRef",options:o(l)[o(r)],"pre-settings":o(k)},null,8,["options","pre-settings"])]),a("div",A,[G,e(s,{class:"mx-auto rounded-lg !bg-[#00000063] text-white",elevation:"8","max-width":"800"},{default:t(()=>[e(F,{modelValue:o(r),"onUpdate:modelValue":m[0]||(m[0]=n=>M(r)?r.value=n:r=n),class:"pa-4","selected-class":"bg-primary","show-arrows":"","center-active":""},{default:t(()=>[(i(!0),S(T,null,z(o(l),(n,b)=>(i(),c(E,{key:b},{default:t(({isSelected:w,toggle:v,selectedClass:x})=>[e(Z,{class:N(["ma-4 rounded-lg",x]),color:"grey-lighten-1",height:"100",width:"100",onClick:v},{default:t(()=>[e(p,{ref_for:!0,ref:"runIframeRef",options:n,"pre-settings":o(k)},null,8,["options","pre-settings"]),a("div",P,[e(V,null,{default:t(()=>[w?(i(),c(L,{key:0,color:"white",icon:"mdi-close-circle-outline",size:"30"})):f("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),e(q,null,{default:t(()=>[o(r)!=null?(i(),c(s,{key:0,class:"rounded-lg"},{default:t(()=>[a("div",J,[a("h3",{class:"text-[14px]",onClick:u},R(o(l)[o(r)].title)+" | 查看源码 ",1)])]),_:1})):f("",!0)]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}))}},et=H(O,[["__scopeId","data-v-cc41b5cf"]]);export{et as default};
