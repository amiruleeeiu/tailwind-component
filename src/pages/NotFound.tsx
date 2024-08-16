import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <p className="text-center text-7xl font-bold">404</p>
        <p className="text-center text-xl font-medium">Page Not Found</p>
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
}

export default NotFound;
