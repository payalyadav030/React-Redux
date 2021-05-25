import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Input from "./component/input";
import List from "./component/list";
import VideoPlayer from "./component/video";
import axios from  "axios";
const API_KEY ="AIzaSyAmiqlCL4QUrVCaQ5tIPcgqPaufUtEWmnE";
// AIzaSyAmiqlCL4QUrVCaQ5tIPcgqPaufUtEWmnE


class App extends Component{
  state={
    videos:[],
    playingVideoID:"",
    playedVideos:[],
    bookmarkedVideos:[],
  }
  fetchVideos=(searchTerm)=>{
      console.log("In app.js", searchTerm)
      let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&
      type=video&maxResults=25&part=snippet&key=${API_KEY}`);

      request.then(response=>{
        console.log("response", response.data.items);
        this.setState({
          videos:response.data.items
        })
      }).catch()
  }
  setVideoPlayer=(id, index)=>{
    let videos = this.state.playedVideos.slice()
    let video = this.state.videos[index]
    videos.push(video)
    this.setState({
      playingVideoID:id,
      playedVideos:videos,
    })
  }
  
  setBookmarkedVideos=(index)=>{
    let videos = this.state.bookmarkedVideos.slice()
    let video = this.state.videos[index]
    videos.push(video)
   
    this.setState({
       bookmarkedVideos:videos 
    }, ()=>{
      console.log("bookmark", this.state.bookmarkedVideos)
    })
  }

  deletingFromPlayed=(id, index)=>{
    console.log("deleting", id, index)
  }
  

  render(){
    return(
      <div className="App">
          <Input className="input-class"  getSearchTerm={(searchTerm)=>this.fetchVideos(searchTerm)}/>

              <div className="page-wrapper">

                <List page="videos" className="width-30" videos ={this.state.videos} getPlayingVideoId={(id, index)=>this.setVideoPlayer(id, index)}
                         getBookmarkedVideos={(index)=>this.setBookmarkedVideos( index)}
                         deleteFromPlayedVid={(id, index)=>this.deletingFromPlayed(id, index)}
                          />

                   <div className="width-100">

                         <VideoPlayer playingVideoID={this.state.playingVideoID} className="video-player" />

                             <div className="played-bookmarked">

                                  <div className="width-40">
                                    Played Vidoes
                                    {/*  played videos part*/}
                                       <List page="played-videos" playedVideos={this.state.playedVideos} className="width-80" 
                                       getPlayingVideoId={(id, index)=>this.setVideoPlayer(id, index)}
                                       
                                        />
                                  </div>

                                 <div className="width-40">
                                   bookmarked videos
                                   {/*  bookmarked  videos part*/}
                                        <List page="bookmarked-videos" bookmarkedVideos={this.state.bookmarkedVideos} className="width-80"
                                        getPlayingVideoId={(id, index)=>this.setVideoPlayer(id, index)} />
                                 </div>
                            </div>
                    </div>
              </div>
     </div>
    )
  }
}

 export default App;
