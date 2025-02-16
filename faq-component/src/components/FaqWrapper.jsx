import React from 'react'
import FaqItem from './FaqItem'

const faqData = [
    {
        question: "How many bones does a cat have?",
        answer: "A cat has 230 bones - 6 more than a human",
    },
    {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
    },
    {
        question: "How long do cats live",
        answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
]
const FaqWrapper = () => {
    return (
        <div className='faq-wrapper'>
            {
                faqData.map((item, index) => (
                    <FaqItem item={item} index={index} />
                ))
            }
        </div>
    )
}

export default FaqWrapper
