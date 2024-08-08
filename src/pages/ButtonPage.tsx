/* eslint-disable no-unused-vars */
import Button from "../components/Button";

const ButtonPage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex gap-2">
        <Button
          onClick={() => alert("Primary Button clicked!")}
          color="success"
        >
          Success
        </Button>
        <Button
          onClick={() => alert("Primary Button clicked!")}
          color="primary"
          size="lg"
        >
          Primary
        </Button>
        <Button
          onClick={() => alert("Primary Button clicked!")}
          color="primary"
          size="md"
          isLoading
        >
          Outline
        </Button>
        <Button
          onClick={() => alert("Success Button clicked!")}
          color="success"
          size="xl"
          outline
        >
          Success
        </Button>
        <Button
          onClick={() => alert("Success Button clicked!")}
          color="info"
          size="lg"
          outline
        >
          Info
        </Button>
        <Button
          onClick={() => alert("Success Button clicked!")}
          color="success"
          size="lg"
          isLoading
        >
          Success
        </Button>
        <Button
          onClick={() => alert("Success Button clicked!")}
          color="warning"
          size="md"
          outline
        >
          Warning
        </Button>
        <Button
          onClick={() => alert("Danger Button clicked!")}
          color="danger"
          size="md"
        >
          Danger
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default ButtonPage;
