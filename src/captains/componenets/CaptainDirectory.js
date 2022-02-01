//css
import "./css/CaptainDirectory.css";

//components
import CaptainDirectoryItem from "../componenets/CaptainDirectoryItem";
import Card from "../../shared/components/UIElements/Card/Card";

const CaptainDirectory = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Captains Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="captain-list">
      {props.items.map((captain) => (
        <CaptainDirectoryItem
          key={captain.id}
          id={captain.id}
          image={captain.image}
          firstName={captain.firstName}
          lastName={captain.lastName}
          userName={captain.userName}
        />
      ))}
    </ul>
  );
};

export default CaptainDirectory;
