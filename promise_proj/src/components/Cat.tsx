// NB we are receiving {cat} not cat
const Cat = ({cat}:{cat:any}) => {
    return (
        <>
            <h4>ID {cat.id} width {cat.width}</h4>
            {/* every img must be accessible, so remember to include alt */}
            <img src={cat.url} alt={`${cat.id}${cat.url}`}
                width={cat.width / 10}
                height={cat.height / 10} />
        </>
    )
}
export default Cat