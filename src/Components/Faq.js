import FaqItem from "./FaqItem";
import '../Stylsheet/Faq.css'

export default function Faq({data}){
    return(
        <div className='faq-accordion'>
            <h2>FAQs</h2>
            {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
        </div>
    )
}