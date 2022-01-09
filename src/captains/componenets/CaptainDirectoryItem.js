//core
import { Link } from "react-router-dom";

//css
import "./css/CaptainDirectoryItem.css";

//components
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import Card from "../../shared/components/UIElements/Card/Card";

const CaptainDirectoryItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.userName}`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>
              <strong>{props.firstNm}</strong> {props.lastNm}
            </h2>
            <h3>{props.userName}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CaptainDirectoryItem;
