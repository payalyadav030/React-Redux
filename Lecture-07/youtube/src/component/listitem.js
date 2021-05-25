import React, { Component } from 'react';
import "../App.css"

class ListItem extends Component{
    render(){
        // console.log(this.props.video, "video in listitem")
        const {video, index}= this.props;
        return(
            
           <li className={`listItem`} >
               {  this.props.page=="videos" && (
                    <div>
                        <div className={`video-img-div`} onClick={()=>this.props.getPlayingVideoId(video.id.videoId, index)}>
                        <img src={video.snippet.thumbnails.default.url} className="image" alt="" />
                    </div>
                    <div>
                        {video.snippet.title}
                   <div >
                       <button onClick={()=>this.props.getBookmarkedVideos(index)}>Add To bookmark</button>
                       {this.props.page =="played-videos"  &&
                        <button onClick={()=>this.props.deleteFromPlayedVid(video.id.videoId, index)}>Delete</button>}
                   </div>
                    </div>
                </div>
                )
               }
               {  this.props.page=="played-videos" && (
                    <div>
                        <div className={`video-img-div`} onClick={()=>this.props.getPlayingVideoId(video.id.videoId, index)}>
                        <img src={video.snippet.thumbnails.default.url} className="image" alt="" />
                    </div>
                    <div>
                        {video.snippet.title}
                   <div >
                       <button onClick={()=>this.props.getBookmarkedVideos(index)}>Add To bookmark</button>
                       {this.props.page =="played-videos"  &&
                        <button >Remove from played videos</button>}
                   </div>
                    </div>
                </div>
                )
               }
               {  this.props.page=="bookmarked-videos" && (
                    <div>
                        <div className={`video-img-div`} onClick={()=>this.props.getPlayingVideoId(video.id.videoId, index)}>
                        <img src={video.snippet.thumbnails.default.url} className="image" alt="" />
                        </div>
                    <div>
                        {video.snippet.title}
                   <div >
                       <button onClick={()=>this.props.getBookmarkedVideos(index)}>Remove from bookmark</button>
                   </div>
                    </div>
                </div>
                )
               }
               
           </li>
        )
    }
}

export default ListItem;