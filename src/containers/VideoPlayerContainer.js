import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer.js";

const mapStateToProps = state => {
  return {
    video: state.currentVideo
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleVideoListEntryTitleClick: video => dispatch(changeVideo(video))
//   };
// };

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var VideoPlayerContainer = connect(
  mapStateToProps,
  null
)(VideoPlayer);
export default VideoPlayerContainer;
