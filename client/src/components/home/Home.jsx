import DriverLogin from "../driver-login/DriverLogin";
import ManagerLogin from "../manager-login/ManagerLogin";

const Home = (props) => {
    return (
        <div className="home">
            <h1>Home</h1>
            <DriverLogin setCurrentUser={props.setCurrentUser} />
            <ManagerLogin setCurrentUser={props.setCurrentUser} />

        </div>
    )
}

export default Home;