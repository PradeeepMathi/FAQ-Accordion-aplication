import FaqItem from "./FaqItem";

export default function Faq(){
    return(
        <div className='faq-accordion'>
            <h2>FAQs</h2>
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
        </div>
    )
}