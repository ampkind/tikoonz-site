const translations={
ko:{
"nav.artists":"ARTISTS","nav.releases":"RELEASES","nav.videos":"VIDEOS","nav.about":"ABOUT","nav.contact":"CONTACT",
"hero.eyebrow":"NEW RELEASE · 2026","hero.copy":"새로운 사운드와 두 개의 아이덴티티가 교차하는 TIKOONZ의 최신 릴리즈.","hero.listen":"PRE-SAVE ↗","hero.all":"ALL RELEASES →",
"artists.intro":"각자의 사운드. 하나의 TIKOONZ.","releases.view":"VIEW ALL →","manifesto.title":"MUSIC BECOMES<br>IDENTITY.","manifesto.copy":"음악에서 시작해 아티스트, 비주얼, 미디어와 새로운 디지털 아이덴티티로 확장합니다.","manifesto.link":"ABOUT TIKOONZ →"},
en:{
"nav.artists":"ARTISTS","nav.releases":"RELEASES","nav.videos":"VIDEOS","nav.about":"ABOUT","nav.contact":"CONTACT",
"hero.eyebrow":"NEW RELEASE · 2026","hero.copy":"TIKOONZ's latest release, where new sound and two identities intersect.","hero.listen":"PRE-SAVE ↗","hero.all":"ALL RELEASES →",
"artists.intro":"Distinct sounds. One TIKOONZ.","releases.view":"VIEW ALL →","manifesto.title":"MUSIC BECOMES<br>IDENTITY.","manifesto.copy":"Beginning with music, we expand into artists, visuals, media and new digital identities.","manifesto.link":"ABOUT TIKOONZ →"},
ja:{
"nav.artists":"ARTISTS","nav.releases":"RELEASES","nav.videos":"VIDEOS","nav.about":"ABOUT","nav.contact":"CONTACT",
"hero.eyebrow":"NEW RELEASE · 2026","hero.copy":"新しいサウンドと二つのアイデンティティが交差する、TIKOONZの最新リリース。","hero.listen":"PRE-SAVE ↗","hero.all":"ALL RELEASES →",
"artists.intro":"それぞれのサウンド。ひとつのTIKOONZ。","releases.view":"VIEW ALL →","manifesto.title":"MUSIC BECOMES<br>IDENTITY.","manifesto.copy":"音楽から始まり、アーティスト、ビジュアル、メディア、新しいデジタル・アイデンティティへと広がります。","manifesto.link":"ABOUT TIKOONZ →"},
zh:{
"nav.artists":"ARTISTS","nav.releases":"RELEASES","nav.videos":"VIDEOS","nav.about":"ABOUT","nav.contact":"CONTACT",
"hero.eyebrow":"NEW RELEASE · 2026","hero.copy":"全新的声音与双重身份交汇，呈现 TIKOONZ 最新发行作品。","hero.listen":"PRE-SAVE ↗","hero.all":"ALL RELEASES →",
"artists.intro":"不同的声音，同一个 TIKOONZ。","releases.view":"VIEW ALL →","manifesto.title":"MUSIC BECOMES<br>IDENTITY.","manifesto.copy":"从音乐出发，延伸至艺人、视觉、媒体与全新的数字身份。","manifesto.link":"ABOUT TIKOONZ →"}
};
const key="tikoonz_lang_v3";
function setLang(lang){
 if(!translations[lang]) lang="ko";
 document.documentElement.lang=lang==="zh"?"zh-CN":lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   const v=translations[lang][el.dataset.i18n];
   if(v!==undefined) el.innerHTML=v;
 });
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 localStorage.setItem(key,lang);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem(key)||"ko");

const header=document.querySelector(".site-header");
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>20),{passive:true});

const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{
 const open=nav.classList.toggle("open");
 toggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
