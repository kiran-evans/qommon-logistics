import DriverLogin from "../Driver/DriverLogin";
import ManagerLogin from "../Manager/ManagerLogin";

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