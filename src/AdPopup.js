import React from 'react';
import './AdPopup.css'; // 引入CSS以便於樣式設置

const AdPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // 如果沒有打開，則不渲染任何內容

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>✖</button> {/* 關閉按鈕 */}
                <h2>按讚標題</h2>
                <p>這是你的按讚內容！...(等確認文案再加上去)</p>
            </div>
        </div>
    );
};

export default AdPopup;