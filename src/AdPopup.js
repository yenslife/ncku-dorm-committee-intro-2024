import React from 'react';
import './AdPopup.css';
import { BsFacebook, BsInstagram } from "react-icons/bs";

const AdPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>
                    <span role="img" aria-label="廣播">📢</span> 活動快報 <span role="img" aria-label="廣播">📢</span>
                </h2>
                <p>就是這兩天~~<span role="img" aria-label="日期">8/30、9/1</span></p>
                <p style={{ fontWeight: 'bold', color: '#ff5722' }}>
                    <span role="img" aria-label="向下箭頭">👇</span> 快追蹤宿委會 FB or IG <span role="img" aria-label="向下箭頭">👇</span>
                </p>
                <a href="https://www.facebook.com/DormCommittee.NCKU" className="social-icon">
                    <BsFacebook style={{ color: '#3b5998'}} />
                </a>
                <a href="https://www.instagram.com/dormcommittee_ncku/" className="social-icon">
                    <BsInstagram style={{ color: '#E1306C'}} />
                </a>
                <p>不僅能知道我們最近要辦的活動</p>
                <p>
                    現在到宿委會攤位還能獲得
                    <b>飲料</b><span role="img" aria-label="果汁杯">🧃</span>
                </p>
                <p>甚至有意想不到的驚喜</p>
                <p>就等你來啦！</p>
            </div>
        </div>
    );
};

export default AdPopup;