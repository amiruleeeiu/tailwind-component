/* eslint-disable no-unused-vars */
import Button from "../components/Button";

const ButtonPage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex gap-2">
        <Button
          onClick={() => alert("Primary Button clicked!")}
          color="primary"
          size="md"
        >
          Primary
        </Button>
        <Button
          onClick={() => alert("Success Button clicked!")}
          color="success"
          size="lg"
        >
          Success
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default ButtonPage;
