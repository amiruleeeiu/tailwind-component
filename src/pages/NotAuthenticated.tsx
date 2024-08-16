import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const NotAuthenticated = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <p className="text-center text-xl font-medium">
          You are not allowed on this page
        </p>
        <Button
          onClick={() => navigate(-1)}
          className="text-center mt-2"
          size="lg"
          color="success"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotAuthenticated;
