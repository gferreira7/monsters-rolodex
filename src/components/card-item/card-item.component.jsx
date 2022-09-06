
import './card-item.styles.css'

const CardItem = ({monster}) => {


        const {name, id, email} = monster

        return (
            <div key={id} className='card-container'>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            )
}

export default CardItem