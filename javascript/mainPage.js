mainColor();
const mainShow = document.getElementById("Show");
if (mainShow != null)
{
    let Top3Games = []
    mainShow.innerHTML =
    `
    <div class="Top3">
        <h1>Top 3 Games</h1>
        <div class="data">
            ${Top3()}
        </div>
    </div>
    `
}
function Top3()
{
    let games = []
    let text = ""
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
    for (let oreder = 0;  oreder < 3; oreder++)
    {
        games.push(Games[oreder])
    }
    for (const order in games)
    {
        text +=
        `
        <button class="cardGame" onclick="srcInfo('${games[order].ID}')">
            <div>
                <img src="${games[order].Logo}">
                <h1>${games[order].Name}</h1>
            </div>
            <div class="subtitle">
                <h3>Price : ${Games[order].Price}</h3>
                <h5>${games[order].Subtitle}</h5>
            </div>
        </button>
        `
    }
    return text;
}


function mainColor()
{
    const mainColorPage = document.getElementById("colorPage");
    const Cook = document.cookie.split("; ");
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
        document.cookie = "fireGame:1";
    }
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