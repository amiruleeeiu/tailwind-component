import Avatar from "@/components/Avatar";

const AvatarPage = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src="https://images.pexels.com/photos/4048598/pexels-photo-4048598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="John Doe"
        size="xl"
        rounded
      />
      <Avatar
        src="https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg?w=1380&t=st=1723114951~exp=1723115551~hmac=ea37f5ffb55620bbeb5cac65b2d4414d06c6d5ac01fc5006a465ded3e90f0538"
        alt="John Doe"
        size="lg"
        rounded
      />
      <Avatar
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1723114237~exp=1723114837~hmac=4bd9386a111e00a1076b3ad8e30e8348ef92cc40a85d617b793e79a634280066"
        alt="John Doe"
        size="md"
      />{" "}
      <Avatar
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1723114237~exp=1723114837~hmac=4bd9386a111e00a1076b3ad8e30e8348ef92cc40a85d617b793e79a634280066"
        alt="John Doe"
        size="sm"
        rounded
      />
    </div>
  );
};

export default AvatarPage;
