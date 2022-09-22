import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>Esse é um aplicativo React montado para avaliar produtos ou serviços.</p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage