import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1185px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6", borderStyle: "none" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px" }}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <DropdownButton style={{ backgroundColor: "white", width: "112px" }} variant="outline-secondary" title="LOCATION" id="input-group-dropdown-1">
                            <Dropdown.Item href="#">US</Dropdown.Item>
                            <Dropdown.Item href="#">CA</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ transform: "rotate(0)", height: "428px", width: "25%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card" />
            </div>
        </div>
    )
}
