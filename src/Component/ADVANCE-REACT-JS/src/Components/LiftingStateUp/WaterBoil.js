export default function WaterBoil({ celsius = 0 }) {
    if (celsius >= 100) {
        return <h1>Your Water is Boiling</h1>
    } return <h1>Your Water is Not Boiling</h1>

}