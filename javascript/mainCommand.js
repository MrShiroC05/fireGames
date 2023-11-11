let Theme =
[
    //Theme light
    { 
        background: "white",
        line: "black",
        c1: "#EF9595",
        c2: "#EFB495",
        c3: "#EFD595",
        c4: "#EBEF95"
    },
    { 
        background: "white",
        line: "black",
        c1: "#BEADFA",
        c2: "#D0BFFF",
        c3: "#DFCCFB",
        c4: "#FFF8C9"
    },
    //Theme dark
    { 
        background: "black",
        line: "white",
        c1: "#13005A",
        c2: "#00337C",
        c3: "#1C82AD",
        c4: "#03C988"
    }
]

//Theme
const color = document.getElementById("Color");
if (color) printColor()
let theme ="<h1>Theme</h1>";
for (const color in Theme)
{
    theme +=
    `
    <buttom onclick="chage(${color})" class="color">
        <div style="background-color:${Theme[color].background};"></div>
        <div style="background-color:${Theme[color].line};"></div>
        <div style="background-color:${Theme[color].c1};"></div>
        <div style="background-color:${Theme[color].c2};"></div>
        <div style="background-color:${Theme[color].c3};"></div>
        <div style="background-color:${Theme[color].c4};"></div>
    </buttom>
    `
}

// Tap bar
const tapBar = document.getElementById("tapBar");

if (tapBar !== null)
{
    tapBar.innerHTML =
    `
    <div class="footer1"></div>
    <div class="top">
        <a href="./index.html"><h1 style="margin-right: 12px; justify-content: start;"><img style="height:8rem;" src="./Icon/fireGames.png"></h1></a>
        <input id="searchName" style="margin-right: 12px; " onkeyup="searchBar()">
        ${theme}
    </div>
    <div class="footer2"></div>
    
    `
}
const tage = [] // tage
const make = [] // make
for(const T in Games){
    // Tage
    for(const Cheak in Games[T].tage)
    {
        if(!(tage.includes(Games[T].tage[Cheak]))) // ถ้าใน tage ไม่มี ทำการเพิ่ม
        {
            tage.push(Games[T].tage[Cheak])
        }
        
    }
    // Maker
    if(!(make.includes(Games[T].Make))){
        make.push(Games[T].Make)
    }
}
tage.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
make.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
tage.push("None");
make.push("None");
// Tage
let name_tage = "";
for(const Tage in tage ){
    name_tage +=` <a onclick="src('${tage[Tage]}', 'Tage')">${tage[Tage]}</a>`
}
// Make
let name_make = "";
for (const Make in make){
    name_make +=`<a onclick="src('${make[Make]}', 'Make')">${make[Make]}</a>`
}
const buttonSrc = document.getElementById("buttonSearch");
if (buttonSrc)
{
    buttonSrc.innerHTML =
    `
    <!--Hello world-->
    <h1>Filter by</h1>
    <button onclick="filter('popular')">Popular</button>
    <button onclick="filter('alphabet')">Alphabet</button>
    <button onclick="filter('random')">Random</button>
    <h1>Tage</h1>
    <div>
        ${tag(tage, "Tage")}
    </div>
    
    <h1>Make</h1>
    <div>
        ${tag(make, "Make")}
    </div>
    `
}
// Info Game
const info = document.getElementById("info");
if (info != null)
{
    filter('random')
}

// Function
function tag(Text, taget)
{
    let text = "";
    for (const order in Text)
    {
        text += ` <button onclick="src('${Text[order]}', '${taget}')">${Text[order]}</button>`;
    }
    return text;
}

