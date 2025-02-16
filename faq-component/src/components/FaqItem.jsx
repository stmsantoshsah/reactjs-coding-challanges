import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FaqItem = ({ item, index }) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (index === 0) {
            setCollapsed(true);
        }
    }, []);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className="faq-item">
            <div className="faq-header" onClick={handleToggle}>
                <h2 className="faq-question">{item.question}</h2>
                <button className={`faq-toggle ${collapsed ? "open" : ""}`}>
                    <IoIosArrowDown />
                </button>
            </div>
            <div className={`faq-answer ${collapsed ? "show" : ""}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
