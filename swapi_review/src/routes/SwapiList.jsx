import useSwapiData from "../services/swapiService"

const SwapiList = ({ category, id }) => {
    // we can use our custom hook (let the service manage the stateful values)
    const swapiData = useSwapiData({ category: category, id: id })

    return (
        <>
        <pre>{JSON.stringify(swapiData)}</pre>
            <ul>
                <li>Category: {swapiData.category}</li>
                <li>ID: {swapiData.id}</li>
                <li>Name: {swapiData.name}</li>
            </ul>
        </>)
}

export default SwapiList