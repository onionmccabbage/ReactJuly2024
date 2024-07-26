import { LevelContext } from "../LevelContext";

export default function Section({ level, children }: {level:number, children: any }) {
    return (
        <section>
            <LevelContext.Provider value={level} >
                {children}
            </LevelContext.Provider>
        </section>
    )
}