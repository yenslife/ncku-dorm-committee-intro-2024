import React from 'react';
import { Mail } from 'lucide-react';
import { BsFacebook, BsInstagram } from "react-icons/bs";

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  // logo 要佔據整個 header 的一半寬度，最好是用 % 來設定
  logo: {
    width: '50%',
    height: '50%',
    marginLeft: '10px',
  },
  title: {
    fontSize: '25px',
    color: '#FF7F50',
    // marginBottom: '10px',
  },
  section: {
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '20px',
    border: '1px solid #FF7F50',
    borderRadius: '8px',
  },
  // 將 h2 改成橘色底色，字體顏色改為白色，然後要有一個圓角，這個圓角只要包住自己的文字就好，字致中
  h2: {
    fontSize: '20px',
    marginBottom: '10px',
    backgroundColor: '#FF7F50',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '10px',
    display: 'inline-block',
  },
  p: {
    lineHeight: '1.6',
    marginBottom: '10px',
    fontSize: '18px',
  },
  smallText: {
    fontSize: '14px',
    marginTop: '15px',
    borderTop: '1px solid #FF7F50',
    paddingTop: '10px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '5px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    backgroundColor: '#FF7F50',
    padding: '15px',
    borderRadius: '8px',
    color: 'white',
  },
};

const DormCommitteeIntro = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        {/* <h1 style={styles.title}>國立成功大學宿委會介紹</h1> */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <span style={{...styles.title, marginRight: '2px'}}>國立成功大學宿委會介紹</span>
          {/* <div style={{...styles.logo, backgroundColor: '#FF7F50', clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)'}}></div> */}
          {/* 放一張圖片，讓他大一點 */}
            <img src="logo-small.png" alt="Logo" style={styles.logo} />
        </div>
      </header>
      
      <main>
      <section style={styles.section}>
          <h2 style={styles.h2}>歡迎來到成大</h2>
          <p style={styles.p}>
            各位新生大家好，我們是國立成功大學宿委會，在此我們僅代表全體宿委會歡迎大家加入成大這個大家庭！
          </p>
          <p style={styles.p}>
            相信大家來自各個不同的地區與縣市，而宿舍更是各位大部分新生們的重要回憶。
          </p>
          <p style={styles.p}>
            在接續的這一年裡，相信大家會從陌生到熟悉，同時也有許多生活事務需要適應。因此，成大宿委會就是陪伴你們這一年的最佳夥伴。有任何的問題都可以找我們喔！下面有我們的聯絡資訊，歡迎大家不吝提問。在此，我們再次歡迎各位新生加入成大，也加入各宿舍！在未來四年裡，期待各位新生都能闖出屬於自己的美好大學生活喔！
          </p>
          <div style={styles.smallText}>
            <p>112學年度國立成功大學學生宿舍自治委員會</p>
            <p>主　委｜資源114 曹展欣</p>
            <p>副主委｜不分115 吳宸宏、資訊114 潘駿諺、心理113 張育誠</p>
          </div>
        </section>
        
        <section style={styles.section}>
          <h2 style={styles.h2}>宿委會介紹</h2>
          <p style={styles.p}>
            宿委會是由一群富有服務熱忱的同學們所組成，各個委員均是每個宿舍選舉出之代表。我們主要的任務是作為住宿生與管理員之間溝通的橋樑，並為住宿生解惑在宿舍生活的問題。同時我們也分為修法、工程福利、財務三大組，各組各司其職致力為每位住宿生爭取權益。
          </p>
          <p style={styles.p}>
            此外，我們也會和舍樓長們配合學校住服組的各項行政規劃與相互合作，在各宿舍區為居民們建立起溫馨、舒適的住宿環境與生活。
          </p>
        </section>

        <div style={styles.socialLinks}>
          <a href="/#" style={styles.link}>
            {/* <Facebook size={24} style={{...styles.icon, color: '#FF7F50'}} /> */}
            <BsFacebook style={{...styles.icon, color: '#FF7F50'}} />
            <span style={{color: '#FF7F50'}}>成大宿委會</span>
          </a>
          <a href="/#" style={styles.link}>
            {/* <Instagram size={24} style={{...styles.icon, color: '#FF7F50'}} /> */}
            <BsInstagram style={{...styles.icon, color: '#FF7F50'}} />
            <span style={{color: '#FF7F50'}}>@dormcommittee_ncku</span>
          </a>
        </div>
      </main>
      
      <footer style={styles.footer}>
        <p style={styles.p}>如果大家有任何問題，都歡迎私訊宿委會粉專或寄信至</p>
        <a href="mailto:dormcommittee.ncku@gmail.com" style={{...styles.link, color: 'white'}}>
          <Mail size={20} style={styles.icon} />
          dormcommittee.ncku@gmail.com
        </a>
        <p style={{...styles.p, fontSize: '14px', marginTop: '20px'}}>
          *上方成大宿委會之字樣為超連結，可直接點入進入宿委會粉專喔！
        </p>
      </footer>
    </div>
  );
};

export default DormCommitteeIntro;