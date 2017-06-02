import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

class Series extends React.Component{
  constructor(){
    super();
  }
  componentWillMount(){
    let lang = this.props.lang;
    let id = this.props.id;
    axios.get('/api/series/'+lang+'/'+ id).then((res) => {
      this.props.getMetadata(res.data,lang);
    }).catch((err) => {
      this.props.getMetadata([],lang);
      console.error("err!");
    })
    axios.get('/api/poster/'+id).then((res) => {
      this.props.getPosters(res.data);
    }).catch((err) => {
      this.props.getPosters([]);
      console.error("err!");
    })
  }

  render(){
    return(
      <div className="series">
        <div className="header">
          <div className="content">
            <div className="title">
              <h4>{this.props.tvdb.id}</h4>
              <h1>{this.props.tvdb.seriesName}</h1>
            </div>
          </div>
          <div className="bg" style={{backgroundImage:`url(//thetvdb.com/banners/${this.props.tvdb.banner})`}}></div>
        </div>
        <ul className="genre">
          {this.props.genre.map((data,i) => {
            return (
                <li key={i} className="item">{data}</li>
              )
            }
          )}
        </ul>
        <div>
            <img className="poster" src={`//thetvdb.com/banners/${this.props.poster.thumbnail}`}/>
        </div>
        <div className="overview">
          <h2>INFO</h2>
          <p>첫 방영 : {this.props.tvdb.firstAired ? this.props.tvdb.firstAired : "상세 정보가 없습니다."}</p>
          <p>방송 : {this.props.tvdb.network ? this.props.tvdb.network : "상세 정보가 없습니다."}</p>
          <p>러닝 타임 : {this.props.tvdb.runtime ? this.props.tvdb.runtime : "상세 정보가 없습니다."}</p>
          <p>{this.props.tvdb.airsDayOfWeek ? this.props.tvdb.airsDayOfWeek : "상세 정보가 없습니다."}</p>
          <p>{this.props.tvdb.rating ? this.props.tvdb.rating : "상세 정보가 없습니다."}</p>
        </div>
        <div className="overview">
          <h2>OVERVIEW</h2>
          {this.props.tvdb.overview ? this.props.tvdb.overview : "상세 정보가 없습니다."}
        </div>
      </div>
    )
  }
}

export default Series;