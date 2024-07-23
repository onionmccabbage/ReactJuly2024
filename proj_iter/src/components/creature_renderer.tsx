// const CreatureRenderer = ({creature, count, cost}:{creature:string, count:number | null, cost:number})=>{
    const CreatureRenderer = ({creature}:{creature:any})=>{
    return (
        <>
            <dl>
                <dt>{creature.creature}</dt>
                {/* we use entities  - the end user may not have £ but 
                the browser will always uderstand entities */}
                <dd>{creature.count} &pound;{creature.cost}</dd>
                {/* if we have a count and a cost  tehn calculate total */}
            {creature.count ? <dd>Total &pound;{creature.count*creature.cost}</dd>:<></>}
            </dl>
        </>
    )
}

export default CreatureRenderer