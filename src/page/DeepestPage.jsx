import ScrollPage from "../component/ScrollStack"
import "../css/OpeningPage.css"
function DeepestPage() {
    const info = [
    { img: "/photo/hands.png", content: "Is jealousy necessary in love? Does it mostly come from affection or insecurity?" },
    { img: "/photo/ego.png", content: 'What does the "Ego" mean in a relationship? Is it important?' },
    { img: "/photo/sad.jpg", content: 'If the two of you chose to walk away, what would your final message to the other person be?' },
    { img: "/photo/flower.png", content: "How much influence do you think family and friends should have on our relationship — both now and in the future?" },
    { img: "/photo/lover.png", content: "What are you most proud of about your partner?" }
  ];
    return (
        <div className="opening-container">
            <ScrollPage info={info} footer="The Deepest"/>         
        </div>
    )
}

export default DeepestPage