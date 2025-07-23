import ScrollPage from "../component/ScrollStack"
import "../css/OpeningPage.css"
function OpeningPage() {
        const info = [
    { img: "/photo/song.png", content: "Which songs flashback our memories?" },
    { img: "/photo/phone.png", content: "Who are the first 2 people you call in emergency? Why?" },
    { img: "/photo/rose.png", content: 'Plan up a "perfect" day for you' },
    { img: "/photo/treasure.png", content: "If someone gave you a box containing everything you've ever lost, what would be the first thing you'd look for?" },
    { img: "/photo/rose.png", content: "What does love mean to you?" }
  ];
    return (
        <div className="opening-container">
            <ScrollPage info={info} footer="Connection"/>         
        </div>
    )
}

export default OpeningPage