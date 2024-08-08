import Button from "@/components/Button";
import Card, { CardContent, CardFooter, CardHeader } from "@/components/Card";

const CardPage = () => {
  return (
    <div>
      <div>
        <Card className="w-96">
          <CardHeader>Card Title</CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, id
              atque esse ab hic quia repudiandae laborum est, ratione sed
              sapiente doloremque ut rerum! Ut voluptatibus, sint recusandae
              natus nemo eaque sequi laudantium tempore? Quam eaque consectetur
              tempore sunt doloremque at nihil
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button color="info" outline>
              Back
            </Button>
            <Button color="primary">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardPage;
