import ScrollStack, { ScrollStackItem } from '../Reactbits/ScrollStack/ScrollStack'
function ScrollPage({info, footer}) {

  return (
    <ScrollStack>
      {info.map((item, index) => (
        <ScrollStackItem key={index}>
          {item.img && <img className="card-img" src={item.img} alt={`image-${index}`} />}
          <h2 className="stack-sentence">{item.content}</h2>
          <p className="stack-watermark">{footer}</p>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}

export default ScrollPage;