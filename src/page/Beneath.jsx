import ScrollPage from "../component/ScrollStack"
import "../css/OpeningPage.css"
function BeneathPage() {
    const info = [
    { img: "/photo/face.jpg", content: "Who or what event has had the biggest impact on you physically or mentally?" },
    { img: "/photo/ribben.png", content: 'Rate 5 "Love Languages"\n: Physical touch,\nAct of Service,\nWords of Affirmation,\nGifts ' },
    { img: "/photo/kiss.jpg", content: 'Tell 3 reasons why someone would want to live with you for the rest of their life and reverse' },
    { img: "/photo/flower.png", content: "What means the most to you that you're grateful for?" },
    { img: "/photo/lover.png", content: "What are you most proud of about your partner?" }
  ];
    return (
        <div className="opening-container">
            <ScrollPage info={info} footer="More of you"/>         
        </div>
    )
}

export default BeneathPage