import { Box } from "@mui/system";
import Link from "next/link";
import {useRouter} from "next/router"
import ContactCard from "./ContactCard";

const styles = {
  width: "100%",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    width: "100%",
    // gap: {
    //   sm: "1px",
    // },
    gridTemplateColumns: {
      lg: "repeat(5,0.8fr) 1.5fr",
      sm: "repeat(5,0.8fr) 1.65fr",
      xs: "repeat(5,0.8fr) 1.6fr",
    },
    flexDirection: "row",
    a: {
      fontSize: "16.8px",
      textDecoration: "none",
      color: "#fff",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default",
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      textShadow: "0 0 15px #8e54e9",

      span: {
        position: "relative",
        display: " inline-block",
        transition: " color 0.3s ease",
        ":hover": {
          color: "#fff",
          transform: "scale(1.1)",
          cursor: "pointer",
          transition: "all 0.4s ease",
        },
        ":hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          // borderBottom: "2px solid #fff",
          transition: "width 0.4s",
        },
      },
    },
  },
  "a.active": {
    borderBottom: "2px solid white",
    // width: "70%",
  },
};

export default function NavbarComp() {

  const router = useRouter();
  return (
    <Box className="center1" sx={{ backgroundColor: "transparent" , width:"83%" , maxWidth:"900px"}}>
      <Box sx={styles} className="center1">
        <Box className="nav">
          {/* <Link href="/home"><span>Home</span></Link> */}
          <Link href="/about" className={router.pathname === "/about" ? "active" : ""}><span>About</span></Link>
          <Link href="/events" className={router.pathname === "/events" ? "active" : ""}><span>Events</span></Link>
          <Link href="/expo"  className={router.pathname === "/expo" ? "active" : ""}><span>Expo</span></Link>
          <Link href="/sponsors" className={router.pathname === "/sponsors" ? "active" : ""}><span>Sponsors</span></Link>
          <Link href="/team" className={router.pathname === "/team" ? "active" : ""}><span>Team</span></Link>
          <Link href="/industryacademiameet" style={{textAlign:"center"}} className={router.pathname === "/industryacademiameet" ? "active" : ""}><span>Industry Academia Meet</span></Link>
          {/* <Link
            style={{ gridColumn: "span 2", textAlign: "center" }}
            href="/industryacademiameet"
          >
            Industry Acadameia Meet
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
}