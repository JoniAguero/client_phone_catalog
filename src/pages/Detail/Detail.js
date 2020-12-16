import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPhone from "../../components/DetailPhone/DetailPhone";
import Loading from "../../components/Loading/Loading";
import PlaceholderText from "../../components/Loading/PlaceholderText";
import NoDataFound from "../../components/NoDataFound";
import "./Detail.css";

export const Detail = () => {

  const [loading, setLoading] = useState(true)
  const { phones } = useSelector( state => state )
  const phoneSelected = phones.phoneSelected;
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  if ( loading ) {
    return (
      <div className="container-detail-phone-loading">
        <Loading repetitions={1}>
          <PlaceholderText />
        </Loading>
      </div> 
    );
  }

  return (
    <div className="container-detail-phone">
      { 
        !phoneSelected ? <NoDataFound /> : 
        <DetailPhone phone={phoneSelected}/> 
      }

    </div>
  );
}