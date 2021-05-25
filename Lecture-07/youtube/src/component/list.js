import React, { Component } from 'react';
import ListItem from "./listitem";
import "../App.css";

class List extends Component{
    render(){
        // console.log("list file",this.props.videos)
        return(
           <ul className={`${this.props.className} videosList`}>
               
               { this.props.page ==="videos" && this.props.videos &&  this.props.videos.map((val, index)=><ListItem getPlayingVideoId={this.props.getPlayingVideoId} 
                getBookmarkedVideos={this.props.getBookmarkedVideos}
                
                video={val} index={index} page={this.props.page}
                
                 />)}
            
            { this.props.page ==="played-videos" && this.props.playedVideos &&  this.props.playedVideos.reverse().map((val, index)=><ListItem getPlayingVideoId={this.props.getPlayingVideoId}
                deleteFromPlayedVid={this.deleteFromPlayedVid}
                video={val} index={index} page={this.props.page} />)}

                {this.props.page ==="bookmarked-videos" && this.props.bookmarkedVideos && this.props.bookmarkedVideos.map((val, index)=><ListItem getPlayingVideoId={this.props.getPlayingVideoId}
                 video={val} index={index} page={this.props.page} />  )}

                

           </ul>
        )
    }
}

export default List;