const DriverPage = () => {
    return (
        <div className="driverPage">
            <div className="driverTitle">
                <h2>Drivers - Welcome, DriverName</h2>
            </div>

            <div className="driverDeliveries">
                <h4>Your Deliveries</h4>
            </div>

            <div className="driverTable">
                <table>
                    <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>Status</th>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>10 Downing Street</td>
                    <td>Undelivered</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>7 International House</td>
                    <td>Undelivered</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>6 International House</td>
                    <td>Undelivered</td>
                    </tr>
                </table>
            </div>

            <div className="driverMap">
                <h4>This Delivery's Route:</h4>
                
            </div>
        </div>

    )
}

export default DriverPage;