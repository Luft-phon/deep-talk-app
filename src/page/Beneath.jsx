import ScrollPage from "../component/ScrollStack"
import "../css/OpeningPage.css"
function BeneathPage() {
    const info = [
    { img: "./src/photo/face.jpg", content: "Who or what event has had the biggest impact on you physically or mentally?" },
    { img: "./src/photo/ribben.png", content: 'Rate 5 "Love Languages"\n: Physical touch,\nAct of Service,\nWords of Affirmation,\nGifts ' },
    { img: "./src/photo/kiss.jpg", content: 'Tell 3 reasons why someone would want to live with you for the rest of their life and reverse' },
    { img: "./src/photo/flower.png", content: "What means the most to you that you're grateful for?" },
    { img: "./src/photo/lover.png", content: "What are you most proud of about your partner?" }
  ];
    return (
        <div className="opening-container">
            <ScrollPage info={info} footer="More of you"/>         
        </div>
    )
}

export default BeneathPage