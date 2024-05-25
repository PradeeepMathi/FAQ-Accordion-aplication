import { useState } from 'react'
import '../Stylsheet/FaqItem.css'
export default function FaqItem({question,answer}){
    const [show,setShow]=useState(false);

    const toogleShow =()=>{
        setShow(!show);
    }
    return(
        <div className={`faq-item ${show ? 'active' : ''}`}>
            <div className='faq-item-header' onClick={toogleShow}>
                {question}
            </div>
            <div className="faq-item-body">
                <div className="faq-item-body-content">
                    {answer}
                </div>
            </div>

        </div>
    )
}