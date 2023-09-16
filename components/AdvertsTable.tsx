import { Advert } from "../model";
import styles from "../styles/AdvertsTable.module.css";

interface Props {
  adverts: Advert[];
}

const AdvertsTable = (props: Props) => {
  const { adverts } = props;
  return (
    <>
      <p style={{color: "orangered", marginLeft: "20px"}}><strong>ℹ️ 제목을 누르면 광고로 갈 수 있습니다.</strong></p>

      <table className={styles.advertsTable}>
        <thead>
          <tr>
            <td>
              <strong>제목</strong>
            </td>
            <td>
              <strong>연령대</strong>
            </td>
          </tr>
        </thead>
        <tbody>{adverts.map(toRow)}</tbody>
      </table>
    </>
  );
};

const toRow = (advert: Advert) => {
  return (
    <>
      <tr>
        <td>
          <span dangerouslySetInnerHTML={{ __html: advert.title }} />
          <p>
            <u>[{advert.parentPageIndex}]</u>
          </p>
        </td>
        <td>
          <div
            className={styles.ageHtmlContainer}
            dangerouslySetInnerHTML={{ __html: advert.age }}
          />
          <div>
            <p>
              <a
                href="mailto:recipient@example.com?subject=Example%20Subject&body=Hello%20there,%0A%0AThis%20is%20the%20body%20of%20the%20email.%20You%20can%20add%20your%20message%20here."
                // href={advert.linkUrl}
                target="_blank"
                className={styles.applyBtn}
              >
                신청하기
              </a>
            </p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AdvertsTable;
