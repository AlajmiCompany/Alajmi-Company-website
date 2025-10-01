"use client";
import { useTranslation } from "react-i18next";
import styles from "../../styles/_designs.module.scss";

const designs = [
  { id: 1, img: "/design1.png",text:"تحقيق 1,100,000 ساعة عمل باقصي معايير الجودة في الأمن و السلامة", link: "https://example.com/design1" },
  { id: 2, img: "/design2.png",text:"انتخابات مجلس إدارة هيئة المقاولين", link: "https://example.com/design2" },
  { id: 3, img: "/design3.png",text:"اليوم الوطني السعودي 88", link: "https://example.com/design3" },
  { id: 4, img: "/design4.png",text:"تهنئة رئيس مجلس الإدارة", link: "https://example.com/design4" },
  { id: 5, img: "/design4.png",text:"شهادة شكر من جميعة البر بالاحساء", link: "https://example.com/design4" },
  { id: 6, img: "/design4.png",text:"أمير جازان بالنيابة يرعى توقيع اتفاقيات توظيف عدداً من شباب وفتيات المنطقة", link: "https://example.com/design4" },
  { id:7, img: "/design4.png",text:"توقيع اتفاقية مع مجموعة روشن ( إحدى شركات صندوق الاستثمارات العامة )", link: "https://example.com/design4" },
  { id: 8, img: "/design4.png",text:"سعادة المهندس محمد عبدالعالي العجمي ضمن قائمة Power150  كأكثر الشخصيات تاثيراً في مجال المقاولات", link: "https://example.com/design4" },

  

];

export default function Designs() {
  const { t } = useTranslation();

  return (
    <section id="designs" className={styles.designs}>
      <div className=" text-center">
        {/* Auto-scroll wrapper */}
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContent}>
            {designs.concat(designs).map((d, i) => ( // نكررها مرتين عشان الماركيه يكون سلس
              <a key={i} href={d.link} target="_blank" rel="noopener noreferrer">
                <p>{d.text}</p>
                <img src="/logo.png" alt={`Design ${d.id}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
