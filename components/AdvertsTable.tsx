import { Advert } from "../model";

interface Props {
  adverts: Advert[];
}

const AdvertsTable = (props: Props) => {
  const { adverts } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>
            <strong>Title</strong>
          </td>
          <td>
            <strong>Age</strong>
          </td>
          <td>
            <strong>Link</strong>
          </td>
        </tr>
      </thead>
      <tbody>{adverts.map(toRow)}</tbody>
    </table>
  );
};

const toRow = (advert: Advert) => {
  return (
    <tr>
      <td>
        <span dangerouslySetInnerHTML={{ __html: advert.title }} />
      </td>
      <td>
        <span dangerouslySetInnerHTML={{ __html: advert.age }} />
      </td>
      <td>
        <a
          href={advert.linkUrl}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          🌐
        </a>
      </td>
    </tr>
  );
};

export default AdvertsTable;
