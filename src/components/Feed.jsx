import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
    const { loading, searchResults } = useContext(Context);
    const [recommendedVideos, setRecommendedVideos] = useState([]);

    useEffect(() => {
        fetch('/api/recommended-videos').then((response) => response.json()).then((data) => setRecommendedVideos(data));
        document.getElementById("root").classList.remove("custom-h");
    },[]);

    return (
        <div className="flex flex-row h-[calc(100%-56px)] bg-slate-400">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-slate-400">
                <div className="recommended-videos text-black font-bold">
                    <h2>Recommended Videos</h2>
                    <div className="video-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                        {!loading && searchResults && recommendedVideos && searchResults?.map((item) => {
                            if(item?.type !== "video") return false;
                            return (
                                <VideoCard 
                                    key={item?.video?.videoId} 
                                    video={item?.video} 
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
