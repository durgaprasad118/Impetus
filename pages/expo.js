import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
export default function ExpoPage() {
  const theme = useTheme();

  const btnStyle={
      border: "solid #1E3A8A 2px",
      borderRadius: "10px",
      padding: "5px 20px",
      color: "#BFDBFE",
      ":hover": {
        backgroundColor: "#00A7E7",
        color: "white",
      },
    }

  const styles = {
    ".Robo .img img": {
      width: "400px !important",
    },
    ".VR, .EV, .Robo": {
      width: "100vw",
      minHeight: "100vh",
      overflowY: "hidden",
      display: "grid",
      [theme.breakpoints.down("md")]: {
        placeItems: "center",
      },
      gridTemplateColumns: "1fr 1fr",
      ">*": {
        [theme.breakpoints.down("md")]: {
          gridColumn: "span 2",
        },
      },
      ".img": {
        width: "100%",
        minHeight: "400px",
        img: {
          width: {
            lg: "600px",
            md: "600px",
            sm: "500px",
            xs: "500px",
          },
          filter: "drop-shadow(16px 16px 10px black)",
        },
      },
      ".content": {
        width: "550px",
        maxWidth: "90vw",
        margin: "50px 0",
        textAlign: "justify",
        h2: {
          margin: "30px 0",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      ".EV .content": {
        order: "-1",
        marginLeft: "100px !Important",
      },
    },
    ".Robo .img img": {
      width: "300px !important",
    },
  };

  return (
    <Box sx={styles} style={{ paddingTop: "50px" }}>
      <div className="grid md:grid-cols-2 gap-8 pt-24">
        <div className="flex items-center justify-center">
          <img
            className="w-full   w-[480px] "
            src="/images/CADWorkshop.jpg"
            alt="CADWorkshop"
          />
        </div>
        <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
          <h2 className="text-blue-400 md:text-3xl leading-6 md:leading-7text-2xl font-bold md:text-left text-center md-font-extrabold mb-2">
            CAD Workshop
          </h2>
          <p className=" px-3 md:w-5/6 md:px-0 ">
              Elevate your design game with Impetus 7.0 in association with Genex Engineering and Management Solutions! 
              <br></br>
              <br></br>
              Calling all budding designers and tech enthusiasts! Don't miss our exclusive 3-Day Workshop on CAD Modelling & Product Design with Solidworks! Get ready for three immersive days of hands-on learning and creativity! 
              <br></br>
              <br></br>

              <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Dates: 
              </span>
              <span className=" md:text-xl font-semibold ">
              2nd, 3rd, 4th February, 2024
              </span>

              <br></br>

              <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Time:  
              </span>
              <span className=" md:text-xl font-semibold ">
              2nd  February, from 4 pm onwards
              </span>

              <br></br>

              <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Time: 
              </span>
              <span className=" md:text-xl font-semibold ">
              3rd, 4th  February, 11 am - 6 pm daily (with one-hour break)
              </span>

              
              <br></br>
              <div style={{display:"flex",justifyContent: "center",margin: "25px 0"}}>
              <a href="https://forms.gle/qJ4xj4E4Fx8gC8FE8" className="Btn" style={btnStyle}>Register</a>
              </div>
              <br></br>
              In this intensive workshop, you&apos;ll :<br></br>
              1. Explore the ins and outs of CAD modelling.<br></br>
              2. Master Solidworks, the industry's leading design software.<br></br>
              3. Gain practical skills to turn your ideas into stunning designs.<br></br>
              4. Learn from seasoned professionals and industry experts.<br></br>
              5. Get certified and boost your resume with valuable skills.<br></br>
              <br></br>
              Spaces are limited, so act fast to secure your spot! Whether you're a beginner or looking to level up your skills, this workshop is your gateway to unleashing your creativity and designing the future! 
              
              <br></br>
              <br></br>
            <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
            </span>
            <span className=" md:text-xl font-semibold ">
              Parade Ground,IIEST Shibpur Campus
            </span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-1 md:py-20 py-10">
        <div className=" flex flex-col justify-center  lg:items-end items-center text-lg font-normal text-gray-300 mb-4 md:order-1 order-2">
          <h2 className="text-blue-400 md:text-3xl font-bold text-2xl md:text-left self-center md:ml-16  text-center md-font-extrabold mb-2">
            Robotics Seminar
          </h2>
          <p className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
            Calling all tech enthusiasts and future innovators! We're thrilled to announce an exclusive seminar and workshop by Blackbird Robotix, covering everything from manual robotics to UAV development!
            <br></br>
            <br></br>
            Join us for an exciting journey into the world of robotics, where you&apos;ll :<br></br>
            1. Learn the fundamentals of manual robotics.<br></br>
            2. Explore the realm of autonomous robotics.<br></br>
            3. Discover the thrill of combat robotics.<br></br>
            4. Dive into UAV development and unleash your creativity!<br></br>
            <br></br>
            Led by experts from Blackbird Robotix, this seminar promises to be an immersive experience filled with knowledge-sharing, hands-on learning, and endless inspiration.
            <br></br>
            <br></br>
            Whether you're a seasoned robotics enthusiast or just starting your journey, this is an opportunity you don't want to miss!
            <br></br>
            <br></br>

          <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
          </span>
          <span className=" md:text-xl font-semibold ">
              Conference Room, Dept. of Mechanical Engg.
          </span>
          </p>
        </div>
        <div className="flex items-center md:justify-start justify-center md:order-2 order-1">
          <img className="w-2/3" src="/images/RoboticsSeminar.jpg" alt="Seminar" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-24">
        <div className="flex items-center justify-center">
          <img
            className="md:w-[400px] w-[350px] h-[400px] "
            src="/images/humanoidRobot.png"
            alt="Robo"
          />
        </div>
        <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
          <h2 className="text-blue-400 md:text-3xl  leading-6 md:leading-7 text-2xl font-bold md:text-left text-center md-font-extrabold mb-2">
          Robotics and Drones Exhibition

          </h2>

          <p className="text-left px-3 md:w-5/6 md:px-0 ">
            From imagination to daydreams. From dreams to sci-fi movies. From
            movies to possible future. And now, we bring the FUTURE here.
            <br></br>
            <br className="hidden md:block"></br>
            Come to IIEST Shibpur to meet our ROBO FRIEND, &apos;ENZO&apos;. A
            robot that has helped thousands of patients when even nurses cant
            keep close to them. A robot that the served has humanity when it was
            needed the most.<br></br>
            <br className="hidden md:block"></br>
            At the expo, get to see our humanoid robot, Enzo. Get a chance to
            physically meet it, meet the industrial experts who made it and
            learn from the best.<br></br>
            <br className="hidden md:block"></br>
            <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
            </span>
            <span className=" md:text-xl font-semibold ">
              Parade Ground,IIEST Shibpur Campus
            </span>
          </p>
        </div>
      </div>

      <Contact />
    </Box>
  );
}
