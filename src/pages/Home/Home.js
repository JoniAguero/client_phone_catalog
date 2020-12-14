import React, { useEffect, useState } from "react"
import { getPhones } from "../../redux/actions/phonesActions"
import { useDispatch, useSelector } from "react-redux"
import './Home.css';
import Loading from "../../components/Loading";
import PlaceholderCard from "../../components/Loading/PlaceholderCard";
import CardPhone from "../../components/CardPhone";
import { Card } from "semantic-ui-react";
import NoDataFound from "../../components/NoDataFound";

export const Home = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { phones } = useSelector( state => state )
  
  useEffect(() => {
    dispatch(getPhones())
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [dispatch])

  if ( loading ) {
    return (
      <div className="container-home">
        <Loading repetitions={2}>
          <PlaceholderCard />
        </Loading>
      </div> 
    );
  }

  return (
    <div className="container-home">
      <Card.Group itemsPerRow={3} stackable doubling>
        { 
          phones.list.length === 0 ? <NoDataFound /> : 
          phones.list.reverse().map(element => 
            <CardPhone phone={element} key={element._id}/>
          )
        }
      </Card.Group>
    </div>
  )
}