function src(id, taget)
{
    info.innerHTML = "";
    for (const order in Games)
    {
        let Info;
        if (taget === "Tage") Info = Games[order].tage
        else if (taget === "Make") Info = Games[order].Make

        if (Info.includes(id)  || id === "None")
        {
            printInfo(Games[order].ID)
        }
    }
}
function searchBar()
{
    info.innerHTML = "";
    let Found = false;
    const search = document.getElementById("searchName").value;
    for (const order in Games)
    {
        if (Games[order].Name.toUpperCase().includes(search.toUpperCase()) || search == "")
        {
            printInfo(Games[order].ID);
            Found = true;
        }
    }
    if (!Found)
    {
        info.innerHTML =
        `
        <a class="cardGame">
            <img src="https://pbs.twimg.com/profile_images/1297083488642846725/cUw9BcZA_400x400.jpg">
            <h2>Not Find</h2>
            <div class="subtitle">
                <h5>Sorry, We didn't find '${search}'.</h5>
            </div>
        </a>
        `;
    }
}
let old = ""
function srcInfo(id)
{
    old = info.innerHTML
    info.innerHTML = "";
    for (const order in Games)
    {
        if (id == Games[order].ID)
        {
            let img = "";
            for (const Img in Games[order].Image)
            {
                img += `<img src="${Games[order].Image[Img]}">`
            }
            info.innerHTML =
            `
            <div class="infoGame">
                <button onclick="back()">Back</button>
                <div>
                    <div class="topic">
                        <h1>${Games[order].Name}</h1>
                        <img src="${Games[order].Logo}">
                        <button onclick="link('${Games[order].link}')" style="margin: 0px 0px 0px 12px;"><h1>Link</h1></button>
                    </div>
                    <h7>
                        ${Games[order].Subtitle}
                        ${Games[order].info}
                    </h7>
                    <div class="Image">
                        ${img}
                    </div>
                </div>
            </div>
            `
        }
    }
}
function printInfo(id)
{
    if (document.getElementById("buttonSearch") === null)
    {
        for (let order = 0; order < 5; order++)
        if (Games[order].ID == id || id == "none" && info !== null)
        {
            info.innerHTML +=
                `
                <button class="cardGame" onclick="srcInfo('${Games[order].ID}')">
                    <div>
                        <img src="${Games[order].Logo}">
                        <h1>${Games[order].Name}</h1>
                    </div>
                    <div class="subtitle">
                        <h3>Price : ${Games[order].Price}</h3>
                        <h5>${Games[order].Subtitle}</h5>
                    </div>
                </button>
                `;
                if (id != "none")
                break;
        }
    }
    else for (const order in Games)
        if (Games[order].ID == id || id == "none" && info !== null)
        {
            info.innerHTML +=
                `
                <button class="cardGame" onclick="srcInfo('${Games[order].ID}')">
                    <div>
                        <img src="${Games[order].Logo}">
                        <h1>${Games[order].Name}</h1>
                    </div>
                    <div class="subtitle">
                        <h3>Price : ${Games[order].Price}</h3>
                        <h5>${Games[order].Subtitle}</h5>
                    </div>
                </button>
                `;
                if (id != "none")
                break;
        }
}
function filter(some)
{
    if (some ==='random')
        {
            for (let i = Games.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); // สุ่มตำแหน่งที่จะสลับ
                [Games[i], Games[j]] = [Games[j], Games[i]]; // สลับค่า
              }
        }
    else {
        if (some === 'popular')
        {
            Games.sort((a, b) => {
                const nameA = a.MaxNumPlayer;
                const nameB = b.MaxNumPlayer;
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        }
        else if (some==='alphabet')
        {
            Games.sort((a, b) => {
                const numA = a.Name.toUpperCase();
                const numB = b.Name.toUpperCase();
                if (numA < numB) {
                    return -1;
                }
                if (numA > numB) {
                    return 1;
                }
                return 0;
            });
        }
        
    }
    if (info) info.innerHTML = "" // reset info
    printInfo("none")
    
}
function back()
{
    info.innerHTML = old;
}
function link(link)
{
    window.open( link, "_brank");
}
function chage(cookie)
{
    document.cookie = `fireGame:${cookie}`;
    printColor()
}

function printColor()
{
    const Cook = document.cookie.split("; ");
    const mainColorPage = document.getElementById("colorPage");
    let cookie
    let hasCookie = false;
    for (const cheak in Cook)
    {
        if (Cook[cheak].includes("fireGame"))
        {
            hasCookie = true;
            let data = Cook[cheak].split(":")
            cookie = data[1];
        }
    }
    if (!hasCookie)
    {
        document.cookie = "fireGame:0";
        cookie = 0;
    }
    if (color !== null)
    color.innerHTML =
    `
@import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Montserrat:wght@100&family=Noto+Sans+Thai:wght@600&family=Oswald&family=Roboto+Condensed:ital,wght@0,700;1,400&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
body{
    font-family: 'Noto Sans Thai', sans-serif;
    width: 100%; height: 100%;
    background-color: ${Theme[cookie].background};
    color: ${Theme[cookie].line};
    padding: 0px;
    margin: 0px;
}
img
{
    object-fit: cover;
}
#tapBar
{
    background: linear-gradient(to top, ${Theme[cookie].c1}, ${Theme[cookie].c2});
    width: 100%;
}
#tapBar .top{
    display: flex;
    
    width: 100%;
    align-items: center;
    justify-content: center;

    margin: 0px 0px 0px 0px;
    padding: 8px;
}
a
{
    text-decoration: none;
    color: ${Theme[cookie].line};
}
#tapBar .top #searchName
{
    width: 50%;
    height: 20px;
    background-color: ${Theme[cookie].c2};
    border: none;
    border-radius: 12px;
    padding: 4px;
    font-size: 20px;
}
#tapBar #searchName:focus
{
    background-color: ${Theme[cookie].c3};
}
.color
{
    padding: 4px;
    display:grid;
    grid-template-columns: auto auto auto;
    background-color: ${Theme[cookie].c3};
    margin: 4px;
    border: 4px solid ${Theme[cookie].c3};
    border-radius: 12px;
}
.color div 
{
    width: 12px;
    height: 12px
}
#tapBar #Theme
{
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 100%;
}

#mainInfo{
    
    height: 100%;
    display: grid;
    grid-template-columns: 10% 80%;
    background: linear-gradient(to right, ${Theme[cookie].c1}, ${Theme[cookie].c2}, ${Theme[cookie].c1});

    margin: 4px;
    padding: 20px;
}
#mainInfo .buttonSearch
{
    padding: 16px;
    width: 100px;

    display: block;
}
#mainInfo #buttonSearch button
{
    background-color: ${Theme[cookie].c3};
            
    margin: 4px;
    border-radius: 12px;
    border:  4px solid ${Theme[cookie].c3} ;
    padding: 8px;
}            
#mainInfo #buttonSearch button:focus
{
    background-color: ${Theme[cookie].c4};
}
    
#info
{
    border-radius: 12px;
    padding: 4px;
    background-color: ${Theme[cookie].c2};
    
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(20rem,1fr));
}
#info .cardGame
{
    color: ${Theme[cookie].line};
    height: 25rem;
    margin: 4px;
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    transition: 0.5s;
    border: none;
    background: none;
}
#info .cardGame img
{
    width: 15rem;
    height: 15rem;
    border-radius: 12px;
    transition: 1s;
}
#info .cardGame .subtitle
{
    opacity: 0;
    transition: 1s;
}
#info .cardGame:hover
{
    background-color: ${Theme[cookie].c4};
}
#info .cardGame:hover img
{
    border: black solid 2px;
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
}
#info .cardGame:hover .subtitle
{
    transition-delay: 0.5s;
    opacity: 1;
}
.infoGame
{
    display: flex;
}
.infoGame .topic
{
    justify-content: center;
    display: flex;
}
.infoGame .topic img
{
    width: 5rem;
    height: 5rem;

    margin: 0px 0px 0px 40px;
    border-radius: 100%;
    border: black solid 1px;
}
.infoGame button
{
    width: 4rem;
    border-radius: 12px;
    border: none;
    margin-right: 12px;
    background-color: ${Theme[cookie].c4};
    transition: 0.5s;
}
.infoGame button:hover
{
    background-color: ${Theme[cookie].c3};
}
.infoGame .Image
{
    justify-content: center;
    text-align: center;
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(20rem,1fr));
}
.infoGame .Image img
{
    border-radius: 12px;
    height: 20rem;
    transition: 0.5s;
}
.infoGame .Image img:hover
{
    height: 21rem;
}
.infoGame .topic
{
    padding: 12px;
    margin-bottom: 8px;
}
.infoGame .topic button
{
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: ${Theme[cookie].c3} solid 4px;
}
.footer1
{
    top: 0;
    height: 4px;
    background: linear-gradient(to right,${Theme[cookie].c1}, white);
    animation: animationFooter1 2s linear infinite;
}
@keyframes animationFooter1
{
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(100%);
    }
}
.footer2
{
    top: 0;
    height: 4px;
    background: linear-gradient(to right, white, ${Theme[cookie].c1});
    animation: animationFooter2 2s linear infinite;
}
@keyframes animationFooter2
{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
}
    `;
    else if (mainColorPage !== null)
    mainColorPage.innerHTML =
    `
    @import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Montserrat:wght@100&family=Noto+Sans+Thai:wght@600&family=Oswald&family=Roboto+Condensed:ital,wght@0,700;1,400&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
body{
    font-family: 'Noto Sans Thai', sans-serif;
    width: 100%; height: 100%;
    background-color: ${Theme[cookie].background};
    color: ${Theme[cookie].line};
    padding: 0px;
    margin: 0px;
}
img
{
    object-fit: cover;
}
#tapBar
{
    background: linear-gradient(to top, ${Theme[cookie].c1}, ${Theme[cookie].c2});
    width: 100%;
}
#tapBar .top{
    display: flex;
    
    width: 100%;
    align-items: center;
    justify-content: center;

    margin: 0px 0px 0px 0px;
    padding: 8px;
}
a
{
    text-decoration: none;
    color: ${Theme[cookie].line};
}
#tapBar .top #searchName
{
    width: 50%;
    height: 20px;
    background-color: ${Theme[cookie].c2};
    border: none;
    border-radius: 12px;
    padding: 4px;
    font-size: 20px;
}
#tapBar #searchName:focus
{
    background-color: ${Theme[cookie].c3};
}
.color
{
    padding: 4px;
    display:grid;
    grid-template-columns: auto auto auto;
    background-color: ${Theme[cookie].c3};
    margin: 4px;
    border: 4px solid ${Theme[cookie].c3};
    border-radius: 12px;
}
.color div 
{
    width: 12px;
    height: 12px
}
#tapBar #Theme
{
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 100%;
}

#Show
{
    background: linear-gradient(to top, ${Theme[cookie].c3}, ${Theme[cookie].c1});
    display: block;
    align-items: center;
    justify-content: center;
}
.Top3
{
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;

    padding: 12px;
}
.Top3 img
{
    width: 20rem;
    height: 20rem;
    border-radius: 12px;
    margin: 0px 4px 0px 4px;
}
#info
{
    padding: 4px;
    background: linear-gradient(to top, ${Theme[cookie].c4}, ${Theme[cookie].c3});
    
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(20rem,1fr));
}
.cardGame
{
    color: ${Theme[cookie].line};
    height: 25rem;
    width: 20rem;
    margin: 4px;
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    transition: 0.5s;
    border: none;
    background: none;
}
.cardGame img
{
    width: 15rem;
    height: 15rem;
    border-radius: 12px;
    transition: 1s;
}
.cardGame .subtitle
{
    opacity: 0;
    transition: 1s;
}
.cardGame:hover
{
    background-color: ${Theme[cookie].c4};
    border: black solid 1px;
}
.cardGame:hover img
{
    border: black solid 2px;
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
}
.cardGame:hover .subtitle
{
    transition-delay: 0.5s;
    opacity: 1;
}
.infoGame
{
    display: flex;
}
.infoGame .topic
{
    justify-content: center;
    display: flex;
}
.infoGame .topic img
{
    width: 5rem;
    height: 5rem;

    margin: 0px 0px 0px 40px;
    border-radius: 100%;
    border: black solid 1px;
}
.infoGame button
{
    width: 4rem;
    border-radius: 12px;
    border: none;
    margin-right: 12px;
    background-color: ${Theme[cookie].c4};
    transition: 0.5s;
}
.infoGame button:hover
{
    background-color: ${Theme[cookie].c3};
}
.infoGame .Image
{
    justify-content: center;
    text-align: center;
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(20rem,1fr));
}
.infoGame .Image img
{
    border-radius: 12px;
    height: 20rem;
    transition: 0.5s;
}
.infoGame .Image img:hover
{
    height: 21rem;
}
.infoGame .topic
{
    padding: 12px;
    margin-bottom: 8px;
}
.infoGame .topic button
{
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: ${Theme[cookie].c3} solid 4px;
}
.infoGame5
{
    justify-content: center;
    text-align: center;
}
.footer1
{
    top: 0;
    height: 4px;
    background: linear-gradient(to right,${Theme[cookie].c1}, white);
    animation: animationFooter1 2s linear infinite;
}
@keyframes animationFooter1
{
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(100%);
    }
}
.footer2
{
    top: 0;
    height: 4px;
    background: linear-gradient(to right, white, ${Theme[cookie].c1});
    animation: animationFooter2 2s linear infinite;
}
@keyframes animationFooter2
{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
}
.infoGame5 .more
{
    
    height: 5rem;
}
.data
{
    display:grid;
    grid-template-columns: auto auto auto;
}
    `
}