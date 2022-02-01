import CaptainDirectory from "../componenets/CaptainDirectory";

const Captains = () => {
  const CAPTAINS = [
    {
      id: "u1",
      firstName: "first1",
      lastName: "last1",
      image: "https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg",
      userName: "u1"
    },
    {
      id: "u2",
      firstName: "first2",
      lastName: "last2",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      userName: "u2"
    },
    {
      id: "u3",
      firstName: "first3",
      lastName: "last3",
      image: "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg",
      userName: "u3"

    },
  ];

  return <CaptainDirectory items={CAPTAINS} />;
};

export default Captains;
